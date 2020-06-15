const router = require('express').Router()
const UserController = require('../controllers/userController')


router.post('/', UserController.Register)
router.post('/login', UserController.login)

module.exports = router