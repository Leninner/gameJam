import distancia from "./images/distancia.jpg";
import aglomeracion from "./images/aglomeraciones.jpg";
import chatarra from "./images/chatarraFood.jpg";
import manos from "./images/manos.jpg";
import mascarilla from "./images/mascarilla.jpg";
import saludable from "./images/saludableFood.jpg";
import sinMacarilla from "./images/sinMascarilla.jpg";
import virus from "./images/virus.jpg";
import { doTable } from "./tableMain.js";
import { doResumeAfter } from "./popup.js";

let goodPractices = {
    1: { imagen: distancia, frase: "Keep distance" },
    2: { imagen: manos, frase: "Handwashing" },
    3: { imagen: mascarilla, frase: "Wear mask" },
    4: { imagen: saludable, frase: "Eat healthy" },
};

let badPractices = {
    1: { imagen: aglomeracion, frase: "Be all united" },
    2: { imagen: virus, frase: "Covid - 19" },
    3: { imagen: sinMacarilla, frase: "Not wear mask" },
    4: { imagen: chatarra, frase: "Eat junk food" },
};

function getWinner(player) {
    let itemOne = document.querySelector(".divItemOne"),
        itemTwo = document.querySelector(".divItemTwo");

    let imgOne = document.createElement("img"),
        imgTwo = document.createElement("img"),
        divImgOne = document.createElement("div"),
        divImgTwo = document.createElement("div"),
        titleImgOne = document.createElement("h3"),
        titleImgTwo = document.createElement("h3");

    divImgOne.classList.add("gameBox");
    divImgTwo.classList.add("gameBox");

    titleImgOne.textContent = goodPractices[1].frase;
    titleImgTwo.textContent = badPractices[1].frase;

    imgOne.alt = "Esta es una buena imagen";
    imgOne.src = goodPractices[1].imagen;
    divImgOne.append(titleImgOne, imgOne);
    itemOne.appendChild(divImgOne);

    imgTwo.alt = "Esta es una mala imagen";
    imgTwo.src = badPractices[1].imagen;
    divImgTwo.append(titleImgTwo, imgTwo);
    itemTwo.appendChild(divImgTwo);

    let cont = 2;

    eventosEscuchaItems(
        itemOne,
        cont,
        imgOne,
        titleImgOne,
        imgTwo,
        titleImgTwo,
        player,
        itemTwo
    );
}

function eventosEscuchaItems(
    itemUno,
    cont,
    imagenUno,
    titleUno,
    imagenDos,
    titleDos,
    player,
    itemDos
) {
    itemUno.addEventListener("click", () => {
        if (cont == 2) {
            setItems(imagenUno, 2, titleUno, player, imagenDos, titleDos);
            cont++;
            console.log(player.health);
        } else if (cont == 3) {
            setItems(imagenUno, 3, titleUno, player, imagenDos, titleDos);
            cont++;
            console.log(player.health);
        } else if (cont == 4) {
            setItems(imagenUno, 4, titleUno, player, imagenDos, titleDos);
            cont++;
        } else {
            if (player.health > 0) {
                doResumeAfter(
                    "Congrats!",
                    "You Live One More Day",
                    "Excellent, your life will be long. Take care of your family",
                    player
                );
            } else {
                doResumeAfter(
                    "I´m Sorry",
                    "You Die",
                    "Lucky you are not dead in real life, take care of your family, please!",
                    player
                );
            }
        }
    });

    itemDos.addEventListener("click", () => {
        if (cont == 2) {
            setItems(imagenUno, 2, titleUno, player, imagenDos, titleDos, 600);
            cont++;
            console.log(player.health);
        } else if (cont == 3) {
            setItems(imagenUno, 3, titleUno, player, imagenDos, titleDos, 350);
            cont++;
            console.log(player.health);
        } else if (cont == 4) {
            setItems(imagenUno, 4, titleUno, player, imagenDos, titleDos, 150);
            cont++;
        } else {
            setItems(imagenUno, 1, titleUno, player, imagenDos, titleDos, 200);
            if (player.health < 0) {
                doResumeAfter(
                    "I´m sorry",
                    "You Die",
                    "Lucky you are not dead in real life, take care of your family, please!",
                    player
                );
            } else {
                doResumeAfter(
                    "Congrats!",
                    "You Live One More Day",
                    "Excellent, your life will be long. Take care of your family",
                    player
                );
            }
        }
    });
}

function setItems(
    imagenUno,
    number,
    titleUno,
    player,
    imagenDos,
    titleDos,
    damage = 0
) {
    imagenUno.alt = "Esta es una buena imagen";
    imagenUno.src = goodPractices[number].imagen;
    titleUno.textContent = goodPractices[number].frase;
    imagenDos.alt = "Esta es una mala imagen";
    imagenDos.src = badPractices[number].imagen;
    titleDos.textContent = badPractices[number].frase;
    player.health -= damage;
}

function startGame(btn, main) {
    btn.addEventListener("click", () => {
        main.removeChild(main.childNodes[1]);
    });
}

function setElements(player) {
    doTable();
    getWinner(player);
}

export { setElements, startGame };
