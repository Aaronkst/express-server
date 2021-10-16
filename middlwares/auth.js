// const jwt = require("jsonwebtoken"); encrypt / decrypt library
// const User = require('../models/User'); database model, this is necessary for no-sql databases

module.exports = {
    authenticateToken: async(req, res, next) => {
        try {
            // Gather the jwt access token from the request header
            const authHeader = req.headers['authorization']
            const token = authHeader && authHeader.split(' ')[1]
            if (token == null) return res.sendStatus(401) // if there isn't any token

            jwt.verify(token, process.env.SECRET_TOKEN, async (err, user) => {
                if (err) return res.sendStatus(403) // decrypt the api key
                //req.user = await User.findOne({userName: user.username}); find the apikey in database ( in this case apikey = encrypted username )
                next() // pass the execution off to whatever request the client intended
            })
        } catch (error) {
            res.status(422).json(error);
        }
    }
}