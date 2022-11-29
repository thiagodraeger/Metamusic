import axios from "axios";

export default class AlbumService {
  async buscarAlbum(id) {
    const { data } = await axios.get("Album/");
    return data.filter(album => album.banda === id);
  }
  async buscarAlbumPorId(id) {
    const { data } = await axios.get(`Album/${id}`);
    return data;
  }
}

// export default new AuthService();