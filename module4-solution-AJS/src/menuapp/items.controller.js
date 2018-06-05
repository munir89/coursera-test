(function(){
'use strict';

angular.module('data')
.controller('DataItemsController', DataItemsController);

DataItemsController.$inject = ['MenuDataService','items'];
function DataItemsController (MenuDataService, items) {
  var dataItems = this;
  var items = items.data;
  dataItems.categoryName = items['category']['name'];
  dataItems.items = items['menu_items'];
}
})();