let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser'); 

let app = express();

let equipo = require('./routes/equipo');
let usoCpu = require('./routes/usocpu');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/monitor', {useNewUrlParser: true})
                    .then(()=>{
                        console.log('Conexión ok a BBDD');
                    })
                    .catch((err)=>{
                        console.log(err);
                    })

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({'extended':'false'}));

app.use('/equipo', equipo);  
app.use('/usocpu', usoCpu);                  

app.listen(8080, ()=>{
    console.log('Servidor escuchando en http://localhost:8080');
});