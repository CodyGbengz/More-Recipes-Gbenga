import  React from 'react'
import Footer from './Footer';
const Home = () => 
        <div>
            <main id="top" className="container">
                <div className="row">
                    <div className="col s11 m8 offset-s1">
                        <h2 className="white-text">Welcome to <span className="red-text">More-Recipes</span></h2>
                        <p className="white-text"> Join our community of food enthusiasts and discover a world of amazing recipes that bring excitment to your kitchen andtickle your taste buds.</p>
                        <a className="waves-effect waves-light btn modal-trigger transparent red-text" href="#signup">Sign Up and start cooking</a>
                        <a className="waves-effect waves-light btn modal-trigger white red-text" href="#login">Login</a>  
                    </div>
                </div>
            </main>
            <Footer/>
        </div>

export default Home;
