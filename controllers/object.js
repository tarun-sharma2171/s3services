const { getObject, putObject, deleteObject, listObjects } = require("../services/s3Services");


exports.getObject = (req, res) => {
    try {
        const { bucket, filename } = req.params;
        console.log(req.params)
        const object = getObject(bucket, filename);
        if (!object) {
            return res.status(404).send('Object not found');
        }
        return res.send(object);
    } catch (error) {
        console.log(error)
    }

};

exports.putObject = (req, res) => {
    try {
        console.log(req.file.filename);
        return res.json({ success: true, message: 'File uploaded successfully', fileURL: `http://localhost:3000/storage/${req.params.bucket}/${req.file.filename}` });
        } catch (error) {
        console.log(error)
        return res.status(500).send(error.message ? error.message : "Internal Server Error")
    }

};

exports.deleteObject = (req, res) => {
    const { bucket, filename } = req.params;
    if (deleteObject(bucket, filename)) {
        return res.send('Object deleted successfully');
    } else {
        return res.status(404).send('Object not found');
    }
};

exports.listObjects = (req, res) => {
    try {
        const { bucket } = req.params;
        const objects = listObjects(bucket);
        return res.send(objects);
    } catch (error) {
        console.log(error)
    }

};