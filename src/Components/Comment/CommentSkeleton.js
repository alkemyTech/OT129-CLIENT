import React from "react";

import Skeleton from "../Skeleton/Skeleton";
import "./CommentSkeleton.css";

const CommentSkeleton = () => {
  return (
    <div className="comment-skeleton-row">
      <Skeleton element="span" height="100px" width="100px" />
      <div className="comment-skeleton-col">
        <Skeleton element="h1" height="20px" width="100%" />
        <Skeleton element="p" height="40px" width="100%" />
      </div>
    </div>
  );
};

export default CommentSkeleton;
