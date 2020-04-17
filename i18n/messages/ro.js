module.exports = {
    title: 'Ciocnește cu noi un ou de Paște, din siguranța casei tale',
    description: [
        'Nu este ușor să fim departe unii de alții, mai ales în momentele în care suntem obișnuiți să fim o comunitate. Anul acesta nu vom putea ciocni un ou cu prietenii sau familia, așa cum o facem de obicei, dar ca să ne simțim mai puțin singuri, Code for Romania a creat o metodă prin care poți ciocni un ou, de la distanță, cu membrii echipei noastre.',
        'Alege cu cine din echipa Code for Romania vrei să ciocnești oul de Paște și păstrează vie tradiția și anul acesta, stând acasă, în siguranță.',
    ],

    subtitle: 'Îți mulțumim că stai acasă și că ne ajuți pe toți să fim în siguranță!',

    state: {
        won: {
            title: 'Ai câștigat!',
            text: 'Tradiția merge mai departe și anul acesta!',
        },
        lost: {
            title: 'Ai pierdut!',
            text: 'Mai încearcă o dată și tradiția va merge mai departe și anul acesta!',
        },
    },

    scores: `Ai câștigat <span class="px-2 text-xl font-semibold text-blue-500">{wins}</span> din <span class="px-2 text-xl font-semibold text-blue-500">{games}</span> încercări`,

    steps: {
        'choose-opponent': 'Alege un adversar',
        'choose-egg': 'Alege un ou',
        play: 'Ciocnește',
    },

    knockEgg: 'Ciocnește!',
    tryAgain: 'Încearcă din nou',

    noscript: 'Această secțiune nu poate funcționa fără JavaScript',
    shareOn: 'Distribuie',
    footer: {
        copy: '&copy; {year} Code for Romania.',
        tagline: 'Organizație neguvernamentală independentă, neafiliată politic și apolitică.',
    },
};
