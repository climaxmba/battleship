import { Player } from "../src/modules/battleship";

describe("Player", () => {
  let player = new Player("Alan");

  test("accepts only valid ship area", () => {
    player.addShip(["0,0", "0,1", "0,2"]);

    expect(player.addShip(["2,2", "2,3", "2,4", "2,5"])).toBeTruthy();
    expect(player.addShip(["0,0"])).toBeFalsy();
    expect(player.addShip(["2,5", "2,6"])).toBeFalsy();
    expect(player.addShip(["9,9", "4,5"])).toBeFalsy();
    expect(player.addShip(["9,9", "8,8"])).toBeFalsy();
    expect(player.addShip(["9,9", "9,8"])).toBeTruthy();
  });
});
