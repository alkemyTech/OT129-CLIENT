import React, { useEffect, useState } from "react";

import Card from "../../Components/Card/Card";
import { getNews } from "../../Services/NewsService";

const NewsCards = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews()
      .then((response) => {
        setNews(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container my-5 d-grid gap-3">
      <div className="row">
        {news.map((el) => (
          <div key={el.id} className="col">
            <Card description={el.content} image={el.image} title={el.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCards;
