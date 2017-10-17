_ = require('lodash');

let complaintClientToDb = (clientComplaint) => {
    dbComplaint = {};
    dbComplaint.ID = clientComplaint.complaintId
    dbComplaint.companyID = clientComplaint.companyId
    dbComplaint.productID = clientComplaint.productId
    dbComplaint.stateID = clientComplaint.stateId
    dbComplaint.issueID =clientComplaint.issueId 
    dbComplaint.dateSent = clientComplaint.dateSent
    if (clientComplaint.timely){
        dbComplaint.timely = convertBoolForDB(clientComplaint.timely)
    }

    if(clientComplaint.disputed){
        dbComplaint.disputed = convertBoolForDB(clientComplaint.disputed)
    }
    return dbComplaint
}

let complaintDbToClient = (dbComplaints) =>{
    clientReadyComplaints = [];
    _.each(dbComplaints, (dbComplaint) =>{
        clientComplaint = {};
        clientComplaint.complaintId = dbComplaint.ID
        clientComplaint.companyId = dbComplaint.companyID
        clientComplaint.productId = dbComplaint.productID
        clientComplaint.issueId = dbComplaint.issueID
        clientComplaint.stateId = dbComplaint.stateID
        clientComplaint.dateSent = dbComplaint.dateSent
        clientComplaint.narrative = dbComplaint.narrative
        clientComplaint.publicResponse = dbComplaint.publicResponse
        clientComplaint.timely = convertBoolForClient(dbComplaint.timely)
        clientComplaint.disputed = convertBoolForClient(dbComplaint.disputed)
        clientReadyComplaints.push(clientComplaint)
    })

   return clientReadyComplaints;

}

let convertBoolForDB = (clientBool) =>{

    if (clientBool === "true"){
        return 1;
    }
    
    if (clientBool === "false"){
        return 0;
    }

    return undefined

}

let convertBoolForClient = (clientBool) =>{
    if (clientBool === 1){
        return true;
    }
    
    if (clientBool === 0){
        return false;
    }
}


exports.complaintDbToClient = complaintDbToClient
exports.complaintClientToDb = complaintClientToDb