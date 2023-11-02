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
      const validitySquares = dom.dialogBoard.querySelectorAll("span.valid, span.invalid");
      validitySquares.forEach(square => {
        square.classList.remove("valid");
        square.classList.remove("invalid");
      })
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
      
      if (_currShipArea.length && (_shipAreas.length < 5)) {
        e.target.remove();
        _shipAreas.push(_currShipArea);
        _currShipArea = [];
        _updateBoard();
      }
    }
  
    function randomizeBoard() {
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
        dom.dialog.close();
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
      exitModal
    };
  })();

  export default customizingModal;