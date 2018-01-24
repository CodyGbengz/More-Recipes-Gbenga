import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import $ from 'jquery';
import { userSignupRequest } from '../actions/signupActions';
import { signInUser } from '../actions/authAction';
import Signup from './SignupForm';
import Login from './LoginForm';
import Footer from './Footer';

class Home extends React.Component {
  componentDidMount() {
    $(document).ready(() => {
      $('.modal').modal();
      $('.button-collapse').sideNav();
      $('.tooltipped').tooltip({ delay: 500 });
      $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        hover: true, // Activate on hover
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'right' // Displays dropdown with edge aligned to the left of button
      }
      );
    });
  }
  render() {
    const { userSignupRequest, signInUser } = this.props;
    return (
      <div className="body-index homepage">
        <div>
          <main id="top" className="container">
            <div className="row home-text-wrapper">
              <div className="col s11 m8 offset-s1 offset-m2">
                <h2 className="white-text">Welcome to
                <span className="red-text"> More-Recipes</span></h2>
                <p className="white-text">
                Join our community of food enthusiasts and discover a world of amazing recipes that bring excitment to your kitchen and tickle your taste buds.
                </p>
                <a
                className="waves-effect waves-light btn modal-trigger white red-text"
                href="#signup">
                Sign Up and start cooking
                </a>
                <a
                className="waves-effect waves-light btn modal-trigger white red-text"
                href="#login">
                Login
                </a>
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
                <Login signInUser={signInUser} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.PropTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  signInUser: PropTypes.func.isRequired
};


export default connect(null, { userSignupRequest, signInUser })(Home);
