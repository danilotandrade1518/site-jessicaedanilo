const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mensagemSchema = Schema({
  author: {
    type: String,
    required: [true, 'O autor da mensagem deve ser informado.'],
    default: undefined
  },
  email: {
    type: String,
    required: [true, 'O email deve ser informado.'],
    default: undefined
  },
  data: {
      type: Date,
      required: true,
      default: Date.now
  },
  mensagem: {
      type: String,
      required: [true, 'Os minutos devem ser informados'],
      default: undefined
  }
})

module.exports = mensagemSchema
