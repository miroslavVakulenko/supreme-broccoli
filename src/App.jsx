import { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleList from './components/ArticleList/ArticleList';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        // 1. Встановлюємо індикатор в true перед запитом
        setLoading(true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users/1/posts'
        );

        setArticles(response.data);
      } catch (error) {
        // Тут будемо обробляти помилку
        console.log(error);
      } finally {
        // 2. Встановлюємо індикатор в false після запиту
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);
  console.log(articles);
  return (
    <div>
      <h1>Latest articles</h1>
      {loading && <p>Loading data, please wait...</p>}
      {/* <ArticleList items={articles} /> */}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

export default App;
