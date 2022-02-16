import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./BackCards.css";

const BackCards = ({ data }) => {
  return (
    <div className="container cardCtn">
      {data?.map((el) => {
        return (
          <div key={el.title} className="card-backoffice">
            <div className="content-card">
              <h3 className="titleCard">{el.title}</h3>
              <div className="container-icon">
                <i className={el.icon} />
              </div>
              <Link className="btnLink" to={el.link}>
                Ir
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

BackCards.propTypes = {
  data: PropTypes.array,
};

export default BackCards;
