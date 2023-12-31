require("dotenv").config()
const { config } = require("dotenv");
var express = require('express');
var app = express();
var http = require('http'),
    fs = require('fs'),
    ccav = require('./ccavutil.js'),
    qs = require('querystring'),
    ccavReqHandler = require('./ccavRequestHandler.js'),
    ccavResHandler = require('./ccavResponseHandler.js');

app.use(express.static('public'));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);

app.get("/",(req,res)=>{
    res.send("Server is Started")
})
app.get('/about', function (req, res){
    	res.render('dataFrom.html');
});

app.post('/ccavRequestHandler', function (request, response){
	ccavReqHandler.postReq(request, response);
});


app.post('/ccavResponseHandler', function (request, response){
        ccavResHandler.postRes(request, response);
});

app.listen(process.env.PORT,()=>{console.log(`Server is started on ${process.env.PORT}`)});
