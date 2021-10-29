const moment = require('moment')
const conexao = require('../infra/conexaoDB')

class Voo{
    adiciona(voo, res){
        const data = moment(voo.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const vooDatado = {...voo, data}
        const sql = 'INSERT INTO Voos SET ?'

        conexao.query(sql, vooDatado, (erro, resultados) =>{
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(201).json(resultados)
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM Voos'

        conexao.query(sql, (erro, resultados) =>{
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultados)
            }
        })
    }
}

module.exports = new Voo