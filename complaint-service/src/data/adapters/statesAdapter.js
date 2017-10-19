_ = require('lodash')
const dbToClient = (states) =>{
    clientReadyStates = [];
    _.each(states, (state) =>{
        let clientState = {
            stateId: state.ID,
            name: state.name,
            abbreviation: state.abbreviation
        }
        clientReadyStates.push(clientState)
    })
    return clientReadyStates
}

const growthDbToClient = (startYear, endYear) =>{
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

const totalDbToClient = (totals) =>{
    clientReadyTotals = [];
    _.each(totals, (total) =>{
        let clientTotal = {
            stateId: total.stateID,
            name: total.name,
            total: total.total,
        }
        clientReadyTotals.push(clientTotal)
    })
    return clientReadyTotals
}


const growthOrderBy = (objs, orderBy) =>{
    if (orderBy === "populationDiff"){
       objs = _.orderBy(objs, ['populationDiff'], ['asc']);
    }

    if (orderBy === "-populationDiff"){
        objs = _.orderBy(objs, ['populationDiff'], ['desc']);
    }

    if(orderBy === "growthPercentage"){
        objs = _.orderBy(objs, ['growthPercentage'], ['asc']);
    }

    if(orderBy === "-growthPercentage"){
        objs = _.orderBy(objs, ['growthPercentage'], ['desc']);
    }

    return objs
    
}

exports.growthOrderBy = growthOrderBy;
exports.totalDbToClient = totalDbToClient;
exports.growthDbToClient = growthDbToClient;
exports.dbToClient = dbToClient;