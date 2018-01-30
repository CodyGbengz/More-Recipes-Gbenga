import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = props =>
    (
        <a
        onClick={props.handleDeleteBtnClick}
        className="modal-action modal-close waves-effect waves-red btn-flat white-text red">
        yes</a>
    );

export default DeleteButton;
