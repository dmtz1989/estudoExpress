const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Achou que era um "Olá, Mundo!", mas sou eu o DIO!');
})

app.listen(3000, () => {
    console.log('Servidor esta rodando!');
})


//console.log(app);