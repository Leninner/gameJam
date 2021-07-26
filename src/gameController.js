const main = document.querySelector(".main");

function doTable() {
    let divContenedorTable = document.createElement("div");

    divContenedorTable.classList.add("contenedorTable");

    main.appendChild(divContenedorTable);
}

export { doTable };
