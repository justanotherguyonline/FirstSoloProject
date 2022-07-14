const Plant = require('./models/planetmodels');
const Food = require('./models/foodmodel');

//main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/test');
// }

controller = {};

controller.getAllPlants = (req, res, next) => {
  // try{
  //   const allPlants = await Plant.find({}, (err, plants) => {
  //   res.locals.plants = 5;
  //   console.log(res.locals.plants);
  //   }
  // )}
  // catch{err => next(err)

  // }
  console.log(5);
  res.locals.plants = 5;
  return next()
}
module.exports = controller;