var WinState = function(){};

console.log("WinState");

WinState.prototype = {
	preload: function(){
		console.log("preload win");
	},
	create: function(){
		console.log("create win");
	},
	update: function(){}
}