var express = require('express');
var router = express.Router();
const bucket = require("./bucket");
const object = require("./object");


router.use('/bucket', bucket);
router.use('/object', object);



module.exports = router;
