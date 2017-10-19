_ = require('lodash');

let companyDbToClient = (companies) =>{
    clientReady = [];
    _.each(companies, (company) =>{
        let clientCompany = {
            companyId: company.ID,
            name: company.name,
        }
        clientReady.push(clientCompany)
    })
    return clientReady;
}

let totalDbToClient = (totals) =>{
    clientReadyTotals = [];
    _.each(totals, (total) =>{
        let clientTotal = {
            companyId: total.companyID,
            name: total.name,
            total: total.total,
        }
        clientReadyTotals.push(clientTotal)
    })
    return clientReadyTotals
}


exports.totalDbToClient = totalDbToClient;
exports.companyDbToClient = companyDbToClient