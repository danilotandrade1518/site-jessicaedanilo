const db_host = process.env.DB_HOST
const db = process.env.DB
const db_user = process.env.DB_USER
const db_pass = process.env.DB_PASS

module.exports = {
  GOOGLE_RECAPTCHA_SITEKEY: process.env.GOOGLE_RECAPTCHA_SITEKEY,
  DB_URL: `mongodb://${db_user}:${db_pass}@${db_host}/${db}`,

  // EMAIL CONF
  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_PORT: process.env.EMAIL_PORT,
  EMAIL_SECURE_CONNECTION: process.env.EMAIL_SECURE_CONNECTION,
  EMAIL_REQUIRETLS: process.env.EMAIL_REQUIRETLS,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
}
