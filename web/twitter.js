angular.module('wooweb.controllers', []).controller('twitter', ['$scope', '$http', function($scope, $http) {
			  $scope.woots = ['first','second'];

			  $scope.addWoot = function(){
			  	$scope.woots.push($scope.woo);
			  	$scope.woo = '';
			  }

			  $scope.fuckWoo = function() {
			  	$http.get('http://foaas.herokuapp.com/off/'+$scope.woo+'/WooWeb').success(function(data, status) {
			  			$scope.woots.push(data.message);
			  		});
			  }

			  $scope.removeWoot = function(index, woot) {
			  	$scope.woots.splice(index,1);
			  }

			}]);