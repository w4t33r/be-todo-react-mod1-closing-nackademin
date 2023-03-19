const listModel = require('../models/List')


module.exports.getList = async (req, res) => {
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