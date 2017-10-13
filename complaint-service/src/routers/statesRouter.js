const statesController = require('../controllers/statesController.js');

// router.get('/states', statesController.getStates);
// router.get('/states/:id', statesController.getStateByID);

let setUpRoutes = (app) =>{
    app.get('/states', statesController.querySearch);
}

exports.setUpRoutes = setUpRoutes