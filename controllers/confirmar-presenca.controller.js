const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('confirmar-presenca/confirmar-presenca')
})

module.exports = router
