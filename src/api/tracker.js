import axios from 'axios';

const NGROK = ' http://5cdb85fff3f1.ngrok.io';

export default axios.create({
  baseURL: `${NGROK}`,
});
