import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Header extends Component {
  componentDidMount() {
    $(document).ready(() => {
      console.log(this);
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
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
    console.log(this);
    return (
      <div>
        <header id="header">
          <div className="navbar-fixed">
            <ul id="dropdown1" className="dropdown-content">
              <li><Link to="/profile" className="red-text">Profile</Link></li>
              <li className="divider"></li>
              <li><a href="index.html" className="red-text">Sign Out</a></li>
            </ul>
            <nav className="white">
              <div className="nav-wrapper">
                <Link to="/recipes" className="brand-logo center red-text">More-Recipes</Link>
                <a href="" data-activates="mobile-demo" className="button-collapse"><i className="material-icons red-text">menu</i></a>
                <form className="left hide-on-med-and-down">
                  <div className="input-field">
                    <input id="search" type="search" />
                    <label className="label-icon search-icon" htmlFor="search"><i className="material-icons red-text ">search</i></label>
                    <i className="material-icons">close</i>
                  </div>
                </form>
                <ul id="navvy" className="right hide-on-med-and-down">
                  <li><a data-target="create" className="tooltipped modal-trigger modal-open modal-action" data-position="bottom" data-delay="100" data-tooltip="Add recipe"><i className="material-icons red-text">add</i></a></li>
                  <li><Link to="/favorites" className="tooltipped" data-position="bottom" data-delay="100" data-tooltip="Favorites"><i className="material-icons red-text">favorite</i></Link></li>
                  <li><Link to="/myrecipes" className="tooltipped" data-position="bottom" data-delay="100" data-tooltip="My Recipes"><i className="material-icons red-text">book</i></Link></li>
                  <li><a className="dropdown-button" href="#!" data-activates="dropdown1" data-beloworigin="true"><i className="material-icons red-text">account_circle</i></a></li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <ul className="side-nav" id="mobile-demo" >
          <li>
            <input id="search" type="search" placeholder="Search" />
            <i className="material-icons">close</i>
          </li>
          <li><a data-target="create" className=" modal-trigger modal-open modal-action">Create recipe<i className="material-icons">add</i></a></li>
          <li><Link to="/favorites">Favourites<i className="material-icons">favorite</i></Link></li>
          <li><Link to="/profile">My Profile<i className="material-icons">account_circle</i></Link></li>
          <li><Link to="/myrecipes">My Recipes<i className="material-icons">book</i></Link></li>
          <li><Link to="">Sign out<i className="material-icons">exit_to_app</i></Link></li>
        </ul>
      </div>
    );
  }
}
export default Header;
