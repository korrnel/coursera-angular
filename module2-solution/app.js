(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListShowController', ShoppingListShowController)
.controller('BoughtListShowController', BoughtListShowController)
.service('ShoppingListService', ShoppingListService);


// ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var itemAdder = this;

  itemAdder.items  =[{
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];


  itemAdder.BuyItem = function (itemIndex) {
    ShoppingListService.addItem(itemAdder.items[itemIndex].name,itemAdder.items[itemIndex].quantity);
    itemAdder.items.splice(itemIndex, 1);
  }
}

// BoughtListShowController.$inject = ['ShoppingListService'];
function BoughtListShowController(ShoppingListService) {
  var BoughtList = this;

  BoughtList.items=ShoppingListService.getItems();


}


// If not specified, maxItems assumed unlimited
function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {

      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);

  };

  service.removeItem = function (itemIndex) {

  };

  service.getItems = function () {
    return items;
  };
}


})();
