var express = require('express');
var router = express.Router();
const { listBuckets } = require("../controllers/bucket");

router.get('/list', listBuckets);


module.exports = router;
