import { Item } from '../item'

export class BackstagePass extends Item {
  constructor(sell_in, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sell_in, quality)
  }

  updateQualityAfterExpired() {
    this.quality = 0
  }

  updateQualityAfterOneDay() {
    this.increaseQuality()
    if (this.sellIn < 11) {
      this.increaseQuality()
    }
    if (this.sellIn < 6) {
      this.increaseQuality()
    }
  }
}
