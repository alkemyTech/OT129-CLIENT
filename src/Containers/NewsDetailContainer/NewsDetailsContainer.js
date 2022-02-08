import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NewsDetails from "../../Components/News/Details/NewsDetails";
import { getNewByID } from "../../Services/NewsService";

const NewsDetailsContainer = () => {
  const [news, setNews] = useState({
    name: "",
    content: "",
    image: "",
    id: "",
  });

  const { id } = useParams();

  useEffect(() => {
    getNewByID(id)
      .then((response) => {
        setNews(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return <NewsDetails data={news} />;
};

export default NewsDetailsContainer;
