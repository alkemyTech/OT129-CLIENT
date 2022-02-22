import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Card from "../../Components/Card/Card";
import { getLastNews } from "../../Services/NewsService";
import Spinner from "../../Components/Spinner/Spinner";
import { alerts } from "../../utils/alerts";

const HomeCards = () => {
  const [lastNewsData, setLastNewsData] = useState([]);
  const [newsDataExist, setNewsDataExist] = useState(false);
  const [spinnerShow, setSpinnerShow] = useState(true);

  useEffect(() => {
    getLastNews("3")
      .then((response) => {
        setLastNewsData(response.data.data);
        setNewsDataExist(true);
        setSpinnerShow(false);
      })
      .catch(() => {
        alerts("Lo sentimos! La información no se encuentra disponible.", "error");
        setSpinnerShow(false);
      });
  }, []);

  return (
    <>
      <h2 className="text-center text-uppercase my-3">Últimas Novedades</h2>
      <div className="container-cards">
        {newsDataExist &&
          lastNewsData.map((el) => (
            <Card
              key={el.id}
              description={el.content}
              id={el.id}
              image={el.image}
              title={el.name}
              url={"novedades"}
            />
          ))}
        {spinnerShow && <Spinner />}
      </div>
    </>
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
