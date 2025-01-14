const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String},
    price: {type: Number},
    description: {type: String}
}, {timeStamps: true});

module.exports.Product = mongoose.model('Product', ProductSchema);