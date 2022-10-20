import axios from "axios";

class AuthService {
  async login(user) {
    const { data } = await axios.post("token/", user);
    return data;
  }
  async updateUser(newUser) {
    const { data } = await axios.put("/", newUser);
    return data;
  }
}

export default new AuthService();