const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient

const mongoUrl = 'mongodb://localhost:27017/'

router.get('/', async (req, res) => {

  const client = await MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  })
  const db = client.db("database")
  const data = await db.collection("messages").find({}).toArray()

  const result = data[0].message

  res.render('index', {
    title: 'TINKLAPIS',
    message: result
  })

})

router.get('/test', async (req, res) => {

  const client = await MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  })
  const db = client.db("database")
  const data = await db.collection("messages").find({}).toArray()

  res.json({data});

})

module.exports = router