const main = document.querySelector(".main");

function doHeader() {
    let divContenedorHeader = document.createElement("div");

    divContenedorHeader.classList.add("contenedorHeader");

    main.appendChild(divContenedorHeader);
}

function doTable() {
    let divContenedorTable = document.createElement("div");

    divContenedorTable.classList.add("contenedorTable");

    main.appendChild(divContenedorTable);
}

export { doHeader, doTable };
