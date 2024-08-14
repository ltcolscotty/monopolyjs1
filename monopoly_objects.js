import {die_roll} from "game_objects.js"

class GameProperty {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    get_name() {
        return this.name;
    }

    get_type() {
        return this.type;
    }

}

export class PlayerProperty extends GameProperty {
    /*
    0 houses = 0 houses
    5 houses = 1 hotel
    
    
    */
    constructor(name, cost, color, pph, mortVal, rent_list, type = "standard") {
        super(name, type);
        this.cost = cost;
        this.color = color;
        this.pph = pph;
        this.houses = 0;
        this.rent = rent;
        this.mortVal = mortVal;
        this.house_rents = rent_list;

        /*
        Types:
        Standard
        Railroad
        Utility
        */
    }

    set_houses(num_houses) {
        //used to modify # of houses
        this.houses += num_houses;
    }

    get_houses() {
       return this.houses;
    }

    get_color() {
        return this.color;
    }

    get_rent() {
        return this.rent_list[this.houses];
    }

    get_house_cost() {

    }

}

export class ChanceProperty extends GameProperty {
    constructor(name, type = "chance", pool) {

        if (!(["Chance", "Community Chest"].includes(pool))) {

        }

        super(name, type);
        this.pool = pool;
    }

    get_pool() {
        return this.pool;
    }
}

export class TaxProperty extends GameProperty {
    constructor(name, type = "Tax", tax) {
        super(name, type);
        this.tax = tax;
    }
}

export class CornerProperty extends GameProperty {
    constructor(name, type) {
        super(name, type);
    }
}

export class RailroadProperty extends GameProperty {
    constructor(name, type = "Railroad", mortVal, rent_list) {
        super(name, type);
        self.mortVal = mortVal;
        self.rent_list = rent_list
    }

    get_rent(railroad_num) {
        return this.rent_list[railroad_num];
    }
}

export class UtilityProperty extends GameProperty {
    constructor(name, type = "Utility") {
        super(name, type);
        self.mortVal = 75;
    }

    get_rent(utilityNum) {
        let die1 = die_roll();
        let die2 = die_roll();

        console.log("die1: " + die1);
        console.log("die2: " + die2);

        if (utilityNum == 1) {
            return 4*(die1 + die2);
        }

        else if (utilityNum == 2) {
            return 10*(die1 + die2);
        }

        else {
            return "Error: Exceeding max possible Utilites";
        }
    }
}