const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
 
},
{
    timestamps:true,
    versionKey:false
})

const products = mongoose.model("products",productSchema)

module.exports = products
