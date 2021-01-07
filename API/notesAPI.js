const parking = require('../Model/note')
const notesAPI = {}

notesAPI.getUsers = async (req,res)=> {
    try {
        const docs = await note.list()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
notesAPI.getUser = async (req,res)=> {
    const id = parseInt(req.params.id)
    try {
        const docs = await note.getOne(id)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
notesAPI.createUser = async (req,res)=> {
    try {
        const noteData = req.body
        const createdUser = note.create(noteData)
        res.status(200).json(createdUser)
    } catch (err) {
        console.log(err)
        throw err
    }
}

notesAPI.updateUser = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        const replacementUser = req.body
        const modifiedUser = await note.replace(id, replacementUser)
        res.status(200).json(modifiedUser)
    } catch (err) {
        console.log(err)
        throw err
    }
}
notesAPI.replaceUser = async (req,res)=> {
    try {
        const replacementUser = req.body
        const id = parseInt(req.params.id)
        const updatedUser = await note.edit(id, replacementUser)
        res.status(200).json(updatedUser)
    } catch (err) {
        console.log(err)
        throw err
    } 
}
notesAPI.removeUser = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        await note.destroy(id)
        res.status(200).json(note)
    } catch (err) {
        console.log(err)
        throw err
    } 
}

module.exports = notesAPI