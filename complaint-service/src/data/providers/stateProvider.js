const statesRepo = require('../repos/statesRespository.js');
const statesAdapter = require('../adapters/statesAdapter.js');
const populationRepo = require('../repos/populationRespository.js');

const getStatesAsync = async (searchConfig) => {
    try {
       states = await statesRepo.getStates(searchConfig)
       states = statesAdapter.dbToClient(states)
    } catch(e) {
        throw e
    }
    return states
}

const getPopulationsGrowthAsync = async (searchOptions) => {
    let {stateId, startYear, endYear, db, orderBy} = searchOptions
    startSearchConfig = {
        year: startYear,
        stateID: stateId,
        db: db
    }
    endSearchConfig = {
        year: endYear,
        stateID: stateId,
        db: db
    }
    promises = [
        populationRepo.getPopulationsAsync(startSearchConfig),
        populationRepo.getPopulationsAsync(endSearchConfig)
    ]
    try{
        results = await Promise.all(promises)
        startYear = results[0]
        endYear = results[1]
        growth = statesAdapter.growthDbToClient(startYear, endYear)
        growth = statesAdapter.growthOrderBy(growth, orderBy)
        return growth
    } catch(err){
        throw err
    }
}

const getStateTotalsAsync = async (searchConfig) => {
    try {
        totals = await statesRepo.getTotalsAsync(searchConfig)
        totals = statesAdapter.totalDbToClient(totals)
     } catch(e) {
         throw e
     }
     return totals
}

exports.getStateTotalsAsync = getStateTotalsAsync;
exports.getPopulationsGrowthAsync = getPopulationsGrowthAsync;
exports.getStatesAsync = getStatesAsync;