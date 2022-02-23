import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import Card from "../../Components/Card/Card";
import StatusHandler from "../../Components/StatusHandler/StatusHandler";
import { fetchNews, selectorNews } from "../../features/News/news-slice";
import { useDebounceSearch } from "../../hooks/useDebounceSearch";
import SearchInput from "../../Components/SearchInput/SearchInput";

const NewsCards = () => {
  const [search, setSearch] = useState("");
  const searchValue = useDebounceSearch(search);
  const dispatch = useDispatch();
  const { news, status } = useSelector(selectorNews);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchNews(searchValue));
  }, [dispatch, searchValue]);

  return (
    <div className="container mt-3">
      <div className="w-25 mb-3">
        <SearchInput handleSearch={changeHandler} title="Busca tus novedades por NOMBRE" />
      </div>
      <div className="row">
        <StatusHandler status={status} />
        <div className="container-cards">
          {news?.length != 0 ? (
            news?.map((el) => (
              <Card
                key={el.id}
                description={el.content}
                id={el.id}
                image={el.image}
                title={el.name}
                url={`./novedades`}
              />
            ))
          ) : (
            <p>No hay novedades</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCards;

NewsCards.propTypes = {
  searchNew: PropTypes.string,
};
