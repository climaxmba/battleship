import pubSub, { events } from "./pubsub";
import dom from "./dom";
import { GameBoard, validateAreas } from "./battleship";

const customizingModal = (() => {
  let _draggingLength,
    _isVertical = false,
    _currShipArea = [],
    _shipAreas = [],
    _board = new GameBoard(false);

  function isOrientationVertical() {
    return _isVertical;
  }

  function switchOrientation() {
    _isVertical = !_isVertical;
    dom.shipsContr.setAttribute("data-isvertical", _isVertical);
  }

  function setDraggingLength(length) {
    _draggingLength = length;
  }

  function _clearBoard() {
    dom.dialogBoard.childNodes.forEach(
      (child) => (child.className = "squares")
    );
  }

  function _clearBoardValidity() {
    const validitySquares = dom.dialogBoard.querySelectorAll(
      "span.valid, span.invalid"
    );
    validitySquares.forEach((square) => {
      square.classList.remove("valid");
      square.classList.remove("invalid");
    });
  }

  function revealSquaresValidity(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) return;
    _clearBoardValidity();

    const areasList = [],
      altAreasList = [],
      square = e.target.getAttribute("data-square-index");

    for (let i = 0; i < _draggingLength; i++) {
      _isVertical
        ? areasList.push(`${square[0]},${parseInt(square[2]) + i}`)
        : areasList.push(`${parseInt(square[0]) + i},${square[2]}`);
    }
    for (let i = 0; i < _draggingLength; i++) {
      _isVertical
        ? altAreasList.push(`${square[0]},${parseInt(square[2]) - i}`)
        : altAreasList.push(`${parseInt(square[0]) - i},${square[2]}`);
    }

    if (validateAreas([..._shipAreas, areasList])) {
      areasList.forEach((pos) =>
        document
          .querySelector(`[data-square-index='${pos}']`)
          .classList.add("valid")
      );
      _currShipArea = areasList;
    } else if (validateAreas([..._shipAreas, altAreasList])) {
      altAreasList.forEach((pos) =>
        document
          .querySelector(`[data-square-index='${pos}']`)
          .classList.add("valid")
      );
      _currShipArea = altAreasList;
    } else {
      _currShipArea = [];
    }
  }

  function dropShip(e) {
    _clearBoardValidity();

    if (_currShipArea.length && _shipAreas.length < 5) {
      e.target.remove();
      _shipAreas.push(_currShipArea);
      _currShipArea = [];
      _updateBoard();
    }
  }

  function randomizeBoard() {
    dom.shipsContr.innerHTML = null;
    _board = new GameBoard();
    _shipAreas = [..._board.ships].map((shipObj) => [...shipObj.coords]);
    _updateBoard();
  }

  function _updateBoard() {
    _clearBoard();
    _shipAreas
      .flatMap((arr) => arr)
      .forEach((square) =>
        document
          .querySelector(`[data-square-index='${square}']`)
          .classList.add("ship-pos")
      );
  }

  function exitModal() {
    if (_shipAreas.length === 5) {
      dom.customizingDialog.close();
      pubSub.publish(events.playerBoardCustomized, _shipAreas);
    }
  }

  return {
    setDraggingLength,
    switchOrientation,
    isOrientationVertical,
    revealSquaresValidity,
    dropShip,
    randomizeBoard,
    exitModal,
  };
})();

const gameOverModal = (() => {
  function showStatus(txt) {
    dom.gameOverTxt.textContent = txt;
    dom.gameOverDialog.showModal();
  }

  function exitModal() {
    dom.gameOverDialog.close();
  }

  return { showStatus, exitModal };
})();

const gameBoards = (() => {
  function initBoards() {
    pubSub.subscribe(events.initBoard, _updateBoards);
    pubSub.subscribe(events.boardsChanged, _updateBoards);
  }

  function _updateBoards({ board1, board2 }) {
    board1.missedAttacks.forEach(
      _getIteratorCallback("missed", dom.playerBoard1)
    );
    [...board1.ships]
      .flatMap((shipObj) => [...shipObj.coords])
      .forEach(_getIteratorCallback("ship-pos", dom.playerBoard1));
    [...board1.ships]
      .flatMap((shipObj) => [...shipObj.hitCoords])
      .forEach(_getIteratorCallback("hit", dom.playerBoard1));
    if (board1.lastAttacked) {
      dom.playerBoard1
        .querySelectorAll(".last-hit")
        .forEach((node) => node.classList.remove("last-hit"));

      dom.playerBoard1
        .querySelector(`[data-square-index="${board1.lastAttacked}"]`)
        .classList.add("last-hit");
    }

    board2.missedAttacks.forEach(
      _getIteratorCallback("missed", dom.playerBoard2)
    );
    [...board2.ships]
      .flatMap((shipObj) => [...shipObj.hitCoords])
      .forEach(_getIteratorCallback("hit", dom.playerBoard2));
    if (board2.lastAttacked) {
      dom.playerBoard2
        .querySelectorAll(".last-hit")
        .forEach((node) => node.classList.remove("last-hit"));

      dom.playerBoard2
        .querySelector(`[data-square-index="${board2.lastAttacked}"]`)
        .classList.add("last-hit");
    }
  }

  // Callback generator
  function _getIteratorCallback(className, board) {
    return (square) =>
      board
        .querySelector(`[data-square-index='${square}']`)
        .classList.add(className);
  }

  return { initBoards };
})();

const display = (() => {
  function initPage() {
    pubSub.subscribe(events.gameOver, (winner) =>
      gameOverModal.showStatus(
        winner.isComputer
          ? "You Loose! Try Again."
          : "Congratulations! You Win."
      )
    );

    _clearBoards(dom.dialogBoard, dom.playerBoard1, dom.playerBoard2);

    // Draw boards
    const board = [];
    for (let x = 9; x >= 0; x--) {
      const arr = [];
      for (let y = 9; y >= 0; y--) {
        arr.push(`${y},${x}`);
      }
      board.push(...arr.reverse());
    }
    board.forEach((square) => {
      const node = document.createElement("span");
      node.setAttribute("data-square-index", square);
      node.className = "squares";

      dom.dialogBoard.appendChild(node.cloneNode());
      dom.playerBoard1.appendChild(node.cloneNode());
      dom.playerBoard2.appendChild(node);
    });

    dom.customizingDialog.showModal();
    gameBoards.initBoards();
    _addEvents();
  }

  function _clearBoards(...boards) {
    boards.forEach((b) => (b.innerHTML = null));
  }

  function _addEvents() {
    dom.shipsContr.addEventListener("dragstart", (e) =>
      customizingModal.setDraggingLength(e.target.children.length)
    );
    dom.dialogBoard.addEventListener(
      "dragover",
      customizingModal.revealSquaresValidity
    );
    dom.shipsContr.addEventListener("dragend", customizingModal.dropShip);

    dom.customizeBtns.addEventListener("click", (e) => {
      switch (e.target.getAttribute("data-action")) {
        case "rotate":
          return customizingModal.switchOrientation();
        case "random":
          return customizingModal.randomizeBoard();
        case "start":
          return customizingModal.exitModal();
      }
    });

    dom.closeBtn.addEventListener("click", gameOverModal.exitModal);
    dom.restartBtn.addEventListener("click", () => location.reload());

    dom.playerBoard2.addEventListener("click", (e) => {
      const square = e.target.getAttribute("data-square-index");
      if (square && e.target.className === "squares")
        pubSub.publish(events.userPlayed, square);
    });
  }

  function writeMessage(msg, delay = null) {
    dom.msg.textContent = msg;
    if (delay !== null) setTimeout(_removeMessage, delay * 1000);
  }

  function _removeMessage() {
    dom.msg.textContent = "";
  }

  return { initPage, writeMessage };
})();

export default display;
