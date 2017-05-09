(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

function DIController ($scope,$filter) {
  $scope.name = "Yaakov";

  $scope.upper=function(){
    var upcase =$filter('uppercase');
    $scope.name=upcase($scope.name);
  }
}

})();
