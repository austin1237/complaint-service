const express = require('express');
const app = express();
const port = 8080;
const db = require('./src/data/dataContex').getDb(process.env);
const statesRouter = require('./src/routers/statesRouter.js');
const productRouter = require('./src/routers/productsRouter.js');

// Injects the db into all routes
app.use('/', (req, res, next) =>{
  req.db = db
  return next()
})

/**
* @api {get} /health is the service healthy
* @apiName HealthCheck
* @apiGroup health
*/
app.get('/health', function (req, res) {
  res.sendStatus(200)
});

statesRouter.setUpRoutes(app);
productRouter.setUpRoutes(app);

app.listen(port, function () {
  console.log(`api listening on port ${port}`);
});

module.exports = app;


// Sample Query
// select productID, count(*) AS "TOTAL" from complaints where stateID=1 group by productID; 

// GET /issues
// GET /issueSummary?companyID={id} 


//Second Question 
// this could be townID 
// GET /populationSummary?startDate={x}&endDate={x}&companyID={X}




