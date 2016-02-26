var app=angular.module("appCache",['ngResource']);
app.controller("appController",function($scope,cacheService){
  $scope.test=cacheService.get();
});
angular.module

app.factory('cacheService', function($resource){
	return $resource('cache:test', {'query':  {method:'GET', isArray:false}});
});
