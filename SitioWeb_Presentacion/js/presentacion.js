var numero_diapositiva = 1;

const imagen = document.querySelector("img");



setInterval(() => {
    fetch("http://localhost:3000/ConsultarDiapositiva").then(recurso => recurso.json()).then( respuesta => {
        imagen.src = "img/presentacion/Diapositiva"+ respuesta.numero +".png";
    });
},500);
// setTImeout()
/*repetir();
function repetir(){
    setTimeout(() => {
    alert("Adios");
    if(loopear){
        repetir();
    }
}, 3000);
}

var loopear = true;*/


// SetInterval
/*var ciclo = setInterval(()=>{
    alert("Hola muy buenas");
},3000);

console.log(ciclo);

function detenerse(){
    //loopear = false;
    clearInterval(ciclo);
}*/



/*imagen.addEventListener("click", () => {
    numero_diapositiva++;
    imagen.src = "img/presentacion/Diapositiva"+ numero_diapositiva+".png";
});*/