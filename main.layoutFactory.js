angular.module('introAng')
	.factory('layoutFactory', layoutFactory)
	
function layoutFactory (){
	var pageContent = [
		{
			h1 : 'This is the headline',
			li1 : 'List Item 1',
			li2 : 'List Item 2',
			li3 : 'List Item 3',
			h2 : 'Paragraph',
			p : 'This is a paragraph that turns pink when the mouse runs over it.'
		}
	]
		return {
		data : pageContent,
	}
}