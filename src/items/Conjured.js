import { Item } from '../item'

export class Conjured extends Item {
  constructor(sellIn, quality) {
    super('Conjured Mana Cake', sellIn, quality)
  }

  updateQualityAfterOneDay() {
    this.decreaseQuality()
    this.decreaseQuality()
  }

  updateQualityAfterExpired() {
    this.decreaseQuality()
    this.decreaseQuality()
  }
}
