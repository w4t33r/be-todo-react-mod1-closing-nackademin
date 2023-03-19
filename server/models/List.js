const {model, Schema, ObjectId} = require('mongoose')

const List = new Schema({
    text: {type: String, required: true},
    accessLink: {type: String},
    user: {type: ObjectId, ref: 'User'}

})

module.exports = model('List', List)