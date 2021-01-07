const parking = require('../Model/comment')
const commentsAPI = {}

commentsAPI.getUsers = async (req,res)=> {
    try {
        const docs = await comment.list()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
commentsAPI.getUser = async (req,res)=> {
    const id = parseInt(req.params.id)
    try {
        const docs = await comment.getOne(id)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
commentsAPI.createUser = async (req,res)=> {
    try {
        const commentData = req.body
        const createdUser = comment.create(commentData)
        res.status(200).json(createdUser)
    } catch (err) {
        console.log(err)
        throw err
    }
}

commentsAPI.updateUser = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        const replacementUser = req.body
        const modifiedUser = await comment.replace(id, replacementUser)
        res.status(200).json(modifiedUser)
    } catch (err) {
        console.log(err)
        throw err
    }
}
commentsAPI.replaceUser = async (req,res)=> {
    try {
        const replacementUser = req.body
        const id = parseInt(req.params.id)
        const updatedUser = await comment.edit(id, replacementUser)
        res.status(200).json(updatedUser)
    } catch (err) {
        console.log(err)
        throw err
    } 
}
commentsAPI.removeUser = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        await comment.destroy(id)
        res.status(200).json(comment)
    } catch (err) {
        console.log(err)
        throw err
    } 
}
module.exports = commentsAPI