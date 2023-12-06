import React, { useEffect, useState } from 'react'
import styles from './News.module.css'
import { Newsitem } from './Newsitem';

export const News = () => {
  const [articles, setArticles]= useState([]);
  useEffect(()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=136f3e3c521c4ff89771649c8b2de175`
    fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));

  },[])
  return (
    <div>
      <h2 className={styles.text_center}>Latest <span>News</span></h2>
      {articles.map((news,index)=>{
        return <Newsitem key={index} titile ={news.title} description={news.description} src={news.urlToImage} url={news.url} />
       
      })}
      </div>
      
  )
}
export default News;
