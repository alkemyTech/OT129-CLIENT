import React, { useState, useEffect } from "react";

import Title from "../Components/Titles/Titles";
import NewsCards from "../Containers/NewsCards/NewsCards";
import { getNews } from "../Services/NewsService";

const NewsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getNews();

      setData(response.data.data);
    };

    getData();
  }, []);

  return (
    <>
      <Title title={"Novedades"} />
      <NewsCards data={data} />
    </>
  );
};

export default NewsPage;
