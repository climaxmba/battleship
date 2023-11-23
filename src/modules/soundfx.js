import congSrc from "../assets/congratulations.mp3";
import gameOverSrc from "../assets/gameover.mp3";
import playSrc from "../assets/play.mp3";
import shipSunkSrc from "../assets/shipsunk.mp3";
import pubSub, { events } from "./pubsub";

const soundFx = (() => {
  const congSound = new Audio(congSrc),
    gameOverSound = new Audio(gameOverSrc),
    playSound = new Audio(playSrc),
    shipSunkSound = new Audio(shipSunkSrc);

  let _soundsEnabled = true;
  pubSub.subscribe(events.soundonClicked, _enableSounds);
  pubSub.subscribe(events.soundoffClicked, _disableSounds);

  function playCongSound() {
    if (_soundsEnabled) {
      congSound.load();
      congSound.play();
    }
  }

  function playGameOverSound() {
    if (_soundsEnabled) {
      gameOverSound.load();
      gameOverSound.play();
    }
  }

  function play() {
    if (_soundsEnabled) {
      playSound.load();
      playSound.play();
    }
  }

  function playShipSunkSound() {
    if (_soundsEnabled) {
      shipSunkSound.load();
      shipSunkSound.play();
    }
  }

  function _disableSounds() {
    _soundsEnabled = false;
  }
  function _enableSounds() {
    _soundsEnabled = true;
  }

  return { play, playCongSound, playGameOverSound, playShipSunkSound };
})();

export default soundFx;
