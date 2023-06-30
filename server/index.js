const express = require('express');
const cors = require('cors');
const connectDB = require('./data/db');
const menuRoutes = require('./routes/MenuRoutes');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');



connectDB();
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

//Définir les routes de l'API
app.use('/menu', menuRoutes);
app.use('/users', authRoutes);

app.listen(port, () => {
    console.log(`Le server tourne sur le port ${port}`);
});
