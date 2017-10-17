const complaintsController = require('../controllers/complaintsController.js');

let setUpRoutes = (app) =>{
    /**
    * @api {get} /complaints GET complaints
    * @apiDescription request information on products
    * @apiName GetProducts
    * @apiGroup complaints
    * @apiParam {int} complaintId id of the complaint
    * @apiParam {int} companyId id the company that has had a complaint filed against them
    * @apiParam {int} productId id of the product who has had a consumer complain for
    * @apiParam {int} issueId id of the type of issue the complaint has been made for.
    * @apiParam {int} stateId id of the state where the complaint was made
    * @apiParam {boolean} timely whether or not the company response was timely
    * @apiParam {boolean} disputed whether or not the company disputed the complaint
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     [{
    *       "complaintId": 1,
    *       "companyId": 1,
    *       "productId": 1,
    *       "issueId": 1,
    *       "stateId": 28,
    *       "dateSent": "2014-03-17T00:00:00.000Z",
    *       "narrative": "",
    *       "publicResponse": "",
    *       "timely": true,
    *       "disputed": false
    *     }]
    */
    app.get('/complaints', complaintsController.querySearch);
}

exports.setUpRoutes = setUpRoutes

