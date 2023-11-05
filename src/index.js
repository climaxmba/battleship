import pubSub, { events } from "./modules/pubsub";
import { Player } from "./modules/battleship";
import display from "./modules/display";
import "./assets/style.css";

(() => {
  let player1 = new Player(""),
    player2 = new Player("", true);

  pubSub.subscribe(events.playerBoardCustomized, setPlayer);
  display.initPage();
  startGameLoop();
  // starts too early

  function setPlayer(areasList) {
    areasList.forEach(player1.addShip.bind(player1));
    pubSub.publish(events.initBoard, {
      board1: player1.gameBoard,
      board2: player2.gameBoard,
    });
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
      
      const pos = await player.play(enemy.gameBoard),
      attackedShip = enemy.gameBoard.receiveAttack(pos);
      pubSub.publish(events.boardsChanged, { board1: player1.gameBoard, board2: player2.gameBoard });

      const winner = checkWin();
      if (winner) {
        // pubSub winner
        console.log(winner);
        return;
      } else {
        if (attackedShip) {
          // Play again
          turnsQueue.pop();
          turnsQueue.push(player, enemy);
        } else {
          turnsQueue.push(player);
        }
      }
    }
  }
})();
