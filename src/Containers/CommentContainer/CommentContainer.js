import React, { useEffect, useState } from "react";

import Comment from "../../Components/Comment/Comment";
import { getComments } from "../../Services/CommentService";

const CommentContainer = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments()
      .then((response) => setComments(response.data.data))
      .catch((err) => console.log(err));
  }, []);

  return <Comment data={comments} title="Comentarios" />;
};

export default CommentContainer;
