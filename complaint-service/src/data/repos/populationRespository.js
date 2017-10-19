// Get company Id from companies where title "bank of america"
// Get get stateIds from complaints where companyId = bank of america

const getPopulationsAsync = async (searchOptions) => {
    let {stateID, year, db} = searchOptions;
    let populationQuery = db
    .select("states.ID as stateID", "states.name as stateName")
    .sum('populations.total as population')
    .from("states")
    .innerJoin('towns', 'states.ID', 'towns.stateID')
    .innerJoin('populations', 'towns.ID', 'populations.townID')


    if (stateID){
        subquery = db
        .select("towns.ID")
        .from("towns")
        .whereIn("towns.stateID", stateID)
    }else{
        subquery = db
        .select("towns.ID")
        .from("towns")
    }
    populationQuery.whereIn("towns.ID", subquery);

    if (year){
        populationQuery.where("populations.year", year);        
    }


    populationQuery.groupBy("stateID")

    return populationQuery
}

exports.getPopulationsAsync = getPopulationsAsync;