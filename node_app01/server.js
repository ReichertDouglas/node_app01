const fs = require('fs')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

const readUsuarios = () => {
    const dados = fs.readFileSync('./usuarios.json')
    return JSON.parse(dados)
}

const writeUsuarios = (dados) => {
    fs.writeFileSync('./usuarios.json', JSON.stringify(dados, null, 2))
}

app.use(cors())

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("Servidor NODE JS + Express está rodando")
})

app.get('/usuarios', (req, res) => {
    const usuarios = readUsuarios()
    res.json(usuarios)
})

app.get('/usuarios/:id', (req, res) => {
    const usuarios = readUsuarios()
    const id = parseInt(req.params.id)
    const usuario = usuarios.find(u => u.id === id)
    if (usuario) {
        res.json(usuario)
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' })
    }
})

app.post('/usuarios', (req, res) => {
    const usuarios = readUsuarios()
    const novo_Usuario = {
        id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
        nome: req.body.nome
    }
    usuarios.push(novo_Usuario)
    writeUsuarios(usuarios)
    res.status(201).json(novo_Usuario)
})

app.delete('/usuarios/:id', (req, res) => {
    let usuarios = readUsuarios()
    const id = parseInt(req.params.id)
    usuarios = usuarios.filter(u => u.id !== id)
    writeUsuarios(usuarios)
    res.json({ message: `Usuário ${id} deletado com sucesso` })
})