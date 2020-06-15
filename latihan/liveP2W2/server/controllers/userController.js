const {User} = require('../models')
const {compare} = require('../helper/bcrypt')
const jwt = require('jsonwebtoken')
class UserController {

    static Register(req, res) {
        let obj = {
            name : req.body.name,
            username : req.body.username,
            password : req.body.password,
            email: req.body.email
        }
        User.create(obj)
        .then(data => {
            res.status(201).json({status:201, data:data})
        })
        .catch(err => {
            const error = []
            err.errors.forEach((element) => {
                error.push(element.message)
            });
            error.length >= 1 ? res.status(400).json({status:400, err:error}) : res.status(500).json({status:500, err:err})
        // res.status(500).json({status:500, err:err})
        })
    }


    static login(req, res) {
        let obj = {
            username : req.body.username,
            password : req.body.password
        }

        User.findOne({
            where:{
                username: obj.username
            }
        })
        .then(data => {
            if(data && compare(obj.password, data.password)) {
                const token = jwt.sign({id:data.id, username:data.username, password:data.password, email:data.email}, 'qwerty')
                res.status(201).json({token})
            } else {
                res.status(403).json({status:403, err:`Invalid password or email`})
            }
        })
        .catch(err => {
            res.status(500).json({status:500, err:`internal server error`})
        })
    }
}

module.exports = UserController