import axios from "axios";
import React, { useEffect, useState } from "react";

const NewsDetails = (props) => {
  const [newsDetail, setNewsDetail] = useState(null);

  async function getNewsDetail() {
    try {
      const data = await axios.get("url");

      setNewsDetail(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNewsDetail();
  }, []);
  console.log(newsDetail);

  return (
    <div>
      <img alt="news.alt" src="news.imagen" />
      <p>news.contenido</p>
    </div>
  );
};

export default NewsDetails;
