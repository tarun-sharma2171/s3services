var express = require('express');
var router = express.Router();
const multer = require("multer");
const path = require("path");
const { getObject, putObject, deleteObject, listObjects } = require("../controllers/object");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `./storage/${req.params.bucket}`)
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

// Routes for object Manipulation
router.get('/getObject/:bucket/:filename', getObject);
router.post('/addObject/:bucket', upload.single('file'), putObject);
router.delete('/deleteObject/:bucket/:filename', deleteObject);
router.get('/list/:bucket', listObjects);


module.exports = router;
