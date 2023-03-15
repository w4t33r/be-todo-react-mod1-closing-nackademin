const Router = require("express")
const bcrypt = require('bcrypt')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = new Router()

router.post('/registration',
    [
        check('email', 'email is not correct')
            .isEmail(),
        check('password', 'Password must be longer that 4')
            .isLength({min: 5, max: 36})
],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Uncorrect request", errors})
            }
            const {email, password} = req.body
            const existUser = await User.findOne({email})
            if (existUser) {
                return res.status(400).json({message: `User with email ${email} already exist`})
            }
            const hashedPassword = await bcrypt.hash(password, 6)
            const user = new User({email, password: hashedPassword})
            await user.save()
            return res.json({message: "User was created."})
        } catch (err) {
            console.log(err)
            res.send({message: "Server error"})
        }
    })

module.exports = router

