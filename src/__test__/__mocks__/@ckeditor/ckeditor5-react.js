import React from "react";

// eslint-disable-next-line react/prop-types
export const CKEditor = ({ config, data, id, onChange }) => {
  return (
    <textarea
      config={config}
      data={data}
      data-testid="inputDescription"
      id={id}
      onChange={onChange}
    />
  );
};
