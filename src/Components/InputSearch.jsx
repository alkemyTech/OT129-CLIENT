import React, { useRef } from "react";
import PropTypes from "prop-types";

import { debouncerSearch } from "../utils/debounceSearch";

const InputSearch = ({ setSearch }) => {
  const debounceRef = useRef();

  return (
    <div className="input-group">
      <input
        className="form-control form-control-sm"
        type="text"
        onChange={(e) => debouncerSearch(e, debounceRef, setSearch, 300)}
      />
      <span className="input-group-text">
        <i className="fas fa-search-plus color-icon-search" />
      </span>
    </div>
  );
};

export default InputSearch;

InputSearch.propTypes = {
  setSearch: PropTypes.func,
};
