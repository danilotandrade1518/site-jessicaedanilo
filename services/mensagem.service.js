const mongoose = require('mongoose')
const mensagemSchema = require('../schemas/mensagem.schema')

const MensagemModel = mongoose.model('Mensagem', mensagemSchema);

module.exports = {
    getMensagens: function (limit, skip) {
      return MensagemModel.find({})
        .limit(limit)
        .skip(skip)
        .lean()
        .sort({data: 'desc'})
        .exec()
    },
    countMensagens: function () {
      return MensagemModel.countDocuments({})
    },
    createMensagem: function (obj) {
      var mensagem = new MensagemModel({ author: obj.author,  email: obj.email,  mensagem: obj.mensagem });

      return mensagem.save();
    }
}
