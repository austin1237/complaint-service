const productsController = require('../controllers/productsController.js');

let setUpRoutes = (app) =>{
    /**
    * @api {get} /products GET products
    * @apiDescription request information on products
    * @apiName GetProducts
    * @apiGroup products
    * @apiParam {int} productId id of the product
    * @apiParam {string} name name of the product
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     [{
    *       "productId": 1,
    *       "name": "Mortgage"
    *     }]
    */
    app.get('/products', productsController.querySearch);

    /**
    * @api {get} /products/totals GET product totals
    * @apiName GetProductTotals
    * @apiDescription request total number of complaints per product
    * @apiGroup products
    * @apiParam {int} productId id of the product that filters the complaints totals
    * @apiParam {int} companyId id of the company that filters the complaints totals
    * @apiParam {int} issueId id of the issue that filters the complaints totals 
    * @apiParam {int} stateId id of the state that filters the complaints totals
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     [{
    *       "productId": 1,
    *       "total": 1712
    *     }]
    */
    app.get('/products/totals', productsController.totalSearch)
}

exports.setUpRoutes = setUpRoutes