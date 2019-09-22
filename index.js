'use strict';

const mongoose = require('mongoose');

const Products = require('../models-modular/products');
const Categories = require('../models-modular/categories')

const MONGODB_URI = 'mongodb://localhost/d4class05';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

let products = new Products();
let categories = new Categories();

let makeProduct = async () => {
    let productObj = {
      name: 'Xbox',
      description: 'video game',
      price: '$299',
      available: true,
    };

    let newProduct = await products.create(productObj);
    console.log('Product Created!', newProduct);

    let allProducts = await products.get();
    console.log('All Products', allProducts);
}

makeProduct()
  .then(() => mongoose.disconnect())