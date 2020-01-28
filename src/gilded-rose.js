export class GildedRose {
  items

  constructor(items) {
    this.items = items
  }

  update_quality() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].update_quality()
    }
  }
}
