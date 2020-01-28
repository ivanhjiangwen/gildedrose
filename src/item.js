export class Item {
  name
  sell_in
  quality

  constructor(name, sell_in, quality) {
    this.name = name
    this.sell_in = sell_in
    this.quality = quality
  }

  passOneDay() {
    this.updateQualityAfterOneDay()
    this.updateSellInAfterOneDay()
    if (this.sell_in < 0) {
      this.updateQualityAfterExpired()
    }
  }

  updateQualityAfterOneDay() {
    if (!this.isAgedBrie() && !this.isBackstagePasses()) {
      if (this.quality > 0) {
        if (!this.isSulfuras()) {
          this.quality = this.quality - 1
        }
      }
    } else {
      if (this.quality < 50) {
        this.quality = this.quality + 1
        if (this.isBackstagePasses()) {
          if (this.sell_in < 11) {
            if (this.quality < 50) {
              this.quality = this.quality + 1
            }
          }
          if (this.sell_in < 6) {
            if (this.quality < 50) {
              this.quality = this.quality + 1
            }
          }
        }
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
    return `${this.name}, ${this.sell_in}, ${this.quality}`
  }

  updateSellInAfterOneDay() {
    this.sell_in = this.sell_in - 1
  }

  updateQualityAfterExpired() {
    if (!this.isAgedBrie()) {
      if (!this.isBackstagePasses()) {
        if (this.quality > 0) {
          if (!this.isSulfuras()) {
            this.quality = this.quality - 1
          }
        }
      } else {
        this.quality = this.quality - this.quality
      }
    } else {
      if (this.quality < 50) {
        this.quality = this.quality + 1
      }
    }
  }
}
