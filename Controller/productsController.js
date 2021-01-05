const parking = require('../Model/product')
const productsController = {}

productsController.getUsers = async (req,res)=> {
    try {
        const docs = await product.list()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
productsController.getUser = async (req,res)=> {
    const id = parseInt(req.params.id)
    try {
        const docs = await product.getOne(id)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
productsController.createUser = async (req,res)=> {
    try {
        const productData = req.body
        const createdUser = product.create(productData)
        res.status(200).json(createdUser)
    } catch (err) {
        console.log(err)
        throw err
    }
}

productsController.updateUser = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        const replacementUser = req.body
        const modifiedUser = await product.replace(id, replacementUser)
        res.status(200).json(modifiedUser)
    } catch (err) {
        console.log(err)
        throw err
    }
}
productsController.replaceUser = async (req,res)=> {
    try {
        const replacementUser = req.body
        const id = parseInt(req.params.id)
        const updatedUser = await product.edit(id, replacementUser)
        res.status(200).json(updatedUser)
    } catch (err) {
        console.log(err)
        throw err
    } 
}
productsController.removeUser = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        await product.destroy(id)
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
        throw err
    } 
}

module.exports = productsController