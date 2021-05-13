import axios from "axios";

class AuthenticationService {
  signIn = (email, password) => {
    return axios
      .post("http://localhost:5000/signIn", { email, password })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
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
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch((err) => {
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
