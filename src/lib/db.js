import mysql from "mysql2/promise";

//Create a MySQL database connection pool

const pool = mysql.createPool({
    host: "localhost", //Database server address
    user: "root", //Login username
    password: "", //Login password (empty string here)
    database: "flight_booking",  //Name of the database to connect to
});


export default pool;