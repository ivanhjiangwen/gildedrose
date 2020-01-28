import { Item } from '../item'

export class AgedBrie extends Item {
  constructor(sell_in, quality) {
    super('Aged Brie', sell_in, quality)
  }

  updateQualityAfterOneDay() {
    if (this.quality < 50) {
      this.quality = this.quality + 1
    }
  }

  updateQualityAfterExpired() {
    if (this.quality < 50) {
      this.quality = this.quality + 1
    }
  }
}
