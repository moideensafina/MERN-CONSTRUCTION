const express = require('express');
const { getProjects, newProject, updateProject, deleteProject, getSingleProject, createPackage, updatePackage, getPackage } = require('../controllers/productController');
const { isAuthenticateUser } = require('../middleware/authenticate');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const upload = multer({storage:multer.diskStorage({
    destination:function(req,file,cb){
            cb(null,path.join(__dirname,'..','uploads/project') )
    },
    filename:function(req,file,cb){
            cb(null,file.originalname)
    }
})
})  

router.route('/projects').get(getProjects)
router.route('/project/:id').get(getSingleProject)
router.route('/admin/project/new').post(isAuthenticateUser,upload.single('image'),newProject)
router.route('/admin/project/:id').put(isAuthenticateUser,upload.single('image'),updateProject)
router.route('/admin/project/:id').delete(isAuthenticateUser,deleteProject)


router.route('/admin/package/create').post(isAuthenticateUser,createPackage)
router.route('/package').get(getPackage)
router.route('/admin/package/update/:id').put(isAuthenticateUser,updatePackage)





module.exports = router