const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')
const MongoClient = require('mongodb').MongoClient
const routes = require('./routes/index')

const app = express()

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: __dirname + '/views/layouts'
}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use('/', routes)

app.get('/backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on ${port}`))