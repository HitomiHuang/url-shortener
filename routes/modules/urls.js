const express = require('express')
const router = express.Router()

const Url = require('../../models/url')
const validUrl = require('valid-url')
const codeGenerator = require('../../public/javascripts/code_function')

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

router.post('/', (req, res) => {
  const url = req.body.url.trim()
  if (validUrl.isUri(url)) {
    let code = codeGenerator()

    Url.findOne({ url })
      .then(data => data ? data : Url.create({ url, code }))
      .then(data => res.redirect(`/${data._id}`))
      .catch((error) => {
        console.log(error)
        res.render('errorPage', { error: error })
      })
  } else {
    return res.render('index', { url })
  }
})

module.exports = router