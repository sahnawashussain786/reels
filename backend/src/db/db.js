const mongoose = require('mongoose');


function connectDB(){
    mongoose.connect("mongodb://localhost:27017/mydatabase/food-view")
    .then(()=>{
        console.log();
        
    })
    .catch((err)=>{
        console.log("Mongodb connection error:", err);
        
    })
}

module.exports = connectDB;