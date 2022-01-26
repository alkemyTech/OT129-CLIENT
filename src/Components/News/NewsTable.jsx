import React from "react";
import PropTypes from "prop-types";

import NewsTableRow from "./NewsTableRow";

const NewsTable = ({ news }) => {
  return (
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
  );
};

NewsTable.propTypes = {
  news: PropTypes.array,
};
export default NewsTable;
