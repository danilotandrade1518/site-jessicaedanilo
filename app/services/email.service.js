const nodemailer = require('nodemailer')
const dateFormat = require('dateformat')
const fs = require('fs')
const ejs = require("ejs")

function getTransporter() {
  return nodemailer.createTransport({
    host: "smtp.live.com",
    port: 587,
    secureConnection: false,
    auth: {
      user: "jessica-e-danilo@hotmail.com",
      pass: "d93937161"
    },
    requireTLS: true,
  })
}

module.exports = {
  sendNovaMensagem: function(mensagem, callback) {
    const templateString = fs.readFileSync("./views/emails/nova-mensagem.ejs", 'utf-8')
    const template = ejs.render(templateString, {
      author: mensagem.author,
      email: mensagem.email,
      data: dateFormat(mensagem.data, "dd/mm/yyyy HH:MM"),
      mensagem: mensagem.mensagem.replace(/\n{2,}/g, "<br>").replace(/\n/g, "<br>")
    })

    const mailOptions = {
      from: "jessica-e-danilo@hotmail.com",
      to: 'danilotandrade1518@gmail.com, danilotandrade@hotmail.com, jessica-amanda-goncalves@hotmail.com, jessica-e-danilo@hotmail.com',
      subject: 'Nova mensagem site do casamento!',
      text: mensagem.mensagem,
      html: template,
    }

    const transport = getTransporter()
    transport.sendMail(mailOptions, callback)
  },

  sendNovaConfirmacao: function(confirmacao, callback) {
    const templateString = fs.readFileSync("./views/emails/nova-confirmacao.ejs", 'utf-8')
    const template = ejs.render(templateString, {
      nome_convite: confirmacao.nome_convite,
      nomes_acompanhantes: confirmacao.nomes_acompanhantes,
      email: confirmacao.email,
      telefone: confirmacao.telefone,
      data: dateFormat(confirmacao.data, "dd/mm/yyyy HH:MM"),
    })

    const mailOptions = {
      from: "jessica-e-danilo@hotmail.com",
      to: 'danilotandrade1518@gmail.com, danilotandrade@hotmail.com, jessica-amanda-goncalves@hotmail.com, jessica-e-danilo@hotmail.com',
      subject: 'Nova confirmação de presença!',
      text: confirmacao.nomes_acompanhantes,
      html: template
    }

    const transport = getTransporter()
    transport.sendMail(mailOptions, function(err, info) {
      callback(err, info)
    })
  },

  sendNovaConfirmacaoConvidado: function(email, callback) {
    const templateString = fs.readFileSync("./views/emails/nova-confirmacao-convidado.ejs", 'utf-8')
    const template = ejs.render(templateString, {})

    const mailOptions = {
      from: "jessica-e-danilo@hotmail.com",
      to: email,
      subject: 'Muito obrigado pela confirmação de presença!',
      text: 'Muito obrigado pela sua confirmação de presença!',
      html: template
    }

    const transport = getTransporter()
    transport.sendMail(mailOptions, function(err, info) {
      callback(err, info)
    })
  }
}

