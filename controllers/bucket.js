const { listBuckets } = require("../services/s3Services");


exports.listBuckets = (req, res) => {
    const buckets = listBuckets();
    return res.json({buckets});
};