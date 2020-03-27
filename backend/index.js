const express = require('express');
const app = express();

//a ordem do request, response importa
app.get('/', (request,response) => {
    return response.json({
        evento: 'Semana omnistack 11',
        nome: 'Mateus Ramos da Silva'
    });
});

app.listen(3333);