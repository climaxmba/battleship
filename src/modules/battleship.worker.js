onmessage = (e) => {
  postMessage(getBestSquare(e.data));
};

function getBestSquare(board) {
  // Add function or compatibility
  board.__proto__.getAdjSquares = (square) => {
    return board.board.get(square).adjSquares;
  };

  let bestSquares = [],
    maxProb = -Infinity,
    probMap = calcProbMap(board);

  // Group squares with the highest values together
  for (const square of probMap.keys()) {
    if (probMap.get(square) > maxProb) {
      bestSquares = [square];
      maxProb = probMap.get(square);
    } else if (probMap.get(square) === maxProb) {
      bestSquares.push(square);
    }
  }

  // Return a random square with the highest probability
  return bestSquares[Math.floor(Math.random() * bestSquares.length)];
}

function calcProbMap(board) {
  let probMap = new Map();

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      probMap.set(`${x},${y}`, 0);
    }
  }

  board.ships.forEach((shipObj) => {
    if (!shipObj.ship.length <= shipObj.ship.hits) {
      board.board.forEach((_val, pos) => {
        const vertical = canExistShip(board, pos, shipObj.ship.length, true),
          horizontal = canExistShip(board, pos, shipObj.ship.length, false);

        if (vertical)
          vertical.forEach((pos) => probMap.set(pos, probMap.get(pos) + 1));
        if (horizontal)
          horizontal.forEach((pos) => probMap.set(pos, probMap.get(pos) + 1));
        const hits = [...board.ships].flatMap((shipObj) => [
          ...shipObj.hitCoords,
        ]);
        hits.forEach((hit) => {
          [...board.getAdjSquares(hit)]
            .filter((obj) => {
              const square = obj.square;
              if (
                `${parseInt(hit[0]) + 1},${parseInt(hit[2]) + 1}` === square ||
                `${parseInt(hit[0]) - 1},${parseInt(hit[2]) - 1}` === square ||
                `${parseInt(hit[0]) + 1},${parseInt(hit[2]) - 1}` === square ||
                `${parseInt(hit[0]) - 1},${parseInt(hit[2]) + 1}` === square
              )
                return false;
              else return true;
            })
            .forEach((obj) => {
              const square = obj.square;
              if (!hits.includes(square) && !board.missedAttacks.has(square)) {
                if (
                  hits.includes(`${parseInt(square[0]) + 2},${square[2]}`) ||
                  hits.includes(`${parseInt(square[0]) - 2},${square[2]}`) ||
                  hits.includes(`${square[0]},${parseInt(square[2]) + 2}`) ||
                  hits.includes(`${square[0]},${parseInt(square[2]) - 2}`)
                )
                  probMap.set(square, probMap.get(square) + 5); //Increase probability in the direction of the ship
                probMap.set(square, probMap.get(square) + 1);
              }
            });
        });
      });
    }
  });

  return probMap;
}

function canExistShip(board, pos, shipLength, isVertical = false) {
  const area = [];
  for (let i = 0; i < shipLength; i++) {
    if (isVertical) {
      area.push(`${pos[0]},${parseInt(pos[2]) + i}`);
    } else {
      area.push(`${parseInt(pos[0]) + i},${pos[2]}`);
    }
  }

  if (!validateAreas([area])) return false;

  const hitAreas = [...board.ships].flatMap((shipObj) => [
    ...shipObj.hitCoords,
  ]);
  try {
    area.forEach((pos) => {
      if (board.missedAttacks.has(pos) || hitAreas.includes(pos))
        throw new Error();
    });
  } catch {
    return false;
  }

  return area;
}

function validateAreas(areasList) {
  const p = new WorkerPlayer();
  try {
    areasList.forEach((area) => {
      if (!p.addShip(area)) throw new Error();
    });
    return true;
  } catch {
    return false;
  }
}

class WorkerShip {
  length;
  hits = 0;

  constructor(length) {
    this.length = length;
  }

  hit() {
    this.hits++;
  }
  isSunk() {
    return this.length <= this.hits;
  }
}

class WorkerGameBoard {
  board = new Map();
  ships = new Set();
  missedAttacks = new Set();

  constructor() {
    this.#initBoard();
  }

  addSquare(square) {
    this.board.set(square, { square, adjSquares: new Set() });
  }

  connectSquare(square1, square2) {
    if (this.board.has(square1) && this.board.has(square2)) {
      this.board.get(square1).adjSquares.add(this.board.get(square2));
      this.board.get(square2).adjSquares.add(this.board.get(square1));
    }
  }

  getAdjSquares(square) {
    return this.board.get(square).adjSquares;
  }

  getAvailableSquares() {
    const boardSquares = [...this.board.keys()],
      shipPosAttacked = [...this.ships].flatMap((obj) => [...obj.hitCoords]);
    const squareSet = boardSquares.filter(
      (square) =>
        !(this.missedAttacks.has(square) || shipPosAttacked.includes(square))
    );

    return [...squareSet];
  }

  #initBoard() {
    // Add squares
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.addSquare(`${i},${j}`);
      }
    }

    // Connect squares
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const currPos = `${i},${j}`;
        this.connectSquare(currPos, `${i + 1},${j}`);
        this.connectSquare(currPos, `${i - 1},${j}`);
        this.connectSquare(currPos, `${i},${j + 1}`);
        this.connectSquare(currPos, `${i},${j - 1}`);
        this.connectSquare(currPos, `${i + 1},${j + 1}`);
        this.connectSquare(currPos, `${i - 1},${j - 1}`);
        this.connectSquare(currPos, `${i + 1},${j - 1}`);
        this.connectSquare(currPos, `${i - 1},${j + 1}`);
      }
    }
  }

  isValidPos(pos) {
    if (!this.board.has(pos)) return false;

    const list = [...this.ships].flatMap((obj) => [...obj.coords]);
    if (list.includes(pos)) return false;

    const adjPos = [...this.board.get(pos).adjSquares].map((obj) => obj.square);

    for (let i = 0; i < list.length; i++) {
      if (adjPos.includes(list[i])) return false;
    }
    return true;
  }
}

class WorkerPlayer {
  gameBoard;

  constructor() {
    this.gameBoard = new WorkerGameBoard();
  }

  addShip(area) {
    if (this.#isValidArea(area)) {
      this.gameBoard.ships.add({
        ship: new WorkerShip(area.length),
        coords: new Set(area),
        hitCoords: new Set(),
      });
      return true;
    } else {
      return false;
    }
  }
  #isValidArea(area) {
    // Verify that all coordinates in area are adjacent...
    // ...and not diagonal
    for (let i = 0; i < area.length; i++) {
      if (area[i + 1]) {
        const currPos = area[i].split(","),
          nextPos = area[i + 1].split(",");
        if (
          !(
            parseInt(currPos[0]) + 1 == nextPos[0] ||
            parseInt(currPos[0]) - 1 == nextPos[0] ||
            parseInt(currPos[0]) + 1 == nextPos[1] ||
            parseInt(currPos[0]) - 1 == nextPos[1] ||
            parseInt(currPos[1]) + 1 == nextPos[0] ||
            parseInt(currPos[1]) - 1 == nextPos[0] ||
            parseInt(currPos[1]) + 1 == nextPos[1] ||
            parseInt(currPos[1]) - 1 == nextPos[1]
          ) ||
          [parseInt(currPos[0]) + 1, parseInt(currPos[1]) + 1].toString() ===
            area[i + 1] ||
          [parseInt(currPos[0]) - 1, parseInt(currPos[1]) - 1].toString() ===
            area[i + 1] ||
          [parseInt(currPos[0]) + 1, parseInt(currPos[1]) - 1].toString() ===
            area[i + 1] ||
          [parseInt(currPos[0]) - 1, parseInt(currPos[1]) + 1].toString() ===
            area[i + 1]
        )
          return false;
      }
    }
    return area.every(this.gameBoard.isValidPos.bind(this.gameBoard));
  }

  randomSquare(board) {
    const avalableSquares = board.getAvailableSquares();
    return avalableSquares[Math.floor(Math.random() * avalableSquares.length)];
  }
}
