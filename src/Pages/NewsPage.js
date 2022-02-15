import React from "react";

import Title from "../Components/Titles/Titles";
import UltimoEvento from "../Components/UltimoEvento/UltimoEvento";
import NewsCards from "../Containers/NewsCards/NewsCards";

const NewsPage = () => {
  return (
    <>
      <Title title={"Novedades"} />
      <NewsCards />
      <UltimoEvento />
    </>
  );
};

export default NewsPage;
