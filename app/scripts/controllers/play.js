'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
    .controller('PlayCtrl', function ($stateParams,StatisticService,$scope,$window,$state) {
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
        var call = 0
        $scope.recall = function(){
            console.log('call',call++)
            $scope.gameData = JSON.parse(localStorage.getItem("gameData"));
            console.log('gameData in recall',$scope.gameData);
        }

      	$scope.bowl = function(){
      		gameData = StatisticService.play();
      		localStorage.setItem("gameData", JSON.stringify(gameData));
      		//$scope.gameData = JSON.parse(localStorage.getItem("gameData"));
            $scope.recall();
      		console.log('gameData',$scope.gameData);
             
          /*$scope.getStats = StatisticService.get($stateParams.ball,$stateParams.over,$scope.gameData);
          console.log('getStats',$scope.getStats);*/
      	}

        $scope.recall();

        $scope.sendIndex = function(item,idx){
            $scope.getStats = item;
            $scope.idx = idx;
        }
        

        //console.log('stateparam_ball',$stateParams.ball)

      	$scope.getStats = StatisticService.get($stateParams.ball,$stateParams.over,$scope.gameData);
      	console.log('getStats',$scope.getStats); 	    
    });

    angular.bootstrap(document.body, ['todoApp']);

