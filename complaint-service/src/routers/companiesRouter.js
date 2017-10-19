const companiesController = require('../controllers/companiesController.js');

let setUpRoutes = (app) =>{
    /**
    * @api {get} /v1/companies GET companies
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
    app.get('/v1/companies', companiesController.querySearch);

    /**
    * @api {get} /v1/companies/totals GET product totals
    * @apiName GetCompanyTotals
    * @apiDescription request total number of complaints per company
    * @apiGroup companies
    * @apiParam {int} productId id of the product that filters the complaints totals
    * @apiParam {int} companyId id of the company that filters the complaints totals
    * @apiParam {int} issueId id of the issue that filters the complaints totals 
    * @apiParam {int} stateId id of the state that filters the complaints totals
    * @apiParam {string} orderBy  valid sorting options are total for ascending order or -total for descending order
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     [{
    *       "companyId": 1,
            "name": "Wallace Corporation",
    *       "total": 1712
    *     }]
    */
    app.get('/v1/companies/totals', companiesController.totalSearch)
}

exports.setUpRoutes = setUpRoutes