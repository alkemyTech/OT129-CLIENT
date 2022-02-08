import React from "react";
import PropTypes from "prop-types";

import "../../index.css";
import "./Comment.css";

const Comment = ({ data = [], title }) => {
  return (
    <div>
      <h2 className="comment-title" id="comenatrios">
        {title}
      </h2>
      <div className="comment-list-wrapper">
        <ul className="comment-list">
          {data.length > 0 &&
            data.map((comment, index) => {
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
    </div>
  );
};

Comment.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      user_id: PropTypes.number,
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  title: PropTypes.string,
};

export default Comment;
