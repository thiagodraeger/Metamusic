import axios from "axios";

export default class BandaService {
  async buscarBandas() {
    const { data } = await axios.get("Banda/");
    return data;
  }
  async buscarBandaPorId(id) {
    const { data } = await axios.get(`Banda/${id}`);
    return data;
  }
}

// export default new AuthService();