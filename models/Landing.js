const mongoose = require('mongoose');
const { Schema } = mongoose;

const TextSchema = new Schema({
    name : {
        type : String,
    },
    Title: {
        type: String,
    },
    Description: {
        type: String,
        require: true
    },
    SubDescription: {
        type: String,
    }
});

const TextTable = mongoose.model('Texts', TextSchema);
module.exports = TextTable;