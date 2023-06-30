const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true },
    desc: { type: String, required: true },
});

module.exports = mongoose.model('menu', menuSchema);