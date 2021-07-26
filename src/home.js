const main = document.querySelector(".main");

function doHeader() {
    let divContenedorHeader = document.createElement("div"),
        titleHeader = document.createElement("h1"),
        menuHeader = document.createElement("ul"),
        itemOne = document.createElement("li"),
        itemTwo = document.createElement("li"),
        itemThree = document.createElement("li"),
        reOne = document.createElement("a"),
        reTwo = document.createElement("a"),
        reThree = document.createElement("a");

    reOne.target = "_blank";
    reOne.href = "#";
    reTwo.target = "_blank";
    reTwo.href = "https://www.linkedin.com/in/lenin-mazabanda-1370b41b2/";
    reThree.target = "_blank";
    reThree.href = "https://itch.io/jam/top-jam-1";

    titleHeader.innerHTML = "Game Jam";
    reOne.textContent = "Repo";
    reTwo.textContent = "LinkedIn";
    reThree.textContent = "How to play?";

    divContenedorHeader.classList.add("contenedorHeader");

    itemOne.appendChild(reOne);
    itemTwo.appendChild(reTwo);
    itemThree.appendChild(reThree);
    menuHeader.append(itemOne, itemTwo, itemThree);
    divContenedorHeader.append(titleHeader, menuHeader);
    main.appendChild(divContenedorHeader);
}

function doTable() {
    let divContenedorTable = document.createElement("div");

    divContenedorTable.classList.add("contenedorTable");

    main.appendChild(divContenedorTable);
}

function doFooter() {
    let divContenedorFooter = document.createElement("div");

    divContenedorFooter.classList.add("contenedorFooter");

    main.appendChild(divContenedorFooter);
}

export { doHeader, doTable, doFooter };
