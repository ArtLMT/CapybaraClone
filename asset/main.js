// object cho player
const player = {
    name: 'Thanh',
    hp: 1000,
    atk: 1500,
    def: 50,
}

// object cho quái
const enemies = {
    name: 'Jeff',
    hp: 5000,
    atk: 250,
    def: 0
}

// object sử lý các logic khi đánh nhau
const battle = {
    damageCalculator(user, target) {
        let damage = user.atk - target.def > 0 ? user.atk - target.def : 0 // Dùng toán tử 3 ngôi để kiểm tra
        // let damage = Math.max (user.atk - target.def, 0) // Dùng hàm max để tìm giá trị lớn nhất giữa các tham số truyền vào
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

// bắt đầu chạy từ đây
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