import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/demoweb-41d86/us-central1/api",
});
export default instance;
