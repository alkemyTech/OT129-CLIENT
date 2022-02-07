import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import NewsForm from "../../Components/News/NewsForm";
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
      console.log(id);
    }
  }, []);

  return <NewsForm newId={newId} />;
};

export default NewsContainer;
