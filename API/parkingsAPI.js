const parking = require('../Model/parking')
const connection = require('../database')
const parkingsAPI = {}

parkingsAPI.getParkings = async (req,res)=> {
    try {
        let query = "SELECT * FROM Parkings"
        await connection.db.query(query, function (err, result) {
            if (err) throw err;
            res.end(JSON.stringify(result));
        });
        res.status(200)
    } catch (err) {
        console.log(err)
        throw err
    }
}
parkingsAPI.getParking = async (req,res)=> {
    const id = parseInt(req.params.id)
    try {
        let query = "SELECT * FROM Parkings WHERE id = " + id;
        await connection.db.query(query, function (err, result) {
            if (err) throw err;
            res.end(JSON.stringify(result));
        });
        res.status(200)
    } catch (err) {
        console.log(err)
        throw err
    }
}
parkingsAPI.createParking = async (req,res)=> {
    try {
        const parkingData = req.body
        let query = "INSERT INTO Parkings(name, type, city) VALUES ( \"" + parkingData.name + "\", \"" + parkingData.type + "\", \"" + parkingData.city + "\")"
        await connection.db.query(query, function (err, result) {
            if (err) throw err;
            res.end(JSON.stringify(result));
        });
        res.status(200)
    } catch (err) {
        console.log(err)
        throw err
    }
}

parkingsAPI.updateParking = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        const replacementParking = req.body
        let query = "UPDATE Parkings SET name = \"" + replacementParking.name + "\", type = \"" + replacementParking.type + "\", city = \"" + replacementParking.city + "\" WHERE id = " + id;
        await connection.db.query(query, function (err, result) {
            if (err) throw err;
            res.end(JSON.stringify(result));
        });
        res.status(200)
    } catch (err) {
        console.log(err)
        throw err
    }
}
parkingsAPI.replaceParking = async (req,res)=> {
    try {
        const replacementParking = req.body
        const id = parseInt(req.params.id)
        const updatedParking = await parking.edit(id, replacementParking)
        res.status(200).json(updatedParking)
    } catch (err) {
        console.log(err)
        throw err
    } 
}
parkingsAPI.removeParking = async (req,res)=> {
    try {
        const id = parseInt(req.params.id)
        let query = "DELETE FROM Parkings WHERE id = " + id;
        await connection.db.query(query, function (err, result) {
            if (err) throw err;
            res.end(JSON.stringify(result));
        });
        res.status(200)
    } catch (err) {
        console.log(err)
        throw err
    } 
}



module.exports = parkingsAPI
