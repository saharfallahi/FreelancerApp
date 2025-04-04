import axios from "axios";

const BASE_URL=import.meta.env.VITE_BASE_URL
// const BASE_URL = "http://localhost:5000/api";

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// err =>request,response
app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    if (err.response.status === 401 && !originalConfig._retry ) {
      originalConfig._retry = true;
      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });
        if (data) return app(originalConfig);
      } catch (error) {
        Promise.reject(error);
      }
    }
  }
);

const http = {
  get: app.get,
  delete: app.delete,
  post: app.post,
  put: app.put,
  patch: app.patch,
};

export default http;
