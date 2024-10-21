const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const ip = '3.218.160.181'; // IP de tu entorno en AWS

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Manejar la ruta raíz
app.get('/', (req, res) => {
    // Corregimos la ruta para enviar 'index.html' desde 'public/pages'
    res.sendFile(path.join(__dirname, 'public/pages', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server en http://${ip}:${PORT}`); // Manteniendo tu IP
});
