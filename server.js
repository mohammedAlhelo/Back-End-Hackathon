const express=require('express')
const logger = require('morgan')
const cors = require('cors')


const AuthRouter = require('./routes/AuthRouter')
const clothesRouter = require('./routes/clothes')
const giftsRouter = require('./routes/gifts')
const shopRouter = require('./routes/shop')


const hotelRouter=require('./routes/hotelRouter')
const foodRouter=require('./routes/foodRouter')
const rideRouter=require('./routes/rideRouter')

const PORT =3001

const db=require("./db")

const app=express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/auth', AuthRouter)
app.use('/clothes', clothesRouter)
app.use('/gifts', giftsRouter)
app.use('/shop', shopRouter)

app.use('/hotels', hotelRouter)
app.use('/rides', rideRouter)
app.use('/foods',foodRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})