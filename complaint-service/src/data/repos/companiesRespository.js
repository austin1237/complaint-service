const getCompanies = async (searchOptions) => {
    let {id, name, db} = searchOptions;
    let companiesQuery = db
    .select()
    .from("companies")

    if (id){
        companiesQuery.where("ID", id);        
    }

    if (name){
        companiesQuery.where("name", name);
    }

    return companiesQuery
}

const getTotalsAsync = async (searchOptions) => {
    let {productId, companyId, issueId, stateId} = searchOptions;
    let totalsQuery = db
    .select("complaints.companyID", "companies.name")
    .count('* as total')
    .from("complaints")

    totalsQuery.innerJoin('companies', 'complaints.companyID', 'companies.ID')
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
    
    totalsQuery.groupBy("companyID")
    

    return totalsQuery

}

exports.getTotalsAsync = getTotalsAsync
exports.getCompanies = getCompanies;