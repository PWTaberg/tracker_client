import axios from 'axios';

const NGROK = 'http://57b9e0576b70.ngrok.io';

export default axios.create({
  baseURL: `${NGROK}`,
});
