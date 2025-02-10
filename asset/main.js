// Character's blueprint
function Character( name, hp, atk, def ) {
    this.name = name
    this.hp = hp
    this.atk = atk
    this.def = def
  }

// creating character
const player = new Character ( 'Capybara', 1000, 100, 10)
const goblin = new Character ( 'Goblin', 100, 50, 5)

// object sử lý các logic khi đánh nhau
const battle = {
    damageCalculator(user, target) {
        let damage = user.atk - target.def > 0 ? user.atk - target.def : 0 // Dùng toán tử 3 ngôi để kiểm tra
        // let damage = Math.max (user.atk - target.def, 0) // Dùng hàm max để tìm giá trị lớn nhất giữa các tham số truyền vào
        return damage
    },
    attack(user, target) {
        target.hp -= this.damageCalculator(user, target)
        console.log(`${user.name} đấm vỡ alo ${target.name}, ${target.name} mất ${this.damageCalculator(user,target)}, còn lại ${target.hp} máu      `)
    },
    isAlive(user) {
        return user.hp > 0
    }
}

// bắt đầu chạy từ đây
let round = 1
while (battle.isAlive(player) && battle.isAlive(goblin)) {
    console.log(`Round ${round}: `)
    if (round % 2 == 0) {
        battle.attack(player, goblin)
    } else {
        battle.attack(goblin, player)
    }
    round++
}

if (battle.isAlive(player)) {
    console.log(`${player.name} win!`)
} else {
    console.log(`${goblin.name} win!`)
}