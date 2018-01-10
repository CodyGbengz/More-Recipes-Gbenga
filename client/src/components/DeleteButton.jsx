import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = props => 
    (
        <a 
        onClick={props.handleDeleteBtnClick} 
        className="waves-effect waves-light tooltipped" 
        data-position="bottom" 
        data-delay="100" 
        data-tooltip="delete">
        <i className="material-icons left">delete_forever</i>
        </a>
    );

export default DeleteButton;