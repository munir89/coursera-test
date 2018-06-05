(function () {
'use strict';

angular.module('data')
.controller('DataCategoriesController', DataCategoriesController );

DataCategoriesController.$inject = ['MenuDataService','categories'];
function DataCategoriesController (MenuDataService, categories) {
  var dataCategory = this;
  dataCategory.items = categories.data;
}
})();