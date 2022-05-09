const mysql = require("mysql")
const util = require("util")
var pool = mysql.createPool({
    connectionLimit : 10,
    host: "chemisville.com",
    user: "dev",
    password: "rlarhkdcjf617",
    // host: "127.0.0.1",
    // user: "root",
    // password: "",
    database: "competition"
})

pool.getConnection((err, connection) => {
    if (err)
        throw err
    if (connection)
        connection.release()
})

pool.query = util.promisify(pool.query)
module.exports = pool