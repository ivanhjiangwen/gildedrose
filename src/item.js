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
    this.decreaseQuality()
  }

  toString() {
    return `${this.name}, ${this.sellIn}, ${this.quality}`
  }

  updateSellInAfterOneDay() {
    this.sellIn = this.sellIn - 1
  }

  updateQualityAfterExpired() {
    this.decreaseQuality()
  }

  increaseQuality() {
    if (this.quality < 50) {
      this.quality = this.quality + 1
    }
  }

  decreaseQuality(by = 1) {
    let min = Math.min(this.quality, by)
    this.quality -= min
  }
}
