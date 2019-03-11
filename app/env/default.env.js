const emailConf = require('../../email')

module.exports = {
  GOOGLE_RECAPTCHA_SITEKEY: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
  DB_URL: 'mongodb://127.0.0.1:27017/jessicaedanilo',

  // EMAIL CONF
  EMAIL_HOST: emailConf.host,
  EMAIL_PORT: emailConf.port,
  EMAIL_SECURE_CONNECTION: emailConf.secureConnection,
  EMAIL_REQUIRETLS: emailConf.requireTLS,
  EMAIL_USER: emailConf.user,
  EMAIL_PASS: emailConf.password,
}
