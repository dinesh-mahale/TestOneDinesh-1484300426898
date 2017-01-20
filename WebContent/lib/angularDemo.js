
var app = angular.module('mainApp',[]);

app.controller("loginCtrl",function($scope,$window) {

	$scope.submit = function() {
   
	    if($scope.username == 'admin' && $scope.password == 'admin'){
	    	var url = "http://" + $window.location.host + "/display.html"
	    	//$window.location.href = url;
	    	$window.location.href = '/display.html';
	    
	        console.log("In the If condition :"+$window.location.href);
	    }
	    else{
	         console.log("In the else condition, no url"); 
	    }
	}
})