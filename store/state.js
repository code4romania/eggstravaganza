export default () => ({
    opponents: [
        { id: 'adelinanicolov', name: 'Adelina Nicolov', city: 'București' },
        { id: 'adrianaspulber', name: 'Adriana Spulber', city: 'București' },
        { id: 'alingabrielzainescu', name: 'Alin Gabriel Zăinescu', city: 'New York' },
        { id: 'andrabrinzaniuc', name: 'Andra Brînzaniuc', city: 'Cluj' },
        { id: 'andreibrad', name: 'Andrei Brad', city: 'București' },
        { id: 'andreiionita', name: 'Andrei Ioniță', city: 'Lisabona' },
        { id: 'andreionel', name: 'Andrei Onel', city: 'București' },
        { id: 'bogdanivanel', name: 'Bogdan Ivănel', city: 'București' },
        { id: 'bogdanvizureanu', name: 'Bogdan Vizureanu', city: 'București' },
        { id: 'catalinacoca', name: 'Cătălina Coca', city: 'București' },
        { id: 'catalinbindea', name: 'Cătălin Bindea', city: 'București' },
        { id: 'costinbleotu', name: 'Costin Bleotu', city: 'Timișoara' },
        { id: 'cristihabliuc', name: 'Cristi Habliuc', city: 'Iași' },
        { id: 'cristinakoncsag', name: 'Cristina Koncsag', city: 'Cluj' },
        { id: 'danapascu', name: 'Dana Pascu', city: 'București' },
        { id: 'davidmorar', name: 'David Morar', city: 'Washington, D.C.' },
        { id: 'dragoscostache', name: 'Dragoș C. Costache', city: 'București' },
        { id: 'elizacosman', name: 'Eliza Cosman', city: 'București' },
        { id: 'gheorghelupu', name: 'Gheorghe Lupu', city: 'Iași' },
        { id: 'inadumitriu', name: 'Ina Dumitriu', city: 'București' },
        { id: 'irinaborozan', name: 'Irina Borozan', city: 'București' },
        { id: 'mihaidobos', name: 'Mihai Doboș', city: 'Londra' },
        { id: 'oanadespan', name: 'Oana Despan', city: 'București' },
        { id: 'oliviavereha', name: 'Olivia Vereha', city: 'București' },
        { id: 'radusofrone', name: 'Radu Sofrone', city: 'București' },
        { id: 'radustefanescu', name: 'Radu Ștefănescu', city: 'București' },
        { id: 'raulritea', name: 'Raul Rîtea', city: 'București' },
        { id: 'razvanpavel', name: 'Răzvan Pavel', city: 'Cluj' },
        { id: 'sabinaalexandrastefanescu', name: 'Sabina-Alexandra Ștefănescu', city: 'București' },
        { id: 'tudoramariei', name: 'Tudor Amariei', city: 'Iași' },
        { id: 'victorcleja', name: 'Victor Cleja', city: 'București' },
        { id: 'vladtemian', name: 'Vlad Temian', city: 'Timișoara' },
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
        name: 'Eu',
        color: null,
    },

    opponent: {
        color: null,
        object: null,
    },

    score: {
        wins: 0,
        games: 0,
    },
});
