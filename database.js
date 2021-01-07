const database = {}
database.connect = async () => {
    /**
 * Import MongoClient & connexion à la DB
 */
/*
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://localhost:27017';
    const dbName = 'docker_project';
    let db
    MongoClient.connect(url, function(err, client) {
    console.log("Connected successfully to MongoDB Server");
    db = client.db(dbName);
    database.db = db
    });
    */
   

    // MySQL
    const mysql = require('mysql');
    const db = mysql.createConnection({

        host: "localhost",
     
        user: "root",
     
        password: "root",

        database : "docker"
     
      });
      db.connect(function(err) {

        if (err) throw err;
     
        database.db = db
        console.log("Connecté à la base de données MySQL!");
     
      });
}


module.exports = database