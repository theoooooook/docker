var db = "baskets_dev";
if (process.env.NODE_ENV=='development'){
    db = "baskets_dev";
}
module.exports = {
    HOST: "localhost",     
    USER: "root",     
    PASSWORD: "root",
    DB : "docker"
};