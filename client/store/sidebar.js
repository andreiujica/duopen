const state = () => ({
    activeLink: 'dashboard' // default active link
});
  
const mutations = {
    SET_ACTIVE_LINK(state, link) {
        state.activeLink = link;
    }
};

const actions = {
    setActiveLink({ commit }, path) {
        commit('SET_ACTIVE_LINK', path);
        this.$router.push({ path });
    }
};

const getters = {
    activeLink: (state) => state.activeLink
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
  