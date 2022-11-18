import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs";
import { showMessage } from "@/api/status";

const axiosInstance: AxiosInstance = axios.create({
  timeout: 5000,
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 "PUT", "POST" 和 "PATCH" 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [
    function (data) {
      delete data.Authorization;
      data = qs.stringify(data);
      return data;
    },
  ],
});

// 响应拦截
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 存储token
    if (response.headers.authorization) {
      localStorage.setItem("app_token", response.headers.authorization);
    } else {
      if (response.data && response.data.token) {
        localStorage.setItem("app_token", response.data.token);
      }
    }

    if (response.status === 200) {
      return response;
    } else {
      console.error(`返回错误码：${response.status}`);
      showMessage(response.status);
      return response;
    }
  },
  (err: any) => {
    const { response } = err;
    if (response) {
      return Promise.reject(response.data);
    } else {
      showMessage(response.status);
      console.error(`网络异常：${response}`);
    }
  }
);

// 请求拦截
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
