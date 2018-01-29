import React from 'react';
import PropTypes from 'prop-types';

const FavoritesButton = props =>
    (
    <div>
      <a
        className="btn-floating fab waves-effect waves-light white"
        onClick={props.handleFavBtnClick} >
        <i className="material-icons red-text">
          {(props.isUserFavorite()) ? 'favorite' : 'favorite_border'}
        </i>
      </a>
    </div>
    );

export default FavoritesButton;