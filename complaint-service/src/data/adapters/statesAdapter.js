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

exports.dbToClient = dbToClient