const player = {
    name: 'Thanh',
    hp: 1000,
    atk: 1500,
    def: 50,
}

const enemies = {
    name: 'Jeff',
    hp: 5000,
    atk: 250,
    def: 0
}

const battle = {
    damageCalculator(user, target) {
        let damage = user.atk - target.def > 0 ? user.atk - target.def : 0
        return damage
    },
    attack(user, target) {
        target.hp -= this.damageCalculator(user, target)
        console.log(`${user.name} đấm vỡ alo ${target.name}, ${target.name} mất ${this.damageCalculator(user,target)}, còn lại ${target.hp} `)
    },
    isAlive(user) {
        return user.hp > 0
    }
}

let round = 1
while (battle.isAlive(player) && battle.isAlive(enemies)) {
    console.log(`Round ${round}: `)
    if (round % 2 == 0) {
        battle.attack(player, enemies)
    } else {
        battle.attack(enemies, player)
    }
    round++
}

if (battle.isAlive(player)) {
    console.log(`${player.name} win!`)
} else {
    console.log(`${enemies.name} win!`)
}