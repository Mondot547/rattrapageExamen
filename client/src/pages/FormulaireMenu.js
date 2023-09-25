import React, { useState } from 'react';
import axios from 'axios'; // Assurez-vous que axios est installé

const AddMenu = () => {
    const [menuData, setMenuData] = useState({
        title: '',
        category: '',
        price: 0,
        img: '',
        desc: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMenuData({
            ...menuData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Envoi des données du formulaire au backend
            await axios.post('/menu', menuData); // Assurez-vous d'ajuster l'URL en fonction de votre backend
            alert('Menu ajouté avec succès');
            // Réinitialiser le formulaire après l'ajout
            setMenuData({
                title: '',
                category: '',
                price: 0,
                img: '',
                desc: '',
            });
        } catch (error) {
            console.error('Erreur lors de l\'ajout du menu :', error);
        }
    };

    return (
        <div>
            <h2>Ajouter un menu</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Titre :</label>
                    <input
                        type="text"
                        name="title"
                        value={menuData.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Catégorie :</label>
                    <input
                        type="text"
                        name="category"
                        value={menuData.category}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Prix :</label>
                    <input
                        type="number"
                        name="price"
                        value={menuData.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Image :</label>
                    <input
                        type="text"
                        name="img"
                        value={menuData.img}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description :</label>
                    <textarea
                        name="desc"
                        value={menuData.desc}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit">Ajouter le menu</button>
            </form>
        </div>
    );
};

export default AddMenu;