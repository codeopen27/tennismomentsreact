@@ -0,0 +1,28 @@
// This is the main file of your express server!
// Make sure to npm init -y first, and install your dependencies with `npm i express nodemon multer`
// Also don't forget to add the node_modules folder to a .gitignore, and start a git repository!

const express = require('express');
const server = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // The most basic multer middleware configuration you can have

// This controller serves the endpoint below:
// http://localhost:8000/imageUpload
// This endpoint is concerned with receiving an image, and storing that in the server. As a future step, storing the image
// should be done by a third party provider, like cloudinary or firebase!
server.post('/imageUpload', upload.single('tennisImages'), (req, res) => {
  // handle the image here
  res.status(200).send(req.file.path)
});

// This controller serves the endpoint below:
// http://localhost:8000/getImages
// This endpoint is concerned with serving images! Incrementing from here would be to serve images based on some
// sort of filtering condition (like a text input from the client).
server.get('getImages', (req, res) => {
  const imageLocation = req.body.imgLocation
  res.sendFile(imageLocation)
})

server.listen(8000, () => console.log('API running on port 8000'));