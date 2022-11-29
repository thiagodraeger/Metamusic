import axios from "axios";

export default class NoticiaService {
  async buscarNoticias() {
    const { data } = await axios.get("Noticia/");
    return data;
  }
  async buscarNoticiaPorId(id) {
    const { data } = await axios.get(`Noticia/${id}`);
    return data;
  }
}

// export default new AuthService();