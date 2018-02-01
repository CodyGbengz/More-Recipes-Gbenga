import React from 'react';
import PropTypes from 'prop-types';

const EditButton = props =>
  (
    <span className="recipe-icon">
      <a
        onClick={props.handleEdit}
        data-position="bottom"
        data-delay="100"
        data-tooltip="edit"
        data-target="edit">
        <i className="material-icons edit">create</i>
      </a>
    </span>
  );

export default EditButton;
