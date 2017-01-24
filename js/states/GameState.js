var GameState = function(){};

var heart;
console.log("GameState");


GameState.prototype = {
	preload: function(){
		console.log("preload GameState");
	},
	create: function(){
		game.phaser_game.add.sprite(0, 0, 'space');

		heart = new Heart(450,250);

	    face1 = game.phaser_game.add.sprite(0, 0, 'face');
	    face2 = game.phaser_game.add.sprite(500, 0, 'face');

	    //  A simple animation that flashes the 'eyes' of the sprite
	    face1.animations.add('flash', [0,1,2,3,2,1,0], 24, false);
	    face2.animations.add('flash', [0,1,2,3,2,1,0], 24, false);

	    //  Set-up the physics bodies
	    game.phaser_game.physics.arcade.enable([face1, face2]);
	    
	    face1.body.velocity.setTo(200, 200);
	    face1.body.bounce.set(1);
	    
	    face2.body.velocity.setTo(-200, 200);
	    face2.body.bounce.set(1);

	    face1.body.collideWorldBounds = true;
	    face2.body.collideWorldBounds = true;

	    //   Usually you'd provide a callback to the `game.phaser_game.physics.arcade.collide` function,
	    //   which is passed the two sprites involved in the collision, which you can then
	    //   perform further processing on. However you can also use this signal:

	    face1.body.onCollide = new Phaser.Signal();
	    face1.body.onCollide.add(hitSprite, this);

	    //  You still need to call `collide` in your update function, and you can still use
	    //  a callback with it too, but this Signal provides for another level of notification.

	    console.log("Create GameState");
	},
	update: function(){
		game.phaser_game.physics.arcade.collide([face1,face2], heart.sprite);
		heart.sprite.body.velocity.setTo(0, 0);
	},

	render: function(){
	}
}

function hitSprite (sprite1, sprite2) {

    //sprite1[0].play('flash');
    //sprite1[1].play('flash');
    console.log("this is sprite 1" + sprite1);
    console.log("this is sprite 2" + sprite2);
    
}