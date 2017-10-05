import  React from 'react';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';
import Signup from './SignupForm';
import Footer from './Footer';
class Home extends React.Component {
    render() {
        const { userSignupRequest } = this.props;
        return (
            <div className='index-body'>
                <main id="top" className="container">
                    <div className="row">
                        <div className="col s11 m8 offset-s1">
                            <h2 className="white-text">Welcome to <span className="red-text">More-Recipes</span></h2>
                            <p className="white-text"> Join our community of food enthusiasts and discover a world of amazing recipes that bring excitment to your kitchen andtickle your taste buds.</p>
                            <a className="waves-effect waves-light btn modal-trigger white red-text" href="#signup">Sign Up and start cooking</a>
                            <a className="waves-effect waves-light btn modal-trigger white red-text" href="#login">Login</a>  
                        </div>
                    </div>
                </main>
                <Footer/>
                <div id="signup" className="modal">
                    <div className="modal-content">
                        <h4>Sign up</h4>
                        <div className="row">
                            <Signup userSignupRequest={userSignupRequest}/>
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
                                        <button className="btn waves-effect waves-light right white red-text" type="submit" name="action">Log in</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default connect((state) => { return {} }, { userSignupRequest })(Home);
