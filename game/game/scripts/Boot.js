var Game = {};
Game.Boot = function(game){
	Game.WIDTH = window.innerWidth*2;
	Game.HEIGHT = window.innerHeight*2;
	Game.link;
};
Game.Boot.prototype = {
	preload: function(){
		var bar = this.load.image('preloadBar', './image/loading-bar.png');
		bar.width = Game.WIDTH/2;
	},
	create: function(){
		this.input.maxPointers = 1;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.state.start('Preloader');
	}

}