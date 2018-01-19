import React from 'react';
import PropTypes from 'prop-types';

const DownvoteButton = props => 
    (
        <a 
        onClick={props.handleDownvoteBtnClick} 
        className="waves-effect waves-light tooltipped" 
        data-position="bottom" 
        data-delay="100" 
        data-tooltip="downvote">
        <i className="material-icons left">thumb_down</i>
        {props.recipe.downvotes}
        </a>
    );

export default DownvoteButton;