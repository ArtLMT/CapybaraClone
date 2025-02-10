// importing
import { Character } from "../assets/constructor.js"
import { startBattle } from "../assets/game.js"

// creating character
const player = new Character ( 'Capybara', 1000, 100, 10, 0)
const goblin = new Character ( 'Goblin', 100, 50, 5, 0.8)

startBattle(player,goblin)
