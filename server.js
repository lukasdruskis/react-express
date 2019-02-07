const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')
const MongoClient = require('mongodb').MongoClient
const routes = require('./routes/index')
const bodyParser = require('body-parser')
const test = require('./routes/test')

const app = express()

app.use(bodyParser.json());

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts'}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use('/', routes)
app.use('/test', test);

app.get('/backend', (req, res) => {
    res.send({ express: 'Backend connection sueccessful' });
  });

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on ${port}`))