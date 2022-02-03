import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Title from "../Components/Titles/Titles";
<<<<<<< HEAD
import NewsCards from "../Containers/NewsCards/NewsCards";
=======
import ContainerCard from "../Containers/CardContainer/ContainerCard";
import { getNews } from "../Services/NewsService";

const title = "Novedades";
>>>>>>> 3272aa1f906322cb74bbea214c896c021a75fbeb

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
<<<<<<< HEAD
      <Title title={titleAPI} />
      <NewsCards card={cardNews} />
      <h1>Novedades</h1>
=======
      <Title title={title} />
      <ContainerCard data={data} />
>>>>>>> 3272aa1f906322cb74bbea214c896c021a75fbeb
    </>
  );
};

NewsPage.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default NewsPage;
