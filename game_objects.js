export class player {
    constructor(name, cash = 1500, properties = []) {
        this.name = name;
        this.cash = cash;
        this.properties = properties;
    }
}

export function die_roll() {
    return Math.random() * (6 - 1) + 1;
}