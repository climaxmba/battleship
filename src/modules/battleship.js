import pubSub, { events } from "./pubsub";

class Ship {
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

class GameBoard {
  board = new Map();
  ships = new Set();
  missedAttacks = new Set();
  lastAttacked = null;

  constructor(addRandomShips = true) {
    this.#initBoard();
    if (addRandomShips) this.#addShips();
  }

  receiveAttack(square) {
    this.lastAttacked = square;

    for (const shipObj of this.ships) {
      if (shipObj.coords.has(square)) {
        shipObj.hitCoords.add(square);
        shipObj.ship.hit();

        // Attack adjacent squares if ship is sunk
        if (shipObj.ship.isSunk()) {
          for (const pos of shipObj.coords) {
            [...this.getAdjSquares(pos)]
              .filter(
                (obj) =>
                  !(
                    this.missedAttacks.has(obj.square) ||
                    shipObj.coords.has(obj.square)
                  )
              )
              .forEach((squareObj) => this.missedAttacks.add(squareObj.square));
          }
        }

        return true;
      }
    }

    this.missedAttacks.add(square);
    return false;
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

  areNeighboors(square1, square2) {
    return this.board.get(square1).adjSquares.has(square2);
  }

  areAllSunk() {
    if (!this.ships.size) return null;
    return [...this.ships]
      .map((shipObj) => shipObj.ship.isSunk())
      .every((val) => val === true);
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
  #addShips() {
    this.#addShip(new Ship(5), this.#getRandomBool());
    this.#addShip(new Ship(4), this.#getRandomBool());
    this.#addShip(new Ship(3), this.#getRandomBool());
    this.#addShip(new Ship(3), this.#getRandomBool());
    this.#addShip(new Ship(2), this.#getRandomBool());
  }
  #getRandomBool() {
    return Math.floor(Math.random() * 2) === 1 ? true : false;
  }
  #addShip(ship, isVertical = false) {
    this.ships.add({
      ship,
      coords: this.#createShipCoords(ship, isVertical),
      hitCoords: new Set(),
    });
  }
  #createShipCoords(ship, isVertical) {
    const x = Math.floor(Math.random() * 10),
      y = Math.floor(Math.random() * 10),
      coordsList = new Set();

    // Loop through the length of the ship to check if 'pos' is valid
    for (let i = 0; i < ship.length; i++) {
      if (isVertical) {
        const pos = `${x},${y + i}`;
        if (this.isValidPos(pos)) {
          coordsList.add(pos);
          continue;
        }
        return this.#createShipCoords(ship, isVertical);
      } else {
        const pos = `${x + i},${y}`;
        if (this.isValidPos(pos)) {
          coordsList.add(pos);
          continue;
        }
        return this.#createShipCoords(ship, isVertical);
      }
    }
    return coordsList;
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

class Player {
  name;
  gameBoard;

  constructor(name, isComputer = false) {
    this.name = name;
    this.isComputer = isComputer;
    if (isComputer) {
      this.gameBoard = new GameBoard();
    } else {
      this.gameBoard = new GameBoard(false);
    }
  }

  addShip(area) {
    if (this.#isValidArea(area)) {
      this.gameBoard.ships.add({
        ship: new Ship(area.length),
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

  #canExistShip(board, pos, shipLength, isVertical = false) {
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

  getBestSquare(board) {
    let bestSquare,
      maxProb = -Infinity,
      probMap = this.#calcProbMap(board);
    for (const square of probMap.keys()) {
      if (probMap.get(square) > maxProb) {
        bestSquare = square;
        maxProb = probMap.get(square);
      }
    }
    return bestSquare;
  }

  #calcProbMap(board = this.gameBoard) {
    let probMap = new Map();

    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        probMap.set(`${x},${y}`, 0);
      }
    }

    board.ships.forEach((shipObj) => {
      if (!shipObj.ship.isSunk()) {
        [...board.board.keys()].forEach((pos) => {
          const vertical = this.#canExistShip(
              board,
              pos,
              shipObj.ship.length,
              true
            ),
            horizontal = this.#canExistShip(
              board,
              pos,
              shipObj.ship.length,
              false
            );

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
                  `${parseInt(hit[0]) + 1},${parseInt(hit[2]) + 1}` ===
                    square ||
                  `${parseInt(hit[0]) - 1},${parseInt(hit[2]) - 1}` ===
                    square ||
                  `${parseInt(hit[0]) + 1},${parseInt(hit[2]) - 1}` ===
                    square ||
                  `${parseInt(hit[0]) - 1},${parseInt(hit[2]) + 1}` === square
                )
                  return false;
                else return true;
              })
              .forEach((obj) => {
                const square = obj.square;
                if (
                  !hits.includes(square) &&
                  !board.missedAttacks.has(square)
                ) {
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

  async play(board) {
    if (this.isComputer) {
      await new Promise((res) => setTimeout(res, 500)); // Simulate delay
      return Promise.resolve(this.getBestSquare(board));
    } else {
      return new Promise((res) => {
        pubSub.subscribe(events.userPlayed, handler);

        function handler(square) {
          res(square);
          pubSub.unSubscribe(events.userPlayed, handler);
        }
      });
    }
  }
}

function validateAreas(areasList) {
  const p = new Player("", false);
  try {
    areasList.forEach((area) => {
      if (!p.addShip(area)) throw new Error();
    });
    return true;
  } catch {
    return false;
  }
}

export { Ship, GameBoard, Player, validateAreas };
