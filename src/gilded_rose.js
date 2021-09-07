class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

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

const changeQuality = (quality, increase) => {
  return increase ? quality += 1 : quality -= 1;
}

const decreaseSellIn = (item) => {
  if (item.sellIn > MIN_QUALITY) {
    return item.sellIn -= 1;
  }
}

const isExpired = (item) => {
  return item.sellIn < 0;
}

const updateItemQuality = (item) => {
  
   
    if (isSulfuras(item)) {
      return;
    }

    
    if (isAgedBrie(item)) {
      decreaseSellIn(item);
      increaseQuality(item);

      if (isExpired(item)) {
        increaseQuality(item);
      }
      return;
    }

    if (isBackstagePass(item)) {
      decreaseSellIn(item);
      increaseQuality(item);

          if (item.sellIn < 10) {
            increaseQuality(item);
          }

          if (item.sellIn < 5) {
            increaseQuality(item);
          }
        
        if (isExpired(item)) {
          item.quality = MIN_QUALITY;
          
        } 

        return;
    }

    decreaseSellIn(item);
    decreaseQuality(item);

    if (isExpired(item)) {
      decreaseQuality(item); 
    }
          
};


class Shop {
  constructor(items=[]){
    this.items = items;
    
  }

  updateQuality() {
    this.items.forEach(updateItemQuality);
  }
}

module.exports = {
  Item,
  Shop
}


