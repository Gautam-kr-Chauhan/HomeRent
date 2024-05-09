const express=require('express');
const router=express.Router();
const Home=require('../models/home')
const multer=require('multer')
const fs=require('fs');
const { type } = require('os');
// image upload
var storage=multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname);
    }
});

var upload=multer({
    storage:storage,

}).single("image");

//Insert an user into data base rout
router.post('/add',upload,(req,res)=>{
        const home=new Home({
        locality:req.body.locality,
        bhkType:req.body.bhkType,
        rent:req.body.rent,
        isFurnished:req.body.isFurnished,
        address:req.body.address,
        image:req.file.filename,
    });
    
    try {
        home.save();  
        req.session.message={
            type:'success',
            message:'User added successfully'
        };
        res.json(home);    
    } catch (err) {
        console.log(err);
        res.json({ message: err.message, type: 'danger' });
    }
    
});

//get all user users
router.get('/', async (req,res)=>{
    
    try{
        let homes = await Home.find().exec();
        res.json(homes);
        
    }
    catch(err){
        res.json({message:err.message,type:'danger'}); 
    }
    
    
});
// router.get('/add',(req,res)=>{
//     res.render('add_users',{title:'Add user'})
// })

//Edit user
router.get('/edit/:id',async (req,res)=>{
    let id=req.params.id;
    try{
        let user=await User.findById(id);
        if(user==null){
            res.redirect('/');
        }
        else{
            res.render('edit_user',{
                title:'edit user',
                user:user})
        }
    }
    catch(err){
        res.redirect('/');
    }
        
});

// //update user route
// router.post('/update/:id',upload,async (req,res)=>{
//     console.log("function has been called")
//     let id=req.params.id;
//     let new_image='';
//     if(req.file){
//         new_image=req.file.filename;
//         try{
//             fs.unlinkSync("./uploads/"+req.body.old_image);
//         }
//         catch(err){
//             console.log(err)
//         }
//     }
//     else{
//         new_image=req.body.old_image;
//     }
//     try{
//         await User.findByIdAndUpdate(id,{
//             name:req.body.name,
//             email:req.body.email,
//             phone:req.body.phone,
//             image:new_image
//         })
//         //console.log(result);
//         req.session.message={
//             type:'success',
//             message:'User updated sucessfully!'
//         }
//         res.redirect('/');
//     }
//     catch (err){
//         console.log(err);
//         res.json({message:err.message,type:'danger'})
//     }
    

// });
// //delete user route
// router.get('/delete/:id',async(req,res)=>{
//     let id=req.params.id;
//     try{
//         deleted_user=await User.findByIdAndDelete(id);
//         console.log(deleted_user.name+" has deleted")
//         if (deleted_user.image!='') {
//             try{
//                 fs.unlinkSync('./uploads/'+deleted_user.image);
//             }
//             catch(err){
//                 console.log(err);
//             }
            
//         } 
//         req.session.message={
//             type:'info', 
//             message:'User deleted sucessfully!'
//         }
//         res.redirect('/');
//     }
//     catch(err){
//         res.json({meassage:err.message })
//     }
    
// })

module.exports=router;