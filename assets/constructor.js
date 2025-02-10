// Character's blueprint
export function Character( name, hp, atk, def , counterRate) {
    this.name = name
    this.hp = hp
    this.atk = atk
    this.def = def
    this.counterRate = counterRate
  }

// sử dụng Object Prototype để tiết kiệm bộ nhớ:
Character.prototype.damageCalculator = function (user, target) { 
        let damage = user.atk - target.def > 0 ? user.atk - target.def : 0 // Dùng toán tử 3 ngôi để kiểm tra
      // let damage = Math.max (user.atk - target.def, 0) // Dùng hàm max để tìm giá trị lớn nhất giữa các tham số truyền vào
      return damage
}

Character.prototype.attack = function(user, target) {
    target.hp -= this.damageCalculator(user, target)
    console.log(`${user.name} đấm vỡ alo ${target.name}, ${target.name} mất ${this.damageCalculator(user,target)}, còn lại ${target.hp} máu`)
    // thêm tỉ lệ phản công, chỉ hoạt đống nếu còn sống
    // đi đời rồi thì phản công kiểu gì?
    if ((Math.random() >= (1 - target.counterRate)) && this.isAlive(target)) {
        user.hp -= this.damageCalculator(target,user)
        console.log(`${target.name} phản công, gây ${target.atk} sát thương lên ${user.name}, ${user.name} còn ${user.hp} máu`)
    }
}

Character.prototype.isAlive = function (user) {
  return user.hp > 0
}
//   // object sử lý các logic khi đánh nhau
// const battle = {
//   damageCalculator(user, target) {
//       let damage = user.atk - target.def > 0 ? user.atk - target.def : 0 // Dùng toán tử 3 ngôi để kiểm tra
//       // let damage = Math.max (user.atk - target.def, 0) // Dùng hàm max để tìm giá trị lớn nhất giữa các tham số truyền vào
//       return damage
//   },
//   attack(user, target) {
//       target.hp -= this.damageCalculator(user, target)
//       console.log(`${user.name} đấm vỡ alo ${target.name}, ${target.name} mất ${this.damageCalculator(user,target)}, còn lại ${target.hp} máu`)
//       // thêm tỉ lệ phản công, chỉ hoạt đống nếu còn sống
//       // đi đời rồi thì phản công kiểu gì?
//       if ((Math.random() >= (1 - target.counterRate)) && this.isAlive(target)) {
//           user.hp -= this.damageCalculator(target,user)
//           console.log(`${target.name} phản công, gây ${target.atk} sát thương lên ${user.name}, ${user.name} còn ${user.hp} máu`)
//       }
//   },
//   isAlive(user) {
//       return user.hp > 0
//   }
// }
