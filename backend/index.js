const express = require('express');

const app = express();

app.get('/', (request, response) => {

    return response.json({

        evento: 'Semana Omni Stack 11.0',
        nome:   'Clovis Daniel Costa'
    });
});

app.listen(3334);
