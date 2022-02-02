import React from "react";
import PropTypes from "prop-types";

import NewsTableRow from "./NewsTableRow";

const NewsTable = ({ news }) => {
  return (
    <>
      {news ? (
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
              <NewsTableRow key={data.id} data={data} />
            ))}
          </tbody>
        </table>
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
  news: PropTypes.array,
};
export default NewsTable;
