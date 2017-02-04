/**
 * Created by hussain on 4/2/17.
 */

var BallWorld = {
    velocity : 8
};

// initiate the Phaser framework
var game = new Phaser.Game(500, 500, Phaser.AUTO, '', {
    preload : preload , create : create , update : update
});

    // load the game assets before the game starts
function preload(){
    game.load.image('star', 'images/star.png')
}

    //executed after everything is loaded
function create(){
    // Center game canvas on page
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    // Changed background colour
    game.stage.backgroundColor = '#87CEEB';

    // Add the star in the middle of the game area
    this.star = game.add.sprite(game.world.centerX , game.world.centerY, 'star');
    this.star.anchor.set(0.5, 0.5);

    // Add key input to the game
    this.keys = game.input.keyboard.createCursorKeys();
}

    // called once every frame , 60 frames per second
function update(){
    // Poll the arrow keys to move the ball
    if (this.keys.left.isDown) {
        this.star.x -= BallWorld.velocity;
    }
    if (this.keys.right.isDown) {
        this.star.x += BallWorld.velocity;
    }
    if (this.keys.up.isDown) {
        this.star.y -= BallWorld.velocity;
    }
    if (this.keys.down.isDown) {
        this.star.y += BallWorld.velocity;
    }
    // Prevent ball from escaping outside the stage's boundaries
    var halfWidth = this.star.width / 2;
    var halfHeight = this.star.height / 2;
    if ((this.star.x - halfWidth) < 0) {
        this.star.x = halfWidth;
    }
    if ((this.star.x + halfWidth) > game.width) {
        this.star.x = game.width - halfWidth;
    }
    if ((this.star.y - halfHeight) < 0) {
        this.star.y = halfHeight;
    }
    if ((this.star.y + halfHeight) > game.height) {
        this.star.y = game.height - halfHeight;
    }
}
