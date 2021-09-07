const {
    increaseQuality,
    decreaseSellIn,
    isPastExpiration
    } = require("../src/utils");

const isBackstagePass = (item) => {
    return item.name ==='Backstage passes to a TAFKAL80ETC concert';
    }

const updateBackstagePass = (item) => {
    increaseQuality(item);
    decreaseSellIn(item);
    
    if (item.sellIn < 10) {
        increaseQuality(item);
    }
    if (item.sellIn < 5) {
        increaseQuality(item);
    }
    if (isPastExpiration(item)) {
    item.quality = MIN_QUALITY;
    }
  return item;
};

module.exports = { 
    isBackstagePass,
    updateBackstagePass
 }