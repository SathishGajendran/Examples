var app = angular.module('app', []);

app.controller('appCtrl', ['$scope', function(scope) {
	document.getElementById('disArea').onload = function() {
		document.getElementById('disLoad').classList.add('hide');
		document.getElementById('display').classList.remove('hide');
	};
	scope.dataList = [{
		name: 'AngularJs',
		link: 'http://sathishgajendran.github.io/HelloWorld/Angular.html'
	}, {
		name: 'ExtJS',
		link: 'http://sathishgajendran.github.io/HelloWorld/customPaint.html'
	}, {
		name: 'BackboneJS',
		link: 'http://sathishgajendran.github.io/HelloWorld/BackBone.html'
	}, {
		name: 'jqGrid',
		link: 'http://sathishgajendran.github.io/HelloWorld/jqGrid.html'
	}, {
		name: 'Sign Panel',
		link: 'http://sathishgajendran.github.io/HelloWorld/sign.html'
	}, {
		name: 'Flames',
		link: 'http://sathishgajendran.github.io/HelloWorld/Flames.html'
	}];

	scope.liElClick = function(event, data) {
		// var flag=event===null?true:event.target.tagName !== "A"?true:false;
		if (event===null?true:event.target.tagName !== "SPAN"?true:false) {
			document.getElementById('display').classList.add('hide');
			document.getElementById('disLoad').classList.remove('hide');
			var display = document.getElementById('disArea');
			display.src = data.link;
		}
	};

	scope.liElClick(null, scope.dataList[0]);
}]);