// models/s3Model.js
const fs = require('fs');
const path = require('path');

const BASE_PATH = path.join(__dirname, '../storage');

exports.getObject = (bucket, filename) => {
    const filePath = path.join(BASE_PATH, bucket, filename);
    try {
        return fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
        return null;
    }
};

exports.deleteObject = (bucket, key) => {
    const filePath = path.join(BASE_PATH, bucket, key);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        return true;
    }
    return false;
};

exports.listObjects = (bucket) => {
    const bucketPath = path.join(BASE_PATH, bucket);
    if (!fs.existsSync(bucketPath)) {
        return [];
    }
    return fs.readdirSync(bucketPath);
};

exports.listBuckets = () => {
    const bucketsPath = path.join(BASE_PATH);
    if (!fs.existsSync(bucketsPath)) {
        return [];
    }
    return fs.readdirSync(bucketsPath);
};