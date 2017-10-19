const getStates = async (searchOptions) => {
    let {stateId, name, abbreviation, db} = searchOptions;
    let statesQuery = db
    .select()
    .from("states")

    if (stateId){
        statesQuery.where("ID", stateId);        
    }

    if (name){
        statesQuery.where("name", name);
    }

    if (abbreviation){
        statesQuery.where("abbreviation", abbreviation);
    }

    return statesQuery
}

const getTotalsAsync = async (searchOptions) => {
    let {productId, companyId, issueId, stateId, orderBy} = searchOptions;
    let totalsQuery = db
    .select("complaints.stateID")
    .count('* as total')
    .from("complaints")

    
    if (productId){
        totalsQuery.where("productID", productId);        
    }

    if (companyId){
        totalsQuery.where("companyID", companyId);
    }

    if(issueId){
        totalsQuery.where("issueID", issueId);
    }

    if(stateId){
        totalsQuery.where("stateID", stateId);
    }
    
    totalsQuery.groupBy("stateID")

    if (orderBy === "-total"){
        totalsQuery.orderBy("total", "desc")
    }

    if (orderBy === "total"){
        totalsQuery.orderBy("total", "asc")
    }
    
    return totalsQuery

}

exports.getTotalsAsync = getTotalsAsync;
exports.getStates = getStates;