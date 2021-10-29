const Voo = require('../models/voos')

module.exports = app => {
    app.get('/flights', (req, res) => {
        Voo.lista(res)
    })

    app.post('/flights?departure=1995-12-17&from=RIO&to=MIAMI', (req, res) => {
        const novoVoo = req.body

        Voo.adiciona(novoVoo, res)
    })
}