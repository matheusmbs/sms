var http = require('http');


var server = http.createServer(function(req, res){
    if(req.url == "/sms"){
        res.end("teste");
    }else{
        res.end("pagina não encontrada");
    }

});
server.listen(3000);

console.log("servidor iniciado");