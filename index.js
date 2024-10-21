const express = require('express');
const app = express();
const path = require('path')
const PORT = 3000;
const ip = '100.28.67.181'


app.use(express.static('public'))


app.get('/',(req,res) =>{
    res,sendFile(path,join(__dirname, 'index.html'))
} )


app.listen(PORT, () => {
    console.log(`Server en http://${ip}:${PORT}`);
});
