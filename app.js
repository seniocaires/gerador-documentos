const express = require('express')
const gerador = require("./gerador");


const app = express()
const port = 3000

app.get('/', (req, res) => {

    if (req.query.tipo == "cpf") {
        return res.send(gerador.cpf(req.query))
    }

    res.status(400).send('Parâmetros inválidos. Informe o tipo de documento.')
})

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})