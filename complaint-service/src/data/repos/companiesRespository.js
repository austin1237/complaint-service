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

exports.getCompanies = getCompanies;