import React, { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";

import Comment from "../../Components/Comment/Comment";
import { getComments } from "../../Services/CommentService";

const CommentContainer = () => {
  const [comments, setComments] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    getComments()
      .then((response) => setComments(response.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <InView>
      {({ inView, ref, entry }) => (
        <div ref={ref} className="comment-container">
          <Comment data={comments} title={`Header inside viewport ${inView}.`} />
        </div>
      )}
    </InView>
  );
};

export default CommentContainer;
