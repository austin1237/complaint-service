_ = require('lodash')
let dbToClient = (states) =>{
    clientReadyStates = [];
    _.each(states, (state) =>{
        let clientState = {
            id: state.ID,
            name: state.name,
            abbreviation: state.abbreviation
        }
        clientReadyStates.push(clientState)
    })
    return clientReadyStates
}

let growthDbToClient = (startYear, endYear) =>{
    popHash = {};
    growthArray = [];
    _.each(startYear, (pop) =>{
        if (!popHash[pop.stateID]){
            popHash[pop.stateID] = {}
        }
        popHash[pop.stateID].startYear = pop 
    });

    _.each(endYear, (pop) =>{
        popHash[pop.stateID].endYear = pop
    })

    _.each(popHash, (pop, stateID) =>{
        populationDiff = pop.endYear.population - pop.startYear.population
        growthPercentage = (populationDiff / pop.startYear.population) * 100
        growthObj = {
            stateId: pop.startYear.stateID,
            name: pop.startYear.name,
            populationDiff: populationDiff,
            growthPercentage: growthPercentage
        }
        growthArray.push(growthObj)
    })

    return growthArray
}

exports.growthDbToClient= growthDbToClient
exports.dbToClient = dbToClient