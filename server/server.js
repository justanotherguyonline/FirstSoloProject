const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;     //PORT SHOULD CHANGE. MAKE SURE TO CHANGRE THIS BACK **********************************************************
const router = express.Router();
// const mongoose = require('mongoose');
// const mongoURI = process.env.NODE_ENV === 'production' ? 'mongodb://localhost/3000' : 'mongodb://localhost/8080';
// mongoose.connect(mongoURI);
app.use(express.json());


const controller = require('./controller');
// if (process.env.ENV_NODE=production){
//   app.use('/static', express.static(path.join(__dirname, '/build/')))
// } else {
//   app.get('/', (req,res) => {
//     return res.status(200).sendFile(path.join(__dirname, '../index.html'));
//   });
// }
app.get('/', (req,res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.get('./plants', controller.getAllPlants, (req, res) => {
  return res.status(200).send({plants: res.locals.plants});
})

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});