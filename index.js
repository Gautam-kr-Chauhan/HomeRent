const express=require("express");
const mongoose=require('mongoose');
const session=require('express-session')
const cors=require("cors");
const app=express()
const path=require('path')

port=3000
//db connection
const db_uri='mongodb://localhost:27017/HomeRent'

mongoose.connect(db_uri);
const db=mongoose.connection;
db.on('error',(error)=>{
    console.log(error)
});
db.once('open',()=>{
    console.log("Connected to the database !")
    
});

//middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())
app.use(session({
    secret:'my secret key',
    saveUninitialized:true,
    resave:false,

}))
app.use((req,res,next)=>{
    res.locals.message=req.session.message;
    delete req.session.message;
    next();
});

app.use(express.static('uploads'));
app.use('/images', express.static(path.join(__dirname, './uploads')));
//router prefix
app.use("",require('./routes/routes'));


app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`);
})