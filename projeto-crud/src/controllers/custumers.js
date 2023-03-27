const CustumersModel = require('../models/custumers')
const { crypto } = require('../helpers/password')

const defaultTitle = 'Cadastro de Clientes'

function index(req,res) {
   res.render('register', {
       title: defaultTitle
   })
} 

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
 res.render('register', {
   title: defaultTitle,
   message: "Cadastro realizado com sucesso!"
 })
}

async function listUsers(req, res) {
//Método do mongoose para encontrar no banco de dados
   const users = await CustumersModel.find()

   res.render('listUsers', {
      title: 'Listagem de usuários!',
      users: users,
   })
}

module.exports = {
    add,
    index,
    listUsers
}