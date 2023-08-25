const pizza = require('./pizza.json')
const Product = require('./models/Product')
const connectdb = require('./connect')
require("dotenv").config()


const start = async() =>{
    try {
        await connectdb(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(pizza)
        process.exit(0)
    }
    catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()