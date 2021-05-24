const Url = require("./url")
const shortid = require('shortid')

const baseUrl = process.env.BASE_URL || "http://localhost:5000"

const createShortUrl = async (req, res) => {
    let longUrl = req.body
    const unique = shortid.generate()

    
        const shortUrl = baseUrl + "/" + unique
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

const openShortUrl = async (req, res) =>{
    const unique = Url.find({})

    let url = await Url.findOne({unique})
    if (url){
        return res.redirect(url.longUrl)
    }
    else{
        res.status(404).json({error: "Not found"})
    }
}

const findShortUrl = async (req, res) => {
    let shortUrl = req.body
    
        let url = await Url.findOne({shortUrl})
        if (url){
            
        }
    }

module.exports = {
    createShortUrl, openShortUrl
}