const express = require('express');
const path = require('path');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'restoapp',
    password: 'Pass.2024',
    port: 5432,
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Ruta principal que redirige a la página de pedido
app.get('/', (req, res) => {
    res.redirect('/order');
});

// Ruta para mostrar la página de pedido
app.get('/order', (req, res) => {
    res.render('order');
});

// Ruta para procesar el pedido
app.post('/order', async (req, res) => {
    const items = req.body.items.split(', ').map(item => {
        const [name, quantity] = item.split(' x');
        return { name, quantity: parseInt(quantity, 10) };
    });

    try {
        for (const item of items) {
            await pool.query(
                'INSERT INTO pedido (nombre_producto, cantidad) VALUES ($1, $2)',
                [item.name, item.quantity]
            );
        }
        res.send('Order placed successfully!');
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).send('An error occurred while placing the order');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
