const express = require('express')
const router = express.Router()

const Url = require('../../models/url')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:code', (req, res) => {
  const code = req.params.code
  return Url.findOne({ code })
    .then(response => {
      res.redirect(`${response.url}`)
    })
    .catch((error) => {
      console.log(error)
      res.render('errorPage', { error: error })
    })
})

module.exports = router