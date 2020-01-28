import { Item } from '../item'

export class Sulfuras extends Item {
  constructor(sell_in, quality) {
    super('Sulfuras, Hand of Ragnaros', sell_in, quality)
  }

  updateSellInAfterOneDay() {}

  updateQualityAfterExpired() {}
}
