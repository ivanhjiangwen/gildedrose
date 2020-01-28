export class GildedRose {
  items

  constructor(items) {
    this.items = items
  }

  passOneDay() {
    for (const item of this.items) {
      item.passOneDay()
    }
  }
}
