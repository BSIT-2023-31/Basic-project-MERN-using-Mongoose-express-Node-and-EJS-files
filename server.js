import express from 'express'
import path from 'path'
import product from './model/product-model.js'

const app =  express();

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine','ejs')

app.get('/',async (req, res)=>{
    const products = await product.find();
     res.render("index" , {products})
});

app.get('/create' ,(req, res)=>{
    res.render('pro')
})
app.post('/createProduct', async function(req, res) {
  try {
    const { name, image, price } = req.body;
    const userproduc = await product.create({ name, image, price });
    res.send(userproduc);
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(5000,function(){
     console.log("Server is started at http://localhost:5000");
})