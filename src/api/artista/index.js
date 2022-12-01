import axios from "axios";

export default class ArtistaService {
  async buscarArtistas() {
    const { data } = await axios.get("api/Artista/");
    return data;
  }
  async buscarArtistaPorId(id) {
    const { data } = await axios.get(`api/Artista/${id}`);
    return data;
  }
}

// export default new AuthService();