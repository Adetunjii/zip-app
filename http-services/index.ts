import { ILogin } from "../models/ILogin";
import http from "../globals/http";
import { AsyncStorage } from "react-native";

const login = (payload: ILogin) => {
  return http.post("/auth", payload);
};

const signup = (payload: any) => {
  return http.post("/customer", payload);
}

const isSignedIn = async () => {
  await AsyncStorage.getItem('customer')
  .then(res => {
    if(res !== null) {
      return true;
    }
    else {
      return false;
    }
  })
  .catch(err => console.log(err));
}

const getServices = async () => {
  return http.get('/services');
}

export default {
  login, signup, getServices
};
