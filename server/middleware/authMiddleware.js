const jwt = require('jsonwebtoken')
require('dotenv')
const {decode} = require("jsonwebtoken");

const secretKey = process.env.secret_key

module.exports = (req, res, next) => {
    if (req.methods === "OPTIONS") {
        return next()
    }


    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({message: 'Auth error'})
        }
        const decoded = jwt.verify(token, secretKey)
        req.user = decoded
        next()
    } catch (e) {
        return res.status(401).json({message: 'Auth error'})
    }

}