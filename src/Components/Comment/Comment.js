import React from "react";
import PropTypes from "prop-types";

import "../../index.css";
import "./Comment.css";

const Comment = ({ data = {}, title }) => {
  return (
    <>
      <h2 className="comment-title" id="comenatrios">
        {title}
      </h2>
      <div className="comment-list-wrapper">
        <ul className="comment-list">
          {data.map((comment, index) => {
            return (
              <li key={`${comment.user_id}${index}`} className="comment-item">
                <div className="comment-item-wrapper">
                  <div className="comment-user-image">
                    <img alt="User image" src={comment.image} />
                  </div>
                  <div className="comment-item-content">
                    <h4 className="comment-content-user">{comment.user_id ?? "Custom User"}</h4>
                    <p className="comment-content-text">{comment.text}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

Comment.propTypes = {
  data: PropTypes.shape({
    user_id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default Comment;
