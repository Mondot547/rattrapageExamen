import React, { useState } from 'react';
import '../scss/scssPages/Contact.scss'; // Importation du fichier de styles CSS pour le formulaire
import Nav from '../components/Nav'; // Importation du composant de navigation
import Footer from '../components/Footer'; // Importation du composant de pied de page


const Contact = () => {
    const [name, setName] = useState(''); // État pour le champ de nom
    const [email, setEmail] = useState(''); // État pour le champ d'e-mail
    const [message, setMessage] = useState(''); // État pour le champ de message

    const handleEmailChange = function (e) {
        setEmail(e.target.value);
    };

    const handleMessageChange = function (e) {
        setMessage(e.target.value);
    };

    const handleNameChange = function (e) {
        setName(e.target.value);
    }

    const handleSubmit = function (e) {
        e.preventDefault();

        // Envoyer les données du formulaire au serveur Node.js
        fetch('/email/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, message }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Réinitialiser les champs du formulaire
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error(error);
            });
    };


    return (
        <>
            <Nav />
            <main className='mainContact'>
                <div className='contactForm'>
                    <form className='contactForm' id='email' onSubmit={handleSubmit}>
                        <legend>Contact</legend>
                        <label htmlFor="name">
                            Fullname
                        </label>
                        <input
                            value={name}
                            onChange={handleNameChange}
                            name='name'
                            id='name'
                            type="text"
                            placeholder='Alex Mondot'
                        />
                        <label htmlFor="mail">
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={handleEmailChange}
                            type="email"
                            name="email"
                            id="mail"
                            placeholder='exemple@exemple.com'
                            required
                        />
                        <label htmlFor="message">
                            Message:
                        </label>
                        <textarea
                            value={message}
                            onChange={handleMessageChange}
                            name="message"
                            id="message"
                            cols="90"
                            rows="10"
                        ></textarea>
                        <button className='contactBtn' type='submit'>Submit</button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Contact;
