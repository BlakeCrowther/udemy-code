import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-bb038.firebaseio.com/'
});

export default instance;