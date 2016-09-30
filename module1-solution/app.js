(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.ButtonClick = function (){
    $scope.correct=" success ";
    var foods =  ($scope.foods +" ").toString();
    foods= foods.trim();
     var foodsArray = foods.split(",");
     if ((foods=="")||($scope.foods==undefined)) {
        $scope.opinion="Please enter data first"
        $scope.correct="fail";
      }
       else
     if ((foodsArray[3]==undefined)||(foodsArray[3].trim()=="")) {
              $scope.opinion="Enjoy!" ;
     } else {
      $scope.opinion="Too much!" ;
     }

  }

}



})();
