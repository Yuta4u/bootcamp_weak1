let fs = require("fs")
let readline = require("readline")

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// let res = []
rl.question(`Masukkan Kegiatan:`, (kegiatan) => {
  let temp = {
    no: "",
    kegiatan: "",
    tanggal: "",
    jam: "",
  } // format
  temp.kegiatan = kegiatan
  rl.question("Masukkan Tanggal: ", (tanggal) => {
    temp.tanggal = tanggal
    rl.question("Masukkan Jam: ", (jam) => {
      temp.jam = jam
      rl.close()
      //
      let fyle = fs.readFileSync("./kegiatan.json", "utf-8")
      let json = JSON.parse(fyle)
      json.push(temp)
      console.log("NO | KEGIATAN  | TANGGAL | JAM") // syntax label
      // ==================IMLEMENTASI==================
      fs.writeFileSync("./kegiatan.json", JSON.stringify(json), "utf-8")
      fs.readFile("./kegiatan.json", "utf-8", (err, data) => {
        let dataS = JSON.parse(data)
        for (let i = 0; i < dataS.length; i++) {
          console.log(
            `${i + 1} | ${dataS[i].kegiatan} | ${dataS[i].tanggal} | ${
              dataS[i].jam
            }`
          )
        }
      })
    })
  })
})
