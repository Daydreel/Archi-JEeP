var Game = function(){
    this.myId = 0;
    this.phaser_game;

    //Image path
    this.tile_folder = "./assets/images/tile/";
    this.image_folder = "./assets/images/";
    this.buttons_folder = "./assets/images/buttons/";
    this.screens_folder = "./assets/images/screens/";

    //Sprite Path
    this.sprite_folder = "./assets/sprites/";

    //sound path
    this.ambiance_folder = "./assets/sounds/";

}

Game.prototype.init = function(){
    this.phaser_game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameCanvas');

    this.phaser_game.state.add("preloadState", PreloadState);
    this.phaser_game.state.add("gameState", GameState);
    this.phaser_game.state.add("winState", WinState);
    this.phaser_game.state.add("loseState", LoseState);

    
    this.phaser_game.state.start("preloadState");
}

var game = new Game();
game.init();
