import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://fobbi-cliente.us-east-1.elasticbeanstalk.com/',
  baseURL: 'http://localhost:8093/',
});

export default api;
