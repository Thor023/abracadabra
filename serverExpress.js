//Crear un servidor con el puerto 3000
const express = require('express')
const app = express();
const path = require ("path");

app.listen(3000, () => {
console.log('El servidor está inicializado en el puerto 3000')
});

let numeroAleatorio = ()=> {
    return Math.floor(Math.random() *4)+1
};
let numeroAl = numeroAleatorio();
//2 Definir la carpeta “assets” como carpeta pública del servidor.
app.use(express.static(path.join(__dirname + "/assets")));


//Creacion de arreglo de nombres
const nombres = ["Juan", "Francisco", "Valentina","Felipe","Matias", "Paloma", "Daniel", "Rodrigo"];

//Crear middleware con ruta abracadabra/juego/:usuario
app.use('/abracadabra/juego/:usuario', (req,res,next)=> {
    const usuario = req.params.usuario;
    nombres.includes(usuario) ? next() : res.redirect("/who.jpeg");
});

app.get('/abracadabra/juego/:usuario', (req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.get("/abracadabra/usuarios", (req, res) => {
    res.send({nombres});
    });

app.get("/abracadabra/conejo/:n", (req,res)=>{
    const num = req.params.n;

    if (num == numeroAl){
        res.redirect("/conejito.jpg");
        numeroAl = numeroAleatorio();
    }else {
        res.redirect("/voldemort.jpg");
    }
});

