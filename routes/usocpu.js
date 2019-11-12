let express = require('express');
let osUtils = require('os-utils');

let app = express();

setInterval(()=>{
    osUtils.cpuUsage(data =>{
        console.log(data);
    })
}, 1000);

module.exports = app;

