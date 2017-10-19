const companiesRepo = require('../repos/companiesRespository.js');
const companiesAdapter = require('../adapters/companiesAdapter.js');

const getCompaniesAsync = async (searchConfig) => {
    try {
       companies = await companiesRepo.getCompanies(searchConfig)
       companies = companiesAdapter.companyDbToClient(companies)
    } catch(e) {
        throw e
    }
    return companies
}


const getCompanyTotalsAsync = async (searchConfig) => {
    try {
        totals = await companiesRepo.getTotalsAsync(searchConfig)
        totals = companiesAdapter.totalDbToClient(totals)
     } catch(e) {
         throw e
     }
     return totals
}

exports.getCompanyTotalsAsync = getCompanyTotalsAsync
exports.getCompaniesAsync = getCompaniesAsync;