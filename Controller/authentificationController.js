const parking = require('../Model/authentification')
const authificationController = {}

authentificationsController.getUsers = async (req,res)=> {
    try {
        const docs = await authentification.list()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
authentificationsController.getUser = async (req,res)=> {
    const id = parseInt(req.params.id)
    try {
        const docs = await authentification.getOne(id)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
authentificationsController.createUser = async (req,res)=> {
    try {
        const authentificationData = req.body
        const createdUser = authentification.create(authentificationData)
        res.status(200).json(createdUser)
    } catch (err) {
        console.log(err)
        throw err
    }
}

authentificationsController.updateUser = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        const replacementUser = req.body
        const modifiedUser = await authentification.replace(id, replacementUser)
        res.status(200).json(modifiedUser)
    } catch (err) {
        console.log(err)
        throw err
    }
}
authentificationsController.replaceUser = async (req,res)=> {
    try {
        const replacementUser = req.body
        const id = parseInt(req.params.id)
        const updatedUser = await authentification.edit(id, replacementUser)
        res.status(200).json(updatedUser)
    } catch (err) {
        console.log(err)
        throw err
    } 
}
authentificationsController.removeUser = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        await authentification.destroy(id)
        res.status(200).json(authentification)
    } catch (err) {
        console.log(err)
        throw err
    } 
}
module.exports = authificationController