import distancia from "./images/distancia.jpg";
import aglomeracion from "./images/aglomeraciones.jpg";
import chatarra from "./images/chatarraFood.jpg";
import manos from "./images/manos.jpg";
import mascarilla from "./images/mascarilla.jpg";
import saludable from "./images/saludableFood.jpg";
import sinMacarilla from "./images/sinMascarilla.jpg";
import virus from "./images/virus.jpg";
import { doTable } from "./tableMain.js";

let goodPractices = {
    1: { imagen: distancia, frase: "Mantener Distancia" },
    2: { imagen: manos, frase: "Lavarse las Manos" },
    3: { imagen: mascarilla, frase: "Usar mascarilla" },
    4: { imagen: saludable, frase: "Comer saludable" },
};

let badPractices = {
    1: { imagen: aglomeracion, frase: "Estar todos unidos" },
    2: { imagen: virus, frase: "Covid - 19" },
    3: { imagen: sinMacarilla, frase: "No usar mascarilla" },
    4: { imagen: chatarra, frase: "Comida Chatarra" },
};

//TODO: Hacer titulos de cada imagen para que el niño haga su elección

function getWinner() {
    const itemOne = document.querySelector(".divItemOne"),
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

    eventosEscuchaItemOne(
        itemOne,
        cont,
        imgOne,
        titleImgOne,
        imgTwo,
        titleImgTwo
    );
    eventosEscuchaItemTwo(
        itemTwo,
        cont,
        imgOne,
        titleImgOne,
        imgTwo,
        titleImgTwo
    );
}

function eventosEscuchaItemOne(
    item,
    cont,
    imagenUno,
    titleUno,
    imagenDos,
    titleDos
) {
    item.addEventListener("click", () => {
        if (cont == 2) {
            setItemOne(imagenUno, 2, titleUno);
            setItemTwo(imagenDos, 2, titleDos);
        } else if (cont == 3) {
            setItemOne(imagenUno, 3, titleUno);
            setItemTwo(imagenDos, 3, titleDos);
        } else if (cont == 4) {
            setItemOne(imagenUno, 4, titleUno);
            setItemTwo(imagenDos, 4, titleDos);
        } else {
            setItemOne(imagenUno, 1, titleUno);
            setItemTwo(imagenDos, 1, titleDos);
            cont = 1;
        }

        cont += 1;
    });
}

function eventosEscuchaItemTwo(
    item,
    cont,
    imagenUno,
    titleUno,
    imagenDos,
    titleDos
) {
    item.addEventListener("click", () => {
        if (cont == 2) {
            setItemOne(imagenUno, 2, titleUno);
            setItemTwo(imagenDos, 2, titleDos);
        } else if (cont == 3) {
            setItemOne(imagenUno, 3, titleUno);
            setItemTwo(imagenDos, 3, titleDos);
        } else if (cont == 4) {
            setItemOne(imagenUno, 4, titleUno);
            setItemTwo(imagenDos, 4, titleDos);
        } else {
            setItemOne(imagenUno, 1, titleUno);
            setItemTwo(imagenDos, 1, titleDos);
            cont = 1;
        }

        cont += 1;
    });
}

function setItemOne(image, number, title) {
    image.alt = "Esta es una buena imagen";
    image.src = goodPractices[number].imagen;
    title.textContent = goodPractices[number].frase;
}

function setItemTwo(image, number, title) {
    image.alt = "Esta es una mala imagen";
    image.src = badPractices[number].imagen;
    title.textContent = badPractices[number].frase;
}

function startGame(btn, player, main) {
    btn.addEventListener("click", () => {
        main.removeChild(main.childNodes[1]);
        console.log(player);
    });
}

function setElements() {
    doTable();
    getWinner();
}

export { setElements, startGame };
