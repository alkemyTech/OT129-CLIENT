import React from "react";
import PropTypes from "prop-types";

import NewsTableRow from "./NewsTableRow";

const NewsTable = ({ news }) => {
  return (
    <>
      {news ? (
        <div className="mh-75 overflow-auto">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Imagen</th>
                <th scope="col">Fecha de creación</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {news?.map((data) => (
                <NewsTableRow key={data.id} data={data} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

NewsTable.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      photo: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ),
};
export default NewsTable;
