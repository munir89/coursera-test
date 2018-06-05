(function () {

angular.module('data')
.component('categories', {
  templateUrl: 'src/menuapp/templates/categoriesMenu.template.html',
  bindings: {
    items: '<'
  }
});


})();