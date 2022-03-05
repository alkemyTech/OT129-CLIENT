import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Title from "../../Components/Titles/Titles";
import NewsDetails from "../../Components/News/Details/NewsDetails";
import { fetchNewsById, selectorNews } from "../../features/News/news-slice";
import StatusHandler from "../../Components/StatusHandler/StatusHandler";

const NewsDetailsContainer = () => {
  const dispatch = useDispatch();
  const { _new, status } = useSelector(selectorNews);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchNewsById(id));
  }, [id]);

  return (
    <>
      <Title title={_new.name} />
      <StatusHandler status={status} />
      {status === "SUCCESSFUL" && <NewsDetails data={_new} />}
    </>
  );
};

export default NewsDetailsContainer;
