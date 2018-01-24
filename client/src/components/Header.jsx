import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Header extends Component {
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
      });
    });
  }

  removeTooltip() {
    $('.tooltipped').tooltip('remove');
  }

  render() {
    return (
      <div>
        <header id="header">
          <div className="navbar-fixed">
            <ul
            id="dropdown1"
            className="dropdown-content">
              <li>
                <Link to="/profile" className="red-text">Profile</Link>
              </li>
              <li className="divider"></li>
              <li>
                <Link to="/" className="red-text">Sign Out</Link>
              </li>
            </ul>
            <nav className="white">
              <div className="nav-wrapper">
                <Link to="/recipes"
                className="brand-logo center red-text">More-Recipes</Link>
                <Link
                data-activates="mobile-demo" className="button-collapse">
                <i className="material-icons red-text">menu</i>
                </Link>
                <Link to="/recipes">
                <span className="red-text bordered-wrapper-left left hide-on-med-and-down">
                <i className="material-icons">home</i></span>
                </Link>
                <ul
                id="navvy"
                className="bordered-wrapper-right right hide-on-med-and-down">
                  <li>
                    <Link
                    data-target="create"
                    className="tooltipped modal-trigger modal-open modal-action"
                    data-position="bottom"
                    data-delay="100"
                    data-tooltip="Add recipe">
                    <i className="material-icons red-text">add</i>
                    </Link>
                    </li>
                  <li><Link to="/favorites"
                  onClick={this.removeTooltip()}
                  className="tooltipped"
                  data-position="bottom"
                  data-delay="100" data-tooltip="Favorites">
                  <i className="material-icons red-text">favorite</i></Link></li>
                  <li><Link to="/myrecipes"
                  className="tooltipped"
                  data-position="bottom"
                  data-delay="100"
                  data-tooltip="My Recipes">
                  <i className="material-icons red-text">book</i></Link></li>
                  <li>
                    <Link
                    className="dropdown-button"
                    href="#!"
                    data-activates="dropdown1"
                    data-beloworigin="true">
                    <i className="material-icons red-text">account_circle</i>
                    </Link>
                    </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <ul className="side-nav" id="mobile-demo" >
          <li>
            <Link to="/recipes">Recipes<i className="material-icons">home</i></Link></li>
          <li>
            <Link
            data-target="create"
            className=" modal-trigger">Create recipe<i className="material-icons">add</i>
            </Link>
          </li>
          <li>
            <Link to="/favorites">Favourites<i className="material-icons">favorite</i></Link>
          </li>
          <li>
            <Link to="/profile">My Profile<i className="material-icons">account_circle</i></Link>
          </li>
          <li>
            <Link to="/myrecipes">My Recipes<i className="material-icons">book</i></Link>
          </li>
          <li>
            <Link to="/">Sign out<i className="material-icons">exit_to_app</i></Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Header;
