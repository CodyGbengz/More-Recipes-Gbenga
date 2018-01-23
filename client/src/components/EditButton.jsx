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
      // className="waves-effect waves-light modal-open modal-action modal-trigger"
      >
      <i className="material-icons">mode_edit</i>
    </a>
  );

export default EditButton;
