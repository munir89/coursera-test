(function () {

'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', lcController);
lcController.$injector = ['$scope'];

function lcController ($scope) {
  $scope.lunchMenu = '';
  $scope.massage = '';
  $scope.color = '';
  
  $scope.checkLunchMenue = function (){
    var checker = '';
    if($scope.lunchMenu === '') {
      checker = 'Please enter data first';
    $scope.color = 'red';
    } else {
      checker = check();
    }
    $scope.massage = checker;
  };

  function check () {
    var msg = '';
    var items = $scope.lunchMenu.split(',');
     if(items.length <= 3){
      msg = 'Enjoy!';
    } else {
      msg = 'Too much!';
    }
    $scope.color = "green";
    return msg;
  }
}
})();
