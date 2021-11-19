const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.json("['hello','world]")
})

router.post('/:id', (req, res, next) => {
    res.json(`${req.params.id}`)
})

module.exports = router