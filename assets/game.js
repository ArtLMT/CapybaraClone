export function startBattle(character1, character2) {
    // bắt đầu chạy từ đây
    let round = 1
    while (character1.isAlive(character1) && character2.isAlive(character2)) {
        console.log(`Round ${round}: `)
        character1.attack(character1, character2)
        if (character1.isAlive(character1) && character1.isAlive(character2)) {
            character1.attack(character2, character1)
        }
        round++
    }
    
    if (character1.isAlive(character1)) {
        console.log(`${character1.name} win!`)
    } else {
        console.log(`${character2.name} win!`)
    }
}