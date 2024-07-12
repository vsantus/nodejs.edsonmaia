const express = require('express' );
const app = express();
const port = 3000;

//rota padrao para iniciar 

app.get('/', (req,res)=>{
res.send('HelloWorld! Você está bem?' )
})

//escutar a porta
app.listen(port, () =>{
    console.log(`Tudo certo, servidor acontecendo no http://localhost:${port}` );
})