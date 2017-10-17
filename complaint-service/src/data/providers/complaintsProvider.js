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

exports.getComplaintsAync = getComplaintsAync;