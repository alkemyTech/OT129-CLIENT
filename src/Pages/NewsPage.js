import React, { useState } from "react";

import Title from "../Components/Titles/Titles";
import UltimoEvento from "../Components/UltimoEvento/UltimoEvento";
import NewsCards from "../Containers/NewsCards/NewsCards";

const NewsPage = () => {
  const [searchNew, setSearchNew] = useState("");

  const handleChange = (e) => {
    setSearchNew(e.target.value);
  };

  return (
    <>
      <Title title={"Novedades"} />
      <div className="container mt-3 mb-0 d-flex justify-center">
        <input className="form-control form-control-sm w-25" onChange={handleChange} />
      </div>
      <NewsCards searchNew={searchNew} />
      <UltimoEvento />
    </>
  );
};

export default NewsPage;
