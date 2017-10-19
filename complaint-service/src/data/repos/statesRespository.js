const getStates = async (searchOptions) => {
    let {id, name, abbreviation, db} = searchOptions;
    let statesQuery = db
    .select()
    .from("states")

    if (id){
        statesQuery.where("ID", id);        
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
    .select("complaints.stateID", "states.name")
    .count('* as total')
    .from("complaints")

    totalsQuery.innerJoin('states', 'complaints.stateID', 'states.ID')
    
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