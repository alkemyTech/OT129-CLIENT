import React from "react";
import PropTypes from "prop-types";

import Title from "../Components/Titles/Titles";
import ContainerCard from "../Containers/CardContainer/ContainerCard";

const NewsPage = () => {
  const titleAPI = "titulo Desde la API Novedades";
  const cardNews = "Cards Desde la API Novedades";

  return (
    <>
      <Title title={titleAPI} />
      <ContainerCard card={cardNews} />
      <h1>Novedades</h1>
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
