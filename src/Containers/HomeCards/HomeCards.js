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
    getLastNews("4")
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
    <div className="container my-5 d-grid gap-3">
      <div className="row">
        {newsDataExist &&
          lastNewsData.map((el) => (
            <div key={el.id} className="col-3 mb-4">
              <Card description={el.description} image={el.image} title={el.name} />
            </div>
          ))}
        {spinnerShow && <Spinner />}
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
