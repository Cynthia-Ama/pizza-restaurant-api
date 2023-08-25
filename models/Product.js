const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: [ Number ],
        required: true
    },
    extraOptions: {
        type: [
            {
                text: {
                    type: String, 
                    required: true, 
                  },
                price: { 
                    type: Number, 
                    required: true
                }
            }
        ]
    },
    count: {
        type: Number
    }
},{timestamps: true})

module.exports = mongoose.model("Product", ProductSchema)