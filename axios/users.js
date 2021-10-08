import axios from "axios";

const userRequest = axios.create({
    baseURL: `http://localhost:3000/api/users`
  });

export const apiUserCreate = (data) => userRequest.post("/" , data).catch(err=>{console.error("apiUserCreate 服務異常!!")});
export const apiUsersGet = () => userRequest.get("/").catch(err=>{console.error("apiUsersGet 服務異常!!")});
