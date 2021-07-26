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

function setElements() {
    doTable();

    const contenedorTables = document.querySelector(".contenedorTable");
}

export { setElements };
