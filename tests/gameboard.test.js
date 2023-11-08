import { GameBoard } from "../src/modules/battleship";

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

  test("has no overlaping ships", () => {
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

  test("returns true for ships attacked & false if missed", () => {
    const shipAreas = [...board1.ships].flatMap((shipObj) => [
      ...shipObj.coords,
    ]);
    shipAreas.forEach((pos) => expect(board1.receiveAttack(pos)).toBeTruthy());
    shipAreas.forEach((pos) => expect(board3.receiveAttack(pos)).toBeFalsy());
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

  test("can get available squares", () => {
    board1.receiveAttack("0,0");
    board1.receiveAttack("9,9");

    expect(
      board1.getAvailableSquares().includes("9,9") ||
        board1.getAvailableSquares().includes("0,0")
    ).toBeFalsy();

    expect(board2.getAvailableSquares().length).toEqual(100);
    expect(board3.getAvailableSquares().includes("0,0")).toBeTruthy();

    [...board2.ships]
      .flatMap((shipObj) => [...shipObj.coords])
      .forEach((pos) => board2.receiveAttack(pos));
    expect(board2.getAvailableSquares().length).toBeLessThan(100);
  });

  test("saves last square attacked", () => {
    expect(board1.lastAttacked).toBeNull();
    expect(board3.lastAttacked).toBeNull();

    board1.receiveAttack("0,0");
    board3.receiveAttack("4,6");
    board3.receiveAttack("9,9");

    expect(board1.lastAttacked).toBe("0,0");
    expect(board3.lastAttacked).toBe("9,9");
  });
});
