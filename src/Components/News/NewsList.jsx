import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <div className="container">
      <h1 className="mt-3 mb-3 text-center">NOVEDADES</h1>
      <Link className="btn btn-primary btn-sm mb-3" to="/backoffice/create-news">
        <i className="fas fa-plus" />
        <span className="ms-2">CREAR NOVEDAD</span>
      </Link>
      <NewsTable news={news} />
    </div>
  );
};

export default NewsList;
