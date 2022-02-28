import React from "react";

import Title from "../Components/Titles/Titles";
import LastEvent from "../Components/LastEvent/LastEvent";
import NewsCards from "../Containers/NewsCards/NewsCards";

const NewsPage = () => {
  return (
    <>
      <Title title={"Novedades"} />
      <NewsCards />
      <LastEvent />
    </>
  );
};

export default NewsPage;
