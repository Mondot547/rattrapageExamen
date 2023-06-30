const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://admin01:admin@cluster0.r150sih.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Vous êtes connecté à MongoDB !');
    } catch (error) {
        console.error('Erreur de connection a MongoDB !');
    }
}

module.exports = connectDB;