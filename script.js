//Variable que mantiene el estado del menú
let menuVisible = false;

//Función que oculta o muestra el menú
function mostrarOcultar(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

//Función para ocultar el menú cuando se selecciona una opción listo para montar
function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}