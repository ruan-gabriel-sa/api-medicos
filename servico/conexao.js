import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'usuarioclinica',
    password : 'senhaclinica',
    database : 'clinicadb'
});

export default pool;