const router = require('express').Router()
const UserRouter = require('./userRouter')


router.use('/', UserRouter)



module.exports = router
