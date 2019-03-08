const mongoose = require('mongoose')
let db

module.exports = function(env) {
    const options = {
        useNewUrlParser: true,
        keepAlive: 120
    }

    if (!db) {
        if(env === 'test') {
            db = mongoose.connect('mongodb://127.0.0.1:27017/jessicaedanilo_test', options)
        } else {
            db = mongoose.connect('mongodb://jessicaedanilo:d93937161@kamino.mongodb.umbler.com:50874/jessicaedanilo', options)
        }
    }

    return db
}
