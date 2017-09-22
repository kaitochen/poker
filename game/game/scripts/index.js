var _width=window.innerWidth*2;
var _height=window.innerHeight*2;
var game = new Phaser.Game(_width,_height,Phaser.AUTO, "game");
game.state.add('Boot', Game.Boot);
// game.state.add('Preload', Game.Preload);
// game.state.add('Menu', Game.Menu);
// game.state.add('main', Game.main);
// game.state.add('End', Game.End);
game.state.start('Boot');