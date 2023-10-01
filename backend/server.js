import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import products from './data/products.js'

dotenv.config()

const PORT = process.env.PORT || 5000

connectDB() // connect to mongoDB
const app = express()

app.get('/', (req,res) => {
    res.send('API running')
})

app.get('/products', (req,res) => {
    res.json(products)
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))