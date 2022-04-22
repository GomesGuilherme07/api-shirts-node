import app from './src/app.js'

//Diferenciando a porta do ambiente de produção para a porta fixa 3000
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
})
