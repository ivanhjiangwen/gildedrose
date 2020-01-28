import { Item } from '../item'

export class ItemFactory {
  static createAgedBrie(sellIn, quality) {
    return new Item('Aged Brie', sellIn, quality)
  }

  static createSulfuras(sellIn, quality) {
    return new Item('Sulfuras, Hand of Ragnaros', sellIn, quality)
  }

  static createBackstagePass(sellIn, quality) {
    return new Item('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)
  }

}
