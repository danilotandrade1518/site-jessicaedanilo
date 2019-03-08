const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('lista-presentes/lista-presentes')
})

module.exports = router
