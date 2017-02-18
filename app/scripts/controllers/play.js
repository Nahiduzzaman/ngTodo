'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('PlayCtrl', function ($stateParams,StatisticService,$scope) {
  	
  	$scope.teamData = JSON.parse(localStorage.getItem("teamData"));
  	console.log('teamData',$scope.teamData);

  	$scope.bowl = function(){
  		var gameData = StatisticService.play();
  		localStorage.setItem("gameData", JSON.stringify(gameData));
  		$scope.gameData = JSON.parse(localStorage.getItem("gameData"));
  		console.log($scope.gameData);
  	}
  	$scope.gameData = JSON.parse(localStorage.getItem("gameData"));
  	$scope.getStats = StatisticService.get($stateParams.ball,$stateParams.over,$scope.gameData);
  	console.log('getStats',$scope.getStats);
  	    
  });
