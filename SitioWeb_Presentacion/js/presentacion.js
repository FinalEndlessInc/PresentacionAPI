var numero_diapositiva = 1;

const imagen = document.querySelector("img");


fetch("http://localhost:3000/ConsultarDiapositiva").then(recurso => recurso.json()).then( respuesta => {
    imagen.src = "img/presentacion/Diapositiva"+ respuesta.numero +".png";
})

/*imagen.addEventListener("click", () => {
    numero_diapositiva++;
    imagen.src = "img/presentacion/Diapositiva"+ numero_diapositiva+".png";
});*/