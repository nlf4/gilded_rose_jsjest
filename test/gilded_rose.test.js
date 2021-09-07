const {Shop} = require("../src/gilded_rose_test");
const {Item} = require("../src/item");


describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("should update properties correctly", function() {
      let items = [];
      items.push(new Item("Aged Brie", 2, 0)),
      items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80)),
      items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20))
    
      const gildedRose = new Shop(items);
      const updatedItems = gildedRose.updateQuality();

    const expectedResult = [
      { sellIn: 1, quality: 1},
      { sellIn: 0, quality: 80},
      { sellIn: 14, quality: 21}
    ];
  
      expectedResult.forEach(function(test, i) {
        expect(updatedItems[i].quality).toBe(test.quality);
        expect(updatedItems[i].sellIn).toBe(test.sellIn);
    });
  });

 it ("should double quality deprecation once past expiration", function () {
        let items = [];
        items.push (new Item("+5 Dexterity Vest", 0 , 20));
        items.push (new Item("Conjured Mana Cake", -10 , 6));

      const gildedRose = new Shop(items);
      const updatedItems = gildedRose.updateQuality();

      const expectedResult = [
        { sellIn: -1, quality: 18 },
        { sellIn: -11, quality: 4 },
      ];

      expectedResult.forEach(function(test, i) {
        expect(updatedItems[i].quality).toBe(test.quality);
        expect(updatedItems[i].sellIn).toBe(test.sellIn);
    });

  });

  it ("quality of Sulfuras should stay the same", function ()  {
      let items = [];
        items.push(new Item("Sulfuras, Hand of Ragnaros', 0, 80"));

        const gildedRose = new Shop(items);
        const updatedItems = gildedRose.updateQuality();
  
        expect(updatedItems[0].quality).toBe(80);
    });

    it ("quality should never be negative", function () {
      let items = [];
      items.push (new Item("+5 Dexterity Vest", 0 , 20));
      items.push (new Item("Conjured Mana Cake", -10 , 6));

      const gildedRose = new Shop(items);
      const updatedItems = gildedRose.updateQuality();

      const expectedResult = [
        { sellIn: -1, quality: 0 },
        { sellIn: -11, quality: 0 },
      ];

      expectedResult.forEach(function(test, i) {
        expect(updatedItems[i].quality).toBeGreaterThanOrEqual(0);
      });

  });

  it ("quality should never exceed 50", function () {
    let items = [];
    items.push (new Item("+5 Dexterity Vest", 0 , 49));
    items.push (new Item("Conjured Mana Cake", -10 , 50));

    const gildedRose = new Shop(items);
    const updatedItems = gildedRose.updateQuality();

    const expectedResult = [
      { sellIn: -1, quality: 50 },
      { sellIn: -11, quality: 50 },
    ];

    expectedResult.forEach(function(test, i) {
      expect(updatedItems[i].quality).toBeLessThanOrEqual(test.quality);
    });

});

});

