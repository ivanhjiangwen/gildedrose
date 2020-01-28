import { GildedRose } from './gilded-rose'
import { Item } from './item'
import { readFileSync } from 'fs'
import { ItemFactory } from './items/ItemFactory'

describe('GildedRoseTest', () => {
  it('foo', () => {
    const items = [new Item('foo', 1, 5)]

    const app = new GildedRose(items)
    app.passOneDay()

    expect(app.items[0].name).toEqual('foo')
    expect(app.items[0].quality).toEqual(4)
    expect(app.items[0].sellIn).toEqual(0)
  })

  describe('Conjured', () => {
    it('decrease quality double times for normal item before expired', () => {
      const conjured = ItemFactory.createConjured(2, 4)
      conjured.passOneDay()
      expect(conjured.quality).toEqual(2)
    })

    it('decrease quality double times for normal item after expired', () => {
      const conjured = ItemFactory.createConjured(0, 5)
      conjured.passOneDay()
      expect(conjured.quality).toEqual(1)
    })
  })

  it('should match safety net', () => {
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

    const safetyOutput = readFileSync('src/fixtures/app_output.txt', 'utf-8')
    expect(result.join('\n')).toEqual(safetyOutput)
  })
})
