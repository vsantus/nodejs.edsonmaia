import app from './src/app.js' // importando uma const de outro arquivo

const port = 3000;

app.listen(port, () =>{
    console.log(`Tudo certo, servidor acontecendo no http://localhost:${port}` );
})