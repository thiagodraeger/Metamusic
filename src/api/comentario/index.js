import axios from "axios";

export default class ComentarioService {
  async buscarComentario(id) {
    const { data } = await axios.get("api/Comentario/");
    return data;
  }
  async buscarComentarioPorId(id) {
    const { data } = await axios.get(`api/Comentario/${id}`);
    return data;
  }
}

// export default new AuthService();