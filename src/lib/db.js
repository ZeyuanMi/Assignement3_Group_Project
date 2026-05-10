import mysql from "mysql2/promise";

// Create MySQL connection pool
const pool = mysql.createPool({

    host: "localhost",

    user: "root",

    password: "",

    database: "flight_booking",

});

// Export pool
export default pool;
