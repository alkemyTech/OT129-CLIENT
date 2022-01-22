import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import Titles from '../../Titles/Titles'
//se deja planteada para luego consumir del componente Titles

const NewsDetail=(props) => {


const [newsDetail, setNewsDetail] = useState(null)
//se deja planteada para luego consumir la api
  async function getNewsDetail() {
    try {
      const  data  = await axios.get('url')
      setNewsDetail(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { getNewsDetail() }, [])
console.log(newsDetail);
  return (
    <div>
      {/* <Titles /> */}
      <img src='news.imagen' alt='news.alt' />
      <p>news.contenido</p>


    </div>
  )
}
export default NewsDetail;