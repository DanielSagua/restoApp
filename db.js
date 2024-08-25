const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'restoapp',
    password: 'Pass.2024',
    port: 5432, // Puerto por defecto de PostgreSQL
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
