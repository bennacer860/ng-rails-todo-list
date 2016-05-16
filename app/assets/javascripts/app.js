angular.module('todoApp', ['ui.router', 'templates'])
.factory('lists',[ function () {
  var o = { lists: [{ name: "groceries", completed: false, 
		    tasks: [{body: "buy fish",completed: true},
			    {body: "buy sushi",completed: false},
			    {body: "buy bread",completed: true}]}]
	  };
  return o;
}])
.controller('MainCtrl', [
  '$scope','lists',
   function($scope,lists){
     $scope.lists = lists.lists;
     $scope.addList = function(){
     console.log(lists);
       $scope.lists.push({name: $scope.name, completed: false})
     };
   }
 ]);
