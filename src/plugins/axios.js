import axios from "axios";

const ipDoServidor = "localhost";
const portaDoServidor = "3003";

axios.defaults.baseURL = `http://${ipDoServidor}:${portaDoServidor}`;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.timeout = 30000;

export default axios;
