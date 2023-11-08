import { Ship } from "../src/modules/battleship";

describe("Ship", () => {
  let ship1, ship2, ship3;

  beforeEach(() => {
    ship1 = new Ship(1);
    ship2 = new Ship(2);
    ship3 = new Ship(3);
  });

  test("has accurate length property", () => {
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

  test("sinks when hits equals length", () => {
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
