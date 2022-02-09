const express = require('express')
const PORT = 3000
const app = express()
const exphbs = require('express-handlebars')
require('./config/mongoose')
const routes = require('./routes')

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})