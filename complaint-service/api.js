const express = require('express');
const bodyParser = require('body-parser')
const db = require('./src/data/dataContex').getDb(process.env);
const statesRouter = require('./src/routers/statesRouter.js');
const productRouter = require('./src/routers/productsRouter.js');
const healthRouter = require('./src/routers/productsRouter.js')
const app = express();
const port = 8080;

// Injects the db into all routes


// Attach Middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', (req, res, next) =>{
  req.db = db
  return next()
})

// AttachRoutes
healthRouter.setUpRoutes(app);
statesRouter.setUpRoutes(app);
productRouter.setUpRoutes(app);

app.listen(port, function () {
  console.log(`api listening on port ${port}`);
});

module.exports = app;


//Second Question 
// this could be townID 
// GET /populationSummary?startDate={x}&endDate={x}&companyID={X}




