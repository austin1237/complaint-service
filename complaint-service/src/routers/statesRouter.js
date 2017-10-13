const statesController = require('../controllers/statesController.js');

let setUpRoutes = (app) =>{
    app.get('/states', statesController.querySearch);
}

exports.setUpRoutes = setUpRoutes