import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Title from "../../Components/Titles/Titles";
import NewsDetails from "../../Components/News/Details/NewsDetails";
import { getNewsById } from "../../Services/NewsService";

const NewsDetailsContainer = () => {
  const [news, setNews] = useState({
    name: "",
    content: "",
    image: "",
    id: "",
  });

  const { id } = useParams();

  useEffect(() => {
    getNewsById(id)
      .then((response) => {
        setNews(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <Title title={news.name} />
      <NewsDetails data={news} />
    </>
  );
};

export default NewsDetailsContainer;
