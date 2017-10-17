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

exports.getCompaniesAsync = getCompaniesAsync;