/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/modules/battleship.worker.js ***!
  \******************************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX21vZHVsZXNfYmF0dGxlc2hpcF93b3JrZXJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCLHFCQUFxQixFQUFFLEdBQUcsRUFBRTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCLEdBQUcscUJBQXFCO0FBQ2hFLG1CQUFtQixxQkFBcUIsR0FBRyxxQkFBcUI7QUFDaEUsbUJBQW1CLHFCQUFxQixHQUFHLHFCQUFxQjtBQUNoRSxtQkFBbUIscUJBQXFCLEdBQUcscUJBQXFCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx3QkFBd0IsR0FBRyxVQUFVO0FBQ3hFLG1DQUFtQyx3QkFBd0IsR0FBRyxVQUFVO0FBQ3hFLG1DQUFtQyxVQUFVLEdBQUcsd0JBQXdCO0FBQ3hFLG1DQUFtQyxVQUFVLEdBQUcsd0JBQXdCO0FBQ3hFO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0EsbUJBQW1CLE9BQU8sR0FBRyxxQkFBcUI7QUFDbEQsTUFBTTtBQUNOLG1CQUFtQixxQkFBcUIsR0FBRyxPQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsK0JBQStCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsUUFBUTtBQUM5QiwwQkFBMEIsRUFBRSxHQUFHLEVBQUU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsUUFBUTtBQUM5QiwyQkFBMkIsRUFBRSxHQUFHLEVBQUU7QUFDbEMsdUNBQXVDLE1BQU0sR0FBRyxFQUFFO0FBQ2xELHVDQUF1QyxNQUFNLEdBQUcsRUFBRTtBQUNsRCx1Q0FBdUMsRUFBRSxHQUFHLE1BQU07QUFDbEQsdUNBQXVDLEVBQUUsR0FBRyxNQUFNO0FBQ2xELHVDQUF1QyxNQUFNLEdBQUcsTUFBTTtBQUN0RCx1Q0FBdUMsTUFBTSxHQUFHLE1BQU07QUFDdEQsdUNBQXVDLE1BQU0sR0FBRyxNQUFNO0FBQ3RELHVDQUF1QyxNQUFNLEdBQUcsTUFBTTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYmF0dGxlc2hpcC53b3JrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsib25tZXNzYWdlID0gKGUpID0+IHtcclxuICBwb3N0TWVzc2FnZShnZXRCZXN0U3F1YXJlKGUuZGF0YSkpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0QmVzdFNxdWFyZShib2FyZCkge1xyXG4gIC8vIEFkZCBmdW5jdGlvbiBvciBjb21wYXRpYmlsaXR5XHJcbiAgYm9hcmQuX19wcm90b19fLmdldEFkalNxdWFyZXMgPSAoc3F1YXJlKSA9PiB7XHJcbiAgICByZXR1cm4gYm9hcmQuYm9hcmQuZ2V0KHNxdWFyZSkuYWRqU3F1YXJlcztcclxuICB9O1xyXG5cclxuICBsZXQgYmVzdFNxdWFyZXMgPSBbXSxcclxuICAgIG1heFByb2IgPSAtSW5maW5pdHksXHJcbiAgICBwcm9iTWFwID0gY2FsY1Byb2JNYXAoYm9hcmQpO1xyXG5cclxuICAvLyBHcm91cCBzcXVhcmVzIHdpdGggdGhlIGhpZ2hlc3QgdmFsdWVzIHRvZ2V0aGVyXHJcbiAgZm9yIChjb25zdCBzcXVhcmUgb2YgcHJvYk1hcC5rZXlzKCkpIHtcclxuICAgIGlmIChwcm9iTWFwLmdldChzcXVhcmUpID4gbWF4UHJvYikge1xyXG4gICAgICBiZXN0U3F1YXJlcyA9IFtzcXVhcmVdO1xyXG4gICAgICBtYXhQcm9iID0gcHJvYk1hcC5nZXQoc3F1YXJlKTtcclxuICAgIH0gZWxzZSBpZiAocHJvYk1hcC5nZXQoc3F1YXJlKSA9PT0gbWF4UHJvYikge1xyXG4gICAgICBiZXN0U3F1YXJlcy5wdXNoKHNxdWFyZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm4gYSByYW5kb20gc3F1YXJlIHdpdGggdGhlIGhpZ2hlc3QgcHJvYmFiaWxpdHlcclxuICByZXR1cm4gYmVzdFNxdWFyZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYmVzdFNxdWFyZXMubGVuZ3RoKV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGNQcm9iTWFwKGJvYXJkKSB7XHJcbiAgbGV0IHByb2JNYXAgPSBuZXcgTWFwKCk7XHJcblxyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XHJcbiAgICAgIHByb2JNYXAuc2V0KGAke3h9LCR7eX1gLCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXBPYmopID0+IHtcclxuICAgIGlmICghc2hpcE9iai5zaGlwLmxlbmd0aCA8PSBzaGlwT2JqLnNoaXAuaGl0cykge1xyXG4gICAgICBib2FyZC5ib2FyZC5mb3JFYWNoKChfdmFsLCBwb3MpID0+IHtcclxuICAgICAgICBjb25zdCB2ZXJ0aWNhbCA9IGNhbkV4aXN0U2hpcChib2FyZCwgcG9zLCBzaGlwT2JqLnNoaXAubGVuZ3RoLCB0cnVlKSxcclxuICAgICAgICAgIGhvcml6b250YWwgPSBjYW5FeGlzdFNoaXAoYm9hcmQsIHBvcywgc2hpcE9iai5zaGlwLmxlbmd0aCwgZmFsc2UpO1xyXG5cclxuICAgICAgICBpZiAodmVydGljYWwpXHJcbiAgICAgICAgICB2ZXJ0aWNhbC5mb3JFYWNoKChwb3MpID0+IHByb2JNYXAuc2V0KHBvcywgcHJvYk1hcC5nZXQocG9zKSArIDEpKTtcclxuICAgICAgICBpZiAoaG9yaXpvbnRhbClcclxuICAgICAgICAgIGhvcml6b250YWwuZm9yRWFjaCgocG9zKSA9PiBwcm9iTWFwLnNldChwb3MsIHByb2JNYXAuZ2V0KHBvcykgKyAxKSk7XHJcbiAgICAgICAgY29uc3QgaGl0cyA9IFsuLi5ib2FyZC5zaGlwc10uZmxhdE1hcCgoc2hpcE9iaikgPT4gW1xyXG4gICAgICAgICAgLi4uc2hpcE9iai5oaXRDb29yZHMsXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgaGl0cy5mb3JFYWNoKChoaXQpID0+IHtcclxuICAgICAgICAgIFsuLi5ib2FyZC5nZXRBZGpTcXVhcmVzKGhpdCldXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IG9iai5zcXVhcmU7XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgYCR7cGFyc2VJbnQoaGl0WzBdKSArIDF9LCR7cGFyc2VJbnQoaGl0WzJdKSArIDF9YCA9PT0gc3F1YXJlIHx8XHJcbiAgICAgICAgICAgICAgICBgJHtwYXJzZUludChoaXRbMF0pIC0gMX0sJHtwYXJzZUludChoaXRbMl0pIC0gMX1gID09PSBzcXVhcmUgfHxcclxuICAgICAgICAgICAgICAgIGAke3BhcnNlSW50KGhpdFswXSkgKyAxfSwke3BhcnNlSW50KGhpdFsyXSkgLSAxfWAgPT09IHNxdWFyZSB8fFxyXG4gICAgICAgICAgICAgICAgYCR7cGFyc2VJbnQoaGl0WzBdKSAtIDF9LCR7cGFyc2VJbnQoaGl0WzJdKSArIDF9YCA9PT0gc3F1YXJlXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBvYmouc3F1YXJlO1xyXG4gICAgICAgICAgICAgIGlmICghaGl0cy5pbmNsdWRlcyhzcXVhcmUpICYmICFib2FyZC5taXNzZWRBdHRhY2tzLmhhcyhzcXVhcmUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgIGhpdHMuaW5jbHVkZXMoYCR7cGFyc2VJbnQoc3F1YXJlWzBdKSArIDJ9LCR7c3F1YXJlWzJdfWApIHx8XHJcbiAgICAgICAgICAgICAgICAgIGhpdHMuaW5jbHVkZXMoYCR7cGFyc2VJbnQoc3F1YXJlWzBdKSAtIDJ9LCR7c3F1YXJlWzJdfWApIHx8XHJcbiAgICAgICAgICAgICAgICAgIGhpdHMuaW5jbHVkZXMoYCR7c3F1YXJlWzBdfSwke3BhcnNlSW50KHNxdWFyZVsyXSkgKyAyfWApIHx8XHJcbiAgICAgICAgICAgICAgICAgIGhpdHMuaW5jbHVkZXMoYCR7c3F1YXJlWzBdfSwke3BhcnNlSW50KHNxdWFyZVsyXSkgLSAyfWApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIHByb2JNYXAuc2V0KHNxdWFyZSwgcHJvYk1hcC5nZXQoc3F1YXJlKSArIDUpOyAvL0luY3JlYXNlIHByb2JhYmlsaXR5IGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHNoaXBcclxuICAgICAgICAgICAgICAgIHByb2JNYXAuc2V0KHNxdWFyZSwgcHJvYk1hcC5nZXQoc3F1YXJlKSArIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcHJvYk1hcDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuRXhpc3RTaGlwKGJvYXJkLCBwb3MsIHNoaXBMZW5ndGgsIGlzVmVydGljYWwgPSBmYWxzZSkge1xyXG4gIGNvbnN0IGFyZWEgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGlzVmVydGljYWwpIHtcclxuICAgICAgYXJlYS5wdXNoKGAke3Bvc1swXX0sJHtwYXJzZUludChwb3NbMl0pICsgaX1gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFyZWEucHVzaChgJHtwYXJzZUludChwb3NbMF0pICsgaX0sJHtwb3NbMl19YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoIXZhbGlkYXRlQXJlYXMoW2FyZWFdKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBjb25zdCBoaXRBcmVhcyA9IFsuLi5ib2FyZC5zaGlwc10uZmxhdE1hcCgoc2hpcE9iaikgPT4gW1xyXG4gICAgLi4uc2hpcE9iai5oaXRDb29yZHMsXHJcbiAgXSk7XHJcbiAgdHJ5IHtcclxuICAgIGFyZWEuZm9yRWFjaCgocG9zKSA9PiB7XHJcbiAgICAgIGlmIChib2FyZC5taXNzZWRBdHRhY2tzLmhhcyhwb3MpIHx8IGhpdEFyZWFzLmluY2x1ZGVzKHBvcykpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhcmVhO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUFyZWFzKGFyZWFzTGlzdCkge1xyXG4gIGNvbnN0IHAgPSBuZXcgV29ya2VyUGxheWVyKCk7XHJcbiAgdHJ5IHtcclxuICAgIGFyZWFzTGlzdC5mb3JFYWNoKChhcmVhKSA9PiB7XHJcbiAgICAgIGlmICghcC5hZGRTaGlwKGFyZWEpKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBXb3JrZXJTaGlwIHtcclxuICBsZW5ndGg7XHJcbiAgaGl0cyA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgfVxyXG5cclxuICBoaXQoKSB7XHJcbiAgICB0aGlzLmhpdHMrKztcclxuICB9XHJcbiAgaXNTdW5rKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoIDw9IHRoaXMuaGl0cztcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFdvcmtlckdhbWVCb2FyZCB7XHJcbiAgYm9hcmQgPSBuZXcgTWFwKCk7XHJcbiAgc2hpcHMgPSBuZXcgU2V0KCk7XHJcbiAgbWlzc2VkQXR0YWNrcyA9IG5ldyBTZXQoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLiNpbml0Qm9hcmQoKTtcclxuICB9XHJcblxyXG4gIGFkZFNxdWFyZShzcXVhcmUpIHtcclxuICAgIHRoaXMuYm9hcmQuc2V0KHNxdWFyZSwgeyBzcXVhcmUsIGFkalNxdWFyZXM6IG5ldyBTZXQoKSB9KTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RTcXVhcmUoc3F1YXJlMSwgc3F1YXJlMikge1xyXG4gICAgaWYgKHRoaXMuYm9hcmQuaGFzKHNxdWFyZTEpICYmIHRoaXMuYm9hcmQuaGFzKHNxdWFyZTIpKSB7XHJcbiAgICAgIHRoaXMuYm9hcmQuZ2V0KHNxdWFyZTEpLmFkalNxdWFyZXMuYWRkKHRoaXMuYm9hcmQuZ2V0KHNxdWFyZTIpKTtcclxuICAgICAgdGhpcy5ib2FyZC5nZXQoc3F1YXJlMikuYWRqU3F1YXJlcy5hZGQodGhpcy5ib2FyZC5nZXQoc3F1YXJlMSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0QWRqU3F1YXJlcyhzcXVhcmUpIHtcclxuICAgIHJldHVybiB0aGlzLmJvYXJkLmdldChzcXVhcmUpLmFkalNxdWFyZXM7XHJcbiAgfVxyXG5cclxuICBnZXRBdmFpbGFibGVTcXVhcmVzKCkge1xyXG4gICAgY29uc3QgYm9hcmRTcXVhcmVzID0gWy4uLnRoaXMuYm9hcmQua2V5cygpXSxcclxuICAgICAgc2hpcFBvc0F0dGFja2VkID0gWy4uLnRoaXMuc2hpcHNdLmZsYXRNYXAoKG9iaikgPT4gWy4uLm9iai5oaXRDb29yZHNdKTtcclxuICAgIGNvbnN0IHNxdWFyZVNldCA9IGJvYXJkU3F1YXJlcy5maWx0ZXIoXHJcbiAgICAgIChzcXVhcmUpID0+XHJcbiAgICAgICAgISh0aGlzLm1pc3NlZEF0dGFja3MuaGFzKHNxdWFyZSkgfHwgc2hpcFBvc0F0dGFja2VkLmluY2x1ZGVzKHNxdWFyZSkpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBbLi4uc3F1YXJlU2V0XTtcclxuICB9XHJcblxyXG4gICNpbml0Qm9hcmQoKSB7XHJcbiAgICAvLyBBZGQgc3F1YXJlc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgIHRoaXMuYWRkU3F1YXJlKGAke2l9LCR7an1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbm5lY3Qgc3F1YXJlc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgIGNvbnN0IGN1cnJQb3MgPSBgJHtpfSwke2p9YDtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSArIDF9LCR7an1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSAtIDF9LCR7an1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aX0sJHtqICsgMX1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aX0sJHtqIC0gMX1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSArIDF9LCR7aiArIDF9YCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0U3F1YXJlKGN1cnJQb3MsIGAke2kgLSAxfSwke2ogLSAxfWApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFNxdWFyZShjdXJyUG9zLCBgJHtpICsgMX0sJHtqIC0gMX1gKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RTcXVhcmUoY3VyclBvcywgYCR7aSAtIDF9LCR7aiArIDF9YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzVmFsaWRQb3MocG9zKSB7XHJcbiAgICBpZiAoIXRoaXMuYm9hcmQuaGFzKHBvcykpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBsaXN0ID0gWy4uLnRoaXMuc2hpcHNdLmZsYXRNYXAoKG9iaikgPT4gWy4uLm9iai5jb29yZHNdKTtcclxuICAgIGlmIChsaXN0LmluY2x1ZGVzKHBvcykpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBhZGpQb3MgPSBbLi4udGhpcy5ib2FyZC5nZXQocG9zKS5hZGpTcXVhcmVzXS5tYXAoKG9iaikgPT4gb2JqLnNxdWFyZSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChhZGpQb3MuaW5jbHVkZXMobGlzdFtpXSkpIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgV29ya2VyUGxheWVyIHtcclxuICBnYW1lQm9hcmQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgV29ya2VyR2FtZUJvYXJkKCk7XHJcbiAgfVxyXG5cclxuICBhZGRTaGlwKGFyZWEpIHtcclxuICAgIGlmICh0aGlzLiNpc1ZhbGlkQXJlYShhcmVhKSkge1xyXG4gICAgICB0aGlzLmdhbWVCb2FyZC5zaGlwcy5hZGQoe1xyXG4gICAgICAgIHNoaXA6IG5ldyBXb3JrZXJTaGlwKGFyZWEubGVuZ3RoKSxcclxuICAgICAgICBjb29yZHM6IG5ldyBTZXQoYXJlYSksXHJcbiAgICAgICAgaGl0Q29vcmRzOiBuZXcgU2V0KCksXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgI2lzVmFsaWRBcmVhKGFyZWEpIHtcclxuICAgIC8vIFZlcmlmeSB0aGF0IGFsbCBjb29yZGluYXRlcyBpbiBhcmVhIGFyZSBhZGphY2VudC4uLlxyXG4gICAgLy8gLi4uYW5kIG5vdCBkaWFnb25hbFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmVhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChhcmVhW2kgKyAxXSkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJQb3MgPSBhcmVhW2ldLnNwbGl0KFwiLFwiKSxcclxuICAgICAgICAgIG5leHRQb3MgPSBhcmVhW2kgKyAxXS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIShcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1swXSkgKyAxID09IG5leHRQb3NbMF0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1swXSkgLSAxID09IG5leHRQb3NbMF0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1swXSkgKyAxID09IG5leHRQb3NbMV0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1swXSkgLSAxID09IG5leHRQb3NbMV0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1sxXSkgKyAxID09IG5leHRQb3NbMF0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1sxXSkgLSAxID09IG5leHRQb3NbMF0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1sxXSkgKyAxID09IG5leHRQb3NbMV0gfHxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY3VyclBvc1sxXSkgLSAxID09IG5leHRQb3NbMV1cclxuICAgICAgICAgICkgfHxcclxuICAgICAgICAgIFtwYXJzZUludChjdXJyUG9zWzBdKSArIDEsIHBhcnNlSW50KGN1cnJQb3NbMV0pICsgMV0udG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgYXJlYVtpICsgMV0gfHxcclxuICAgICAgICAgIFtwYXJzZUludChjdXJyUG9zWzBdKSAtIDEsIHBhcnNlSW50KGN1cnJQb3NbMV0pIC0gMV0udG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgYXJlYVtpICsgMV0gfHxcclxuICAgICAgICAgIFtwYXJzZUludChjdXJyUG9zWzBdKSArIDEsIHBhcnNlSW50KGN1cnJQb3NbMV0pIC0gMV0udG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgYXJlYVtpICsgMV0gfHxcclxuICAgICAgICAgIFtwYXJzZUludChjdXJyUG9zWzBdKSAtIDEsIHBhcnNlSW50KGN1cnJQb3NbMV0pICsgMV0udG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgYXJlYVtpICsgMV1cclxuICAgICAgICApXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcmVhLmV2ZXJ5KHRoaXMuZ2FtZUJvYXJkLmlzVmFsaWRQb3MuYmluZCh0aGlzLmdhbWVCb2FyZCkpO1xyXG4gIH1cclxuXHJcbiAgcmFuZG9tU3F1YXJlKGJvYXJkKSB7XHJcbiAgICBjb25zdCBhdmFsYWJsZVNxdWFyZXMgPSBib2FyZC5nZXRBdmFpbGFibGVTcXVhcmVzKCk7XHJcbiAgICByZXR1cm4gYXZhbGFibGVTcXVhcmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWxhYmxlU3F1YXJlcy5sZW5ndGgpXTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9