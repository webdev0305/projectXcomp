const mysql = require("mysql")
const util = require("util")

var pool = mysql.createPool({
    connectionLimit : 10,
    host: "localhost",
    user: "root",
    password: "",
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