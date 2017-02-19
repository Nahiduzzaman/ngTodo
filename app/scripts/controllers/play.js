'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
    .controller('PlayCtrl', function ($stateParams,StatisticService,$scope,$window) {
        var gameData = [];
        $scope.resetData = function(){
            console.log('removeItem');
            $scope.gameData = localStorage.removeItem("gameData");
            $scope.teamData = localStorage.removeItem("teamData");
            gameData = [];
            $window.location.reload();
        }
      	
      	$scope.teamData = JSON.parse(localStorage.getItem("teamData"));
      	console.log('teamData',$scope.teamData);

      	$scope.bowl = function(){
      		gameData = StatisticService.play();
      		localStorage.setItem("gameData", JSON.stringify(gameData));
      		$scope.gameData = JSON.parse(localStorage.getItem("gameData"));
            $scope.seconds  = new Date().getTime() / 1000;
            $stateParams.time = $scope.seconds;
      		console.log('gameData',$scope.gameData);
           
          
          /*$scope.getStats = StatisticService.get($stateParams.ball,$stateParams.over,$scope.gameData);
          console.log('getStats',$scope.getStats);*/
      	}

      	//$scope.gameData = JSON.parse(localStorage.getItem("gameData"));

        //console.log('stateparam_ball',$stateParams.ball)

      	$scope.getStats = StatisticService.get($stateParams.ball,$stateParams.over,$scope.gameData);
      	console.log('getStats',$scope.getStats); 	    
    });

