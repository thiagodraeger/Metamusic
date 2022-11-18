import axios from "axios";

export default class AlbumService {
  async buscarAlbum(id) {
    const { data } = await axios.get("Album/");
    return data.filter(album => album.banda === id);
  }
}

// export default new AuthService();