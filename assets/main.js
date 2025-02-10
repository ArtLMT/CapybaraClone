// importing
import { Character } from "../assets/constructor.js"
import { startBattle } from "../assets/game.js"

// creating character
const player = new Character ( 'Capybara', 500, 100, 0, 0)
const goblin = new Character ( 'Goblin', 500, 50, 1, 1)

startBattle(player,goblin)
