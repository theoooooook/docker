const parking = require('../Model/basket')
const basketController = {}

basketsController.getUsers = async (req,res)=> {
    try {
        const docs = await basket.list()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
basketsController.getUser = async (req,res)=> {
    const id = parseInt(req.params.id)
    try {
        const docs = await basket.getOne(id)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
basketsController.createUser = async (req,res)=> {
    try {
        const basketData = req.body
        const createdUser = basket.create(basketData)
        res.status(200).json(createdUser)
    } catch (err) {
        console.log(err)
        throw err
    }
}

basketsController.updateUser = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        const replacementUser = req.body
        const modifiedUser = await basket.replace(id, replacementUser)
        res.status(200).json(modifiedUser)
    } catch (err) {
        console.log(err)
        throw err
    }
}
basketsController.replaceUser = async (req,res)=> {
    try {
        const replacementUser = req.body
        const id = parseInt(req.params.id)
        const updatedUser = await basket.edit(id, replacementUser)
        res.status(200).json(updatedUser)
    } catch (err) {
        console.log(err)
        throw err
    } 
}
basketsController.removeUser = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        await basket.destroy(id)
        res.status(200).json(basket)
    } catch (err) {
        console.log(err)
        throw err
    } 
}
module.exports = basketController