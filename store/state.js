export default () => ({
    opponents: [
        //
        'adelinanicolov',
        'adrianaspulber',
        'alingabrielzainescu',
        'andrabrinzaniuc',
        'andreibrad',
        'andreiionita',
        'andreionel',
        'bogdanivanel',
        'bogdanvizureanu',
        'catalinacoca',
        'catalinbindea',
        'costinbleotu',
        'cristihabliuc',
        'cristinakoncsag',
        'danapascu',
        'gheorghelupu',
        'irinaborozan',
        'mihaidobos',
        'oanadespan',
        'oliviavereha',
        'radusofrone',
        'radustefanescu',
        'raulritea',
        'razvanpavel',
        'sabinaalexandrastefanescu',
        'tudoramariei',
        'victorcleja',
    ],

    colors: [
        //
        '#F5BCD6',
        '#05D6C7',
        '#FFDE59',
        '#FFBD59',
        '#38B6FF',
        '#FF1616',
    ],

    screens: [
        //
        'choose-opponent',
        'choose-egg',
        'play',
    ],

    step: 'choose-opponent',
    impact: false,
    winner: false,
    modal: false,

    player: {
        color: null,
    },

    opponent: {
        name: null,
        color: null,
    },

    score: {
        wins: 0,
        games: 0,
    },
});
