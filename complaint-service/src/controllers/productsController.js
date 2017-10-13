const productProvider = require('../data/providers/productProvider')

const querySearch = async (req, res, next) => {
    let {id, name} = req.query
    let db = req.db
    searchConfig = {
        id: id,
        name: name,
        db: db
    }

    try{
        req.products = await productProvider.getProductsAsync(searchConfig)
    } catch(e) {
        return next(e)
    }

    return next();

}

const send = (req, res, next) => {
    return res.status(200).json(req.products)
}

exports.querySearch = [
    querySearch,
    send
];