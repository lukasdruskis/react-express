const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient
const mongoUrl = 'mongodb://localhost:27017/'
const session = require('express-session')
const cookieParser = require('cookie-parser');
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

router.get('/', async (req, res) => { 


})


module.exports = router