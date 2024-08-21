// src/components/articles-api.js
import axios from 'axios';

axios.defaults.baseURL = 'https://65d889dac96fbb24c1bbbc49.mockapi.io/';

const fetchArticlesTopic = async (query, page) => {
  const response = await axios.get('/users', {
    params: {
      name: query,
      page,
      limit: 2,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response.data);
  return response.data;
};

export default fetchArticlesTopic;
