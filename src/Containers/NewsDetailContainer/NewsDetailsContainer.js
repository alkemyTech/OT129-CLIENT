import React, { useEffect, useState } from "react";

import NewsDetails from "../../Components/News/Details/NewsDetails";
import { getNewByID } from "../../Services/NewsService";

const data = {
  id: 1231,
  name: "Apoyo escolar",
  content:
    "Este año hemos abierto aulas de apoyo escolar primario para todos los niños hasta los 12 años.",
  image: "http://ongapi.alkemy.org/storage/h7kk4dTzZZ.jpeg",
};

const ID = window.location.pathname.split("/")[2];
const NewsDetailsContainer = () => {
  const [news, setNews] = useState({
    name: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    getNewByID(ID)
      .then((response) => {
        setNews(response.data.data);
      })
      .catch((err) => {
        console.log(err);
        setNews(data);
      });
  }, []);

  return <NewsDetails data={news} />;
};

export default NewsDetailsContainer;
