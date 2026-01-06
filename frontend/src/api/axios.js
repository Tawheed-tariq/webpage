import axios from 'axios';
import config from "../config.json";

const apiClient = axios.create({
  baseURL: `${config.host}/api/`, 
});



export default apiClient;
