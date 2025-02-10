// object sử lý các logic khi đánh nhau
const battle = {
    damageCalculator(user, target) {
        let damage = user.atk - target.def > 0 ? user.atk - target.def : 0 // Dùng toán tử 3 ngôi để kiểm tra
        // let damage = Math.max (user.atk - target.def, 0) // Dùng hàm max để tìm giá trị lớn nhất giữa các tham số truyền vào
        return damage
    },
    attack(user, target) {
        target.hp -= this.damageCalculator(user, target)
        console.log(`${user.name} đấm vỡ alo ${target.name}, ${target.name} mất ${this.damageCalculator(user,target)}, còn lại ${target.hp} máu`)
        // let counterChance = target.counterRate * 100 // 80% 1/5
        // if ((Math.random() * counterChance) )
    },
    isAlive(user) {
        return user.hp > 0
    }
}
export function startBattle(character1, character2) {
    // bắt đầu chạy từ đây
    let round = 1
    while (battle.isAlive(character1) && battle.isAlive(character2)) {
        console.log(`Round ${round}: `)
        if (round % 2 == 0) {
            battle.attack(character1, character2)
        } else {
            battle.attack(character2, character1)
        }
        round++
    }
    
    if (battle.isAlive(character1)) {
        console.log(`${character1.name} win!`)
    } else {
        console.log(`${character2.name} win!`)
    }
}