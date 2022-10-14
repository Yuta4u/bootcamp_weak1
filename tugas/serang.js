class Serang {
  serang() {
    this.exp += 30
    this.exp > 100 ? ((this.level += 1), (this.exp %= 100)) : false
  }
}

module.exports = Serang
