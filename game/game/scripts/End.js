Game.End = function(game){};
Game.End.prototype = {
	create: function(){
		// var board = this.add.sprite(0, 0, 'board');
		// board.width = Game.WIDTH;
		// board.height = Game.HEIGHT;
		// var message = this.add.text(Game.WIDTH/2, Game.HEIGHT*300/1321, '房间号:6521342    2017-09-22  15:56  12局', {font: '20px', fill: '#C4AE6E'})
		// message.anchor = {x: 0.5, y: 0.5};
		// var image = new Image();
		document.getElementsByTagName('canvas')[1].style['display']='none';
		var width = window.innerWidth;
		var height = window.innerHeight;
		var canvas = document.getElementById('end');
		canvas.style['display'] = 'block';
		canvas.width = width*2;
		canvas.height = height*2;
		// canvas.style['width']=WIDTH+'px';
		// canvas.style['height']=HEIGHT+'px';
		var end=canvas.getContext('2d');
		var bg=document.getElementById('bg');
		var btn=document.getElementById('btn');
		end.drawImage(bg, 0, 0, width*2, height*2);
		end.font="24px 黑体";
		end.fillStyle='#C4AE6E';
		end.fillText('房间号:627611    2017-9-19  15:56  12局', width*300/750, height*610/1321);
		end.fillStyle= '#242119';
		end.fillRect(width*29/75,height*760/1321, width*92/75, height*100/1321);
		end.fillRect(width*29/75,height*900/1321, width*92/75, height*100/1321);
		end.fillRect(width*29/75,height*1040/1321, width*92/75, height*100/1321);
		end.fillRect(width*29/75,height*1180/1321, width*92/75, height*100/1321);
		end.fillRect(width*29/75,height*1320/1321, width*92/75, height*100/1321);
		end.fillRect(width*29/75,height*1460/1321, width*92/75, height*100/1321);
		end.fillRect(width*29/75,height*1600/1321, width*92/75, height*100/1321);
		end.fillRect(width*29/75,height*1740/1321, width*92/75, height*100/1321);
		end.fillRect(width*29/75,height*1880/1321, width*92/75, height*100/1321);

		end.fillStyle= '#FFD399';
		end.fillText('我是第一名', width*40/75, height*830/1321);
		end.fillText('我是第二名', width*40/75, height*970/1321);
		end.fillText('我是第三名', width*40/75, height*1110/1321);
		end.fillText('我是第四名', width*40/75, height*1250/1321);

		end.fillText('+200', width*95/75, height*830/1321);
		end.fillText('+200', width*95/75, height*970/1321);
		end.fillText('+200', width*95/75, height*1110/1321);
		end.fillText('+200', width*95/75, height*1250/1321);

		end.fillStyle = '#fff';
		end.fillText('我是第五名', width*40/75, height*1390/1321);
		end.fillText('我是第六名', width*40/75, height*1530/1321);
		end.fillText('我是第七名', width*40/75, height*1670/1321);
		end.fillText('我是第八名', width*40/75, height*1810/1321);
		end.fillText('我是第九名', width*40/75, height*1950/1321);
		end.fillText('-200', width*95/75, height*1390/1321);
		end.fillText('-200', width*95/75, height*1530/1321);
		end.fillText('-200', width*95/75, height*1670/1321);
		end.fillText('-200', width*95/75, height*1810/1321);
		end.fillText('-200', width*95/75, height*1950/1321);

		end.drawImage(btn, width*50/75, height*2200/1321, width*48/75, height*176/1321);

		var image=document.getElementById('img');
		image.src=canvas.toDataURL('image/png');
		canvas.style['display']='none';
		image.style['display'] = 'block';
		image.width = width;
		image.height = height;
		// image.src = document.getElementsByTagName('canvas')[0].toDataURL('image/png');
		// document.body.appendChild(image);
	}
}
