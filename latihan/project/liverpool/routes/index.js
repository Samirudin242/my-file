const router = require('express').Router()
const HomeController = require('../controllers/HomeController')

router.get('/', HomeController.Home)


module.exports = router