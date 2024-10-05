function exibeMenuMobile(){
    document.getElementById("mobile-opcoes").style.display = "flex";
    document.getElementById("Abrir").style.display = "none"
    document.getElementById("Fechar").style.display = "inline-block"
    document.getElementById("navegacao").style.position = "fixed"
    // document.getElementById("mobile-titulo").style.display = "none" ------ Não sei se era intencional apagar o Titulo da parte da navegação, ccaso seja basta dedscomentar essas linhas.
}

function fechaMenuMobile(){
    document.getElementById("mobile-opcoes").style.display = "none";
    document.getElementById("Fechar").style.display = "none"
    document.getElementById("Abrir").style.display = "inline-block"
    document.getElementById("navegacao").style.position = "absolute"
    // document.getElementById("mobile-titulo").style.display = "flex" 
}

