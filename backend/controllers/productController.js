const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const Project = require("../models/productModels");
const Package = require("../models/packageModel")

exports.getProjects=catchAsyncError(async (req, res, next) => {
  const projects = await Project.find();
  await new Promise(resolve => setTimeout(resolve,1000))
    res.status(200).json({
        success:true,
        projects
    })
})

exports.getSingleProject = catchAsyncError(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(new ErrorHandler("Product not found", 400));
  }

  //  await new Promise(resolve => setTimeout(resolve,2000))
  res.status(201).json({
    success: true,
    project
  });
});

exports.newProject = catchAsyncError(async (req, res, next) => {
    
    let image;
  
    let BASE_URL = `${req.protocol}://${req.get('host')}`
    
   if (req.file) {
      image = `${BASE_URL}/uploads/project/${req.file.originalname}`
   }

    req.body.image = image;
  
    req.body.user = req.user.id;
    const product = await Project.create(req.body);
    res.status(201).json({
      success: true,
      product
    });
  });

  exports.updateProject= catchAsyncError(async (req, res, next) => {
    let project = await Project.findById(req.params.id);
  
    let image;

    let  BASE_URL = `${req.protocol}://${req.get('host')}`
    
   if (req.file) {
      image = `${BASE_URL}/uploads/project/${req.file.originalname}`
   }

    req.body.image = image;
    if (!project) {
      res.status(404).json({
        success: true,
        message: "Product not found",
      });
    }
  
    project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      success: true,
      project,
    });
  });

  exports.deleteProject = catchAsyncError(async (req, res, next) => {
    let project = await Project.findById(req.params.id);
  
    if (!project) {
      res.status(404).json({
        success: true,
        message: "Project not found",
      });
    }
    await project.deleteOne();
  
    res.status(201).json({
      success: true,
      message: "project deleted",
    });
  });





  exports.createPackage = catchAsyncError(async (req,res,next)=>{
    const {budget,standard,premium,luxury} = req.body;
    const package = await Package.create(
      {
        budget,
        standard,
        premium,
        luxury
        
      }
    );
    res.status(201).json({
      success: true,
      package
    });
  })

  exports.getPackage=catchAsyncError(async (req, res, next) => {
    const package = await Package.find();
      res.status(200).json({
          success:true,
          package
      })
  })

  exports.updatePackage= catchAsyncError(async (req, res, next) => {
    let package = await Package.findById(req.params.id);
    if (!package) {
      res.status(404).json({
        success: true,
        message: "Project not found",
      });
    }
    let newPackageData = {
      budget:req.body.budget,
      standard:req.body.standard,
      premium:req.body.premium,
      luxury:req.body.luxury
   }
     package = await Package.findByIdAndUpdate(req.params.id,newPackageData)
    res.status(200).json({
       success:true,
       package
    })
 })



 