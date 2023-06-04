const mongoose = require('mongoose');


//  Extracting the Schema class from the mongoose object 
const Schema = mongoose.Schema;


// Describing the structure of data we will be storing in our imageSchema 
const imageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        // Used to store any image in MIME(Binary Image Data)
        data: Buffer,
        contentType: String
    }
}, {timestamps: true});


// Creating a database model by defining its name and schema(structure of data that'll be stored)
const imageModel = mongoose.model('imageModel', imageSchema);


// Exporting the imageModel we created to use it in other files
module.exports = imageModel;