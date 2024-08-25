const express = require('express');
const path = require('path');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'tu_usuario',
    host: 'localhost',
    database: 'restaurant_db',
    password: 'tu_contraseña',
    port: 5432,
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/order', (req, res) => {
    res.render('order');
});

app.post('/order', async (req, res) => {
    const { tableNumber, items } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO orders (table_number, items) VALUES ($1, $2) RETURNING *',
            [tableNumber, items]
        );
        res.send(`Order placed successfully: ${JSON.stringify(result.rows[0])}`);
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).send('An error occurred while placing the order');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
