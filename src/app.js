import express from 'express'; // convertido em modulo ES

const app = express();

//mock
const times = [
    {id: 1, time: 'Botafogo', grupo: 'A'},
    {id: 2, time: 'Palmeiras', grupo: 'A'},
    {id: 3, time: 'Flamengo', grupo: 'A'},
    {id: 4, time: 'Bahia', grupo: 'A'}

]

//rota padrao para iniciar o servidor
app.get('/', (req, res) => {
    res.send('HelloWorld! Você está bem?')
})

app.get('/times', (req, res) => {
    res.status(200).send(times) // status mostra o resultado da requisição, 200 por exemplo mostra que ela foi bem sucedida
})




export default app //exportando const