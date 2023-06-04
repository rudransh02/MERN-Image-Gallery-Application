// Importing necessary modules and files
const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const imageModel = require('./models/imageModel');



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

const storage = multer.memoryStorage();

const Upload = multer({ storage: storage }).single('testImage');


// // Working with multer module
//     const Storage = multer.diskStorage({
//         destination: 'imageUploads',
//         filename: (request, file, callBack) => {
//             callBack(null, file.originalname);
//         }
//     });


//     // Someting undefined - ChatGPT
//     const Upload = multer({
//         storage: Storage
//     })
//     .single('testImage');


// Request Logger Middleware
app.use((request, response, next) => {
    console.log("New Request Made!");
    console.log("Host : ", request.hostname);
    console.log("Path : ", request.path);
    console.log("Method : ", request.method);
    next();
});


// GET Request
app.get('/', (request, response)=> {
    response.status(200);
    response.send("GET");
});

let myData;
// POST Request
app.post('/upload', (request, response) => {



    Upload(request, response, (error) => {

        myData = request.file.buffer;
        const buffer = Buffer.from(myData, 'base64');
        fs.writeFileSync('image.jpg', buffer);

        // console.log(myData);
    // console.log(request.body);
    // console.log(request.file);

        if (error)
        {
            console.log(error);
        }
        else
        {
            const Image = new imageModel({
                name: request.body.name,
                image: {
                    data: request.file.buffer,
                    contentType: 'image/png'
                }
            });
            Image.save()
            .then(() => {
                response.status(200);
                response.send("Upload Successful!")
            })
            .catch((error) => {
                console.log(error);
            });
        }
    });
});


// 404 Not Found Request
app.use((request, response) => {
    response.status(404);
    response.send("Requested URL Not Found!")
});


