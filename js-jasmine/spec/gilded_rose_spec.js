var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {
  describe("updateQuality", () => {
    it("should never allow quality to become negative", () => {
      const gildedRose = new Shop([new Item("foo", 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });

    it("should reduce quality each day", () => {
      const gildedRose = new Shop([new Item("foo", 0, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });

    it("should reduce quality twice as fast after sell by date", () => {
      const gildedRose = new Shop([new Item("foo", 0, 2)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });

    it("should reduce sellIn each day", () => {
      const gildedRose = new Shop([new Item("foo", 1, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
    })
  });

});
