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

exports.getStates = getStates;