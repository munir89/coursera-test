(function (){

'use strict';

angular.module('public')
.controller('MyIfnoController', MyIfnoController);

MyIfnoController.$inject = ['MenuService'];
function MyIfnoController(MenuService) {
  var myInfoCtrl = this;
  myInfoCtrl.userInfo = MenuService.userInfo;
  myInfoCtrl.menuItem = MenuService.menuItem;

}

})();