(function () {
'use strict';

angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      foundItem: '<',
      onRemove: '&'
    }
    
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController (MenuSearchService) {
  var list = this;

  list.searchTerm = "";
  list.found = [];
  list.error = false;
  
  list.getItmesFound = function () {
    
    var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);

    promise.then(function (result) {
    list.found = result;
    if(result.length === 0) {
      list.error = true;
    } else {
      list.error = false;
    }
    })
    .catch(function(error){
      console.log(error);
    });

  };

  list.removeItem = function (itemIndex) {
    list.found.splice(itemIndex, 1);
  };
  
  
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService ($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: 'GET',
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    }).then(function(result) {
      var foundItems = [];
      var menuItems = result.data;
      if(searchTerm !== "") {
        for(var i = 0; i < menuItems['menu_items'].length; i++) {
          if (menuItems['menu_items'][i]['description'].toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(menuItems['menu_items'][i]);
          }
        }
      }
      
      return foundItems;
    });
  };
}
})();