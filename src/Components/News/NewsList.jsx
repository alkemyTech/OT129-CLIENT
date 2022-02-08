import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchNews, selectorNews } from "../../features/News/news-slice";
import TitleNav from "../TitleNav/TitleNav";

import NewsTable from "./NewsTable";

const NewsList = () => {
  const dispatch = useDispatch();

  const { news } = useSelector(selectorNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/news/create" linkTitle="Crear" title="Novedades" />
      <NewsTable news={news} />
    </div>
  );
};

export default NewsList;
