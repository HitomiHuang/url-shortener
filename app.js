const express = require('express')
const PORT = 3000
const app = express()
const exphbs = require('express-handlebars')



app.engine('hbs', exphbs.engine({defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

require('./config/mongoose')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/result', (req, res) => {
  res.render('result')
})

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})