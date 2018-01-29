import React from 'react';
import PropTypes from 'prop-types';

const UpvoteButton = props =>
  (
    <span>
      <a
        onClick={props.handleUpvoteBtnClick}
        className="waves-effect waves-light tooltipped"
        data-position="bottom"
        data-delay="100"
        data-tooltip="upvote">
        <i className="material-icons left">thumb_up</i>
      </a>
      <span>{props.recipe.upvotes} </span>
    </span>
  );

export default UpvoteButton;
