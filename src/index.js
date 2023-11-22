import pubSub, { events } from "./modules/pubsub";
import { Player } from "./modules/battleship";
import display from "./modules/display";
import soundFx from "./modules/soundfx";
import "./assets/style.css";

(() => {
  let player1 = new Player(""),
    player2 = new Player("", true, global.Worker ? true : false);

  pubSub.subscribe(events.playerBoardCustomized, setPlayer);
  pubSub.subscribe(events.initBoard, startGameLoop);
  display.initPage();

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

      display.writeMessage(player.isComputer ? "Computer's Turn" : "Your Turn");

      const pos = await player.play(enemy.gameBoard),
        attackedShip = enemy.gameBoard.receiveAttack(pos);

      enemy.gameBoard.sunkShipLast
        ? soundFx.playShipSunkSound()
        : soundFx.play();

      pubSub.publish(events.boardsChanged, {
        board1: player1.gameBoard,
        board2: player2.gameBoard,
      });

      const winner = checkWin();
      if (winner) {
        pubSub.publish(events.gameOver, winner);
        winner.isComputer
          ? soundFx.playGameOverSound()
          : soundFx.playCongSound();
        display.writeMessage(winner.isComputer ? "You Loose!" : "You Win!");
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
