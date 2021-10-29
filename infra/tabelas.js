class Tabelas{
    init(conexao){
        this.conexao = conexao

        this.adicionarVoo()
    }
    
    adicionarVoo(){
        const sql = 'CREATE TABLE IF NOT EXISTS Voos (id int NOT NULL AUTO_INCREMENT, cidade_partida varchar(20) NOT NULL, cidade_destino varchar(20) NOT NULL, data datetime NOT NULL, companhia varchar(20) NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }
        })
    }
}

module.exports = new Tabelas