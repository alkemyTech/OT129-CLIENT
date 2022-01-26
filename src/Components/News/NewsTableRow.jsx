import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

const NewsTableRow = ({ data }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{format(new Date(data.created_at), "MM/dd/yyyy")}</td>
      <td>
        <img alt="" className="w-25" src={data.image} />
      </td>
      <td className="">
        <button className="btn btn-primary" type="button">
          Editar
        </button>
        <button className="btn btn-danger" type="button">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

NewsTableRow.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    created_at: PropTypes.string,
  }),
};
export default NewsTableRow;
