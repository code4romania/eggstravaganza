function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function boolean(chanceOfTrue = 50) {
    return randomInt(1, 100) < chanceOfTrue;
}

export default {
    randomInt,
    boolean,
};
