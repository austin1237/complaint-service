let setUpRoutes = app => {
  /**
    * @api {get} /health GET health
    * @apiName HealthCheck
    * @apiGroup health
    * @apiSuccessExample {json} Success-Response:
    *     HTTP/1.1 200 OK
    */
  app.get("/health", function(req, res) {
    res.sendStatus(200);
  });
};

exports.setUpRoutes = setUpRoutes;
