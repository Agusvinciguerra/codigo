var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 },
            debug: false
        }
    },
    scene: [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9, Scene10]
};

var game = new Phaser.Game(config);

// Lvl1
var score;
var gameOver;
var camera;
var boundaries;

var player;
var rayall;
var flechas;
var platforms;
var cursors;
var scoreText;
var rayoText;
var rayoScore;
var ray;
var clok; 
var gapple;
var puerta;
var music;
var sfxJump;
var sfxGoldenApple;
var sfxRayo;
var victory;
var timedEvent;
var initialTime;
var timeText;
var level = 0;

// Lvl2
var platform; 
var camera2;
var Wbounds;
var reiniciar;
var gobak;
var mplat; 
var tween; 
var bombs;
var bombstween; 
var idas;
var idastween; 
var rapple;
var energyText; 
var initialenergy;
var rap; 
var arrows; 