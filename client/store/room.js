const state = () => ({
  roomCode: null,
  joined: false,
  error: null,
  usersInRoom: [],
})

const mutations = {
  SET_ROOM_CODE(state, code) {
    state.roomCode = code
  },
  SET_JOINED(state, joinedStatus) {
    state.joined = joinedStatus
  },
  SET_ERROR(state, errorMessage) {
    state.error = errorMessage
  },
  SET_USERS_IN_ROOM(state, users) {
    state.usersInRoom = users
  },
}

const actions = {
  createRoom({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      this.$socket.emit('create-room', {}, async (code) => {
        if (code) {
          commit('SET_ROOM_CODE', code)

          // Fetch users in the room after creating
          await dispatch('fetchUsersInRoom', code)
          resolve(code)
        } else {
          reject(new Error('Room creation failed'))
        }
      })
    })
  },
  joinRoom({ commit, dispatch }, codeToJoin) {
    return new Promise((resolve, reject) => {
      this.$socket.emit('join-room', codeToJoin, async (success) => {
        if (success) {
          commit('SET_JOINED', true)
          commit('SET_ERROR', null)
          commit('SET_ROOM_CODE', codeToJoin)

          // Fetch users in the room after joining.
          await dispatch('fetchUsersInRoom', codeToJoin)
          resolve()
        } else {
          commit('SET_ERROR', 'Failed to join room. Please check the code.')
          reject(new Error('Failed to join room'))
        }
      })
    })
  },
  leaveRoom({ commit }, codeToLeave) {
    return new Promise((resolve, reject) => {
      this.$socket.emit('leave-room', codeToLeave, (success) => {
        if (success) {
          commit('SET_JOINED', false)
          commit('SET_ERROR', null)
          commit('SET_USERS_IN_ROOM', [])

          resolve()
        } else {
          commit('SET_ERROR', 'Failed to leave room. Please check the code.')
          reject(new Error('Failed to leave room'))
        }
      })
    })
  },
  fetchUsersInRoom({ commit }, roomCode) {
    return new Promise((resolve, reject) => {
      this.$socket.emit('get-users-in-room', roomCode, (userIds) => {
        if (userIds && Array.isArray(userIds)) {
          commit('SET_USERS_IN_ROOM', userIds)
          resolve(userIds)
        } else {
          reject(new Error('Failed to fetch users in room'))
        }
      })
    })
  },
}

const getters = {
  roomCode: (state) => state.roomCode,
  usersInRoom: (state) => state.usersInRoom,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
