const express = require('express')
const path = require('path')
const router = express.Router()
// const hbs = require('express-handlebars')
const MongoClient = require('mongodb').MongoClient
const routes = require('./routes/index')
const bodyParser = require('body-parser')
const rate = require('./routes/rate')
const randomdata = require('./routes/randomdata')
const filters = require('./routes/filters')
const session = require('express-session')
const cookieParser = require('cookie-parser');


const mongoUrl = 'mongodb://localhost:27017/'

const app = express()

app.use(bodyParser.json());


app.use(cookieParser());
app.use(session({
      secret: "sesija",
      resave: true,
      resave: false,
      saveUninitialized: true,
      key: 'express.sid'
}));
app.use('/', routes)
app.use('/rate', rate);
app.use('/randomdata', randomdata)
app.use('/filters', filters)
  app.get('/testas', async (req, res) => {
    client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true
    })
    const db = client.db("database")
     if(req.session.page_views){
        req.session.page_views++;
        sesija = req.sessionID,
        res.send("Jus apsilankete tinklapyje " + req.session.page_views + " kartus " + "Jusu sesijos id: " + sesija)
     } else {
        req.session.page_views = 1;
        const sesija = req.sessionID
        await db.collection("sessionsid").insertOne({ sesija })
        console.log(sesija)
        res.send("Sveiki jus pirma karta tinklapyje!");
     }
    });


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on ${port}`))

// //handlebars
// app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts'}))
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'hbs')