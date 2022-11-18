import axios from "@/api/request";
import type { isLogin } from "@/api/types";

export const login = (data: isLogin) => {
  return axios.request({
    method: "post",
    url: "/login",
    data,
  });
};
