const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const app = express()
const mongoUrl = 'mongodb://localhost:27017/'



router.get('/models', async (req, res) => {
      const client = await MongoClient.connect(mongoUrl, {
        useNewUrlParser: true
      })
      const db = client.db("database")
      const option1 = req.query.chosenModel
      console.log(option1)
      const data = await db.collection("models").find().toArray()
    res.json(data)
 }),

 router.get('/adverts', async (req, res) => {
  const client = await MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  })
  const db = client.db("database")
  const data = await db.collection("adverts").find().toArray()
res.json(data)
})

module.exports = router