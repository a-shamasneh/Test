var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var staticFiles = require ('serve-static');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// log all api traffic to console
app.use('api/*',req=>{
    console.log(req);
    next();
});

var users=[{},{},{}];
var user={ password:123123};
app.post('/api/login', function (req, res) {

    if(req.body && req.body.email && req.body.password){
        if(req.body.email == '123@123.123'){

            if(req.body.password == user.password) {
                user ={
                    name:"Alex Jones"
                    , email:req.body.email
                    , password:req.body.password
                    , profilePic:"http://lorempixel.com/500/500/people/"
                };
                res.send(200, user);
            }
            else
                res.send(400,{message:'hey lady, you sent me the wrong password.'});

        }else
            res.send(400,{message:'hey man, you sent me the wrong email.'});

    }
    else
        res.send(422,{message:'yo! you miss`n some stuff!'});
});

// handel change picture 
app.post('/api/ChangePicture', function (req, res) {
    console.log(req);
    if(req.body.pic){
        user.profilePic=req.body.pic;
        res.send(200,{newPic:user.profilePic});
    }else{
        res.send(400,{message:'OOps!! you cannot update picture with empty link'});
    }
       
 });


 // handel change password
app.post('/api/ChangePassword', function (req, res) {
    console.log(req);
    if(req.body.newPass){
        user.password=req.body.newPass;
        res.send(200,null);
    }else{
        res.send(400,{message:'OOps!! you cannot update password with empty text'});
    }
       
 });
var serve = staticFiles('public/', {'index': ['index.html']});
app.use(serve);


app.listen(3000);
console.log("running on http://localhost:3000");