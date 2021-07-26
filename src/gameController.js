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
    1: { imagen: distancia, frase: "Esto es bueno" },
    2: { imagen: manos, frase: "Manitos" },
    3: { imagen: mascarilla, frase: "Usar mascarilla" },
    4: { imagen: saludable, frase: "Comer saludable" },
};

let badPractices = {
    1: { imagen: aglomeracion, frase: "Esto es malo" },
    2: { imagen: virus, frase: "Esto es re malo" },
    3: { imagen: sinMacarilla, frase: "Es malo" },
    4: { imagen: chatarra, frase: "Esto es bueno" },
};

function getWinner() {
    const itemOne = document.querySelector(".divItemOne"),
        itemTwo = document.querySelector(".divItemTwo");

    let imgOne = document.createElement("img"),
        imgTwo = document.createElement("img");

    imgOne.alt = "Esta es una buena imagen";
    imgOne.src = goodPractices[1].imagen;
    itemOne.appendChild(imgOne);

    imgTwo.alt = "Esta es una mala imagen";
    imgTwo.src = badPractices[1].imagen;
    itemTwo.appendChild(imgTwo);

    let cont = 2;

    itemOne.addEventListener("click", () => {
        if (cont == 2) {
            setItemOne(imgOne, 2);
            setItemTwo(imgTwo, 2);
        } else if (cont == 3) {
            setItemOne(imgOne, 3);
            setItemTwo(imgTwo, 3);
        } else if (cont == 4) {
            setItemOne(imgOne, 4);
            setItemTwo(imgTwo, 4);
        } else {
            alert("AUXILIOOOOOOO, NO ME MATssssssES");
        }

        cont += 1;
    });

    itemTwo.addEventListener("click", () => {
        if (cont == 2) {
            setItemOne(imgOne, 2);
            setItemTwo(imgTwo, 2);
        } else if (cont == 3) {
            setItemOne(imgOne, 3);
            setItemTwo(imgTwo, 3);
        } else if (cont == 4) {
            setItemOne(imgOne, 4);
            setItemTwo(imgTwo, 4);
        } else {
            alert("AUXILIOOOOOOO, NO ME MATssssssES");
        }

        cont += 1;
    });
}

function setItemOne(image, number) {
    image.alt = "Esta es una buena imagen";
    image.src = goodPractices[number].imagen;
}

function setItemTwo(image, number) {
    image.alt = "Esta es una mala imagen";
    image.src = badPractices[number].imagen;
}

function setElements() {
    doTable();
    getWinner();
}

export { setElements };
