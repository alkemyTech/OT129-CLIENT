import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({ handleSearch, title = "Ingresa tu búsqueda" }) => {
  return (
    <div className="input-group my-3">
      <input className="form-control" placeholder={title} type="text" onChange={handleSearch} />
    </div>
  );
};

SearchInput.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default SearchInput;
