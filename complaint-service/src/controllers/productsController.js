const productProvider = require('../data/providers/productProvider')

const querySearch = async (req, res, next) => {
    let {productId, name} = req.query
    let db = req.db
    searchConfig = {
        id: productId,
        name: name,
        db: db
    }

    try{
        req.response = await productProvider.getProductsAsync(searchConfig)
    } catch(e) {
        return next(e)
    }

    return next();

}

const totalSearch = async (req, res, next) => {
    let {productId, companyId, issueId, stateId} = req.query
    let db = req.db
    searchConfig = {
        productId: productId,
        companyId: companyId,
        issueId: issueId,
        stateId: stateId,
        db: db
    }

    try{
        req.response = await productProvider.getProductsTotalsAsync(searchConfig)
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

exports.totalSearch = [
    totalSearch,
    send
];