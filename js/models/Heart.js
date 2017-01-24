var Heart = function(x,y){

	this.x = x;
	this.y = y;

	this.health = 100;
	this.sprite = game.phaser_game.add.sprite(this.x, this.y, 'heart');
	this.sprite.scale.setTo(0.3);
	this.sprite.anchor.setTo(0.5,0.5);

	game.phaser_game.physics.arcade.enable(this.sprite);


};