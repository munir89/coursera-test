(function () {

'use strict';

angular.module('public')
.controller('SingUpController', SingUpController);

SingUpController.$inject = ['MenuService'];

function SingUpController (MenuService) {
  var singUpCtrl = this;
  singUpCtrl.notFound = false;
  singUpCtrl.found = false;
  singUpCtrl.user = {
    firstName: '',
    lastName: '',
    email: '',
    phone:'',
    shortName: ''
  };

  singUpCtrl.submit = function () {
    singUpCtrl.notFound = false;
    singUpCtrl.found = false;
    var promise = MenuService.getMenuForCategory();

    promise.then(function (result){
      var menuItems = [];
      menuItems = result.data.menu_items;
      var menuItem = check(menuItems,singUpCtrl.user.shortName);
      if(menuItem) {
        MenuService.userInfo.push(singUpCtrl.user);
        MenuService.menuItem.push(menuItem);
        singUpCtrl.found = true;
      }
      else {
        singUpCtrl.notFound = true;
      }
      
    })
    .catch(function(error){
      singUpCtrl.notFound = true;
    });
  };
  
  function check (items, shortName) {
    for (var i= 0; i < items.length; i++){
      if(items[i].short_name == shortName){

        return items[i];
      }
    } 
    return false;
  }
}

})();