function SiguienteDiapositiva(){
   
    const objeto_diapositiva = {
        cambio: 1
    }
   
    fetch("http://localhost:3000/SiguienteDiapositiva", {
        method: "PUT",
        body: JSON.stringify(objeto_diapositiva)
    }).then(recurso => recurso.json()).then( respuesta => {
        console.log(respuesta);
    });
}