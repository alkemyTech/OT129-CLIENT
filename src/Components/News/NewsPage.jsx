import React, { useState, useEffect } from "react";

import { getAllNews } from "../../Services/getAllNews";

import NewsTable from "./NewsTable";

const NewsPage = () => {
  const [news, setNews] = useState();

  useEffect(async () => {
    const news = await getAllNews();

    setNews(news.data.data);
  }, []);
  console.log(news);

  return (
    <div className="container">
      <h1>Novedades</h1>
      <NewsTable news={news} />
    </div>
  );
};

export default NewsPage;
