const express = require('express')
const router = express.Router()
const fs = require('fs')
var sizeOf = require('image-size')

router.get('/', (req, res, next) => {
  res.render('galeria/galeria')
})

router.get('/imagens', (req, res, next) => {
  const galeriaFolder = './public/images/galeria/'

  const images = []

  fs.readdir(galeriaFolder, (err, files) => {
    files.forEach(file => {

      var dimensions = sizeOf(galeriaFolder + file)

      let url = '/images/galeria/' + file
      let name = file.substring(0, file.indexOf('.')).replace('-', ' ').toUpperCase()
      let width = dimensions.width
      let height = dimensions.height

      images.push({
        url,
        name,
        width,
        height
      })
    })

    res.json(images)
  })
})

module.exports = router
