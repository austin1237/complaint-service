const productsRepo = require('../repos/productsRespository.js');
const productsAdapter = require('../adapters/productsAdapter.js')

const getProductsAsync = async (searchConfig) => {
    try {
       products = await productsRepo.getProducts(searchConfig)
       products = productsAdapter.productDbToClient(products)
    } catch(e) {
        throw e
    }
    return products
}

const getProductsTotalsAsync = async (searchConfig) => {
    try {
        totals = await productsRepo.getTotals(searchConfig)
        totals = productsAdapter.totalDbToClient(totals)
     } catch(e) {
         throw e
     }
     return totals
}

exports.getProductsAsync = getProductsAsync;
exports.getProductsTotalsAsync = getProductsTotalsAsync;