const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
})

//Cria uma tabela(collection) de schema
const Model = mongoose.model('custumers', schema)

// //Inserindo um registro no banco de dados
// const register = new Model({
//     name: 'Marcelo',
//     age: 23,
//     email: 'tadini.marcelo53@gmail.com',
//     password: '123456'
// })

// //Executando o código para salvar
// register.save()

module.exports = Model