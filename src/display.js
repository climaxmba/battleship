import dom from "./modules/dom";
import pubSub, { events } from "./modules/pubsub";

(() => {
  clearBoards(dom.dialogBoard, dom.playerBoard1, dom.playerBoard2);
  init();

  function init() {
    const board = [];
    for (let i = 9; i >= 0; i--) {
      const arr = [];
      for (let j = 9; j >= 0; j--) {
        arr.push(`${i},${j}`);
      }
      board.push(...arr.reverse());
    }

    board.forEach((square) => {
      const node = document.createElement("span");
      node.setAttribute("data-square-index", square);
      node.className = "squares";

      dom.dialogBoard.appendChild(node.cloneNode());
      dom.playerBoard1.appendChild(node.cloneNode());
      dom.playerBoard2.appendChild(node.cloneNode());
    });

    dom.dialog.showModal();
  }

  function clearBoards(...boards) {
    boards.forEach((b) => (b.innerHTML = null));
  }
})();
