const express = require("express")
const app = express()
const router = require('./routes')
const port = 3000
var session = require('express-session')

app.set('view engine', 'ejs')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }// karena masih menggunakan localhost jadi false
  }))
app.use('/', router)


app.listen(port, () => {
    console.log(`App is running on ${port}`)
})


