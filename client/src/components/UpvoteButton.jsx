import React from 'react';
import PropTypes from 'prop-types';

const UpvoteButton = props =>
  (
    <a
      onClick={props.handleUpvoteBtnClick}
      className="waves-effect waves-light tooltipped"
      data-position="bottom"
      data-delay="100"
      data-tooltip="upvote">
      <i className="material-icons left">thumb_up</i>
      {props.recipe.upvotes}
      {console.log(props)}
    </a>
  );

export default UpvoteButton;
