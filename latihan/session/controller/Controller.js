
const {User} = require('../models')

class Controller {

    static home(req, res) {
        res.render('home')
    }

    static login(req, res) {
        res.render('login')
    }
    static loginPost(req, res) {
        res.render('login')
    }
    
    static register(req, res) {
        res.render('register')
    } 

    static registerPost(req, res) {
        let obj = {
            name : req.body.name,
            password: req.body.password
        }
        User.create({
            name: req.body.name,
            password: req.body.password
        })
        .then(data => {
            // res.redirect('/')
            res.send('Register Succcess')
        })
        .catch(err => {
            res.send(err)
        })
     }

    static dashboard(req, res) {
        res.render('dashboard')
    }
}

module.exports = Controller