const mongoose = require("mongoose")
const express = require("express")
const url = require("./url")
var bodyParser = require('body-parser');
const {createShortUrl, openShortUrl} = require("./controller")
app = express()

var mongoDB = "mongodb://localhost/Database1"
mongoose.connect(mongoDB, {useNewUrlParser:true, useUnifiedTopology: true})


app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.get('/', (req, res) => {
    res.render("index")
})

app.post("/createShortUrl", createShortUrl)

app.get('/unique', openShortUrl)

app.post('/short', (req,res) =>{
     
    res.redirect('/')
 })


//var someModel = mongoose.model("someModel", testSchema)

//var test1 = new url({a_string: "12345", a_number: 3})

//console.log (test1.a_string)

app.listen(process.env.PORT || 5000);

//console.log("111")

