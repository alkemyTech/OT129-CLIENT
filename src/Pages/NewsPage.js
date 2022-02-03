import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Title from "../Components/Titles/Titles";
import NewsCards from "../Containers/NewsCards/NewsCards";

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
      <Title title={titleAPI} />
      <NewsCards card={cardNews} />
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
