import { Item } from '../item'

export class BackstagePass extends Item {
  constructor(sell_in, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sell_in, quality)
  }

  updateQualityAfterExpired() {
    this.quality = 0
  }

  updateQualityAfterOneDay() {
    if (this.quality < 50) {
      this.quality = this.quality + 1
      if (this.sellIn < 11) {
        if (this.quality < 50) {
          this.quality = this.quality + 1
        }
      }
      if (this.sellIn < 6) {
        if (this.quality < 50) {
          this.quality = this.quality + 1
        }
      }
    }
  }
}
