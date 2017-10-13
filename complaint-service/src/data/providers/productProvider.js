const productsRepo = require('../repos/productsRespository.js');
const productsAdapter = require('../adapters/productsAdapter.js')

const getProductsAsync = async (searchConfig) => {
    try {
       products = await productsRepo.getProducts(searchConfig)
       products = productsAdapter.dbToClient(products)
    } catch(e) {
        throw e
    }
    return products
}

const getProductsTotalsAsync = async (searchConfig) => {
    try {
        totals = await productsRepo.getTotals(searchConfig)
     } catch(e) {
         throw e
     }
     return totals
}

exports.getProductsAsync = getProductsAsync;
exports.getProductsTotalsAsync = getProductsTotalsAsync;