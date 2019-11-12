let express = require('express');
let systeminformation = require('systeminformation');

let app = express();

app.get('/', (req, res) => {
    setImmediate(()=>{
        systeminformation.cpu()
            .then(data =>{
                res.status(200).json({
                   fabricante: data.manufacturer,
                   modelo: data.brand,
                   cores: data.cores
                })
            })
            .catch(err =>{
                res.status(400).json({
                    error: err
                })
            })
    })
})

module.exports = app;
