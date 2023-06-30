const express = require('express');
const router = express.Router();
const Menu = require('../models/menuShema');


//Route pour obtenir tous les menus
router.get('/menu', async (req, res) => {
    try {
        const menu = await Menu.find();
        res.json(menu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur de Server' });
    }
});

//Route pour ajouter un menu
router.post('/menu', async (req, res) => {
    try {
        const { name, desc, price } = req.body;
        const newMenu = new Menu({
            name,
            desc,
            price,
        });
        await newMenu.save();
        res.json(newMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur de Server' });
    }
});

//Route pour mettre a jour un menu
router.put('/menu:id', async (req, res) => {
    try {
        const { name, desc, price } = req.body;
        const updateMenu = await Menu.findByIdAndUpdate(
            req.params.id,
            { name, desc, price },
            { new: true }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erruer de Server' });
    }
});

module.exports = router;