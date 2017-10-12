const express = require('express');
const app = express();
const port = 8080;
//Inital dependency injection
const db = require('./src/dataContex').getDb(process.env);

/**
* @api {get} /health is the service healthy
* @apiName HealthCheck
* @apiGroup health
*/

app.get('/health', function (req, res) {
  res.sendStatus(200)
});

app.listen(port, function () {
  console.log(`api listening on port ${port}`);
});


//Getting tired But maybe this should be the typically controller flow
// validator.validateQuery
// dataProvider.hitDB
// sendResponse 

// Sample Query
// select productID, count(*) AS "TOTAL" from complaints where stateID=1 group by productID; 

// First Questions endpoint 
// Query Coniditions should be forgein keys

// GET /states
// GET /states/:id

// GET /companies
// GET /companies/:id
// GET /companySummary?productID={id}

// GET /products
// GET /products/:id
// GET /productSummary?stateID={id}

// GET /issues
// GET /issues/:id
// GET /issueSummary?companyID={id} 


//Second Question 
// this could be townID 
// GET /populationSummary?startDate={x}&endDate={x}&companyID={X}




