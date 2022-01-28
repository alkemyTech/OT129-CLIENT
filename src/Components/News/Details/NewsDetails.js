import axios from "axios";
import React, { useEffect, useState } from "react";

const NewsDetails = () => {
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
      <h5>{data.name}</h5>
      <img alt="..." src={data.image} />
      <p>{data.content}</p>
    </div>
  );
};

export default NewsDetails;
