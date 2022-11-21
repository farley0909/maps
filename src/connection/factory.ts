const Client = require('pg').Client
const client = new Client({
    user:"postgres",
    password:"postgres",
    host:"localhost",
    port:5432,
    database:'map'
})

export { client }