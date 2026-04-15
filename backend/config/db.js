import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
    user: 'app_user',
    host: 'localhost',
    database: 'parcial2_appweb',
    password: '1234',
    port: 5432
});

export default pool;