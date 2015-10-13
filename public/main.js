var app = angular.module('app', []);

app.controller('appCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
	document.getElementById('disArea').onload = function() {
		document.getElementById('disLoad').classList.add('hide');
		document.getElementById('display').classList.remove('hide');
	};
	// $scope.dataList = [{
	// 	name: 'AngularJs',
	// 	link: 'http://sathishgajendran.github.io/HelloWorld/Angular.html',
	// }, {
	// 	name: 'ExtJS',
	// 	link: 'http://sathishgajendran.github.io/HelloWorld/customPaint.html'
	// }, {
	// 	name: 'BackboneJS',
	// 	link: 'http://sathishgajendran.github.io/HelloWorld/BackBone.html'
	// }, {
	// 	name: 'jqGrid',
	// 	link: 'http://sathishgajendran.github.io/HelloWorld/jqGrid.html'
	// }, {
	// 	name: 'SignPanel',
	// 	link: 'http://sathishgajendran.github.io/HelloWorld/sign.html'
	// }, {
	// 	name: 'Flames',
	// 	link: 'http://sathishgajendran.github.io/HelloWorld/Flames.html'
	// }];

	// $scope.liElClick = function(event, data) {
	// 	// var flag=event===null?true:event.target.tagName !== "A"?true:false;
	// 	if (event===null?true:event.target.tagName !== "SPAN"?true:false) {
	// 		document.getElementById('display').classList.add('hide');
	// 		document.getElementById('disLoad').classList.remove('hide');
	// 		var display = document.getElementById('disArea');
	// 		display.src = data.link;
	// 	}
	// };

	// $scope.liElClick(null, scope.dataList[0]);

	$scope.links = {
		AngularJs: 'http://sathishgajendran.github.io/HelloWorld/Angular.html',
		ExtJS: 'http://sathishgajendran.github.io/HelloWorld/customPaint.html',
		BackboneJS: 'http://sathishgajendran.github.io/HelloWorld/BackBone.html',
		D3JS: 'http://sathishgajendran.github.io/HelloWorld/d3jsLine.html',
		jqGrid: 'http://sathishgajendran.github.io/HelloWorld/jqGrid.html',
		SignPanel: 'http://sathishgajendran.github.io/HelloWorld/sign.html',
		Flames: 'http://sathishgajendran.github.io/HelloWorld/Flames.html'
	};

	$rootScope.$on('$locationChangeStart', function(next, current) {
		var key = current.split('#/')[1];
		if (key) {
			document.getElementById('display').classList.add('hide');
			document.getElementById('disLoad').classList.remove('hide');
			var display = document.getElementById('disArea');
			var srcUrl = $scope.links[key];
			if (srcUrl) {
				display.src = srcUrl
			} else {
				alert("Url is Incorrect!!!");
			}
		} else {
			$location.path('AngularJs');
		}
	});

	$scope.liElClick = function(event, key) {
		if (event === null ? true : event.target.tagName !== "SPAN" ? true : false) {
			$location.path(key);
		}
	};

}]);