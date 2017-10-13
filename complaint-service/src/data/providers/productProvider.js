const productsRepo = require('../repos/productsRespository.js');
const productsAdapter = require('../adapters/productsAdapter.js')
let getProductsAsync = async (searchConfig) => {
    // validator
    // adapter
    try {
       products = await productsRepo.getProducts(searchConfig)
       products = productsAdapter.dbToClient(products)
    } catch(e) {
        throw e
    }
    return products
}

exports.getProductsAsync = getProductsAsync;