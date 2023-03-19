const listModel = require('../models/List')
const User = require('../models/User')
const mongoose = require('mongoose')

module.exports.getList = async (req, res) => {
    // const {text} = req.body
    const getTodo = await listModel.find()
    res.send(getTodo)
}


module.exports.saveList = async (req, res) => {
    const {text} = req.body
    const createList = new listModel({text, user: req.user.id})
    await createList.save()
    res.send(createList)

    /*await listModel
        .create({text})
        .then((data) => {
            console.log('added')
            console.log(data)
            res.send(data)
        })

     */
}


module.exports.updateList = async (req, res) => {
    const {_id, text} = req.body
    listModel.findByIdAndUpdate(_id, {text})
        .then(() => res.sendStatus(201).json({message: 'Updated Successfully'}))
        .catch((e) => console.log(e))
}

/*
module.exports.deleteList = async (req, res) => {
    const {_id} = req.body
    const user = await User.findOne({_id: req.user.id})
    console.log('user_User:', user._id)
    const exist = await listModel.findOne({user: req.user.id})
    console.log('exist_user', exist.user._id)
    if (toString(exist.user._id) === toString(user._id))
        console.log('exist')
    /*
    listModel.findByIdAndDelete(_id)
        .then(() => res.send("Deleted Successfully"))
        .catch((e) => console.log(e))


    else {
        return res.send('Error')
    }
}
    */

module.exports.deleteList = async (req, res) => {
    try {
        const {_id} = req.body
        const user = await User.findOne({_id: req.user.id})
        const exist = await listModel.findOne({user: req.user.id})

        const compare = String(user._id) === String(exist.user._id);

        if(compare && exist.id === req.body.text) {
            res.send.json({message:'Successfully Deleted'})
            console.log('qq')
            listModel.findByIdAndDelete(_id)
        }
        else {
            return res.send({message: 'Auth error, deleted aborted'})
        }

    } catch (e) {
        return res.send({message: 'Delete error, please check if you logged in'})
    }
}