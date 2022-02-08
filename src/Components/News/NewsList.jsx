import React, { useState, useEffect } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchNews, selectorNews } from "../../features/News/news-slice";
import TitleNav from "../TitleNav/TitleNav";
import { getNews } from "../../Services/NewsService";

import NewsTable from "./NewsTable";

const NewsList = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await getNews();

      setNews(response.data.data);
    };

    getData();
  }, []);
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
