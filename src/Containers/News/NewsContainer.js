import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import NewsForm from "../../Components/News/NewsForm";
import TitleNav from "../../Components/TitleNav/TitleNav";
import { getNewsById } from "../../Services/NewsService";

const NewsContainer = () => {
  const { id } = useParams();

  const [newId, setNewId] = useState();

  useEffect(() => {
    if (id) {
      getNewsById(id)
        .then((result) => {
          const response = result.data.data;

          setNewId(response);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="container mt-3">
      <TitleNav link="/backoffice/news" linkTitle="Volver" />
      <NewsForm newId={newId} />
    </div>
  );
};

export default NewsContainer;
