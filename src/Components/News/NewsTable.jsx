import React from "react";
import PropTypes from "prop-types";

import NewsTableRow from "./NewsTableRow";

const NewsTable = ({ news, onDelete }) => {
  return (
    <>
      {news ? (
        <div className="table-container">
          <table className="table table-striped table-list">
            <thead className="thead-list">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Imagen</th>
                <th scope="col">Fecha de creación</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {news?.map((data) => (
                <NewsTableRow key={data.id} data={data} onDelete={onDelete} />
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
  onDelete: PropTypes.func,
};
export default NewsTable;
