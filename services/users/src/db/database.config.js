module.exports = {
    HOST: process.env.DATABASE_HOST || "localhost",     
    USER: process.env.DATABASE_USER || "root",     
    PASSWORD: process.env.DATABASE_PW || "root",
    DB : process.env.DATABASE_DB || "users_db"
};