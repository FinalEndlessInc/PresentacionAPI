const input_diapositiva = document.querySelector("input");

fetch("http://localhost:3000/ConsultarDiapositiva").then(recurso => recurso.json()).then( respuesta => {
    input_diapositiva.value = respuesta.numero;
});

function SiguienteDiapositiva(){
   
    const objeto_diapositiva = {
        cambio: 1
    }
   
    fetch("http://localhost:3000/SiguienteDiapositiva", {
        method: "PUT",
        body: JSON.stringify(objeto_diapositiva)
    }).then(recurso => recurso.json()).then( respuesta => {
        input_diapositiva.value = respuesta.numero;
    });
}

function AnteriorDiapositiva(){
    const objeto_diapositiva = {
        cambio: -1
    }
   
    fetch("http://localhost:3000/SiguienteDiapositiva", {
        method: "PUT",
        body: JSON.stringify(objeto_diapositiva)
    }).then(recurso => recurso.json()).then( respuesta => {
        input_diapositiva.value = respuesta.numero;
    });
}

function PrimerDiapositiva(){
    const objeto_diapositiva = {
        numero: 1
    }

    fetch("http://localhost:3000/IrADiapositiva", {
        method: "PUT",
        body: JSON.stringify(objeto_diapositiva)
    }).then(recurso => recurso.json()).then(respuesta => {
        input_diapositiva.value = respuesta.numero;
    });
}

function UltimaDiapositiva(){
    const objeto_diapositiva = {
        numero: 12
    }

    fetch("http://localhost:3000/IrADiapositiva", {
        method: "PUT",
        body: JSON.stringify(objeto_diapositiva)
    }).then(recurso => recurso.json()).then(respuesta => {
        input_diapositiva.value = respuesta.numero;
    });
}

function IrADiapositiva(){
    const objeto_diapositiva = {
        numero: input_diapositiva.value
    }

    fetch("http://localhost:3000/IrADiapositiva", {
        method: "PUT",
        body: JSON.stringify(objeto_diapositiva)
    }).then(recurso => recurso.json()).then(respuesta => {
        input_diapositiva.value = respuesta.numero;
    });
}

function SwitchPantalla(){

    const objeto_prendido = {
        encendido: false
    }

    fetch("http://localhost:3000/SwitchPresentacion", {
        method: "PUT",
        body: JSON.stringify(objeto_prendido)
    });
}