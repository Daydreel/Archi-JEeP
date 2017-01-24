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

		game.phaser_game.load.image('space', game.image_folder+'sky5.png');
		game.phaser_game.load.image('heart', game.sprite_folder+'Heart.png');

    	game.phaser_game.load.spritesheet('face', game.sprite_folder+'metalface78x92.png', 78, 92);

	},
	create: function(){
		console.log("create preload");
		game.phaser_game.state.start("gameState");
	},
	update: function(){}
}
