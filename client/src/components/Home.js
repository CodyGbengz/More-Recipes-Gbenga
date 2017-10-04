import  React from 'react'
import Footer from './Footer';
const Home = () => 
        <div className='index-body'>
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
            <div id="signup" className="modal">
                <div className="modal-content">
                    <h4>Sign up</h4>
                    <div className="row">
                        <form className="col s12 former" noValidate="novalidate">
                            <div className="row modal-form-row">
                                <div className="input-field col s12">
                                    <input id="username" name="username" type="text" required="please enter a username" aria-required="true"/>
                                    <label htmlFor="username">Username</label>
                                </div>
                                <div className="input-field col s12 ">
                                    <input id="email" name="email" type="email" required="please enter a valid email address" aria-required="true"/>
                                    <label htmlFor="email">Email Address</label>
                                </div>
                                <div className="input-field col s12 ">
                                    <input id="password" name="password" type="password" required="please enter a password" aria-required="true"/>
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="input-field col s12 ">
                                    <input id="repassword" name="repassword" type="password" required="please re-enter password" aria-required="true"/>
                                    <label htmlFor="repassword">Confirm Password</label>
                                </div>
                                <div className="input-field col s12">
                                    <button className="modal-action modal-close waves-effect waves-green btn-flat right">Cancel</button>
                                    <button className="btn waves-effect waves-light yellow right" type="submit" name="action">Sign Up</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div id="login" className="modal">
                <div className="modal-content">
                    <h4>Login</h4>
                    <div className="row">
                        <form className="col s12">
                            <div className="row modal-form-row">
                                <div className="input-field col s12 ">
                                    <input id="logemail" name="logemail" type="email" required="" aria-required="true"/>
                                    <label htmlFor="logemail">Email Address</label>
                                </div>
                                <div className="input-field col s12 ">
                                    <input id="logpassword" name="logpassword" type="password" required="" aria-required="true"/>
                                    <label htmlFor="logpassword">Password</label>
                                </div>
                                <div className="input-field col s12">
                                    <a href="" className="black-text">Forgot Password?</a>
                                    <button className="modal-action modal-close waves-effect waves-yellow btn-flat right">Cancel</button>
                                    <button className="btn waves-effect waves-light right yellow" type="submit" name="action">Log in</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

export default Home;
