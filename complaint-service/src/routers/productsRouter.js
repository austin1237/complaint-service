const productsController = require('../controllers/productsController.js');

let setUpRoutes = (app) =>{
    app.get('/products', productsController.querySearch);
}

exports.setUpRoutes = setUpRoutes