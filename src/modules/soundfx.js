import pubSub, { events } from "./pubsub";
import congSrc from "../assets/congratulations.mp3";
import gameOverSrc from "../assets/gameover.mp3";
import playSrc from "../assets/play.mp3";
import shipSunkSrc from "../assets/shipsunk.mp3";

(() => {
  const congSound = new Audio(congSrc),
    gameOverSound = new Audio(gameOverSrc),
    playSound = new Audio(playSrc),
    shipSunkSound = new Audio(shipSunkSrc);

  pubSub.subscribe(events.gameOver, playGameOverSound);
  pubSub.subscribe(events.computerPlayed, play);
  pubSub.subscribe(events.userPlayed, play);
  pubSub.subscribe(events.gameOver, (winner) =>
    winner.isComputer ? playGameOverSound() : playCongSound()
  );

  function playCongSound() {
    congSound.load();
    congSound.play();
  }

  function playGameOverSound() {
    gameOverSound.load();
    gameOverSound.play();
  }

  function play() {
    playSound.load();
    playSound.play();
  }

  function playShipSunkSound() {
    shipSunkSound.load();
    shipSunkSound.play();
  }
})();
