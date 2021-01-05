const connection = require('../database')
const notes = {}

product.list = async function () {
    return await connection.db.collection('products').find({}).toArray()
}
product.getOne = async function (id) {
    return await connection.db.collection('products').find({id}).toArray()
}
product.create = async function (data) {
    return await connection.db.collection('products').insertOne(data)
}
product.edit = async function (id, data) {
    return await connection.db.collection('products').replaceOne({id}, data)
}
product.replace = async function (id, data) {
    return await connection.db.collection('products').updateOne({id}, {$set: data})
}
product.destroy = async function (id) {
    return await connection.db.collection('products').deleteOne({id})
}

module.exports = notes