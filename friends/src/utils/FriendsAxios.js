import axios from "axios";

const FriendsAxios = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      authorization: token,
    },
  });
};

export default FriendsAxios;
