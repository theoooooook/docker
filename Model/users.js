const connection = require('../database')
const users = {}

user.list = async function () {
    return await connection.db.collection('users').find({}).toArray()
}
user.getOne = async function (id) {
    return await connection.db.collection('users').find({id}).toArray()
}
user.create = async function (data) {
    return await connection.db.collection('users').insertOne(data)
}
user.edit = async function (id, data) {
    return await connection.db.collection('users').replaceOne({id}, data)
}
user.replace = async function (id, data) {
    return await connection.db.collection('users').updateOne({id}, {$set: data})
}
user.destroy = async function (id) {
    return await connection.db.collection('users').deleteOne({id})
}


module.exports = users