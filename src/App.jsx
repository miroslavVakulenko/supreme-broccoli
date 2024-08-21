import { useEffect, useState } from 'react';
// import axios from 'axios';
import ArticleList from './components/ArticleList/ArticleList';
import fetchArticlesTopic from './articles-api';
import SearchForm from './components/SearchForm/SearchForm';
import Loader from './components/loader/Loader';
const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  useEffect(() => {
    setUsers([]);
    setError(false);
    async function fetchArticles() {
      try {
        setLoading(true);
        const data = await fetchArticlesTopic(query, page);
        setUsers(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, [page, query]);

  const handleSearch = async query => {
    setQuery(query);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    console.log(page);
  };
  return (
    <div>
      <h1>Latest articles</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <p>Wooops!</p>}
      {users.length > 0 && <ArticleList items={users} />}
      {users.length > 0 && <button onClick={handleLoadMore}>Load more</button>}
    </div>
  );
};

export default App;
