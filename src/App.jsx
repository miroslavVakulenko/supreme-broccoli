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
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    setUsers([]);
    setError(false);
    async function fetchArticles() {
      try {
        if (searchValue === '') {
          setLoading(true);
          const data = await fetchArticlesTopic();
          setUsers(data);
        } else {
          setLoading(true);
          const data = await fetchArticlesTopic(searchValue);
          setUsers(data);
        }
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, [searchValue]);

  const handleSearch = topic => {
    setSearchValue(topic);
  };
  return (
    <div>
      <h1>Latest articles</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <p>Wooops!</p>}
      {users.length > 0 && <ArticleList items={users} />}
    </div>
  );
};

export default App;
