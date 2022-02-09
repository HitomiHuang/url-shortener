const express = require('express')
const router = express.Router()

const Url = require('../../models/url')
const validUrl = require('valid-url')
const codeGenerator = require('../../public/javascripts/code_function')

router.get('/:id', (req, res) => {
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

router.post('/', (req, res) => {
  const url = req.body.url.trim()
  if (validUrl.isUri(url)) {
    let code = codeGenerator()

    // Url.findOne({code})
    //   .then(data => data ? code = codeGenerator() : code )
    
    Url.findOne({ url })
      .then(data => data ? data : Url.create({ url, code }))
      .then(data => res.redirect(`/urls/${data._id}`))
      .catch((error) => {
        console.log(error)
        res.render('errorPage', { error: error })
      })
  } else {
    return res.render('index', { url })
  }
})

module.exports = router