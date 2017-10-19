const statesController = require("../controllers/statesController.js");

let setUpRoutes = app => {
  /**
    * @api {get} /v1/states GET states
    * @apiDescription request information on states
    * @apiName GetState
    * @apiGroup states
    * @apiParam {int} stateId id of the state
    * @apiParam {string} name name of the state
    * @apiParam {string} abbreviation two letter abbreviation of the state
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     [{
    *       "stateId": 1,
    *       "name": "California",
    *       "abbreviation": "CA"
    *     }]
    */

  app.get("/v1/states", statesController.querySearch);

  /**
    * @api {get} /v1/states/growth GET states growth
    * @apiDescription request information on states
    * @apiName GetStateGrowth
    * @apiGroup states
    * @apiParam {int} stateId id of the state
    * @apiParam {int} startYear the variable in populationDiff = (endYear - startYear)
    * @apiParam {int} endYear the variable in populationDiff = (endYear - startYear)
    * @apiParam {string} orderBy  valid sorting options are populationDiff/growthPercentage for ascending order or -populationDiff/-growthPercentage for descending order
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     [{
    *       "stateId": 1,
    *       "populationDiff": 2000,
    *       "growthPercentage": .9832
    *     }]
    */

  app.get("/v1/states/growth", statesController.growthSearch);

  /**
    * @api {get} /v1/states/totals GET state totals
    * @apiName GetCompanyTotals
    * @apiDescription request total number of complaints per state
    * @apiGroup states
    * @apiParam {int} productId id of the product that filters the complaints totals
    * @apiParam {int} companyId id of the company that filters the complaints totals
    * @apiParam {int} issueId id of the issue that filters the complaints totals 
    * @apiParam {int} stateId id of the state that filters the complaints totals
    * @apiParam {string} orderBy  valid sorting options are total for ascending order or -total for descending order
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    *     [{
    *       "stateId": 1,
    *       "total": 1712
    *     }]
    */

  app.get("/v1/states/totals", statesController.totalSearch);
};

exports.setUpRoutes = setUpRoutes;
