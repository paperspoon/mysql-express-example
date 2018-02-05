const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'host',
    port: 3306,
    user: 'user',
    password: 'password',
    database:'database'
});

module.exports = connection;