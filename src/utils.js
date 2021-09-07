const MAX_QUALITY = 50;
const MIN_QUALITY = 0;
const MIN_SELLIN = 0;

const increaseQuality = (item) => {
  if (item.quality < MAX_QUALITY) {
    return item.quality += 1;
  }
}

const decreaseQuality = (item) => {
  if (item.quality > MIN_QUALITY) {
    return item.quality -= 1;
  }
}

const isAgedBrie = (item) => {
  return item.name === 'Aged Brie';
}

const isBackstagePass = (item) => {
  return item.name ==='Backstage passes to a TAFKAL80ETC concert';
}

const isSulfuras = (item) => {
  return item.name === 'Sulfuras, Hand of Ragnaros';
}

const decreaseSellIn = (item) => {
  if (item.sellIn > MIN_QUALITY) {
    return item.sellIn -= 1;
  }
}

const isPastExpiration = (item) => {
  return item.sellIn <= MIN_SELLIN;
}

module.exports = {
    MIN_QUALITY, 
    increaseQuality,
    decreaseQuality,
    isAgedBrie,
    isBackstagePass,
    isSulfuras,
    decreaseSellIn,
    isPastExpiration
};
