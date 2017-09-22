Game.Preloader = function(game){

};
Game.Preloader.prototype ={
	preload: function(){
		this.stage.backgroundColor = '#fff';
		this.preloadBar = this.add.sprite(Game.WIDTH/4, Game.HEIGHT/2,'preloadBar');
		this.preloadBar.anchor = {x: 0, y: 0.5}
		this.load.setPreloadSprite(this.preloadBar);

		this.load.image("background", "./image/bg.png");
		this.load.image("desk", "./image/desk.png");
		this.load.image("bar", "./image/status_bar.png");

		this.load.image('cover','./image/cover.png');
		this.load.image('dialog', './image/dialog.png');
		this.load.spritesheet('btn', './image/btn.png', 320, 120);

		this.load.image("roomcard", "./image/roomcard.png");
		this.load.spritesheet("btnSet", "./image/btn-set.png", 140, 100);
		this.load.image('word', './image/message.png');

		this.load.image("person", "./image/person.png");
		this.load.image("head", "person.jpg");
		this.load.image("choose", "./image/choose.png");

		this.load.image('left', './image/left.png');
		this.load.image('right', './image/right.png');
		this.load.image('up', './image/up.png');
		this.load.image('down', './image/down.png');

		this.load.spritesheet('multiple', './image/btn_multiple.png', 240, 120);
		this.load.spritesheet('ready', './image/ready.png', 284, 120);
		this.load.spritesheet('result', './image/result.png', 182, 90);
		this.load.spritesheet('poker', './image/pai.png', 226, 320);
		this.load.image('coin', './image/gold.png', 30, 30);
		this.load.image('clock', './image/clock.png');
		this.load.image('zhuang','./image/zhuang.png');


		this.load.image('board', './image/board.png');
		this.load.image('layer', './image/layer.png');
		this.load.spritesheet('tanchuang', './image/tanchuang.png', 590, 608);
	},
	create: function(){
		this.state.start('Check');
	}
}
