const getComplaintsAsync = async (searchOptions) => {
    let {ID,companyID, productID, issueID, timely, disputed, db, stateID} = searchOptions;
    let complaintsQuery = db
    .select()
    .from("complaints")

    if (ID){
        complaintsQuery.where("ID", ID);        
    }

    if (companyID){
        complaintsQuery.where("companyID", companyID);
    }

    if (productID){
        complaintsQuery.where("productID", productID);
    }

    if (stateID){
        complaintsQuery.where("stateID", stateID);
    }

    if (issueID){
        complaintsQuery.where("issueID", issueID);
    }

    if (disputed){
        complaintsQuery.where("disputed", disputed);
    }

    if (timely){
        complaintsQuery.where("timely", timely);
    } 

    return complaintsQuery
}

exports.getComplaintsAsync = getComplaintsAsync;