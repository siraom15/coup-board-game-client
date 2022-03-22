import { createStore } from 'vuex';
const store = createStore({
  state: {
    gameState: {},
    count: 0,
    room: '',
  },
  mutations: {
    SET_GAME_STATE(state, gameState) {
      state.gameState = gameState;
    },
    INCRESE_COUNT(state) {
      state.count++;
    },
  },
  actions: {
    increase(context) {
      context.commit('INCRESE_COUNT');
    },
    setGameState(context, gameState) {
      context.commit('SET_GAME_STATE', gameState);
    },
  },
  modules: {},
  getters: {
    gameState: (state) => state.gameState,
    count: (state) => state.count,
  },
});
export default store;
