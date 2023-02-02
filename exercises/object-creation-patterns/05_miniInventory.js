// In this exercise, you'll build a simple inventory management system. The
// system is composed of an item creator, an item manager, and a reports
// manager. The item creator makes sure that all necessary information are
// present and valid. The item manager is responsible for creating items,
// updating information about items, deleting items, and querying information
// about the items. Finally, the report manager generates reports for a
// specific item or ALL items. Reports for specific items are generated from
// report objects created from the report manager. The report manager is
// responsible for reports for all items.

function isValidItem(...args) {
  if (args.length < 3) return false
  const [itemName, category, quantity] = args
  if (itemName.length < 5) return false
  if (category.length < 5 || category.split(' ').length > 1) return false
  if (typeof quantity !== 'number') return false
  return true
}

function generateSKUCode(itemName, category) {
  const squozeName = itemName.replaceAll(' ', '')
  return `${squozeName.substring(0, 3)}${category.substring(0, 2)}`.toUpperCase()
}

// Component Specifications

// Here's all the required information for an item:

  // SKU code: This is the unique identifier for a product. It consists of
    // the first 3 letters of the item and the first 2 letters of the category. If
    // the item name consists of two words and the first word consists of two
    // letters only, the next letter is taken from the next word.

  // Item name: This is the name of the item. It must consist of a minimum of 5
    // characters. Spaces are not counted as characters.

  // Category: This is the category that the item belongs to. It must consist
    // of a minimum of 5 characters and be only one word.

  // Quantity: This is the quantity in stock of an item. This must not be
    // blank. You may assume that a valid number will be provided.

// The following are the methods that the item manager can perform:

const ItemManager = {
  items: [],
  create(itemName, category, quantity) {
    if (!isValidItem(itemName, category, quantity)) return false
    this.items.push({
      skuCode: generateSKUCode(itemName, category),
      itemName,
      category,
      quantity,
    })
  },
  delete(skuCode) {
    const codes = this.items.map(item => item.skuCode)
    const index = codes.indexOf(skuCode)
    this.items = [...this.items.slice(0, index), ...this.items.slice(index + 1)]
  },
  update(skuCode, newItem) {
    const keys = Object.keys(newItem)
    const item = this.items.find(item => item.skuCode === skuCode)
    keys.forEach(key => item[key] = newItem[key])
  },
  inStock() {
    const itemsInStock = this.items.filter(item => item.quantity > 0)
    // console.log(itemsInStock)
    return itemsInStock
  },
  itemsInCategory(category) {
    const inCategory = this.items.filter(item => item.category === category)
    console.log(inCategory)
    return inCategory
  },
}

  // create: This method creates a new item. Returns false if creation is not
    // successful.

  // update: This method accepts an SKU Code and an object as an argument and
    // updates any of the information on an item. You may assume valid values will
    // be provided.

  // delete: This method accepts an SKU Code and deletes the item from the
    // list. You may assume a valid SKU code is provided.

  // items: This property contains a list of all the items.

  // inStock: This method lists all the items that have a quantity greater than
    // 0.

  // itemsInCategory: This method lists all the items for a given category

// The following are the methods on the reports managers:

const ReportManager = {
  init() {
    this.items = ItemManager
  },
  createReporter(skuCode) {
    const item = this.items.items.find(item => item.skuCode === skuCode)
    const keys = Object.keys(item)
    return {
      itemInfo() {
        keys.forEach(key => console.log(`${key}: ${item[key]}`))
      }
    }
  },
  reportInStock() {
    const inStock = this.items.inStock()
    console.log(inStock.map(item => item.itemName).join(','))
  }
}

  // init: This method accepts the ItemManager object as an argument and
    // assigns it to the items property.

  // createReporter: This method accepts an SKU code as an argument and returns
    // an object. The returned object has one method, itemInfo. It logs to the
    // console all the properties of an object as "key:value" pairs (one pair per
    // line). There are no other properties or methods on the returned object
    // (except for properties/methods inherited from Object.prototype).

// reportInStock: Logs to the console the item names of all the items that are
  // in stock as a comma separated values.

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
