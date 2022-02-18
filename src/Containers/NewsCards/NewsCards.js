import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../Components/Card/Card";
import InputSearch from "../../Components/InputSearch";
import StatusHandler from "../../Components/StatusHandler/StatusHandler";
import { fetchNews, selectorNews } from "../../features/News/news-slice";

const NewsCards = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { news, status } = useSelector(selectorNews);

  useEffect(() => {
    dispatch(fetchNews(search));
  }, [dispatch, search]);

  return (
    <div className="container my-5">
      <div className="text-center d-block w-25 mb-4 m-auto ">
        <InputSearch setSearch={setSearch} />
      </div>
      <div className="row">
        <StatusHandler status={status} />
        <div className="container-cards">
          {news &&
            news.map((el) => (
              <Card
                key={el.id}
                description={el.content}
                id={el.id}
                image={el.image}
                title={el.name}
                url={`./novedades`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
