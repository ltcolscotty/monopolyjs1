import {GameProperty, PlayerProperty, ChanceProperty, CornerProperty, RailroadProperty, UtilityProperty} from "monopoly_objects.js";

//constructor(name, cost, color, pph, mortVal, rent_list, type = "standard") {

export const board = [
    CornerProperty("Go", "Go"),
    PlayerProperty("Mediterranean Avenue", 60, "Brown", 50, 30, [2, 10, 30, 90, 160, 250]),
    PlayerProperty("Baltic Avenue", 60, "Brown", 50, 30, [4, 20, 60, 180, 320, 450]),
    TaxProperty("Income Tax", "Tax", 200),
    RailroadProperty("Reading Railroad", 200, "Railroad", 100, [25, 50, 100, 200]),
    PlayerProperty("Oriental Avenue", 100, "LightBlue", 50, 50, [6, 30, 90, 270, 400, 550]),
    ChanceProperty("Chance", "Chance", "Chance"),
    PlayerProperty("Vermont Avenue", 100, "LightBlue", 50, 50, [6, 30, 90, 270, 400, 550]),
    PlayerProperty("Connecticut Avenue", 120, "LightBlue", 50, 60, [8, 40, 100, 300, 450, 600]),
    CornerProperty("Jail", "Jail"),
    PlayerProperty("St. Charles Place", 140, "Pink", 100, 70, [10, 50, 150, 450, 625, 750]),
    UtilityProperty("Electric Company"),
    PlayerProperty("States Avenue", 140, "Pink", 100, 70, [10, 50, 150, 450, 625, 750]),
    PlayerProperty("Virginia Place", 160, "Pink", 100, 80, [12, 60, 180, 500, 700, 900]),
    RailroadProperty("Pennsylvania Railroad", 200, "Railroad", 100, [25, 50, 100, 200]),
    PlayerProperty("St. James Place", 180, "Orange", 100, 90, [14, 70, 200, 550, 750, 950]),
    ChanceProperty("Community Chest", "Chance", "Community Chest"),
    PlayerProperty("Tennessee Avenue", 180, "Orange", 100, 90, [14, 70, 200, 550, 750, 950]),
    PlayerProperty("New York Avenue", 200, "Orange", 100, 100, [16, 80, 210, 600, 800, 1000]),
    CornerProperty("Free Parking", "Free Parking"),
    

]