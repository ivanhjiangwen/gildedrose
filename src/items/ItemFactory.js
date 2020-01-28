import { AgedBrie } from './AgedBrie'
import { Sulfuras } from './Sulfuras'
import { BackstagePass } from './BackstagePass'
import { Conjured } from './Conjured'

export class ItemFactory {
  static createAgedBrie(sellIn, quality) {
    return new AgedBrie(sellIn, quality)
  }

  static createSulfuras(sellIn, quality) {
    return new Sulfuras(sellIn, quality)
  }

  static createBackstagePass(sellIn, quality) {
    return new BackstagePass(sellIn, quality)
  }

  static createConjured(sellIn, quality) {
    return new Conjured(sellIn, quality)
  }
}
