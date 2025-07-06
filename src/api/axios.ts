// ✅ src/api/axios.ts
import axios from 'axios';

// Ensure the environment variable is defined
const baseURL = process.env.REACT_APP_API_BASE_URL;

if (!baseURL) {
  throw new Error('❌ Environment variable REACT_APP_API_BASE_URL is not defined');
}

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
