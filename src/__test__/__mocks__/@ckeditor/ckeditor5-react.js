import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// eslint-disable-next-line react/prop-types
export const CKEditor = ({ config, data, id, onChange }) => {
  return (
    <textarea
      config={config}
      data={data}
      data-testid="inputDescription"
      editor={ClassicEditor}
      id={id}
      onChange={onChange}
    />
  );
};
