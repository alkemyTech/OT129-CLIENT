import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import NewsDetails from "../../Components/News/Details/NewsDetails";
import { getNewByID } from "../../Services/NewsService";

const NewsDetailsContainer = ({ id }) => {
  const [news, setNews] = useState({
    name: "",
    content: "",
    image: "",
    id: "",
  });

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

NewsDetailsContainer.propTypes = {
  id: PropTypes.number.isRequired,
};

export default NewsDetailsContainer;
