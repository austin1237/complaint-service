const statesRepo = require('../repos/statesRespository.js');
const statesAdapter = require('../adapters/statesAdapter.js')
let getStatesAsync = async (searchConfig) => {
    // validator
    // adapter
    try {
       states = await statesRepo.getStates(searchConfig)
       states = statesAdapter.dbToClient(states)
    } catch(e) {
        throw e
    }
    return states
}

exports.getStatesAsync = getStatesAsync;