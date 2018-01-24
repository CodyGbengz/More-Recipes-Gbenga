import React from 'react';
import PropTypes from 'prop-types';

const EditButton = props =>
  (
    <a
      onClick={props.handleEdit}
      data-position="bottom"
      data-delay="100"
      data-tooltip="edit"
      data-target="edit"
      >
      <i className="material-icons">mode_edit</i>
    </a>
  );

export default EditButton;
