_ = require('lodash');

let productDbToClient = (products) =>{
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

let totalDbToClient = (totals) =>{
    clientReadyTotals = [];
    _.each(totals, (total) =>{
        let clientTotal = {
            productId: total.productID,
            total: total.total,
        }
        clientReadyTotals.push(clientTotal)
    })
    return clientReadyTotals
}

exports.productDbToClient = productDbToClient
exports.totalDbToClient = totalDbToClient