import React, { useState } from "react";
import useInView from "react-cool-inview";

import Comment from "../../Components/Comment/Comment";
import Skeleton from "../../Components/Skeleton/Skeleton";
import { getComments } from "../../Services/CommentService";

const CommentContainer = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { observe } = useInView({
    rootMargin: "0px",
    onEnter: ({ unobserve }) => {
      setIsLoading(true);
      getComments()
        .then((response) => {
          setIsLoading(false);
          setComments(response.data.data);
          unobserve();
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <div ref={observe} className="comment-container mb-3">
      {isLoading ? (
        <>
          {" "}
          <Comment title="Comentarios" />
          <Skeleton element="h1" height="40px" width="100%" />
        </>
      ) : (
        <Comment data={comments} title="Comentarios" />
      )}
    </div>
  );
};

export default CommentContainer;
