import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import TitleNav from "../TitleNav/TitleNav";
import { getNews } from "../../Services/NewsService";

import NewsTable from "./NewsTable";

const NewsList = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await getNews();

      setNews(response.data.data);
      console.log(news);
    };

    getData();
  }, []);

  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/news/create" linkTitle="Crear" title="Novedades" />
      <NewsTable news={news} />
    </div>
  );
};

export default NewsList;
