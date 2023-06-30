// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

const router = express.Router();

router.post('/users/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Vérifier si l'utilisateur existe dans la collection users
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
        }

        // Vérifier si le mot de passe est correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
        }

        // Générer un token JWT pour l'utilisateur
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Renvoyer le token dans la réponse
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la connexion.' });
    }
});

module.exports = router;
