/**
 * Created by hussain on 2/2/17.
 */
var game = new Phaser.Game(800 , 600 , Phaser.AUTO , '', {
    preload : preload ,
    create : create ,
    upload : upload
});

function preload(){
    game.load.image('star', 'assets/images/star.png');
    game.load.image('background' , 'assets/images/background.png');
}

function create(){
    game.add.sprite(0, 0, 'star');
}

function upload(){

}