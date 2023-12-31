const Product= require("../models/Product")


const getAllProducts = async(req, res)=>{
    try {
        const products = await Product.find()
        res.status(200).json(products)
        
    } catch (error) {
        res.status(500).json(error)
    }
}

const getSingleProduct = async(req, res)=>{
    const id = req.params.id
    try {
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {getAllProducts, getSingleProduct}