import mysql from "mysql2/promise";

//Create a MySQL database connection pool

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "flight_booking",
});