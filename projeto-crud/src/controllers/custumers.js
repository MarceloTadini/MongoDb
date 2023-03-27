const CustumersModel = require('../models/custumers')
const { crypto } = require('../helpers/password')

async function add(req, res) {
 const {
    name,
    age,
    email,
    password
 } = req.body

 const passwordCrypto = await crypto(password) //passando a senha por parâmetro, afunção já vai retornar criptografada

 const register = new CustumersModel({
    name,
    age,
    email,
    password: passwordCrypto
 })

 register.save()
 res.send('Cadastro realizado')

 res.end()
}

module.exports = {
    add
}