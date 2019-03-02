const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    url: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Product', ProductSchema);