import axios from 'axios';

const NGROK = 'http://2e2674c42763.ngrok.io';

export default axios.create({
  baseURL: `${NGROK}`,
});
