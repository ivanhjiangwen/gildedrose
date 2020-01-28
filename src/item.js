export class Item {
  name
  sellIn
  quality

  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  passOneDay() {
    this.updateQualityAfterOneDay()
    this.updateSellInAfterOneDay()
    if (this.sellIn < 0) {
      this.updateQualityAfterExpired()
    }
  }

  updateQualityAfterOneDay() {
    if (this.quality > 0) {
      this.quality = this.quality - 1
    }
  }

  toString() {
    return `${this.name}, ${this.sellIn}, ${this.quality}`
  }

  updateSellInAfterOneDay() {
    this.sellIn = this.sellIn - 1
  }

  updateQualityAfterExpired() {
    if (this.quality <= 0) {
      return
    }

    this.quality = this.quality - 1
  }
}
