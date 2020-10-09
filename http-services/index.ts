import { ILogin } from "../models/ILogin";
import http from "../globals/http";

const login = (payload: ILogin) => {
  return http.post("/auth", payload);
};

export default {
  login,
};
