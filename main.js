(function(){
    angular.module('introAng', []) //creates an angular object
        .controller('introController', introController)
        
        function introController(){
            var introCtrl = this
            
            introCtrl.title = 'Intro to Angular'
            
            

            }


            
        
}());

/*
            myCtrl.addItem = function(){
                myCtrl.chores.push(myCtrl.newItem)
                myCtrl.newItem = []
*/