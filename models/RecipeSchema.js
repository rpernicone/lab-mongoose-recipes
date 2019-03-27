const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
       type: String,
    },
    level: {
        type: String,
        enum: ['Amateur Chef','Easy Peasy', 'UltraPro Chef']
    },
    ingredients: {
        type: Array,
    },
    cuisine: {
        type: String,
        required: true,
    },
    dishType: {
        type: String,
        enum: ['Breakfast','Dish','Snack','Drrink','Dessert','Other'],
    },
    image: {
        default: 'https://images.media-allrecipes.com/images/75131.jpg'
    },
    duration: {
        type: Number,
        min: 0,
    },
    creator: {
        type: String,
    },
    created: {
        type: Date,
        default: 23-03-2019,
    }
})