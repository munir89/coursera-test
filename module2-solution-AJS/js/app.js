(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
  var toBuy = this;
  
  toBuy.toBuyList = ShoppingListCheckOffService.getToBuyList();

  toBuy.bought = function (itemIndex) {
    ShoppingListCheckOffService.bought(itemIndex);
    };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController (ShoppingListCheckOffService) {
  var boughtList = this;
  
  boughtList.boughtItems = ShoppingListCheckOffService.getToBoughtList();
  
}

function ShoppingListCheckOffService () {
  var server = this;

   var toBuyList = [
    {
      name: 'Cookies',
      quantity: 10
    },
    {
      name: 'Chips',
      quantity: 6
    },
    {
      name: 'Banana',
      quantity: 8
    },
    {
      name: 'Appel',
      quantity: 4
    },
    {
      name: 'Milk',
      quantity: 3
    }
  ];

  var boughtList = [];

  server.bought = function (itemIndex) {
    var boughtItem = toBuyList[itemIndex];
    boughtList.push(boughtItem); 
    server.remove(itemIndex);
  };

  server.remove = function (itemIndex) {
    toBuyList.splice(itemIndex, 1);
  };
  
  server.getToBuyList = function () {
    return toBuyList;
  };

  server.getToBoughtList = function () {
    return boughtList;
  };
}
})();