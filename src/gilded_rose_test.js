const { isAgedBrie, updateAgedBrie } = require("../src/AgedBrie");
const { isBackstagePass, updateBackstagePass } = require("../src/BackstagePass");
const {
    MIN_QUALITY, 
    increaseQuality,
    decreaseQuality,
    isSulfuras,
    decreaseSellIn,
    isPastExpiration
    } = require("../src/utils");


const updateItemQuality = (item) => {
    //Check if item is Sulfuras, if so return item
    if (isSulfuras(item)) {
        return item;
      }
    //Check if item is Aged Brie, if so apply update
    if (isAgedBrie(item)) {
        updateAgedBrie(item)
    //Check if item is Backstage Pass, if so apply update
    } else if (isBackstagePass(item)) {
        updateBackstagePass(item)
    //Otherwise normal item, update
    } else {
        decreaseSellIn(item);
        decreaseQuality(item);
    }
    //Decrease quality if past expiration
    if (isPastExpiration(item)) {
        decreaseQuality(item);
    }
}
  

  class Shop {
    constructor(items=[]){
      this.items = items;
    }
  
    updateQuality() {
      this.items.forEach(updateItemQuality);
      return this.items;
    }
  }

  module.exports = { Shop }
  