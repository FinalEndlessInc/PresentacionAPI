const http = require("node:http");
const puerto = 3000;

var numero_dispositiva = 1;
var ultima_diapositiva = 12;

const server = http.createServer((request, response) => {

    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

    switch(request.method){
        case "GET":
            switch(request.url){
                case "/ConsultarDiapositiva":
                    const objeto_respuesta = {
                        "numero": numero_dispositiva
                    }
                    response.statusCode = 200;
                    response.setHeader("Content-Type", "application/json");
                    response.end(JSON.stringify(objeto_respuesta));
                break;
            }
        break;

        case "POST":
        break;

        case "PUT":
            switch(request.url){
                case "/SiguienteDiapositiva":
                    request.on("data", info => {
                    const objeto_dispoativia = JSON.parse(info);
                    numero_dispositiva += objeto_dispoativia.cambio;

                    if(numero_dispositiva < 1){
                        numero_dispositiva = 1
                    }
                    if(numero_dispositiva > ultima_diapositiva){
                        numero_dispositiva = ultima_diapositiva
                    }

                    const objeto_respuesta = {
                        mensaje: "Cambiaste a la siguiente diapositiva",
                        numero: numero_dispositiva
                    }

                    response.statusCode = 200;
                    response.setHeader("Content-Type", "application/json");
                    response.end(JSON.stringify(objeto_respuesta));
                });
                break;

                case "/IrADiapositiva":
                    request.on("data", info => {
                        const objeto_diapositiva = JSON.parse(info);
                        numero_dispositiva = objeto_diapositiva.numero;

                        if(numero_dispositiva < 1){
                        numero_dispositiva = 1
                        }
                        if(numero_dispositiva > ultima_diapositiva){
                            numero_dispositiva = ultima_diapositiva
                        }

                        const objeto_respuesta = {
                            mensaje: "Nos fuimos a la diapositiva" + numero_dispositiva,
                            numero: numero_dispositiva
                        }

                        response.statusCode = 200;
                        response.setHeader("Content-Type", "application/json");
                        response.end(JSON.stringify(objeto_respuesta));
                    });
                break;

                case "/SwitchPresentacion":
                    request.on("data", info => {

                    });
                break;
            }
 
        break;

        case "OPTIONS":
            response.writeHead(204);
            response.end();
        break;
    }
    
});

server.listen(puerto, () =>{
    console.log("Servidor a la escucha en http://localhost:" + puerto);
});