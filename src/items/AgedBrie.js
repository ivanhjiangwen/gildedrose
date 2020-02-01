import { Item } from '../item'

export class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality)
  }

  updateQualityAfterOneDay() {
    this.increaseQuality()
  }

  updateQualityAfterExpired() {
    this.increaseQuality()
  }
}
