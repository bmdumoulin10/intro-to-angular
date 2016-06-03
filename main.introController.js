angular.module('introAng')
	.controller('introController', introController)

introController().$inject = ['layoutFactory']

function introController (layoutFactory){
	
	console.log('hi from layout', layoutFactory);
	var introCtrl = this;
	introCtrl.title = "Intro to Angular";

	introCtrl.pageContent = layoutFactory.data;
}