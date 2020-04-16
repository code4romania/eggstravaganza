export default {
    isModalOpen: state => state.modal === true,
    playerHasWon: state => state.winner === 'player',
    opponentHasWon: state => state.winner === 'opponent',
    screenComponent: state => `game-screen-${state.step}`,

    stepIndex: state => step => {
        return state.screens.indexOf(step);
    },

    isScreenActive: state => step => {
        return state.step === step;
    },

    isScreenComplete: (state, getters) => step => {
        // End of game
        if (state.modal) {
            return true;
        }

        return getters.stepIndex(step) < getters.stepIndex(state.step);
    },
};
