/**
 * Created by hussain on 4/2/17.
 */

// initiate the Phaser framework
var game = new Phaser.Game(500, 500, Phaser.AUTO, 'area', {
    preload : preload , create : create , update : update
});

    // load the game assets before the game starts
function preload(){
        //this.load.image('background' , 'assets/images/bg.png');
        //this.load.image('star', 'assets/images/star.png');
}

    //executed after everything is loaded
function create(){
        //this.background = this.game.add.sprite(10, 0, 'star');
      var helloText = game.add.text(250,250, 'Hello, Phaser!', {
          fontSize : '32px',
          fill : '#00F'
     });
     helloText.anchor.set(0.5, 0.5);
}

    // this is executed multiple times per second
function update(){
 }
