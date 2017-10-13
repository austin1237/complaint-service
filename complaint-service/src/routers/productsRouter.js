const productsController = require('../controllers/productsController.js');

let setUpRoutes = (app) =>{
    app.get('/products', productsController.querySearch);
    app.get('/products/totals', productsController.totalSearch)
}

exports.setUpRoutes = setUpRoutes