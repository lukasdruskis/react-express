const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient

const mongoUrl = 'mongodb://localhost:27017/'

router.get('/', (req, res, next) => {

  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, client) => {
    if (err) throw err
  
    const db = client.db("database")
  
    db.collection("messages").findOne({}, (err, result) => {
      if (err) throw err
      
      res.render('index', {title: 'Dainius', message: result.message})
    })
  })

})

module.exports = router