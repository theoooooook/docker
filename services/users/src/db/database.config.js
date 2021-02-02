var db = "users_dev";
if (process.env.NODE_ENV=='development'){
    db = "users_dev";
}
module.exports = {
    HOST: "localhost",     
    USER: "root",     
    PASSWORD: "root",
    DB : "docker"
};