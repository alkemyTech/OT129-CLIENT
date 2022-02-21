import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import Card from "../../Components/Card/Card";
import StatusHandler from "../../Components/StatusHandler/StatusHandler";
import { fetchNews, selectorNews } from "../../features/News/news-slice";

const NewsCards = () => {
  const dispatch = useDispatch();
  const { news, status } = useSelector(selectorNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="container mt-3">
      <div className="row">
        <StatusHandler status={status} />
        <div className="container-cards">
          {news &&
            news.map((el) => (
              <Card
                key={el.id}
                description={el.content}
                id={el.id}
                image={el.image}
                title={el.name}
                url={`./novedades`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCards;

NewsCards.propTypes = {
  searchNew: PropTypes.string,
};
