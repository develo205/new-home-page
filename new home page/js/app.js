const tocarMenu = document.getElementById("menu-burger");
const menuMostrar = document.getElementById("menu-div");
const botonBurger = document.getElementById("burger-img");
const botonClose = document.getElementById("boton-burger");

tocarMenu.addEventListener("click", () => {
    menuMostrar.classList.toggle("mostrar-menu");
    botonBurger.classList.toggle("sin-burger");
    botonClose.classList.toggle("cambia-icono");
});

// modifica la imagen del escritorio
const imagenEscritorio = document.getElementById("primera-imagen");