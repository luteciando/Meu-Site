document.addEventListener("DOMContentLoaded", function () {
    alert("Esse é meu inferno, sinta-se à vontade!");

    const menuItems = document.querySelectorAll("nav li");
    const sections = document.querySelectorAll(".conteudo");

    // Esconde todos os sections
    function esconderTudo() {
        sections.forEach(sec => sec.style.display = "none");
    }

    esconderTudo(); // começamos escondendo

    // Quando passar o mouse no item do menu → mostra section correspondente
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            const id = this.getAttribute("data-section");
            esconderTudo();
            document.getElementById(id).style.display = "block";
        });
    });
});
