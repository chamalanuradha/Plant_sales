const express = require("express");
const {mongoose } = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

//import routes
const postRoutes = require('./routes/plants');

//app middleware
app.use(bodyParser.json());
//route middleware
app.use(postRoutes);

const PORT =9000;
const DB_URL= 'mongodb+srv://user1:user1@plant.iosa2cz.mongodb.net/PlantSelling?retryWrites=true&w=majority'
mongoose.set('strictQuery', true);
mongoose.connect(DB_URL)
.then(()=>{
  console.log("DB connected")
})
.catch((err) =>console.log("DB not connected",err));
app.listen(PORT,()=>{
    console.log(`App is run on ${PORT}...`)
})