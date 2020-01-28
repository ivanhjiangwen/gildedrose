import { GildedRose } from './gilded-rose'
import { Item } from './item'
import { ItemFactory } from './items/ItemFactory'

const items = [
  new Item('+5 Dexterity Vest', 10, 20), //
  ItemFactory.createAgedBrie(2, 0),
  new Item('Elixir of the Mongoose', 5, 7), //
  ItemFactory.createSulfuras(0, 80),
  ItemFactory.createSulfuras(-1, 80),
  ItemFactory.createBackstagePass(15, 20),
  ItemFactory.createBackstagePass(10, 49),
  ItemFactory.createBackstagePass(5, 49),
  ItemFactory.createBackstagePass(1, 20),
  // this conjured item does not work properly yet
  new Item('Conjured Mana Cake', 3, 6),
]

const app = new GildedRose(items)
const days = 3
const result = []

result.push('OMGHAI')
for (let i = 0; i < days; i++) {
  result.push(`-------- day ${i} --------`)
  result.push('name, sellIn, quality')
  for (const item of items) {
    result.push(item.toString())
  }
  result.push('')
  app.passOneDay()
}

console.log(result.join('\n'))
