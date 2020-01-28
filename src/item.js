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
      if (!this.isSulfuras()) {
        this.quality = this.quality - 1
      }
    }
  }

  isAgedBrie() {
    return this.name === 'Aged Brie'
  }

  isBackstagePasses() {
    return this.name === 'Backstage passes to a TAFKAL80ETC concert'
  }

  isSulfuras() {
    return this.name === 'Sulfuras, Hand of Ragnaros'
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
