import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import Card from "../../Components/Card/Card";
import { fetchNews, selectorNews } from "../../features/News/news-slice";
import { useDebounceSearch } from "../../hooks/useDebounceSearch";
import SearchInput from "../../Components/SearchInput/SearchInput";

import styles from "./NewsCards.module.css";

const NewsCards = () => {
  const [search, setSearch] = useState("");
  const searchValue = useDebounceSearch(search);
  const dispatch = useDispatch();
  const { news } = useSelector(selectorNews);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchNews(searchValue));
  }, [dispatch, searchValue]);

  return (
    <div className={`container ${styles.containerNewsPage}`}>
      <SearchInput handleSearch={changeHandler} title="Buscar novedad" />
      <div className={`mt-5 ${styles.newsCardsContainer}`}>
        {news?.length != 0 ? (
          news?.map((el) => (
            <Card
              key={el.id}
              description={el.content}
              id={el.id}
              image={el.image}
              title={el.name}
              url="novedades"
            />
          ))
        ) : (
          <p>No hay novedades</p>
        )}
      </div>
    </div>
  );
};

export default NewsCards;

NewsCards.propTypes = {
  searchNew: PropTypes.string,
};
