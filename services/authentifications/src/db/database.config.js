var db = "authentifications_dev";
if (process.env.NODE_ENV=='development'){
    db = "authentifications_dev";
}
module.exports = {
    HOST: "localhost",     
    USER: "root",     
    PASSWORD: "root",
    DB : "docker"
};