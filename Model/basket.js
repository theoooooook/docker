const connection = require('../database')
const basket = {}

basket.list = async function () {
    return await connection.db.collection('baskets').find({}).toArray()
}
basket.getOne = async function (id) {
    return await connection.db.collection('baskets').find({id}).toArray()
}
basket.create = async function (data) {
    return await connection.db.collection('baskets').insertOne(data)
}
basket.edit = async function (id, data) {
    return await connection.db.collection('baskets').replaceOne({id}, data)
}
basket.replace = async function (id, data) {
    return await connection.db.collection('baskets').updateOne({id}, {$set: data})
}
basket.destroy = async function (id) {
    return await connection.db.collection('baskets').deleteOne({id})
}

module.exports = basket