import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({ handleSearch, title = "Ingresa tu búsqueda" }) => {
  return (
    <div className="input-group mt-3">
      <input
        className="form-control form-control-sm"
        placeholder={title}
        type="text"
        onChange={handleSearch}
      />
      <span className="input-group-text">
        <i className="fas fa-search-plus color-icon-search" />
      </span>
    </div>
  );
};

SearchInput.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default SearchInput;
