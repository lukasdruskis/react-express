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
      const data = await db.collection("models").find().toArray()
    res.json(data)
 }),

 router.get('/adverts', async (req, res) => {
  const client = await MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  })
      const option1 = req.query.chosenModel
      const db = client.db("database")

      //kolekciju sujungimas COLORS FUEL_TYPES MODELS YEARS ---> ADVERTS

      const advertModels = await db.collection('adverts').aggregate([

        { $match:
          { 
           $expr: {"modelID" : 1000008877}
         }
       },
        
        { $lookup:
           {
             from: 'models',
             localField: 'modelID',
             foreignField: 'modelID',
             as: 'advertModel'
            }, 
          },
          { $lookup:
            {
              from: 'colors',
              localField: 'colorID',
              foreignField: 'colorID',
              as: 'advertColor'
             },
           },
           { $lookup:
            {
              from: 'years',
              localField: 'yearID',
              foreignField: 'yearID',
              as: 'advertYear'
             },
           },
           { $lookup:
            {
              from: 'fuel_types',
              localField: 'fuelID',
              foreignField: 'fuelID',
              as: 'advertFuelType'
             },
           }
        ]).toArray()

         console.log(JSON.stringify(advertModels))
         res.json(advertModels)


         //patikrinu ar pasirinktas modelis egzistuoja ADVERTS lenteleje, jei taip, grazink visus objektus, su pasirinktu ID

    // const filteredData = await db.collection("adverts").findOne({ "modelID": option1})
    // res.json(filteredData)
})

module.exports = router