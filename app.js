const express = require('express')
const geradorCpf = require("./gerador/gerador-cpf");
const geradorCnpj = require("./gerador/gerador-cnpj");


const app = express()
const port = 3000

app.get('/', (req, res) => {

    if (req.query.tipo == "cpf") {
        return res.send(geradorCpf.gerar(req.query))
    } else if (req.query.tipo == "cnpj") {
        return res.send(geradorCnpj.gerar(req.query))
    }

    res.status(400).send('Parâmetros inválidos. Informe o tipo de documento.')
})

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})