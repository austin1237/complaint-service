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

exports.companyDbToClient = companyDbToClient