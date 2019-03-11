const compression = require('compression')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const sassMiddleware = require('node-sass-middleware')
const paginate = require('express-paginate')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const connect = require('./app/schemas/db/db.connect')

const routes = require('./app/routes/routes')

const app = express()

// connect DB
connect(app.get('env'))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(paginate.middleware(10, 50))
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(sassMiddleware({
  /* Options */
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public/stylesheets'),
  outputStyle: 'compressed',
  indentedSyntax : false,
  prefix: '/stylesheets',
}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(__dirname + '/node_modules/jquery/dist'))
app.use(express.static(__dirname + '/node_modules/popper.js/dist'))
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'))
app.use(express.static(__dirname + '/node_modules/leaflet/dist'))
app.use(express.static(__dirname + '/node_modules/photoswipe/dist'))

app.use(helmet())
app.disable('x-powered-by')
app.use(compression())

app.get('*', (req, res, next) => {
  if (req.app.get('env')==='production' && req.headers['x-forwarded-proto'] != 'https') {
    res.redirect("https://" + req.headers.host + req.url)
  } else {
    next()
  }
})

app.use('/', routes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.redirect('/')
})

// error handler
app.use(function(err, req, res, next) {
  if (req.app.get('env')==='production') {
    res.redirect('/')
  }

  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = err

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
