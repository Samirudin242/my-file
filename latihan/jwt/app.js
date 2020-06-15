const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const port = 3000


app.use(express.urlencoded({extended:true}))


app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        msg: `Hello World`
    })
})

// app.get('/jwt-encode', (req, res) => {
//     let token = jwt.sign({
//         username:"samirudin",
//         password:"theyaku11",
//         email: "samtheyaku@gmail.com"
//     }, 'theyaku')

//     res.status(200).json({status:200, data: token})
// })


// app.get('/jwt-decode', (req, res) => {
//     let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbWlydWRpbiIsInBhc3N3b3JkIjoidGhleWFrdTExIiwiZW1haWwiOiJzYW10aGV5YWt1QGdtYWlsLmNvbSIsImlhdCI6MTU5MTYzNTQ5NH0.6jTnuFZmvTZUDU4cKCU91__mJuQCGacA9STdvF_mpMo";

//     try {
//         let data = jwt.verify(token, 'theyaku')
//         res.status(200).json({status:200, data})
//     } catch (error) {
//         res.send(404).json(error)
//     }
    
// })


app.post('/jwt-encode', (req, res) => {
    let obj = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }

    let token = jwt.sign(obj, 'theyaku')
    res.status(200).json({status:200, token} )
})


app.post('/jwt-decode', (req, res) => {
    let obj = req.body.token
    
    try {
        let data = jwt.verify(obj, 'theyaku')
        res.status(200).json({status:200, data})
    } catch (error) {
        res.status(500).json(error)
    }
})


app.listen(port, () => {
    console.log(`App is Running on port ${port}`)
})