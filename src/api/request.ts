import axios from 'axios';

let request = axios.create({
  baseURL: '/',
  timeout: 10000,
})


export default request;
