import axios from 'axios';

const NGROK = 'http://c0c0e477a6d7.ngrok.io';

export default axios.create({
  baseURL: `${NGROK}`,
});
