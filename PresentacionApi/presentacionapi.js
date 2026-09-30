const http = require("node:http");
const puerto = 3000;

var numero_dispositiva = 5;

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
            request.on("data", info => {
                const objeto_dispoativia = JSON.parse(info)
                numero_dispositiva += objeto_dispoativia.cambio;

                const objeto_respuesta = {
                    mensaje: "Cambiaste a la siguiente diapositiva"
                }

                response.statusCode = 200;
                response.setHeader("Content-Type", "application/json");
                response.end(JSON.stringify(objeto_respuesta));
            });
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