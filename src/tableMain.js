import { setElements } from "./gameController.js";
import { doResumeBefore } from "./popup.js";

const main = document.querySelector(".main");

function doTable() {
    let divContenedorTable = document.createElement("div"),
        itemOne = document.createElement("div"),
        itemTwo = document.createElement("div");

    divContenedorTable.classList.add("contenedorTable");
    itemOne.classList.add("divItemOne", "game");
    itemTwo.classList.add("divItemTwo", "game");

    divContenedorTable.append(itemOne, itemTwo);
    main.appendChild(divContenedorTable);
}

function createPlayer(user) {
    this.user = user;
    this.health = 1000;
}

function addPlayer(btn, user, overlay) {
    btn.addEventListener("click", () => {
        let player = new createPlayer(user.value);
        overlay.removeChild(overlay.childNodes[0]);
        doResumeBefore(player.user, player.health, overlay);
        setElements(player);
    });
    document.addEventListener("keydown", (e) => {
        if (e.keyCode == 13) {
            let player = new createPlayer(user.value);
            overlay.removeChild(overlay.childNodes[0]);
            doResumeBefore(player.user, player.health, overlay, player);
            setElements(player);
        }
    });
}

export { doTable, createPlayer, addPlayer };
