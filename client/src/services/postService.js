import axios from "axios";

class postService {
  getPosts() {
    return axios
      .get("http://localhost:5000")
      .then((response) => {
        console.log("2");
        console.log(response);
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  }
}

export default new postService();
