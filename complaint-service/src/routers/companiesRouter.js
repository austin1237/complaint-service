const companiesController = require('../controllers/companiesController.js');

let setUpRoutes = (app) =>{
    /**
    * @api {get} /companies GET companies
    * @apiDescription request information on products
    * @apiName GetProducts
    * @apiGroup company
    * @apiParam {int} companyId id of the company
    * @apiParam {string} name name of the company
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     [{
    *       "companyId": 1,
    *       "name": "Wallace Corporation"
    *     }]
    */
    app.get('/companies', companiesController.querySearch);
}

exports.setUpRoutes = setUpRoutes