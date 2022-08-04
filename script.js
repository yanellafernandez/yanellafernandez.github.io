//funcion que muestra el menu responsive 
//no lo hare
//funcion que me aplica el estilo a la opcion seleccionada en el menu y quita la previamente seleccionada
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    opciones[5].className = "";
   link.className = "seleccionado"
}
// detectos de scrolling para aplicar la animacion de las barras de habilidades
window.onscroll = function(){
     efectoHabilidades() 
    };
//funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("Python").classList.add("barra-progreso3");
        document.getElementById("Ps").classList.add("barra-progreso4");
    }

}