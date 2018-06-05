(function () {
'use strict';

angular.module('menuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig ($stateProvider, $urlRouterProvider) {
  
  // Redirect to home page if no other URL matches

  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***

  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: "src/menuapp/templates/home.template.html"
  })

  // Categories home
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'DataCategoriesController as dataCategory',
    resolve: {
      categories: ['MenuDataService', function(MenuDataService) {
       return MenuDataService.getAllCategories()
      }]
    } 
  })

  // Items page

  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'DataItemsController as dataItems',
    resolve:{
      items: ['$stateParams','MenuDataService',function($stateParams, MenuDataService){
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });
}
})();