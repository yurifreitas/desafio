const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    res.json({message: "Hello, Cognum!"});
});

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
