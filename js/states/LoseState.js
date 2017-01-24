var LoseState = function(){};

console.log("LoseState");

LoseState.prototype = {
	preload: function(){
		console.log("preload Lose");
	},
	create: function(){
		console.log("create Lose");
	},
	update: function(){}
}
