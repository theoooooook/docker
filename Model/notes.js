const connection = require('../database')
const notes = {}

note.list = async function () {
    return await connection.db.collection('notes').find({}).toArray()
}
note.getOne = async function (id) {
    return await connection.db.collection('notes').find({id}).toArray()
}
note.create = async function (data) {
    return await connection.db.collection('notes').insertOne(data)
}
note.edit = async function (id, data) {
    return await connection.db.collection('notes').replaceOne({id}, data)
}
note.replace = async function (id, data) {
    return await connection.db.collection('notes').updateOne({id}, {$set: data})
}
note.destroy = async function (id) {
    return await connection.db.collection('notes').deleteOne({id})
}

module.exports = notes