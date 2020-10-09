import { create } from "apisauce";

const http = create({
  baseURL: "http://thor.paypad.com.ng:8004/api/v1",
});

export default http;
