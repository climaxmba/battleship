import dom from "./modules/dom";
import customizingModal from "./modules/dialog";
import pubSub, { events } from "./modules/pubsub";

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
  }
})();
