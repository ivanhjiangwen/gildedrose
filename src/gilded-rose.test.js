import { GildedRose } from './gilded-rose'
import { Item } from './item'
import { readFileSync } from 'fs'

describe('GildedRoseTest', () => {
  it('foo', () => {
    const items = [new Item('foo', 1, 5)]

    const app = new GildedRose(items)
    app.passOneDay()

    expect(app.items[0].name).toEqual('foo')
    expect(app.items[0].quality).toEqual(4)
    expect(app.items[0].sell_in).toEqual(0)
  })

  it('should match safety net', () => {
    const items = [
      new Item('+5 Dexterity Vest', 10, 20), //
      new Item('Aged Brie', 2, 0), //
      new Item('Elixir of the Mongoose', 5, 7), //
      new Item('Sulfuras, Hand of Ragnaros', 0, 80), //
      new Item('Sulfuras, Hand of Ragnaros', -1, 80),
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
      new Item('Backstage passes to a TAFKAL80ETC concert', 1, 20),
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
