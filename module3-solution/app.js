(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems);


function FoundItems() {
  var ddo = {
    restrict: "E",
    templateUrl: 'listItem.html'
  };
  return ddo;
};

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.query="";
  menu.error =""; 
  menu.found = []	
  

  menu.removeItem = function (itemIndex) {
    menu.found.splice(itemIndex, 1);

   };

  menu.findMenuItems=(function(){

	if (menu.query>"") {
		  var promise = MenuSearchService.getMenu();
		  promise.then(function (response) {
			menu.error = "";
			menu.found =[];
		  	menu.found =  getMatchedMenuItems(response.data.menu_items,menu.query);

			if (menu.found.length == undefined || menu.found.length < 1) menu.error = "Norhing found!";
		  })
		  .catch(function (error) {
			console.log("Something went terribly wrong.");
		  }); 
	}
	else {
	  menu.error = "Norhing found!";
	};

	
  });
 


}

function getMatchedMenuItems(data,query){
	var result = false;
	var foundItems=[];
	data.forEach(function(value, key) {
	    if (value.description.toLowerCase().indexOf(query) !== -1) {
	        foundItems.push(value);
		result=true;
	    }
	
	});
	if (result) {return foundItems;} else return -1;
}



MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var foundItems = [];

 
  service.getMenu = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
       
      }
    });

    return response;
  };

}


})();
