//all dependencies for the server
const mongoose = require("mongoose")
const express = require("express")
const url = require("./url")
var bodyParser = require('body-parser');
const {createShortUrl, openShortUrl, findShortUrl} = require("./controller");
app = express()

//connect to the mongoDB database locally
var mongoDB = "mongodb://localhost/Database1"
mongoose.connect(mongoDB, {useNewUrlParser:true, useUnifiedTopology: true})

//allows me to use a .ejs file for the view instead of html
app.set("view engine", "ejs")

//activates body-parser
app.use(express.urlencoded({extended:true}))
app.use(express.json());

//render page on server
app.get('/', (req, res) => {
    res.render("index")
})

//once the shorten button is pressed, then call this post to create the short url
app.post("/long", async (req, res) =>{
   await req.createShortUrl
  
   res.redirect('/')
})

//get the long link from the database using function defined in "controller.js"
app.get('/:unique', openShortUrl)

app.post('/short', async (req,res) =>{
     await req.findShortUrl
    res.redirect('/')
 })

app.get('/:longUrl', url.findOne)

//start server on port 5000 (connect to "http://localhost:5000" on browser)
app.listen(process.env.PORT || 5000);

//console.log("111")

