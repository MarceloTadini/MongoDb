const router = require('express').Router()

const CustumersController = require('../controllers/custumers')
const IndexController = require('../controllers/index')

//rotas
router.get("/", IndexController.index)

//registro
router.get("/register", CustumersController.index)

//CONTROLLER - Recebe os dados, manipula os dados, salva no banco de dados e devolve uma respota
router.post("/register/add",CustumersController.add)

//Listar
router.get("/list", CustumersController.listUsers)

module.exports = router