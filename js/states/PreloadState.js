var PreloadState = function(){};

console.log("PreloadState");

PreloadState.prototype = {
	preload: function(){
		console.log("preload preload");
		//Physics
		game.phaser_game.physics.startSystem(Phaser.Physics.ARCADE);

		//Image
		//game.phaser_game.load.image('imageName', game.sprite_folder + 'imageName.png');
		
		//Audio	
		//game.phaser_game.load.audio('musicName', game.ambiance_folder+"music.wav]);

	},
	create: function(){
		console.log("create preload");
		game.phaser_game.state.start("gameState");
	},
	update: function(){}
}
