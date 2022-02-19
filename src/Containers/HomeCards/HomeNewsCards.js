import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../Components/Card/Card";
import { fetchLastNews, selectorNews } from "../../features/News/news-slice";
import StatusHandler from "../../Components/StatusHandler/StatusHandler";

const HomeCards = () => {
  const dispatch = useDispatch();
  const { last_news, status } = useSelector(selectorNews);

  useEffect(() => {
    dispatch(fetchLastNews());
  }, [dispatch]);

  return (
    <div className="container my-5 d-grid gap-3">
      <div className="row mb-4">
        <h2 className="text-center text-uppercase">Últimas Novedades</h2>
      </div>
      <div className="row">
        <div className="container-cards">
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
        <StatusHandler status={status} />
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
