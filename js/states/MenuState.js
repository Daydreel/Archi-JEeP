var MenuState = function(){};

console.log("MenuState");

MenuState.prototype = {
	preload: function(){
		console.log("preload Menu");
	},
	create: function(){
		console.log("create Menu");
	},
	update: function(){}
}
