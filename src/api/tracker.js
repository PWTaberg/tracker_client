import axios from 'axios';

const NGROK = 'http://6559f0a6408f.ngrok.io';

export default axios.create({
  baseURL: `${NGROK}`,
});
