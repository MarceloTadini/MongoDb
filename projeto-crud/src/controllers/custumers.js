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

async function list(req, res) {
//Método do mongoose para encontrar no banco de dados
   const users = await CustumersModel.find()

   res.render('list', {
      title: 'Listagem de usuários!',
      users: users,
   })
}

async function formEdit(req, res){
   const {id}= req.query

   //retorna o usuário
   const user = await CustumersModel.findById(id)

   res.render('edit', {
      title: 'Editar Usuário',
      user
   })
}

async function edit(req, res){
   const {
      name,
      age,
      email,
   } = req.body

   const {id} = req.params

   const user = await CustumersModel.findById(id)

   user.name = name
   user.age = age
   user.email = email

   user.save()

   res.render('edit', {
      title: 'Editar usuário',
      user,
      message: 'Usuário alterado com sucesso!'
   })
}

module.exports = {
    add,
    index,
    list,
    formEdit,
    edit
}