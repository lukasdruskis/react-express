const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const app = express()
const mongoUrl = 'mongodb://localhost:27017/'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(session({
  secret: "sesija",
  resave: true,
  resave: false,
  saveUninitialized: true,
  key: 'express.sid'
}));


router.get('/', async (req, res) => {
      const client = await MongoClient.connect(mongoUrl, {
        useNewUrlParser: true
      })
      const db = client.db("database")
      const rateType = req.query.type

        if(rateType) {
          const exist = await db.collection("sessionsid").find({ sesija: req.sessionID}).count();
            if(exist > 0) {
              return res.json({message: "Jūs jau balsavote!"})
            }
        else {
          sesija = req.sessionID
          await db.collection("sessionsid").insertOne({ sesija })

          if ( rateType == "like" ) {
            db.collection("rates").updateOne(
              {}, { $inc: { likes: 1, result: 1} },
            );
          }
    
          if ( rateType == "dislike" ) {
           db.collection("rates").updateOne(
              {}, { $inc: { dislikes: 1, result: -1} }
            );
          }
        }
      }
     //atnaujina rezultatus
 const updatedData = await db.collection("rates").findOne({})
 res.json(updatedData)
 }),


module.exports = router