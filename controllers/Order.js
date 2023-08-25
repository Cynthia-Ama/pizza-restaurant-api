const Order = require("../models/Order")

async function createOrder(req, res){
    try {
        const order =  await Order.create(req.body)
        res.status(201).json(order)
    } 
    catch (error) {
        res.status(500).json(err)
    }
}

async function getOrder(req, res){
    try {
        const id = req.params.id
        const order = await Order.findById(id)
        res.status(201).json(order)
    } 
    catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {createOrder, getOrder}