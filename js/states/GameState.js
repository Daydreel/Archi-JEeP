var GameState = function(){};

console.log("GameState");
GameState.prototype = {
	preload: function(){
		console.log("preload Game");
	},
	create: function(){
		console.log("create Game");

		var text = "Say hello JEP to the world =D \n Panda \n Esteban \n James";
	    var style = { font: "60px Arial", fill: "#ff0044", align: "center" };

	    var t = game.phaser_game.add.text(0, 0, text, style);
	},
	update: function(){

	},

	render: function(){
	}
}