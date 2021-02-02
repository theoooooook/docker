var db = "comments_dev";
if (process.env.NODE_ENV=='development'){
    db = "comments_dev";
}
module.exports = {
    HOST: "localhost",     
    USER: "root",     
    PASSWORD: "root",
    DB : "docker"
};