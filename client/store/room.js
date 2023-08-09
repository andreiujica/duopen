const state = () => ({
    roomCode: null,
    joined: false,
    error: null,
  });
  
const mutations = {
    SET_ROOM_CODE(state, code) {
      state.roomCode = code;
    },
    SET_JOINED(state, joinedStatus) {
      state.joined = joinedStatus;
    },
    SET_ERROR(state, errorMessage) {
      state.error = errorMessage;
    }
  };

const actions = {
    createRoom({ commit }) {
        return new Promise((resolve, reject) => {
        this.$socket.emit('create-room', {}, (code) => {
            if (code) {
            commit('SET_ROOM_CODE', code);
            resolve(code);
            } else {
            reject(new Error('Room creation failed'));
            }
        });
        });
    },
    joinRoom({ commit }, codeToJoin) {
        return new Promise((resolve, reject) => {
          this.$socket.emit('join-room', codeToJoin, (success) => {
            if (success) {
              commit('SET_JOINED', true);
              commit('SET_ERROR', null);
              commit('SET_ROOM_CODE', codeToJoin);
              resolve();
            } else {
              commit('SET_ERROR', 'Failed to join room. Please check the code.');
              reject(new Error('Failed to join room'));
            }
          });
        });
      },
    leaveRoom({ commit }, codeToLeave) {
    return new Promise((resolve, reject) => {
        this.$socket.emit('leave-room', codeToLeave, (success) => {
        if (success) {
            commit('SET_JOINED', false);
            commit('SET_ERROR', null);
            resolve();
        } else {
            commit('SET_ERROR', 'Failed to leave room. Please check the code.');
            reject(new Error('Failed to leave room'));
        }
        });
    });
    }   
};

const getters = {
    roomCode: (state) => state.roomCode
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
  