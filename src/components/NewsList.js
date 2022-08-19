import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsList.css';
import Button from '@mui/material/Button';
const NewsList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        'https://newsapi.org/v2/everything?q=apple&from=2022-08-17&to=2022-08-17&sortBy=popularity&apiKey=fbff3dfeafb34ee6aba962f77bdb8aa6'
      );

      setArticles(response.data.articles);
    };
    getArticles();
  }, []);
  return (
    <>
      <h1>Todays Breaking News</h1>
      <div className="data__box">
        {articles.map((el, key) => {
          console.log(el);
          return (
            <div className="data__show">
              <h1>{el.title}</h1>
              <img src={el.urlToImage} />
              <h5>{el.author}</h5>
              <h5>{el.description}</h5>
              <h6>A{el.content}</h6>

              <div className="button">
                <a href={el.url}>
                  <Button variant="contained">Read Post</Button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewsList;
