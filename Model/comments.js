const connection = require('../database')
const comments = {}

comment.list = async function () {
    return await connection.db.collection('comments').find({}).toArray()
}
comment.getOne = async function (id) {
    return await connection.db.collection('comments').find({id}).toArray()
}
comment.create = async function (data) {
    return await connection.db.collection('comments').insertOne(data)
}
comment.edit = async function (id, data) {
    return await connection.db.collection('comments').replaceOne({id}, data)
}
comment.replace = async function (id, data) {
    return await connection.db.collection('comments').updateOne({id}, {$set: data})
}
comment.destroy = async function (id) {
    return await connection.db.collection('comments').deleteOne({id})
}

module.exports = comments