import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { getNews } from "../../Services/getNews";
import Title from "../Titles/Titles";

const News = () => {
  const titleAPI = "Desde la API Novedades";
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews(setNews);
  }, []);

  const newsList = () => {
    return news.length ? (
      news.map((element) => (
        <li key={element.id} className="card-info">
          <h3>{element.name}</h3>
          <p>{element.description}</p>
        </li>
      ))
    ) : (
      <p>No hay novedades</p>
    );
  };

  return (
    <>
      <Title title={titleAPI} />
      <h1>Novedades</h1>
      <ul className="list-container">{newsList()}</ul>
    </>
  );
};

News.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default News;
