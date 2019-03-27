const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const data = require('./data.js');
const Recipe = require('./models/RecipeSchema')

mongoose.connect('mongodb://localhost/recipeApp',{useNewUrlParser: true})
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

// Recipe.create(data =>{

// }).then(data => {
//  console.log(recipes)
// })