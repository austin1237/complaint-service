const statesRepo = require('../repos/statesRespository.js');
const statesAdapter = require('../adapters/statesAdapter.js')
const populationRepo = require('../repos/populationRespository.js');
let getStatesAsync = async (searchConfig) => {
    try {
       states = await statesRepo.getStates(searchConfig)
       states = statesAdapter.dbToClient(states)
    } catch(e) {
        throw e
    }
    return states
}

let getPopulationsGrowthAsync = async (searchOptions) => {

    startSearchConfig = {
        year: searchOptions.startYear,
        stateID: searchOptions.stateID,
        db: searchOptions.db
    }
    endSearchConfig = {
        year: searchOptions.endYear,
        stateID: searchOptions.stateID,
        db: searchOptions.db
    }
    promises =[
        populationRepo.getPopulationsAsync(startSearchConfig),
        populationRepo.getPopulationsAsync(endSearchConfig),
    ]
    try{
        results = await Promise.all(promises)
        startYear = results[0]
        endYear = results[1]
        growth = statesAdapter.growthDbToClient(startYear, endYear)
        return growth
    } catch(err){
        throw err
    }
}

exports.getPopulationsGrowthAsync = getPopulationsGrowthAsync;
exports.getStatesAsync = getStatesAsync;