const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const conexao = require('./infra/conexaoDB')
const tabelas = require('./infra/tabelas')

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }
    else{

        console.log('conectado com banco')

        tabelas.init(conexao)

        const app = express();

        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())

        consign()
            .include('controllers')
            .into(app)


        app.listen(3000, () => console.log(`Servidor ouvindo na porta 3000`));

    }
    
})