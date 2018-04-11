var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

var cors = require('cors');
app.use(cors());



var sms = [
    {id: 1, descricao: 'SMS PARA FULANO', contaFaturamento: 'VONEX - TDM', tipo: 'FLASH', titulo: 'SMS PARA CENTRAL', dataCadastro:'10/03/2018 10:00:00', status:'Enviado com Sucesso', nomeArquivoRetorno:'https://dl-web.dropbox.com/get/PI%202018_01/PI/Aut%C3%B4mato%20Analise%20L%C3%A9xica.docx?_download_id=9086395237738337953081829949739633164728261661099913291355992517&_notify_domain=www.dropbox.com&_subject_uid=639663783&dl=1&w=AABuwXYXqRuD4Dwdt_VXzJT1PHhCdDHi8niwnbSkfzLZpg'},
    {id: 2, descricao: 'SMS PARA FULANO', contaFaturamento: 'VONEX - TDM', tipo: 'FLASH', titulo: 'SMS PARA CENTRAL', dataCadastro:'10/03/2018 10:00:00', status:'Enviado com Sucesso', nomeArquivoRetorno:'https://dl-web.dropbox.com/get/PI%202018_01/PI/Aut%C3%B4mato%20Analise%20L%C3%A9xica.docx?_download_id=9086395237738337953081829949739633164728261661099913291355992517&_notify_domain=www.dropbox.com&_subject_uid=639663783&dl=1&w=AABuwXYXqRuD4Dwdt_VXzJT1PHhCdDHi8niwnbSkfzLZpg'},
    {id: 3, descricao: 'SMS PARA FULANO', contaFaturamento: 'VONEX - TDM', tipo: 'FLASH', titulo: 'SMS PARA CENTRAL', dataCadastro:'10/03/2018 10:00:00', status:'Enviado com Sucesso', nomeArquivoRetorno:'https://dl-web.dropbox.com/get/PI%202018_01/PI/Aut%C3%B4mato%20Analise%20L%C3%A9xica.docx?_download_id=9086395237738337953081829949739633164728261661099913291355992517&_notify_domain=www.dropbox.com&_subject_uid=639663783&dl=1&w=AABuwXYXqRuD4Dwdt_VXzJT1PHhCdDHi8niwnbSkfzLZpg'},
    {id: 4, descricao: 'SMS PARA FULANO', contaFaturamento: 'VONEX - TDM', tipo: 'FLASH', titulo: 'SMS PARA CENTRAL', dataCadastro:'10/03/2018 10:00:00', status:'Processado com Erro', nomeArquivoRetorno:'https://dl-web.dropbox.com/get/PI%202018_01/PI/Aut%C3%B4mato%20Analise%20L%C3%A9xica.docx?_download_id=9086395237738337953081829949739633164728261661099913291355992517&_notify_domain=www.dropbox.com&_subject_uid=639663783&dl=1&w=AABuwXYXqRuD4Dwdt_VXzJT1PHhCdDHi8niwnbSkfzLZpg'},
    {id: 5, descricao: 'SMS PARA FULANO', contaFaturamento: 'VONEX - TDM', tipo: 'FLASH', titulo: 'SMS PARA CENTRAL', dataCadastro:'10/03/2018 10:00:00', status:'Enviado com Sucesso', nomeArquivoRetorno:'https://dl-web.dropbox.com/get/PI%202018_01/PI/Aut%C3%B4mato%20Analise%20L%C3%A9xica.docx?_download_id=9086395237738337953081829949739633164728261661099913291355992517&_notify_domain=www.dropbox.com&_subject_uid=639663783&dl=1&w=AABuwXYXqRuD4Dwdt_VXzJT1PHhCdDHi8niwnbSkfzLZpg'},
    {id: 6, descricao: 'SMS PARA FULANO', contaFaturamento: 'VONEX - TDM', tipo: 'FLASH', titulo: 'SMS PARA CENTRAL', dataCadastro:'10/03/2018 10:00:00', status:'Enviado com Sucesso', nomeArquivoRetorno:'https://dl-web.dropbox.com/get/PI%202018_01/PI/Aut%C3%B4mato%20Analise%20L%C3%A9xica.docx?_download_id=9086395237738337953081829949739633164728261661099913291355992517&_notify_domain=www.dropbox.com&_subject_uid=639663783&dl=1&w=AABuwXYXqRuD4Dwdt_VXzJT1PHhCdDHi8niwnbSkfzLZpg'},
    {id: 7, descricao: 'SMS PARA FULANO', contaFaturamento: 'VONEX - TDM', tipo: 'FLASH', titulo: 'SMS PARA CENTRAL', dataCadastro:'10/03/2018 10:00:00', status:'Enviado com Sucesso', nomeArquivoRetorno:'https://dl-web.dropbox.com/get/PI%202018_01/PI/Aut%C3%B4mato%20Analise%20L%C3%A9xica.docx?_download_id=9086395237738337953081829949739633164728261661099913291355992517&_notify_domain=www.dropbox.com&_subject_uid=639663783&dl=1&w=AABuwXYXqRuD4Dwdt_VXzJT1PHhCdDHi8niwnbSkfzLZpg'},
    {id: 8, descricao: 'SMS PARA FULANO', contaFaturamento: 'VONEX - TDM', tipo: 'FLASH', titulo: 'SMS PARA CENTRAL', dataCadastro:'10/03/2018 10:00:00', status:'Enviado com Sucesso', nomeArquivoRetorno:'https://dl-web.dropbox.com/get/PI%202018_01/PI/Aut%C3%B4mato%20Analise%20L%C3%A9xica.docx?_download_id=9086395237738337953081829949739633164728261661099913291355992517&_notify_domain=www.dropbox.com&_subject_uid=639663783&dl=1&w=AABuwXYXqRuD4Dwdt_VXzJT1PHhCdDHi8niwnbSkfzLZpg'},
    {id: 9, descricao: 'SMS PARA FULANO', contaFaturamento: 'VONEX - TDM', tipo: 'FLASH', titulo: 'SMS PARA CENTRAL', dataCadastro:'10/03/2018 10:00:00', status:'Enviado com Sucesso', nomeArquivoRetorno:'https://dl-web.dropbox.com/get/PI%202018_01/PI/Aut%C3%B4mato%20Analise%20L%C3%A9xica.docx?_download_id=9086395237738337953081829949739633164728261661099913291355992517&_notify_domain=www.dropbox.com&_subject_uid=639663783&dl=1&w=AABuwXYXqRuD4Dwdt_VXzJT1PHhCdDHi8niwnbSkfzLZpg'},
    {id: 10, descricao: 'SMS PARA FULANO', contaFaturamento: 'VONEX - TDM', tipo: 'FLASH', titulo: 'SMS PARA CENTRAL', dataCadastro:'10/03/2018 10:00:00', status:'Enviado com Sucesso', nomeArquivoRetorno:'https://dl-web.dropbox.com/get/PI%202018_01/PI/Aut%C3%B4mato%20Analise%20L%C3%A9xica.docx?_download_id=9086395237738337953081829949739633164728261661099913291355992517&_notify_domain=www.dropbox.com&_subject_uid=639663783&dl=1&w=AABuwXYXqRuD4Dwdt_VXzJT1PHhCdDHi8niwnbSkfzLZpg'},
    {id: 11, descricao: 'SMS PARA FULANO', contaFaturamento: 'VONEX - TDM', tipo: 'FLASH', titulo: 'SMS PARA CENTRAL', dataCadastro:'10/03/2018 10:00:00', status:'Enviado com Sucesso', nomeArquivoRetorno:'https://dl-web.dropbox.com/get/PI%202018_01/PI/Aut%C3%B4mato%20Analise%20L%C3%A9xica.docx?_download_id=9086395237738337953081829949739633164728261661099913291355992517&_notify_domain=www.dropbox.com&_subject_uid=639663783&dl=1&w=AABuwXYXqRuD4Dwdt_VXzJT1PHhCdDHi8niwnbSkfzLZpg'},
    {id: 12, descricao: 'SMS PARA FULANO', contaFaturamento: 'VONEX - TDM', tipo: 'FLASH', titulo: 'SMS PARA CENTRAL', dataCadastro:'10/03/2018 10:00:00', status:'Enviado com Sucesso', nomeArquivoRetorno:'https://dl-web.dropbox.com/get/PI%202018_01/PI/Aut%C3%B4mato%20Analise%20L%C3%A9xica.docx?_download_id=9086395237738337953081829949739633164728261661099913291355992517&_notify_domain=www.dropbox.com&_subject_uid=639663783&dl=1&w=AABuwXYXqRuD4Dwdt_VXzJT1PHhCdDHi8niwnbSkfzLZpg'},
    {id: 13, descricao: 'SMS PARA FULANO', contaFaturamento: 'VONEX - TDM', tipo: 'FLASH', titulo: 'SMS PARA CENTRAL', dataCadastro:'10/03/2018 10:00:00', status:'Enviado com Sucesso', nomeArquivoRetorno:'https://dl-web.dropbox.com/get/PI%202018_01/PI/Aut%C3%B4mato%20Analise%20L%C3%A9xica.docx?_download_id=9086395237738337953081829949739633164728261661099913291355992517&_notify_domain=www.dropbox.com&_subject_uid=639663783&dl=1&w=AABuwXYXqRuD4Dwdt_VXzJT1PHhCdDHi8niwnbSkfzLZpg'},
    {id: 14, descricao: 'SMS PARA FULANO', contaFaturamento: 'VONEX - TDM', tipo: 'FLASH', titulo: 'SMS PARA CENTRAL', dataCadastro:'10/03/2018 10:00:00', status:'Processado com Erro', nomeArquivoRetorno:'https://dl-web.dropbox.com/get/PI%202018_01/PI/Aut%C3%B4mato%20Analise%20L%C3%A9xica.docx?_download_id=9086395237738337953081829949739633164728261661099913291355992517&_notify_domain=www.dropbox.com&_subject_uid=639663783&dl=1&w=AABuwXYXqRuD4Dwdt_VXzJT1PHhCdDHi8niwnbSkfzLZpg'},
    {id: 15, descricao: 'SMS PARA FULANO', contaFaturamento: 'VONEX - TDM', tipo: 'FLASH', titulo: 'SMS PARA CENTRAL', dataCadastro:'10/03/2018 10:00:00', status:'Enviado com Sucesso', nomeArquivoRetorno:'https://dl-web.dropbox.com/get/PI%202018_01/PI/Aut%C3%B4mato%20Analise%20L%C3%A9xica.docx?_download_id=9086395237738337953081829949739633164728261661099913291355992517&_notify_domain=www.dropbox.com&_subject_uid=639663783&dl=1&w=AABuwXYXqRuD4Dwdt_VXzJT1PHhCdDHi8niwnbSkfzLZpg'},
    {id: 16, descricao: 'SMS PARA FULANO', contaFaturamento: 'VONEX - TDM', tipo: 'FLASH', titulo: 'SMS PARA CENTRAL', dataCadastro:'10/03/2018 10:00:00', status:'Enviado com Sucesso', nomeArquivoRetorno:'https://dl-web.dropbox.com/get/PI%202018_01/PI/Aut%C3%B4mato%20Analise%20L%C3%A9xica.docx?_download_id=9086395237738337953081829949739633164728261661099913291355992517&_notify_domain=www.dropbox.com&_subject_uid=639663783&dl=1&w=AABuwXYXqRuD4Dwdt_VXzJT1PHhCdDHi8niwnbSkfzLZpg'}
];


function limite(limite){
    var i;
    var smsLim = [];
    for (i = 0; i < limite; i++) {
        smsLim.push(sms[i]);
    }
    return smsLim;
}

app.post('/sms', function(req, res){
    if(req.body.limite <= sms.length){
        var smsLim = limite(req.body.limite);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(smsLim));
    }else{
        var smsLim = limite(sms.length);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(smsLim));
    }
});

app.listen(3000,  function(){
    console.log("servidor rodando");
});