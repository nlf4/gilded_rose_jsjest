import { Item } from "./item";

class Shop {
    constructor(items=[]){
      this.items = items;
    }
  
    updateQuality() {
      this.items.forEach(updateItemQuality);
      return this.items;
    }
  }

module.exports = {Shop};