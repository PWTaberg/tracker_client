import axios from 'axios';
import { AsynchStorage, AsyncStorage } from 'react-native';

const NGROK = 'http://a9c4d88cd999.ngrok.io';

const instance = axios.create({
  baseURL: `${NGROK}`,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
