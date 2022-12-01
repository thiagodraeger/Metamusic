import axios from "axios";

export default class BandaService {
  async buscarBandas() {
    const { data } = await axios.get("api/Banda/");
    return data;
  }
  async buscarBandaPorId(id) {
    const { data } = await axios.get(`api/Banda/${id}`);
    return data;
  }
}

// export default new AuthService();