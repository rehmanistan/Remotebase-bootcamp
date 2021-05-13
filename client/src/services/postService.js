import axios from "axios";

class postService {
  getPosts() {
    return axios
      .get("http://localhost:5000")
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  }

  createPost = async (title, content, author) => {
    return axios
      .post("http://localhost:5000/createPost", { title, content, author })
      .then((res) => {
        console.log("SERVER CREATED POST");
        console.log(res);
        return res.data;
      })
      .catch((err) => {
        console.log("createPost error");
        throw err;
      });
  };
}

export default new postService();
