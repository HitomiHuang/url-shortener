const express = require('express')
const router = express.Router()
const validUrl = require('valid-url')
const codeGenerator = require('../../public/javascripts/code_function')

const Url = require('../../models/url')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:id', (req, res) => {
  if (req.params.id === 'favicon.ico') {
    return
  } 
    const id = req.params.id
    Url.findById(id)
      .lean()
      .then(data => {
        const code = data.code
        res.render('result', { code })
      })
      .catch((error) => {
        console.log(error)
        res.render('errorPage', { error: error })
      })
})

module.exports = router