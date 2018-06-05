(function () {

  angular.module('data')
  .component('items', {
    templateUrl: 'src/menuapp/templates/itemData.template.html',
    bindings: {
      items: '<'
    }
  });
  
  
  })();