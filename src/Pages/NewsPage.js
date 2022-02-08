import React from "react";

import Title from "../Components/Titles/Titles";
import NewsCards from "../Containers/NewsCards/NewsCards";

const NewsPage = () => {
  return (
    <>
      <Title title="Novedades" />
      <NewsCards />
    </>
  );
};

export default NewsPage;
