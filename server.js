const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect("mongodb://localhost:27017/apinode", { useNewUrlParser: true });

requireDir('./src/models');

const Product = mongoose.model('Product');

app.get('/', (req, res) => {
    
    Product.create({
        title: 'teste',
        description: 'teste',
        url: 'teste'
    });
    
    return res.send('Opaa, turu pomm ? ');
});

app.listen(3001, () => {
    console.log(`Server started on port ${3001}`);
});