// let fs = require("fs")

// fs.writeFileSync("test.txt", "hallo")
// console.log(fs.readFileSync("./test.txt", "utf-8"))

// fs.writeFile("halo.txt", "apa aja dah", "utf-8", (err) => {
//   err ? console.log(err) : console.log("file berhasil dibuat")
// }) // writefile asynchronous

// fs.readFile("./halo.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err)
//   }
//   console.log(data)
// }) // readfile asynchronous

let readline = require("readline")

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}) // readline

rl.question("Masukkan nama: ", (nama) => {
  console.log(`nama yang anda masukkan ${nama}`)
  rl.close()
}) // readline question
