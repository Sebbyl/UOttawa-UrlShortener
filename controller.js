const Url = require("./url")
const shortid = require('shortid')

//The base Url of my website
const baseUrl = process.env.BASE_URL || "http://localhost:5000"

//funtion to create the shortened url
const createShortUrl = async (req, res) => {

    //assign url put in the input box to a variable
    let longUrl = req.body

    //generate an id that will serve as the shortened link
    const unique = shortid.generate()


        const shortUrl = baseUrl + "/" + unique

        //new document in database
        data = new Url({
            longUrl,
            shortUrl,
            unique
        })
        const saved = await data.save()

        return res.json({
            message: "success",
            ok: true,
            shortUrl
        })
    
}

//redirect user to the long link with the short link
const openShortUrl = async (req, res) =>{

    //find the shortened link in the database
    const unique = Url.find({})

    //find the short link in the database and redirect using the long link
    let url = await Url.findOne({unique})
    if (url){
        return res.redirect(url.longUrl)
    }
    //else send an error message
    else{
        res.status(404).json({error: "Not found"})
    }
}

//find the short url in the database and redirect to the page related to it
const findShortUrl = async (req, res) => {
    let shortUrl = req.body
    
        let url = await Url.findOne({shortUrl})
        if (url){
            return res.redirect(url.longUrl)
        }else{
            res.status(404).json({error:"Not found"})
        }
    }

    //export all functions
module.exports = {
    createShortUrl, openShortUrl, findShortUrl
}