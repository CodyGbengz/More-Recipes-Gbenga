import React from 'react';
import PropTypes from 'prop-types';

const FavoritesButton = props => 
    (
    <div>
        <a 
         className="btn-floating halfway-fab waves-effect waves-light white" 
         onClick={props.handleFavBtnClick} >
            <i className="material-icons red-text">favorite_border</i>
        </a>
    </div>
    );

export default FavoritesButton;