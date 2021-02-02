var db = "notes_dev";
if (process.env.NODE_ENV=='development'){
    db = "notes_dev";
}
module.exports = {
    HOST: "localhost",     
    USER: "root",     
    PASSWORD: "root",
    DB : "docker"
};