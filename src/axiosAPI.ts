import axios from "axios";

const axiosApi = axios.create({
  baseURL: 'https://quotesapp-2f605-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default axiosApi;