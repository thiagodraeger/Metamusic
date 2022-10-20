import authService from "@/api/auth";

export const auth = {
  namespaced: true,
  state: () => ({
    loggedIn: false,
    user: {},
    token: {}
  }),
  mutations: {
    setLoginInfo(state, { userToken, userLogin }) {
      state.token = userToken;
      state.user = userLogin;
      state.loggedIn = true;
    },
    setLogout(state) {
      state.user = {};
      state.loggedIn = false;
    },
    setUpdate(state, newUser) {
      state.user = newUser
    }
  },
  actions: {
    async login({ commit }, userLogin) {
      try {
        const userToken = await authService.login(userLogin);
        commit("setLoginInfo", { userToken, userLogin });
        return Promise.resolve(userToken);
      } catch (e) {
        commit("setLogout");
        return Promise.reject(e);
      }
    },
    logout({ commit }) {
      commit("setLogout");
    },
    async updateInfo({ commit }, newUser) {
      try {
        await authService.updateUser(newUser);
        commit("setUpdate", newUser);
      } catch (e) {
        return Promise.reject(e);
      }
    }
  },
};