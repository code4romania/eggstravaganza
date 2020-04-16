module.exports = {
    title: 'Ipsam dicta fugiat consectetur eius optio',
    description: [
        'Voluptas qui nihil. Quia ullam in sunt. Numquam optio dicta nemo facilis sit occaecati ratione. Omnis ipsum eum. Natus omnis illo et ipsa explicabo tempora. Ea nihil eveniet minus sint vel dolores odio alias veritatis. Aliquid voluptates ut doloribus blanditiis. Provident distinctio a occaecati quaerat nostrum.',
    ],

    state: {
        won: {
            title: 'Ai câștigat',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        },
        lost: {
            title: 'Ai pierdut',
            text: 'Consequatur amet labore.',
        },
    },

    scores: `Ai câștigat <span class="px-2 text-xl font-semibold text-blue-500">{wins}</span> din <span class="px-2 text-xl font-semibold text-blue-500">{games}</span> încercări`,

    steps: {
        'choose-opponent': 'Alege-ți adversarul',
        'choose-egg': 'Alege-ți oul',
        play: 'Trage-i una',
    },

    // chooseOpponent: '1. Alege-ți adversarul',
    // chooseEgg: '2. Alege-ți oul',
    // play: '3. Trage-i una',
    knockEgg: 'Ciocnește!',
    tryAgain: 'Încearcă din nou',

    shareOn: 'Share on',
    footer: {
        copy: '&copy; {year} Code for Romania.',
        tagline: 'Organizație neguvernamentală independentă, neafiliată politic și apolitică.',
    },
};
