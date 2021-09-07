const {
    increaseQuality,
    decreaseSellIn,
    isPastExpiration
    } = require("../src/utils");

const isAgedBrie = (item) => {
    return item.name === 'Aged Brie';
  }

const updateAgedBrie = (item) => {
  decreaseSellIn(item);
  increaseQuality(item);

  if (isPastExpiration(item)) {
    increaseQuality(item);
  }
  return item;
};

module.exports = { 
    isAgedBrie,
    updateAgedBrie
 }