const connection = require('../database')
const authentification = {}

authentification.list = async function () {
    return await connection.db.collection('authentifications').find({}).toArray()
}
authentification.getOne = async function (id) {
    return await connection.db.collection('authentifications').find({id}).toArray()
}
authentification.create = async function (data) {
    return await connection.db.collection('authentifications').insertOne(data)
}
authentification.edit = async function (id, data) {
    return await connection.db.collection('authentifications').replaceOne({id}, data)
}
authentification.replace = async function (id, data) {
    return await connection.db.collection('authentifications').updateOne({id}, {$set: data})
}
authentification.destroy = async function (id) {
    return await connection.db.collection('authentifications').deleteOne({id})
}

module.exports = authentification