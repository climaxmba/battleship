import { GameBoard, Ship, Player } from "../src/battleship";

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
  let board1 = new GameBoard(),
    board2 = new GameBoard(),
    board3 = new GameBoard(false);

  beforeEach(() => {
    board1 = new GameBoard();
    board2 = new GameBoard();
    board3 = new GameBoard(false);
  });

  test("adds ships by default", () => {
    expect(board1.ships.size && board2.ships.size).toBeTruthy();
    expect(board3.ships.size).toBeFalsy();
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

  test("places ships far enough from each other", () => {
    // Compare each position lists for each ship against each other's adjacent squares

    const ships1 = [...board1.ships].map((obj) => [...obj.coords]),
      ships2 = [...board2.ships].map((obj) => [...obj.coords]);

    for (let i = 0; i < ships1.length; i++) {
      const list = ships1.filter((l) => l !== ships1[i]);

      list.forEach((innerList) => {
        ships1[i].forEach((pos) => {
          const adjSquares = [...board1.getAdjSquares(pos)].map(
            (obj) => obj.square
          );

          adjSquares.forEach((square) => {
            expect(innerList.includes(square)).toBeFalsy();
          });
        });
      });
    }

    for (let i = 0; i < ships2.length; i++) {
      const list = ships2.filter((l) => l !== ships2[i]);

      list.forEach((innerList) => {
        ships2[i].forEach((pos) => {
          const adjSquares = [...board1.getAdjSquares(pos)].map(
            (obj) => obj.square
          );

          adjSquares.forEach((square) => {
            expect(innerList.includes(square)).toBeFalsy();
          });
        });
      });
    }
  });

  test("records attacks", () => {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const pos = `${x},${y}`;

        board1.receiveAttack(pos);
        board2.receiveAttack(pos);

        const res1 =
          board1.missedAttacks.has(pos) ||
          ![...board1.ships]
            .map((obj) => [...obj.hitCoords])
            .every((list) => !list.includes(pos));
        const res2 =
          board2.missedAttacks.has(pos) ||
          ![...board2.ships]
            .map((obj) => [...obj.hitCoords])
            .every((list) => !list.includes(pos));
        const res3 = board3.missedAttacks.has(pos);

        expect(res1 && res2 && !res3).toBeTruthy();
      }
    }
  });

  test("all ships are sunk after attacking all squares", () => {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const pos = `${x},${y}`;
        board1.receiveAttack(pos);
        board2.receiveAttack(pos);
      }
    }
    expect(board1.areAllSunk()).toBeTruthy();
    expect(board2.areAllSunk()).toBeTruthy();
    expect(board3.areAllSunk()).toBe(null); // Empty ships
  });
});

describe("Player", () => {
  let player1 = new Player("Alan"),
    player2 = new Player("Computer", true);

  beforeEach(() => {
    player1 = new Player("Alan");
    player2 = new Player("Computer", true);
  });

  test('refuses invalid squares for ship', () => {
    player1.addShip(["0,0", "0,1", "0,2"]);

    expect(player1.addShip(["2,2", "2,3", "2,4", "2,5"])).toBeTruthy();
    expect(player1.addShip(["0,0"])).toBeFalsy();
    expect(player1.addShip(["2,5", "2,6"])).toBeFalsy();
    expect(player1.addShip(["3,4", "4,5"])).toBeFalsy();
  });
});
