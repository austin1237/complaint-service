_ = require('lodash')
let dbToClient = (products) =>{
    clientReadyProducts = [];
    _.each(products, (product) =>{
        let clientProduct = {
            productId: product.ID,
            name: product.name,
        }
        clientReadyProducts.push(clientProduct)
    })
    return clientReadyProducts
}

exports.dbToClient = dbToClient