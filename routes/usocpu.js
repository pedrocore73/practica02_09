let express = require('express');
let osUtils = require('os-utils');

let UsoCpu = require('../models/usocpu');

let app = express();

setInterval(()=>{
    osUtils.cpuUsage(data =>{
        let usoCpu = new UsoCpu({
            fecha: new Date(),
            regUsoCpu: data
        })
        usoCpu.save((err, datos)=>{
        //    if(err) {
        //        console.log(err);
        //    } else if (datos) {
        //        console.log(datos);
        //    }
        })
    })
}, 1000);

app.get('/cpulasthour', (req, res)=>{
    UsoCpu.find({}).sort({fecha: -1}).limit(3600).exec((err, data)=>{
        let dataLastHour = [];
        for(i=0; i < data.length; i += 300){
            dataLastHour.push(data[i]);
        }
        if (err) {
            res.status(400).json({
                error: err
            })
        } else if (data) {
            res.status(200).json({
                cpulasthour: dataLastHour
            })
        }
    })
})

app.get('/cpulastminute', (req, res)=>{
    UsoCpu.find({}).sort({fecha: -1}).limit(60).exec((err, data)=>{
        if (err) {
            return res.status(400).json({
                error: err
            })
        } else if(data) {
            res.status(200).json({
                cpulastminute: data
            })
        }
    })
})

module.exports = app;
