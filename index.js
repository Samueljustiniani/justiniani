const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const ip = '3.218.160.181'; // Tu IP pública en AWS

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Manejar la ruta raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'img', 'js', 'pages' , 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server en http://${ip}:${PORT}`); // Usamos tu IP en el log
});
