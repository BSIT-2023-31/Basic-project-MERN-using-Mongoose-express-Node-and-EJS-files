import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/10-Product');
 
const productShema =  mongoose.Schema({
     name: String,
     image: String,
     price: String,
})


 const product =  mongoose.model('product', productShema);

export default product;