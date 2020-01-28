import { Item } from '../item'

export class BackstagePass extends Item {
  constructor(sell_in, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sell_in, quality)
  }
}
