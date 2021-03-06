import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({ handleSearch, title = "Ingresa tu búsqueda" }) => {
  return (
    <div className="w-100">
      <input
        className="form-control form-control-sm w-100 mb-3"
        placeholder={title}
        type="text"
        onChange={handleSearch}
      />
    </div>
  );
};

SearchInput.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default SearchInput;
