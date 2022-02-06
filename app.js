const express = require('express')
const PORT = 3000
const app = express()
const exphbs = require('express-handlebars')
const Url = require('./models/url')
require('./config/mongoose')
const codeGenerator = require('./public/javascripts/code_function')
const examinedCode = require('./public/javascripts/code_function')

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/urls', (req, res) => {
  const url = req.body.url
  const codes = []

  Url.find({})
    .lean()
    .then((response) => { console.log(responsex)})

  let code = 'ikzXX'
  
  console.log(codes)
  return Url.create({ url, code })
    .then(() => res.render('result', { code }))
    .catch(error => console.log(error))
})

app.get('/:code', (req, res) => {
  const code = req.params.code
  Url.find({code: code})
    .lean()
    .then((response) => {
      res.redirect(response[0].url)
    })
    .catch((error) => console.log(error))
})


app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})