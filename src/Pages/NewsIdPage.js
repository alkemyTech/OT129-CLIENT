import React from "react";

import Title from "../Components/Titles/Titles";
import CommentContainer from "../Containers/CommentContainer/CommentContainer";
import NewsDetailsContainer from "../Containers/NewsDetailContainer/NewsDetailsContainer";

const NewsIdPage = () => {
  return (
    <>
      <Title title="Novedades ID" />
      <NewsDetailsContainer />
      <CommentContainer />
    </>
  );
};

export default NewsIdPage;
