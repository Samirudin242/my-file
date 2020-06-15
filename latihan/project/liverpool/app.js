const express = require('express')
const app = express()
const routes = require('./routes')
const port = 3000

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.use('/', routes)

app.listen(port, () => {
    console.log(`App is Running on port ${port}`)
})

