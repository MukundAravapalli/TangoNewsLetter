const express = require("express");
const app= express();
const https = require("https");
const bodyParser= require("body-parser");
const request = require("request");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.get("/public/css/success.css", function(req,res){
    res.sendFile(__dirname+"/public/css/success.css");
});

app.get("/public/css/failure.css", function(req,res){
    res.sendFile(__dirname+"/public/css/failure.css");
});

app.post("/",function(req,res){ 
    const userFirstName = req.body.firstName;
    const userLastName = req.body.lastName;
    const userEmail = req.body.email;
    console.log("First name: " +userFirstName+", Last Name: "+userLastName+", Email: "+userEmail);

    const data ={
        members: [
            {
                email_address: userEmail,
                status: "subscribed",
                merge_fields:{
                    FNAME:userFirstName,
                    LNAME:userLastName
                }
            }
        ]
    }


    const jsonData = JSON.stringify(data);
    const url="https://us12.api.mailchimp.com/3.0/lists/enter your auidence ID here";
    const options={
        method:"post",
        auth:"Crabb:enter your API key here"
        
    }

    const request = https.request(url, options, function(response){

        if (response.statusCode == 200){
            res.sendFile(__dirname+"/success.html");
        }else{
            res.sendFile(__dirname+"/failure.html");
        }// ifelse

        response.on("data", function(data){
            console.log("Response code: "+ data.responsecode)
            console.log(JSON.parse(data));
        });
    });// https.req

    request.write(jsonData);
    request.end();

}); //app.post

app.post("/failure", function(req, res){
    res.redirect("/");
});




app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running");
});


