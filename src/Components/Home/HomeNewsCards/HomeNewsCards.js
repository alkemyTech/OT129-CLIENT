import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../Card/Card";
import { fetchLastNews, selectorNews } from "../../../features/News/news-slice";
import StatusHandler from "../../StatusHandler/StatusHandler";

import "./HomeNewsCards.css";

const HomeCards = () => {
  const { last_news, state } = useSelector(selectorNews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLastNews(3));
  }, [dispatch]);

  return (
    <div className="container-fluid d-grid gap-3 container-home-news">
      <h2 className="container text-uppercase title-home-news">Últimas Novedades</h2>
      <div>
        <div className="container container-cards">
          {last_news &&
            last_news.map((el) => (
              <Card
                key={el.id}
                description={el.content}
                id={el.id}
                image={el.image}
                title={el.name}
                url={"novedades"}
              />
            ))}
        </div>
        <StatusHandler status={state} />
      </div>
    </div>
  );
};

export default HomeCards;

HomeCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};
