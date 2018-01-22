import React from 'react';
import Dropzone from 'react-dropzone';

const UserProfile = props => (
  <div>
    <div className="col s12 m12">
      <div className="card">
        <div className="card-image">
          <img id="profileBanner" />
          <a className="btn-floating halfway-fab waves-effect waves-light left red">
            <img src={props.userDetails.image_url}  className="circle responsive-img" />
          </a>
        </div>
        <div className="card-content">
          <h4>{props.userDetails.username}</h4>
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
          <p>{ props.userDetails.firstname}</p>
          <h6><b><em>Surname</em></b></h6>
          <p>{ props.userDetails.surname }</p>
        </div>
      </div>
    </div>
  </div>
);

export default UserProfile;
