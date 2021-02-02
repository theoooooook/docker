var db = "products_dev";
if (process.env.NODE_ENV=='development'){
    db = "products_dev";
}
module.exports = {
    HOST: "localhost",     
    USER: "root",     
    PASSWORD: "root",
    DB : "docker"
};