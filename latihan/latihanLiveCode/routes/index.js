const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('ini home')
})


module.exports = router