const companyProvider = require('../data/providers/companyProvider')

const querySearch = async (req, res, next) => {
    let {companyId, name} = req.query
    let db = req.db
    searchConfig = {
        id: companyId,
        name: name,
        db: db
    }

    try{
        req.response = await companyProvider.getCompaniesAsync(searchConfig)
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