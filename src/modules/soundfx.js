import congSrc from "../assets/congratulations.mp3";
import gameOverSrc from "../assets/gameover.mp3";
import playSrc from "../assets/play.mp3";
import shipSunkSrc from "../assets/shipsunk.mp3";

const soundFx = (() => {
  const congSound = new Audio(congSrc),
    gameOverSound = new Audio(gameOverSrc),
    playSound = new Audio(playSrc),
    shipSunkSound = new Audio(shipSunkSrc);

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

  return { play, playCongSound, playGameOverSound, playShipSunkSound };
})();

export default soundFx;
