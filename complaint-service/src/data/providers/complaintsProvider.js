const complaintsRepo = require('../repos/complaintsRespository.js');
const complaintsAdapter = require('../adapters/complaintAdapter.js');

const getComplaintsAync = async (searchConfig) => {
    let {query, db} = searchConfig
    try {
        dbSearchConfig = complaintsAdapter.complaintClientToDb(query)
        dbSearchConfig.db = db
        complaints = await complaintsRepo.getComplaintsAsync(dbSearchConfig)
        complaints = complaintsAdapter.complaintDbToClient(complaints)
    } catch(e) {
        throw e
    }
    return complaints
}

const getCompaniesTotalsAsync = async (searchConfig) => {
    try {
        totals = await complaintsRepo.getTotals(searchConfig)
        totals = complaintsRepo.totalDbToClient(totals)
     } catch(e) {
         throw e
     }
     return totals
}

exports.getCompaniesTotalsAsync = getCompaniesTotalsAsync;
exports.getComplaintsAync = getComplaintsAync;