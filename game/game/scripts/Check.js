Game.Check =function(game){};
Game.Check.prototype = {
	create: function(){
		var cover = this.add.sprite(0, 0, 'cover');
		cover.width = Game.WIDTH;
		cover.height = Game.HEIGHT;
		var dialog = this.add.sprite(Game.WIDTH/2,Game.HEIGHT/2,'dialog');
		dialog.width = Game.WIDTH*50/75;
		dialog.height = Game.HEIGHT*360/1205;
		dialog.anchor = {x: 0.5, y: 0.5};
		var text = this.add.text(Game.WIDTH/2, Game.HEIGHT/2, '是否进入房间', {font: '40px', fill: '#fff'});
		text.anchor = {x: 0.5, y: 0.7};
		var back = this.add.sprite(Game.WIDTH/3, Game.HEIGHT*732/1205, 'btn', 3);
		var sure = this.add.sprite(Game.WIDTH*2/3, Game.HEIGHT*732/1205, 'btn', 1);
		back.width = Game.WIDTH*16/75;
		back.height = Game.HEIGHT*60/1205;
		back.anchor = {x: 0.4, y: 0.5};		
		sure.width = Game.WIDTH*16/75;
		sure.height = Game.HEIGHT*60/1205;
		sure.anchor = {x: 0.6, y: 0.5};
		sure.inputEnabled = true;
		var that = this;
		sure.events.onInputDown.add(function(){
			that.state.start('Game');
		})
	}
}