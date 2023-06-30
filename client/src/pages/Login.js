import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../scss/scssPages/Login.scss';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('/users/login', {
                email,
                password,
            });
            const data = await response.data;
            console.log(data.token);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Nav />
            <main className='main-login'>
                <h2>Connexion</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='btn-login' onClick={handleLogin}>Envoyer</button>
            </main>
            <Footer />
        </>
    );
};

export default Login;