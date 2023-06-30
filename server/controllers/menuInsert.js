const Menu = require('./menuSchema'); // Chemin vers le schéma Menu

// Insérer les menus dans la collection
Menu.insertMany(menu)
    .then(() => {
        console.log('Menus inserted successfully');
    })
    .catch((error) => {
        console.error('Error inserting menus:', error);
    });