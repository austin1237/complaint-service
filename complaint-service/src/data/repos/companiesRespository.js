const getCompanies = async (searchOptions) => {
    let {id, name, db} = searchOptions;
    let productsQuery = db
    .select()
    .from("companies")

    if (id){
        productsQuery.where("ID", id);        
    }

    if (name){
        productsQuery.where("name", name);
    }

    return productsQuery
}

exports.getCompanies = getCompanies;