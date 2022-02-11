import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Card from "../../Components/Card/Card";
import StatusHandler from "../../Components/StatusHandler/StatusHandler";
import { fetchNews, selectorNews } from "../../features/News/news-slice";

const NewsCards = () => {
  const dispatch = useDispatch();
  const { news, status } = useSelector(selectorNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="container my-5 d-grid gap-3">
      <div className="row">
        <StatusHandler status={status} />
        {news &&
          news.map((el) => (
            <div key={el.id} className="col">
              <Card
                description={el.content}
                id={el.id}
                image={el.image}
                title={el.name}
                url={`./novedades`}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewsCards;
