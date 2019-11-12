let mongoose = require('mongoose');

let UsoCpuSchema = new mongoose.Schema({
    fecha: Object,
    regUsoCpu: Number  
})

module.exports = mongoose.model('UsoCpu', UsoCpuSchema);