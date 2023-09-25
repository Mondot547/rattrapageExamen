const Menu = require('./menuSchema'); // Chemin vers le schéma Menu

const menus = [
    {
        id: 1,
        title: 'Menu 1',
        category: 'Déjeuner',
        price: 12.99,
        img: 'menu1.jpg',
        desc: 'Description du menu 1',
    },
    {
        id: 2,
        title: 'Menu 2',
        category: 'Dîner',
        price: 15.99,
        img: 'menu2.jpg',
        desc: 'Description du menu 2',
    },
    // Ajoutez d'autres menus si nécessaire
];

// Insérer les menus dans la collection
Menu.insertMany(menu)
    .then(() => {
        console.log('Menus inserted successfully');
    })
    .catch((error) => {
        console.error('Error inserting menus:', error);
    });