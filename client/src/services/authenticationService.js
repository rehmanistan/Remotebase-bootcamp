import axios from "axios";

class AuthenticationService {
  signIn = (email, password) => {
    return axios
      .post("http://localhost:5000/signIn", { email, password })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(localStorage);
        }
        console.log("2");
        console.log(response);
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  };

  signUp = async (email, password) => {
    return axios
      .post("http://localhost:5000/signUp", { email, password })
      .then((response) => {
        console.log("1");
        console.log(response);
      })
      .catch((err) => {
        console.log("2");
        throw err;
      });
  };

  signOut() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthenticationService();
