import pubSub from "./modules/pubsub";
import { Player } from "./modules/battleship";
import "./display";
import "./assets/style.css";

(() => {
  let player1 = new Player(""),
    player2 = new Player("", true);

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

  async function gameLoop() {
    const playQueue = [player1, player2];
    while (true) {
      const player = playQueue.shift(),
        enemy = playQueue[0];
      
      const pos = await player.play(enemy.gameBoard);
      enemy.gameBoard.receiveAttack(pos);

      const winner = checkWin();
      if (winner) {
        // pubSub winner
        return;
      } else {
        playQueue.push(player);
      }
    }
  }
})();
