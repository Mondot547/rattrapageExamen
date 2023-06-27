import React from 'react';
import Nav from '../components/Nav';
import logo from '../img/logo.svg';
import burger from '../img/hamburger.jpg';
import burgerVeggie from '../img/burgerVeggie.jpg';
import '../scss/scssPages/Home.scss';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <header>
                <Nav />
                <div className="banner">
                    <img src={logo} alt="logo burger" />
                </div>
            </header>
            <main>
                <div className="title">
                    <h1>C.E.N.S</h1>
                    <p>Bienvenu sur mon site de street-food</p>
                </div>
                <section className='container'>
                    <article className='article1'>
                        <div className="text">
                            <h2>Traditional</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum omnis nobis! Sequi asperiores incidunt, reprehenderit ipsam deleniti consequatur? Nihil mollitia porro corrupti molestiae sit, rerum in quidem autem repellat similique quibusdam earum recusandae ea alias, eligendi modi quae dicta saepe expedita ratione ipsum! Nemo ducimus molestiae sit consequuntur repudiandae, dolores ullam quam ipsa et. Tempore aut eum ut quod.</p>
                        </div>
                        <img src={burger} alt="hambuger dans une assiète" />
                    </article>
                    <article className='article2'>
                        <div className="text">
                            <h2>Veggie</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum omnis nobis! Sequi asperiores incidunt, reprehenderit ipsam deleniti consequatur? Nihil mollitia porro corrupti molestiae sit, rerum in quidem autem repellat similique quibusdam earum recusandae ea alias, eligendi modi quae dicta saepe expedita ratione ipsum! Nemo ducimus molestiae sit consequuntur repudiandae, dolores ullam quam ipsa et. Tempore aut eum ut quod.</p>
                        </div>
                        <img src={burgerVeggie} alt="deux hambuger dans une assiète" />
                    </article>
                </section>
                <div className="potager">
                    <div className="textPotager">
                        <h2>Fresh products</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium soluta atque blanditiis. Error, excepturi eius. Error veritatis rerum quo eius cumque recusandae repudiandae voluptate! Expedita enim dicta ipsum dolore? Facilis!</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;