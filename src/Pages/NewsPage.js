import React, { useState, useEffect } from "react";

import Title from "../Components/Titles/Titles";
import NewsCards from "../Containers/NewsCards/NewsCards";
import { getNews } from "../Services/NewsService";
import Spinner from "../Components/Spinner/Spinner";
import { alerts } from "../utils/alerts";

const NewsPage = () => {
  const [data, setData] = useState([]);
  const [dataExist, setDataExist] = useState(false);
  const [spinnerShow, setSpinnerShow] = useState(true);

  useEffect(() => {
    getNews()
      .then((response) => {
        setData(response.data.data);
        setDataExist(true);
        setSpinnerShow(false);
      })
      .catch(() => {
        alerts("Error al cargar los datos", "error");
        setSpinnerShow(false);
      });
  }, []);

  return (
    <>
      <Title title={"Novedades"} />
      {dataExist && <NewsCards data={data} />}
      {spinnerShow && <Spinner />}
    </>
  );
};

export default NewsPage;
