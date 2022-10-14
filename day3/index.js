// let perjumlahan = require("./perjumlahan") // perjumlahan
// let pengurangan = require("./pengurangan") // pengurangan
// let perkalian = require("./perkalian") // perkalian
// let pembagian = require("./pembagian") // pembagian

// console.log(perjumlahan(3, 2))
// console.log(pengurangan(3, 2))
// console.log(perkalian(3, 2))
// console.log(pembagian(3, 2))

// let { pertambahan, pengurangan, perkalian, pembagian } = require("./test")

// console.log(pertambahan(3, 2))
// console.log(pengurangan(3, 2))
// console.log(perkalian(3, 2))
// console.log(pembagian(3, 2))

let { Tes, pi } = require("./tes")

class Calc extends Tes {
  constructor(nm) {
    super()
    this.nama = nm
  }
}

let tambah = new Tes()
let coba = new Calc("risa")

console.log(tambah.tambah(5, pi))
console.log(coba)
console.log(coba.tambah(1, 1))
console.log(pi)
