const statesController = require('../controllers/statesController.js');

let setUpRoutes = (app) =>{
    /**
    * @api {get} /states GET states
    * @apiDescription request information on states
    * @apiName GetState
    * @apiGroup states
    * @apiParam {int} id id of the state
    * @apiParam {string} name name of the state
    * @apiParam {abbreviation} two letter abbreviation of the state
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     [{
    *       "id": 1,
    *       "name": "California",
    *       "abbreviation": "CA"
    *     }]
    */

    app.get('/states', statesController.querySearch);
}

exports.setUpRoutes = setUpRoutes