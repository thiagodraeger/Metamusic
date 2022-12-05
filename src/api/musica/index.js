import axios from "axios";

export default class MusicaService {
  async buscarMusica(id) {
    const { data } = await axios.get("api/Musica/");
    return data.filter(musica => musica.album === id);
  }
  async buscarMusicaPorId(id) {
    const { data } = await axios.get(`api/Musica/${id}`);
    return data;
  }
}

// export default new AuthService();