const express = require('express')
const router = express.Router()

const confirmarPresencaService = require('../services/confirmar-presenca.service')
const emailService = require('../services/email.service')
const env = require('../env/env')

router.get('/', (req, res, next) => {
  res.render('confirmar-presenca/confirmar-presenca', {
    googleRecaptchaSitekey: env.GOOGLE_RECAPTCHA_SITEKEY
  })
})

router.post('/', async (req, res, next) => {
  const confirmacao = req.body

  try {

    await confirmarPresencaService.createConfirmacaoPresenca(confirmacao)

  } catch ( error ) {
    return next( error )
  }

  emailService.sendNovaConfirmacaoConvidado(confirmacao.email, function(err, info) {
    emailService.sendNovaConfirmacao(confirmacao, function(err, info){})
  })

  res.status(201).json(confirmacao)
})
module.exports = router
