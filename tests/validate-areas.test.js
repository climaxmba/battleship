import { validateAreas } from "../src/modules/battleship";

describe("validateAreas", () => {
  test("only returns true for a valid areas list", () => {
    expect(
      validateAreas([
        ["0,0", "0,1", "0,2", "0,3"],
        ["2,0", "3,0", "4,0"],
        ["2,2", "3,2", "4,2"],
        ["0,5", "0,6"],
        ["0,8", "0,9"],
        ["9,9", "9,8"],
        ["7,7"],
        ["5,5"],
        ["9,0"],
        ["8,2"],
      ])
    ).toBeTruthy();

    expect(
      validateAreas([
        ["2,9", "3,9", "4,9", "5,9"],
        ["2,3", "2,4", "2,5"],
        ["2,0", "3,0", "4,0"],
        ["0,1", "0,2"],
        ["0,4", "0,5"],
        ["4,2", "4,3"],
        ["6,1"],
        ["8,4"],
      ])
    ).toBeTruthy();

    expect(
      validateAreas([
        ["2,9", "3,9", "4,9", "5,9"],
        ["2,3", "2,4", "2,5"],
        ["2,0", "3,0", "5,0"],
      ])
    ).toBeFalsy();

    expect(
      validateAreas([
        ["0,1", "0,2"],
        ["0,4", "0,5"],
        ["4,2", "4,3"],
        ["9,9"],
        ["5,5"],
        ["5,5"],
      ])
    ).toBeFalsy();
    expect(
      validateAreas([
        ["5,5", "6,6"],
        ["3,3", "3,3"],
      ])
    ).toBeFalsy();
  });
});
