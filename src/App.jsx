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

  const handleSearch = query => {
    setQuery(query);
    setPage(1);
    setUsers([]); //while submit we need reset list of items for new list with new query
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    console.log(page);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getArticles() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchArticlesTopic(query, page);
        setUsers(prevUsers => {
          console.log(prevUsers);
          return [...prevUsers, ...data];
          // return data; //if we need pages for list
        });
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getArticles();
  }, [page, query]);

  return (
    <div>
      <h1>Latest articles</h1>
      <SearchForm onSearch={handleSearch} />
      {error && <p>Wooops!</p>}
      {users.length > 0 && <ArticleList items={users} />}
      {loading && (
        <p>
          Please wait <Loader />
        </p>
      )}
      {users.length > 0 && !loading && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
      {/*if we need pages for list uncomment return data in await fetchArticlesTopic*/}
      {/* {<p>page:{page}</p>} */}
    </div>
  );
};

export default App;
