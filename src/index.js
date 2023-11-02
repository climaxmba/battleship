import pubSub, { events } from "./modules/pubsub";
import { Player } from "./modules/battleship";
import display from "./modules/display";
import "./assets/style.css";

(() => {
  let player1 = new Player(""),
    player2 = new Player("", true);

  pubSub.subscribe(events.playerBoardCustomized, setPlayer);
  display.initPage();
  // startGameLoop();

  function setPlayer(areasList) {
    areasList.forEach(player1.addShip.bind(player1));
  }

  function checkWin(p1 = player1, p2 = player2) {
    if (p1.gameBoard.areAllSunk()) {
      return p2;
    } else if (p2.gameBoard.areAllSunk()) {
      return p1;
    }
    return null;
  }

  async function startGameLoop() {
    const turnsQueue = [player1, player2];
    while (true) {
      const player = turnsQueue.shift(),
        enemy = turnsQueue[0];
      
      const pos = await player.play(enemy.gameBoard);
      enemy.gameBoard.receiveAttack(pos);

      const winner = checkWin();
      if (winner) {
        // pubSub winner
        return;
      } else {
        turnsQueue.push(player);
      }
    }
  }
})();
