//FIle has errors - needs to be fixed 
const {
    sql
} = require('mysql');

const connect = sql({
    host: "localhost",
    user: "root",
    password: "",
    database: "carRental",
    connectionLimit: 10
});

connect.query(`select * from dbo.CarReg`, (err, result, fields) => {
    console.log(result);
});