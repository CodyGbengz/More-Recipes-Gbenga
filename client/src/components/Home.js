import  React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';
import { login } from '../actions/authAction';
import Signup from './SignupForm';
import Login from './LoginForm';
import Footer from './Footer';
class Home extends React.Component {
    render() {
        const { userSignupRequest, login } = this.props;
        return (
            <div>
                <div className="body-index">
                    <main id="top" className="container">
                        <div className="row">
                            <div className="col s11 m8 offset-s1">
                                <h2 className="white-text">Welcome to <span className="red-text">More-Recipes</span></h2>
                                <p className="white-text"> Join our community of food enthusiasts and discover a world of amazing recipes that bring excitment to your kitchen and tickle your taste buds.</p>
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
                                <Signup userSignupRequest={userSignupRequest} />
                            </div>
                        </div>
                    </div>

                    <div id="login" className="modal">
                        <div className="modal-content">
                            <h4>Login</h4>
                            <div className="row">
                                <Login login={login} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
}

export default connect((state) => { return {} }, { userSignupRequest, login })(Home);
