import axios from "axios";

export default class AlbumService {
  async buscarAlbums() {
    const { data } = await axios.get("Album/");
    return data;
  }
  async buscarAlbumPorId(id) {
    const { data } = await axios.get(`Album/${id}`);
    return data;
  }
}

// export default new AuthService();