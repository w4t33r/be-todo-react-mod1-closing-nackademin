const listModel = require('../models/List')
const User = require('../models/User')
const jwt = require("jsonwebtoken");
const {isValidObjectId} = require("mongoose");
require('dotenv').config()
const secretKey = process.env.secret_key


module.exports.getList = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
        return res.status(401).json({message: 'Bad token'})
    }
    const decoded = jwt.verify(token, secretKey)
    req.user = decoded
    console.log('DECODE', decoded.id)
    console.log(req.user._id)
    const getTodo = await listModel.find({user: {$eq: decoded.id}})
    res.send(getTodo)

}
/*
module.exports.getList = async (req, res) => {

    const secretKey = process.env.secret_key
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
        return res.status(401).json({message: 'Bad token'})
    }
    const decoded = jwt.verify(token, secretKey)
    req.user = decoded
    console.log('DECODE', decoded)
    console.log(req.user.id)
    const getTodo = await listModel.find("64120126479d2328a31600da")
    res.send(getTodo)

}
*/

module.exports.saveList = async (req, res) => {
    console.log(req.body, req.header.authorization, 'BOOOOOOOOOOOOOOOOOOO')
    const {text} = req.body
    const user = await User.findById(req.user.id)
    const createList = new listModel({text, user: user.id})
    await createList.save()
    res.send(createList)
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
        await listModel.find({}).then(data => {

            const {_id} = req.body
            console.log('List_Object_ID:', data[0]._id.valueOf())
            console.log('user_ref_list_id:', data[0].user.valueOf())
            console.log('ReqBody:', _id)
            let listRef = data[0].user.valueOf()
            let listObjId = data[0]._id.valueOf()
                User.find({_id: listRef}).then(user => {
                console.log('User Find:',user[0]._id.valueOf())
                const userExist = user[0]._id.valueOf()
                if (isValidObjectId(_id) && listObjId === _id && userExist === listRef) {
                    listModel.findByIdAndDelete(listObjId).then(() => res.send('Deleted'))
                } else {
                    res.send('bad')
                }
            })
            data.map(item => {
                console.log("obejct_id:", item._id.valueOf())
                if(_id.includes(item._id.valueOf())) {
                    console.log('eeeeeeeeeeeeeeeeeeeee', _id, item._id.valueOf())
                }
            })

        })

    } catch (e) {
        res.send('Error')
    }


    //if(user.id === exist.user._id.valueOf()) {


    /*
    const compare = String(user._id) === String(exist.user._id);

    console.log('exist:id:',exist.id)
    console.log('user:id', user.id)
    console.log('req.body:id:',req.body._id)
    if(compare && exist.id === req.body._id) {
        res.send.json({message:'Successfully Deleted'})
        console.log('qq')
        listModel.findByIdAndDelete(_id)
    }
    else {
        return res.send({message: 'Auth error, deleted aborted'})
    }

     */
}