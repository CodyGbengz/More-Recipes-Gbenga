import React from 'react';

const UserProfile = props => (
  <div className="col s12 m12">
    <div className="card">
      <div className="card-image">
        <img id="profileBanner"/>
        <a className="btn-floating halfway-fab waves-effect waves-light left red">
          <i className="large material-icons">account_circle</i>
        </a>
      </div>
      <div className="card-content">
        <h4>{ props.userDetails.username }</h4>
        <a className="waves-effect waves-light btn-flat">
          <i className="material-icons left">favorite</i>{ props.userDetails.favourites.length || 0}
        </a>
        <a className="waves-effect waves-light btn-flat">
          <i className="material-icons left">book</i>{ props.userDetails.recipes.length || 0}
        </a>
        <a
          href="#editprofile"
          className="btn-floating btn-medium red right tooltipped modal-trigger"
          data-position="bottom"
          data-delay="100"
          data-tooltip="Edit profile"><i className="material-icons right">mode_edit</i>
        </a>
      </div>
      <div className="card-action">
        <h6><b><em>Firstname</em></b></h6>
        <p>Firstname</p>
        <h6><b><em>Surname</em></b></h6>
        <p> Surname</p>
        <h6><b><em>Birthday</em></b></h6>
        <p>1st January </p>
        <h6><b><em>Location</em></b></h6>
        <p>location</p>
        <h6><b><em>Interest</em></b></h6>
        <p>Interest, interest, interest</p>
      </div>
    </div>
  </div>
);

export default UserProfile;
