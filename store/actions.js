export default {
    setOpponent: ({ commit }, opponent) => {
        commit('opponentObject', opponent);
        commit('step', 'choose-egg');
    },
    setColors: ({ commit }, playerColor) => {
        commit('playerColor', playerColor);
        commit('opponentColor');
        commit('step', 'play');
    },
    braceForImpact: ({ commit, getters }) => {
        commit('impact', true);
        commit('winner', 50);

        commit('increaseGameCount');

        if (getters.playerHasWon) {
            commit('increaseWinCount');
        }

        setTimeout(() => commit('modal', true), 300);
    },
    reset: ({ commit }) => {
        commit('reset');
    },
};
