const router = require('express').Router()

const CustumersController = require('../controllers/custumers.js')

//rotas
router.get("/", (req,res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

router.get("/register", (req,res) => {
    res.render('register', {
        title: 'Cadastro de clientes'
    })
})

//CONTROLLER - Recebe os dados, manipula os dados, salva no banco de dados e devolve uma respota
router.post("/register/add",CustumersController.add)

module.exports = router