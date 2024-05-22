const { listBuckets } = require("../services/s3Services");


exports.listBuckets = (req, res) => {
    try {
        const buckets = listBuckets();
        return res.json({
            statusCode: 200,
            result: buckets
        });
    } catch (error) {
        console.log(error);
        return res.json({
            statusCode: 500,
            message: error.message ? error.message : "Internal Server Error"
        })
    }

};