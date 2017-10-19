const stateProvider = require('../data/providers/stateProvider')
const querySearch = async (req, res, next) => {
    let {id, name, abbreviation} = req.query
    let db = req.db
    searchConfig = {
        id: id,
        name: name,
        abbreviation: abbreviation,
        db: db
    }

    try{
        req.response = await stateProvider.getStatesAsync(searchConfig)
    } catch(e) {
        return next(e)
    }

    return next();

}

const growthSearch = async (req, res, next) =>{
    let {stateId, year, startYear, endYear} = req.query
    let db = req.db

    searchConfig = {
        stateID: stateId,
        db: db,
        startYear: startYear,
        endYear: endYear
    }

    try{
        req.response = await stateProvider.getPopulationsGrowthAsync(searchConfig)
    } catch(e) {
        return next(e)
    }

    return next();

}



const send = (req, res, next) => {
    return res.status(200).json(req.response)
}

exports.querySearch = [
    querySearch,
    send
];

exports.growthSearch = [
    growthSearch,
    send
]