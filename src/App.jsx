import { useEffect, useState } from 'react';
// import axios from 'axios';
import ArticleList from './components/ArticleList/ArticleList';
import fetchArticlesTopic from './articles-api';

import { Audio } from 'react-loader-spinner';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const data = await fetchArticlesTopic('Larry Beahan');
        //fake search
        setUsers(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);
  return (
    <div>
      <h1>Latest articles</h1>
      {loading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      )}
      {error && <p>Wooops!</p>}
      {users.length > 0 && <ArticleList items={users} />}
    </div>
  );
};

export default App;
