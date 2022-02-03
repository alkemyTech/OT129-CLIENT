import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Title from "../Components/Titles/Titles";
import ContainerCard from "../Containers/CardContainer/ContainerCard";
import { getNews } from "../Services/NewsService";

const title = "Novedades";

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
      <Title title={title} />
      <ContainerCard data={data} />
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
