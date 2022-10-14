let Serang = require("./serang")

class Game extends Serang {
  constructor(nama) {
    super()
    this.nama = nama
    this.hp = 100
    this.level = 1
    this.exp = 0
    // this.damage = 30
  }
}

let yuta = new Game("yuta")

console.log(yuta)
console.log(yuta.serang())
console.log(yuta.serang())
console.log(yuta.serang())
console.log(yuta.serang())
console.log(yuta)
