const router = require('express').Router()
const bcrypt = require('bcrypt')
const Controller = require('../controller/Controller')


// function myLoogged(req, res, next) {
//     console.log('next')
//     next()
// }

// // router.use(myLoogged)

// function requestTime(req, res, next) {
//     req.requestTime = Date.now()
//     next()
// }
// router.get('/', requestTime, (req, res) => {
//     res.send('Hello World ' + req.requestTime)
// })

// function checkMiddleware(req, res, next) {
//     req.session.userId = 1
//     next()
// }

// function checkSession(req, res, next) {
//     if(req.session.userId === 1) next()
//     else res.send('Anauthorized')
// }

// function hashPassword(req, res, next) {
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync('admin', salt);
//     req.hashPassword = hash
//     next()
// }
// router.get('/register', hashPassword, (req, res) => {
//     res.send('Your password ' + req.hashPassword)
// })

// router.get('/login', checkMiddleware, (req, res) => {
//     res.send('Login Sukses')
// })
// router.get('/', (req, res) => {
//     res.send('Hello World')
// })

// router.use(checkSession) // semua yang ada dibawah route ini harus login dulu baru bisa di akses
// router.get('/dashboard', (req, res) => {
//     res.send('dashboard')
// })

router.get('/', Controller.home)
router.get('/login', Controller.login)
router.post('/login', Controller.loginPost)
router.get('/register', Controller.register)
router.post('/register', Controller.registerPost)
router.get('/dashboard', Controller.dashboard)



module.exports = router