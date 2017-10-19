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
    let {stateId, year, startYear, endYear, orderBy} = req.query
    let db = req.db

    searchConfig = {
        stateID: stateId,
        db: db,
        startYear: startYear,
        endYear: endYear,
        orderBy: orderBy
    }

    try{
        req.response = await stateProvider.getPopulationsGrowthAsync(searchConfig)
    } catch(e) {
        return next(e)
    }

    return next();

}

const totalSearch = async (req, res, next) => {
    let {productId, companyId, issueId, stateId, orderBy} = req.query
    let db = req.db
    searchConfig = {
        proudctId: productId,
        companyId: companyId,
        issueId: issueId,
        stateId: stateId,
        orderBy: orderBy,
        db: db
    }

    try{
        req.response = await stateProvider.getStateTotalsAsync(searchConfig)
    } catch(e) {
        return next(e)
    }

    return next();

}



const send = (req, res, next) => {
    return res.status(200).json(req.response)
}

exports.totalSearch =[
    totalSearch,
    send
]

exports.querySearch = [
    querySearch,
    send
];

exports.growthSearch = [
    growthSearch,
    send
]