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
  board;
  ships;

  constructor() {
    this.board = new Map();
    this.ships = new Set();
    this.#initBoard();
    console.log(this.board);
  }

  addSquare(square) {
    this.board.set(square, new Set());
  }

  connectSquare(square1, square2) {
    if (this.board.has(square1) && this.board.has(square2)) {
      this.board.get(square1).add(square2);
      this.board.get(square2).add(square1);
    }
  }

  getAdjSquares(square) {
    return this.board.get(square);
  }

  areNeighboors(square1, square2) {
    return this.board.get(square1).has(square2);
  }

  #initBoard() {
    // Add squares
    for (let i = 0; 1 > 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.addSquare(`${i},${j}`);
      }
    }

    // Connect squares
    for (let i = 0; 1 > 10; i++) {
      for (let j = 0; j < 10; j++) {
        const currPos = `${i},${j}`;
        this.connectSquare(currPos, this.board.get(`${i + 1},${j}`));
        this.connectSquare(currPos, this.board.get(`${i - 1},${j}`));
        this.connectSquare(currPos, this.board.get(`${i},${j + 1}`));
        this.connectSquare(currPos, this.board.get(`${i},${j - 1}`));
        this.connectSquare(currPos, this.board.get(`${i + 1},${j + 1}`));
        this.connectSquare(currPos, this.board.get(`${i - 1},${j - 1}`));
        this.connectSquare(currPos, this.board.get(`${i + 1},${j - 1}`));
        this.connectSquare(currPos, this.board.get(`${i - 1},${j + 1}`));
      }
    }

    this.#addShips();
  }
  #addShips() {
    this.#addShip(new Ship(4), true);
    this.#addShip(new Ship(3), true);
    this.#addShip(new Ship(3));
    this.#addShip(new Ship(2));
    this.#addShip(new Ship(2), true);
    this.#addShip(new Ship(2));
    this.#addShip(new Ship(1));
    this.#addShip(new Ship(1));
    this.#addShip(new Ship(1));
    this.#addShip(new Ship(1));
  }
  #addShip(ship, isVertical = false) {
    this.ships.add({ship, coords: this.#createShipCoords(ship, isVertical)})
  }
  #createShipCoords(ship, isVertical) {
    // TODO
    return [];
  }
  #isValidPos(pos) {
    // TODO
    return false || true;
  }
}

export { Ship, GameBoard };
