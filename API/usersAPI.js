const user = require('../Model/user')
const usersAPI = {}

usersAPI.getUsers = async (req,res)=> {
    try {
        const docs = await user.list()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
usersAPI.getUser = async (req,res)=> {
    const id = parseInt(req.params.id)
    try {
        const docs = await user.getOne(id)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
usersAPI.createUser = async (req,res)=> {
    try {
        const userData = req.body
        const createdUser = user.create(userData)
        res.status(200).json(createdUser)
    } catch (err) {
        console.log(err)
        throw err
    }
}

usersAPI.updateUser = async (req,res)=> {
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
usersAPI.replaceUser = async (req,res)=> {
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
usersAPI.removeUser = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        await user.destroy(id)
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
        throw err
    } 
}

module.exports = usersAPI