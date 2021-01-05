const user = require('../Model/user')
const usersController = {}

usersController.getUsers = async (req,res)=> {
    try {
        const docs = await user.list()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
usersController.getUser = async (req,res)=> {
    const id = parseInt(req.params.id)
    try {
        const docs = await user.getOne(id)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
usersController.createUser = async (req,res)=> {
    try {
        const userData = req.body
        const createdUser = user.create(userData)
        res.status(200).json(createdUser)
    } catch (err) {
        console.log(err)
        throw err
    }
}

usersController.updateUser = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        const replacementUser = req.body
        const modifiedUser = await user.replace(id, replacementUser)
        res.status(200).json(modifiedUser)
    } catch (err) {
        console.log(err)
        throw err
    }
}
usersController.replaceUser = async (req,res)=> {
    try {
        const replacementUser = req.body
        const id = parseInt(req.params.id)
        const updatedUser = await user.edit(id, replacementUser)
        res.status(200).json(updatedUser)
    } catch (err) {
        console.log(err)
        throw err
    } 
}
usersController.removeUser = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        await user.destroy(id)
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
        throw err
    } 
}

module.exports = usersController