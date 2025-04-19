const projects = require("../data/projects.json");
const Project = require("../models/productModels");
const dotenv = require('dotenv');
const connectDatabase= require("../config/database")



dotenv.config({path:'backend/config/config.env'});
connectDatabase();


const seedProjects=async()=>{
   try{
    await Project.deleteMany();
    console.log("project deleted");
   await Project.insertMany(projects);
   console.log("all projects added");
   }catch(error){
    console.log(error);
   }
   process.exit();
}

seedProjects();