const express = require("express")
const app = express()
const cors = require("cors")
const connectdb = require("./connect")
require("dotenv").config()
const ProductRoute = require("./routes/Product")
const OrderRoute = require("./routes/Order")

app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Hello world")
})

app.use("/api/products", ProductRoute)
app.use("/api/orders", OrderRoute)

const port = process.env.PORT || 4000

const start = async() =>{
    try {
        await connectdb(process.env.MONGO_URI)
        // app.listen(port, ()=>{
        //     console.log(`server is listening on port 8800`)
        // })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

// start()

start().then(()=>{
    app.listen(port, ()=>{
        console.log(`server is listening on port ${port}`)
    })
})

