import express from 'express';

const app = express()

app.get('/users', (request, response) => {
    console.log('Server working')

    response.json([
        "Augusto",
        "Caio",
        "Samuel"
    ])
})

app.listen(3330)