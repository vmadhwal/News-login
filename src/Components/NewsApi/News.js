import React, { useEffect, useState } from 'react';
import styles from './News.module.css';
import { Newsitem } from './Newsitem';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=136f3e3c521c4ff89771649c8b2de175';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setError(new Error('Data structure is not as expected'));
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });

  }, []);

  return (
    <div>
      <h2 className={styles.text_center}>Latest <span>News</span></h2>
      
      {loading && <p>Loading...</p>}
      
      {error && <p>Error: {error.message}</p>}
      
      {!loading && !error && articles.length > 0 && (
        <div>
          {articles.map((news, index) => (
            <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
          ))}
        </div>
      )}

      {!loading && !error && articles.length === 0 && <p>No articles available.</p>}
    </div>
  );
}

export default News;
