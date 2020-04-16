import math from '~/mixins/math.js';

export default {
    step: (state, step) => (state.step = step),
    impact: (state, impact) => (state.impact = impact),
    increaseGameCount: state => state.score.games++,
    increaseWinCount: state => state.score.wins++,
    modal: (state, open) => (state.modal = open),

    playerColor: (state, color) => (state.player.color = color),
    opponentName: (state, opponent) => (state.opponent.name = opponent),
    opponentColor: state => {
        let colors = state.colors.filter(color => color !== state.player.color);

        state.opponent.color = colors[math.randomInt(0, colors.length)];
    },
    winner: (state, odds) => (state.winner = math.boolean(odds) ? 'player' : 'opponent'),

    reset: state => {
        state.step = 'choose-opponent';
        state.impact = false;
        state.modal = false;
        state.winner = false;
    },
};
