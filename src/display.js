import dom from "./modules/dom";
import { GameBoard, validateAreas } from "./modules/battleship";
import pubSub, { events } from "./modules/pubsub";

const customizeModal = (() => {
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

  function _clearSquaresVaidity() {
    dom.dialogBoard.childNodes.forEach(
      (child) => (child.className = "squares")
    );
  }

  function revealSquaresValidity(e) {
    if (e.target === e.currentTarget) return;
    _clearSquaresVaidity();

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

    if (validateAreas([areasList])) {
      areasList.forEach((pos) =>
        document
          .querySelector(`[data-square-index='${pos}']`)
          .classList.add("valid")
      );
      _currShipArea = areasList;
    } else if (validateAreas([altAreasList])) {
      altAreasList.forEach((pos) =>
        document
          .querySelector(`[data-square-index='${pos}']`)
          .classList.add("valid")
      );
      _currShipArea = altAreasList;
    }
  }

  function dropShip() {
    // Remove dropped ship from container
    // Drop in board
    _shipAreas.push(_currShipArea);
    _updateBoard();
  }

  function randomizeBoard() {
    _board = new GameBoard();
    _shipAreas = [..._board.ships].map(shipObj => [...shipObj.coords])
    _updateBoard();
  }

  function _updateBoard() {
    _clearSquaresVaidity()
    _shipAreas.flatMap(arr => arr).forEach(square => document.querySelector(`[data-square-index='${square}']`).classList.add("ship-pos"));
  }

  return {
    setDraggingLength,
    switchOrientation,
    isOrientationVertical,
    revealSquaresValidity,
    dropShip,
    randomizeBoard
  };
})();

(() => {
  initPage();

  function initPage() {
    clearBoards(dom.dialogBoard, dom.playerBoard1, dom.playerBoard2);

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

    dom.dialog.showModal();

    addEvents();
  }

  function clearBoards(...boards) {
    boards.forEach((b) => (b.innerHTML = null));
  }

  function addEvents() {
    dom.shipsContr.addEventListener("dragstart", (e) => 
      customizeModal.setDraggingLength(e.target.children.length)
    );
    dom.dialogBoard.addEventListener("dragover", customizeModal.revealSquaresValidity);

    dom.shipsContr.addEventListener("dragend", customizeModal.dropShip);

    dom.customizeBtns.addEventListener("click", (e) => {
      switch (e.target.getAttribute("data-action")) {
        case "rotate":
          return customizeModal.switchOrientation();
        case "random":
          // Randomize boards
          return customizeModal.randomizeBoard();
        case "start":
          // validate board & start game
          return dom.dialog.close();
      }
    });
  }
})();
