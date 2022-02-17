import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../Components/Card/Card";
import StatusHandler from "../../Components/StatusHandler/StatusHandler";
import { fetchNews, selectorNews } from "../../features/News/news-slice";
import { debouncerSearch } from "../../utils/debounceSearch";

const NewsCards = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { news, status } = useSelector(selectorNews);

  useEffect(() => {
    dispatch(fetchNews(search));
  }, [dispatch, search]);

  //this is needed for the debouncer function
  const debounceRef = useRef();

  return (
    <div className="container my-5">
      <div className="d-flex align-items-center w-25 mb-4 ">
        <div className="input-group">
          <input
            aria-label="Dollar amount (with dot and two decimal places)"
            className="form-control form-control-sm"
            type="text"
            onChange={(e) => debouncerSearch(e, debounceRef, setSearch, 300)}
          />
          <span className="input-group-text">
            <i className="fas fa-search-plus text-primary" />
          </span>
        </div>
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
