const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://alex:alex1234@espritlumiere.cqd78vg.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Vous êtes connecté à MongoDB !');
    } catch (error) {
        console.error('Erreur de connection a MongoDB !');
    }
}

module.exports = connectDB;