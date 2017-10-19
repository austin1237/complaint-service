const complaintsProvider = require("../data/providers/complaintsProvider");

const querySearch = async (req, res, next) => {
  let { complaintId, companyId, productId, issueId, stateId } = req.query;
  let { dateSent, timely, disputed } = req.query;
  let db = req.db;
  searchConfig = {
    query: {
      complaintId: complaintId,
      companyId: companyId,
      productId: productId,
      issueId: issueId,
      stateId: stateId,
      dateSent: dateSent,
      timely: timely,
      disputed: disputed
    },
    db: db
  };

  try {
    req.response = await complaintsProvider.getComplaintsAync(searchConfig);
  } catch (e) {
    return next(e);
  }

  return next();
};

const send = (req, res, next) => {
  return res.status(200).json(req.response);
};

exports.querySearch = [querySearch, send];
