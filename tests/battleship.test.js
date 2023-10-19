import { GameBoard, Ship } from "../src/battleship";

describe("Ship", () => {
  let ship1, ship2, ship3;

  beforeEach(() => {
    ship1 = new Ship(1);
    ship2 = new Ship(2);
    ship3 = new Ship(3);
  });

  test("accurate length property", () => {
    expect(ship1.length).toBe(1);
    expect(ship2.length).toBe(2);
    expect(ship3.length).toBe(3);
  });

  test("increases hits on hit()", () => {
    ship1.hit();
    ship2.hit();
    ship2.hit();

    expect(ship1.hits).toBe(1);
    expect(ship2.hits).toBe(2);
    expect(ship3.hits).toBe(0);
  });

  test("sinks only when hits equals length", () => {
    expect(ship1.isSunk() && ship2.isSunk() && ship3.isSunk()).toBeFalsy();
    ship1.hit();
    expect(ship1.isSunk()).toBeTruthy();
    ship3.hit();
    expect(ship3.isSunk()).toBeFalsy();
    ship3.hit();
    ship3.hit();
    expect(ship3.isSunk()).toBeTruthy();
    ship2.hit();
    expect(ship2.isSunk()).toBeFalsy();
  });
});

describe("GameBoard", () => {
  let board1, board2;

  beforeEach(() => {
    board1, (board2 = new GameBoard());
  });

  test("no overlaping ships", () => {
    const positionList1 = [],
      positionList2 = [];
    board1.ships.forEach((shipObj) => {
      positionList1.push(...shipObj.coords);
    });
    board2.ships.forEach((shipObj) => {
      positionList2.push(...shipObj.coords);
    });

    expect(positionList1.length === new Set(positionList1).size).toBeTruthy();
    expect(positionList2.length === new Set(positionList2).size).toBeTruthy();
  });

  test("ships are not too close to each other", () => {
    // Compare each position lists for each ship against each other
    board1.ships.forEach((shipObj) => {
      shipObj.coords.forEach((pos) => {
        board1.ships.forEach((otherShipObj) => {
          otherShipObj.coords.forEach(otherPos => {
            expect(board1.getAdjSquares(pos).has(otherPos)).toBeFalsy();
          });
        });
      });
    });
    
    board2.ships.forEach((shipObj) => {
      shipObj.coords.forEach((pos) => {
        board2.ships.forEach((otherShipObj) => {
          otherShipObj.coords.forEach(otherPos => {
            expect(board2.getAdjSquares(pos).has(otherPos)).toBeFalsy();
          });
        });
      });
    });
  });
});
