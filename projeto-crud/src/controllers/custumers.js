const CustumersModel = require('../models/custumers')

function add(req, res) {
 const {
    name,
    age,
    email,
    password
 } = req.body

 const register = new CustumersModel({
    name,
    age,
    email,
    password
 })

 register.save()
 res.send('Cadastro realizado')

 res.end()
}

module.exports = {
    add
}