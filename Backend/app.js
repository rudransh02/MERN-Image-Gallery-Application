// Importing necessary modules and files
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const imageModel = require('./models/imageModel');
const fs = require('fs');



// Declaring all required variables for server and database
const app = express();
const port = 8181;
const DBname = "MERN";
const username = 'localhost';
const password = 'localhost';
const databaseURL = `mongodb+srv://${username}:${password}@mern.jucmp8x.mongodb.net/${DBname}?retryWrites=true&w=majority`;


// Connecting to the database and making the server listen
mongoose.connect(databaseURL)
.then(() => {
    console.log(`Connected To The ${DBname} Database!`);
    app.listen(port, () => {
        console.log(`Express Server Live On Port ${port}!`);
    });
})
.catch(() => {
    console.log("Error Connecting With The Database Or Localhost!");
});


// Creating a in-memory storage engine for muter to store the so that the files will stored temporarily in the memory rather than being written to any disk
const storageEngine = multer.memoryStorage();
// Declaring the storage engine defined above and .single('image') specifies that only a single file with the field name 'image' in the submitted form will be accepted for upload
const Upload = multer({ storage: storageEngine }).single('image');


// Request Logger Middleware
app.use((request, response, next) => {
    console.log("New Request Made!");
    console.log("Host : ", request.hostname);
    console.log("Path : ", request.path);
    console.log("Method : ", request.method);
    next();
});


// Declaring a GET Request in order to fetch all the images from the database
app.get('/', (request, response) => {
    imageModel.find()
    .then((data) => {
        response.send(data);
        // response.status(200);
    })
    .catch((error) => {
        console.log(error);
    });
});


// Declaring a GET Request in order to retrieve any image using its ID from the database
app.get('/view-images/:id', (request, response) => {
    const id = request.params.id;
    imageModel.findById(id)
    .then((imageData) => {
        response.status(200);
        response.send(imageData);
    })
    .catch((error) => {
        console.log(error);
    });
});


// Declaring a POST Request in order to upload the images to the database
app.post('/upload', (request, response) => {
    Upload(request, response, (error) => {
        // Uncomment the code below to get the image stored in the PWD whenever an image is uploaded
        // const buffer = Buffer.from(request.file.buffer, 'base64');
        // fs.writeFileSync('image.jpg', buffer);

        if (error)
        {
            console.log(error);
        }
        else
        {
            // Creating an object of the class imageModel and filling in the data
            const Image = new imageModel({
                name: request.file.originalname,
                image: {
                    data: request.file.buffer,
                    contentType: 'image/png'
                }
            });
            // Saving the object in the MongoDB Atlas database's collection
            Image.save()
            .then(() => {
                response.status(200);
                response.send("Image Upload Successful!");
            })
            .catch((error) => {
                console.log(error);
            });
        }
    });
});


// Declaring a DELETE Request to let te user delete images by their ID
app.delete('/delete-image/:id', (request, response) => {
    const id = request.params.id;
    imageModel.findByIdAndDelete(id)
    .then(() => {
        response.status(200);
        response.send("Delete Successful!");
    })
    .catch((error) => {
        console.log(error);
    });
});


// Declaring a 404 Not Found Request
app.use((request, response) => {
    response.status(404);
    response.send("Requested URL Not Found!")
});