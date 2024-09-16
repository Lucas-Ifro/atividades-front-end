const conteudoMenu = document.getElementById("conteudoMenu");
const menu = document.getElementById("menu");

let isOpen = false;

conteudoMenu.addEventListener("click", () => {
    if (!isOpen) {
        isOpen = true;
        menu.style.width = "15vw";
        conteudoMenu.textContent = "Fechar Menu <<";
        conteudoMenu.style.justifyContent = "center";
        conteudoMenu.style.alignItems = "center";
        conteudoMenu.style.textAlign = "center";
        conteudoMenu.style.paddingRight = "20px";
    } else {
        isOpen = false;
        menu.style.width = "4vw";
        conteudoMenu.textContent = ">>";
        conteudoMenu.style.justifyContent = "center";
        conteudoMenu.style.textAlign = "center";
    }
});