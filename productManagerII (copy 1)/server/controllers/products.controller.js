const {Product} =  require("../models/product.models");

module.exports.index = (request, response) => {
    response.JSON({
        message:"Hello World!"
    });
}

module.exports.createProduct = (request, response) => {
    const{title, price, description} = request.body;
    Product.create({
        title,
        price,
        description
    })
    .then(poduct => response.json(product))
    .catch(err => response.json(err));
}