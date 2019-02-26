const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const app = express()
const mongoUrl = 'mongodb://localhost:27017/'



router.get('/', async (req, res) => {
      const client = await MongoClient.connect(mongoUrl, {
        useNewUrlParser: true
      })
      const db = client.db("database")
      const typedData = req.query.typedData
      console.log(typedData)
    const data = await db.collection("text").find({"random": { $regex: ".*" + typedData + ".*"}}).toArray()
 res.json(data)
 }),


module.exports = router