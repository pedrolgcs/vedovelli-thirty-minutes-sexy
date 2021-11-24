import axios from 'axios';

const url = {
  development: 'http://localhost:3000/api',
  production: 'https://api.example.com/api',
  test: '/api',
};

const api = axios.create({
  baseURL: url[process.env.NODE_ENV],
});

export { api };
