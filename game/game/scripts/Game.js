Game.Game = function(game){};
var _width = window.innerWidth*2;
var _height = window.innerHeight*2;
var PERSON_WIDTH = _width*9/75;
var PERSON_HEIGHT = _height*122/1205;
var READY_WIDTH = _width*142/750;
var READY_HEIGHT = _height*60/1205;
var HEAD_SIZE = _width*6/75;
var RESULT_WIDTH = _width*91/750;
var RESULT_HEIGHT = _height*45/1205;

var gameCount=1;
var gameTime;

var back=52;
var btn={one:0,two:1,three:2,four:3,five:4,none:5};
var ready={btn:0,text:1};

var animation1=0;
var animation2=0;
var animation3=0;
var animation4=0;
var animation5=0;

var card;
var delay=0;
var readyDelay=0;
var gameFlag=false;
var readyFlag=false;
var deal=0;
var once=0;
var choose=0;
var chooseCount=0;
var winState=0;
var loseState=0;
var cathectic=0;
var calculation=0;
var integration=0;
var restart=0;
var readyCount=0;

var mine={};
var person1,person2,person3,person4,person5,person6,person7,person8;
var qiang={};
var multiple={btn1: '', btn2: '', btn3: '', btn4: '', btn5: '', btn6: ''};

var show;
var map={map1:15,map2:10,map3:-10};

var locationLeft=-20;
var locationRight=20;

var timer,clock;
var layer;

var personState=[0,0,0,0,0,0,0,0,0];
var personQiang=[0,0,0,0,0,0,0,0,0];
var max=[0,0,0,0,0,0,0,0,0];
var zhuang;
var check=false;
var poked=[];

var newsprite;
var nowPerson,prePerson;

var mineDis = {x1: _width*19/750, x2: _width*10/750, x3: 0, x4: _width*10/750, x5: _width*19/750, y: _height*29/1205, width: _width*2.4/750, height: _height*3.9/1025 };
var person1Dis = {x1: _width*12/750, x2: _width*14/750, x3: _width*16/750, x4: _width*18/750, x5: _width*20/750, y: _height*7/1025};
var person2Dis = {x1: _width*21/750, x2: _width*19/750, x3: _width*17/750, x4: _width*15/750, x5: _width*13/750, y: _height*7/1025};
var person3Dis = {x1: _width*12/750, x2: _width*14/750, x3: _width*16/750, x4: _width*18/750, x5: _width*20/750, y: _height*7/1025};
var person4Dis = {x1: _width*21/750, x2: _width*19/750, x3: _width*17/750, x4: _width*15/750, x5: _width*13/750, y: _height*7/1025};
var person5Dis = {x1: _width*12/750, x2: _width*14/750, x3: _width*16/750, x4: _width*18/750, x5: _width*20/750, y: _height*20/1025};
var person6Dis = {x1: _width*21/750, x2: _width*19/750, x3: _width*17/750, x4: _width*15/750, x5: _width*13/750, y: _height*20/1025};
var person7Dis = {x1: _width*8/750, x2: _width*10/750, x3: _width*12/750, x4: _width*14/750, x5: _width*16/750, y: _height*31/1025};
var person8Dis = {x1: _width*16/750, x2: _width*14/750, x3: _width*12/750, x4: _width*10/750, x5: _width*8/750, y: _height*31/1025};

var ml = {
	x: _width*325/750, y: _height*1003/1205, 
	headX: _width*338/750, headY: _height*1034/1205, 
	nameX: _width*375/750, nameY: _height*1023/1205, 
	numY: _height*1125/1205, 
	readyX: _width*375/750, readyY: _height*1023/1205-60,
	resultY: _height*823/1205,
	coinX: _width*375/750, coinY: _height*1071/1205
}
var rL = {
	x: _width*628/750, 
	headX: _width*642/750,
	nameX: _width*673/750,
	readyX: _width*628/750-35,
	resultX: _width*520/750,
	coinX: _width*673/750
}
var lL = {
	x: _width*116/750,
	headX: _width*4/75,
	nameX: _width*71/750,
	readyX: _width*116/750+35,
	resultX: _width*136/750,
	coinX: _width*71/750
}
var bL = {
	y: _height*628/1205,
	headY: _height*660/1205,
	nameY: _height*646/1205,
	numY: _height*738/1205,
	readyY: _height*628/1205+60,
	coinY: _height*689/1205
}
var mL = {
	y: _height*455/1205,
	headY: _height*487/1205,
	nameY: _height*473/1205,
	numY: _height*565/1205,
	readyY: _height*455/1205+60,
	coinY: _height*516/1205
}
var tL = {
	y: _height*283/1205,
	headY: _height*315/1205,
	nameY: _height*301/1205,
	numY: _height*393/1205,
	readyY: _height*283/1205+60,
	coinY: _height*344/1205
}
var rLL = {
	x: _width*471/750, y: _height*147/1205,
	headX: _width*485/750, headY: _height*57/1205,
	nameX: _width*516/750, nameY: _height*43/1205,
	numY: _height*135/1205,
	readyX: _width*471/750+45, readyY: _height*147/1205+30,
	resultY: _height*147/1205+10,
	coinX: _width*516/750, coinY: _height*86/1205 
}
var lLL = {
	x: _width*186/750, y: _height*147/1205,
	headX: _width*200/750, headY: _height*57/1205,
	nameX: _width*231/750, nameY: _height*43/1205,
	numY: _height*135/1205,
	readyX: _width*186/750+45, readyY: _height*147/1205+30,
	resultY: _height*147/1205+10,
	coinX: _width*231/750, coinY: _height*86/1205 
}

var coinGroup;
var that;

var warnCover;
var ruleCover;

Game.Game.prototype = {
	create: function(){
	var bg = {};
	that = this;
	bg.background = this.add.sprite(0,0,'background');
	bg.background.width=Game.WIDTH;
	bg.background.height=Game.HEIGHT;

	bg.desk = this.add.sprite(Game.WIDTH*5/75, Game.HEIGHT*128/1205, 'desk');
	bg.desk.width = Game.WIDTH*65/75;
	bg.desk.height = Game.HEIGHT*960/1205;

	bg.bar = this.add.sprite(0, Game.HEIGHT*1115/1205, 'bar');
	bg.bar.width = Game.WIDTH;
	bg.bar.height = Game.HEIGHT*97/1205;

	bg.roomcard = this.add.sprite(Game.WIDTH*28/750, Game.HEIGHT*32/1205, 'roomcard');
	bg.roomcard.width = Game.WIDTH*7/75;
	bg.roomcard.height = Game.WIDTH*9/75;

	bg.roomcardNum = this.add.text(Game.WIDTH*62/750, Game.HEIGHT*105/1205, '20张',{font:'20px', fill:'#fff'});
	bg.roomcardNum.anchor={x: 0.5, y: 0.5};

	var homeBtn = this.add.sprite(Game.WIDTH*648/750, Game.HEIGHT*34/1205, 'btnSet', 3);
	homeBtn.width = Game.WIDTH*7/75;
	homeBtn.height = Game.WIDTH*5/75;
	homeBtn.inputEnabled = true;
	homeBtn.events.onInputDown.add(function(){
		window.location = 'http://www.baidu.com';
	})

	var ruleBtn = this.add.sprite(Game.WIDTH*28/750, Game.HEIGHT*1138/1205, 'btnSet', 0);
	ruleBtn.width = Game.WIDTH*7/75;
	ruleBtn.height = Game.WIDTH*5/75;
	ruleBtn.inputEnabled = true;
	ruleBtn.events.onInputDown.add(function(){
		ruleCover.visible = true;
		layer.visible = true;
		ruleBtn.inputEnabled = false;
	})

	var voiceBtn = this.add.sprite(Game.WIDTH*128/750, Game.HEIGHT*1138/1205, 'btnSet', 1);
	voiceBtn.width = Game.WIDTH*7/75;
	voiceBtn.height = Game.WIDTH*5/75;

	var warnBtn = this.add.sprite(Game.WIDTH*534/750, Game.HEIGHT*1138/1205, 'btnSet', 2);
	warnBtn.width = Game.WIDTH*7/75;
	warnBtn.height = Game.WIDTH*5/75;
	warnBtn.inputEnabled = true;
	warnBtn.events.onInputDown.add(function(){
		warnCover.visible = true;
		layer.visible = true;
		warnBtn.inputEnabled = false;
	})

	var wordBtn = this.add.sprite(Game.WIDTH*636/750, Game.HEIGHT*1138/1205, 'word');
	wordBtn.width = Game.WIDTH*7/75;
	wordBtn.height = Game.WIDTH*58/750;

	gameTime = this.add.text(Game.WIDTH/2, Game.HEIGHT*41/1205, '1/12局', {font: '32px', fill: '#fff'} );
	gameTime.anchor = {x: 0.5, y: 0.5};
	var basePoint = this.add.text(Game.WIDTH/2, Game.HEIGHT*96/1205, '底分: 1分', {font: '24px', fill: '#fff'});
	basePoint.anchor = {x: 0.5, y: 0.5};

	coinGroup = this.add.group();

	mine=person(ml.x, ml.y, 0, 'bottom');
	person1=person(rL.x, bL.y, 1, 'right');
	person2=person(lL.x, bL.y, 2, 'left');
	person3=person(rL.x, mL.y, 3, 'right');	
	person4=person(lL.x, mL.y, 4, 'left');
	person5=person(rL.x, tL.y, 5, 'right');
	person6=person(lL.x, tL.y, 6, 'left');
	person7=person(rLL.x, rLL.y, 7, 'top');
	person8=person(lLL.x, lLL.y, 8, 'top');

	createBtn('btn1', Game.WIDTH/6, ml.y-200, 0);
	createBtn('btn2', Game.WIDTH/3, ml.y-200, 1);
	createBtn('btn3', Game.WIDTH/2, ml.y-200, 2);
	createBtn('btn4', Game.WIDTH*2/3, ml.y-200, 3);
	createBtn('btn5', Game.WIDTH*5/6, ml.y-200, 4);
	createBtn('btn6', Game.WIDTH*4/5, ml.y-200, 5);

	clock = this.add.sprite(Game.WIDTH/2, Game.HEIGHT/2, 'clock');
	clock.width = Game.WIDTH*87/750;
	clock.height = Game.WIDTH*77/750;
	clock.anchor = {x: 0.5, y: 0.5};
	timer=this.add.text(Game.WIDTH/2, Game.HEIGHT/2+5, '10',{font:'30px',fill:'#fff'});
	timer.anchor = {x: 0.5, y: 0.5};
	// timer.visible=false; 
	zhuang=this.add.sprite(-50, -50, 'zhuang');
	zhuang.anchor = {x: 0.7, y: 0.7};
	layer = this.add.sprite(0, 0, 'layer');
	layer.width = Game.WIDTH;
	layer.height = Game.HEIGHT;
	warnCover = this.add.group();
	ruleCover = this.add.group();

	var warn = this.add.sprite(Game.WIDTH/2, Game.HEIGHT/2, 'tanchuang', 0);
	warn.width = Game.WIDTH*59/75;
	warn.height = Game.HEIGHT*628/1321;
	warn.anchor = {x: 0.5, y: 0.5};
	var btn1 = this.add.sprite(Game.WIDTH/2, Game.HEIGHT*910/1321, 'btn', 0);
	btn1.width = Game.WIDTH*16/75;
	btn1.height = Game.WIDTH*6/75;
	btn1.anchor = {x: 0.5, y: 0.5};
	btn1.inputEnabled = true;
	btn1.events.onInputDown.add(function(){
		layer.visible = false;
		warnCover.visible = false;
		warnBtn.inputEnabled = true;
	})
	warnCover.add(warn);
	warnCover.add(btn1);
	warnCover.visible = false;
	layer.visible = false;

	var rule = this.add.sprite(Game.WIDTH/2, Game.HEIGHT/2, 'tanchuang', 1);
	rule.width = Game.WIDTH*59/75;
	rule.height = Game.HEIGHT*628/1321;
	rule.anchor = {x: 0.5, y: 0.5};
	var btn2 = this.add.sprite(Game.WIDTH/2, Game.HEIGHT*910/1321, 'btn', 0);
	btn2.width = Game.WIDTH*16/75;
	btn2.height = Game.WIDTH*6/75;
	btn2.anchor = {x: 0.5, y: 0.5};
	btn2.inputEnabled = true;
	btn2.events.onInputDown.add(function(){
		layer.visible = false;
		ruleCover.visible = false;
		ruleBtn.inputEnabled = true;
	})
	ruleCover.add(rule);
	ruleCover.add(btn2);
	ruleCover.visible = false;
	layer.visible = false;
	},
	update: function(){
		if(winState>0){
			if(readyDelay>40){
				readyDelay=0;
				winState=0;
			}else{
				readyDelay++;
				// coinMove(person1, rL, bL, ml, ml);
				coinMove(person2, lL, bL, rL, mL);
				// coinMove(person3, rL, mL, ml, ml);
				coinMove(person4, lL, mL, rL, mL);
				// coinMove(mine, ml, ml, rL, tL);
				// coinMove(person2, lL, bL, ml, ml);
			}
		}
		if(readyCount>1){
			if(animation1<1){
					// 发牌
				mine.card1.x-=mineDis.x1;
				mine.card1.y+=mineDis.y;		
				mine.card1.width+=mineDis.width;
				mine.card1.height+=mineDis.height;
				person1.card1.x+=person1Dis.x1;
				person1.card1.y+=person1Dis.y;
				person2.card1.x-=person2Dis.x1;
				person2.card1.y+=person2Dis.y;
				person3.card1.x+=person3Dis.x1;
				person3.card1.y-=person3Dis.y;
				person4.card1.x-=person4Dis.x1;
				person4.card1.y-=person4Dis.y;
				person5.card1.x+=person5Dis.x1;
				person5.card1.y-=person5Dis.y;
				person6.card1.x-=person6Dis.x1;
				person6.card1.y-=person6Dis.y;
				person7.card1.x+=person7Dis.x1;
				person7.card1.y-=person7Dis.y;
				person8.card1.x-=person8Dis.x1;
				person8.card1.y-=person8Dis.y;
				
				animation1+=0.1;
			}
			if(animation1>0.5&&animation2<1){
					// 发牌
				mine.card2.x-=mineDis.x2;
				mine.card2.y+=mineDis.y;		
				mine.card2.width+=mineDis.width;
				mine.card2.height+=mineDis.height;
				person1.card2.x+=person1Dis.x2;
				person1.card2.y+=person1Dis.y;						
				person2.card2.x-=person2Dis.x2;
				person2.card2.y+=person2Dis.y;						
				person3.card2.x+=person3Dis.x2;
				person3.card2.y-=person3Dis.y;						
				person4.card2.x-=person4Dis.x2;
				person4.card2.y-=person4Dis.y;
				person5.card2.x+=person5Dis.x2;
				person5.card2.y-=person5Dis.y;						
				person6.card2.x-=person6Dis.x2;
				person6.card2.y-=person6Dis.y;
				person7.card2.x+=person7Dis.x2;
				person7.card2.y-=person7Dis.y;						
				person8.card2.x-=person8Dis.x2;
				person8.card2.y-=person8Dis.y;
				
				animation2+=0.1;
			}
			if(animation2>0.5&&animation3<1){
					// 发牌
				mine.card3.x-=mineDis.x3
				mine.card3.y+=mineDis.y;		
				mine.card3.width+=mineDis.width;
				mine.card3.height+=mineDis.height;
				person1.card3.x+=person1Dis.x3;
				person1.card3.y+=person1Dis.y;							
				person2.card3.x-=person2Dis.x3;
				person2.card3.y+=person2Dis.y;							
				person3.card3.x+=person3Dis.x3;
				person3.card3.y-=person3Dis.y;							
				person4.card3.x-=person4Dis.x3;
				person4.card3.y-=person4Dis.y;	
				person5.card3.x+=person5Dis.x3;
				person5.card3.y-=person5Dis.y;							
				person6.card3.x-=person6Dis.x3;
				person6.card3.y-=person6Dis.y;	
				person7.card3.x+=person7Dis.x3;
				person7.card3.y-=person7Dis.y;							
				person8.card3.x-=person8Dis.x3;
				person8.card3.y-=person8Dis.y;							
					
				animation3+=0.1;	
			}
			if(animation3>0.5&&animation4<1){
					// 发牌
				mine.card4.x+=mineDis.x4
				mine.card4.y+=mineDis.y;		
				mine.card4.width+=mineDis.width;
				mine.card4.height+=mineDis.height;
				person1.card4.x+=person1Dis.x4;
				person1.card4.y+=person1Dis.y;	
				person2.card4.x-=person2Dis.x4;
				person2.card4.y+=person2Dis.y;
				person3.card4.x+=person3Dis.x4;
				person3.card4.y-=person3Dis.y;	
				person4.card4.x-=person4Dis.x4;
				person4.card4.y-=person4Dis.y;
				person5.card4.x+=person5Dis.x4;
				person5.card4.y-=person5Dis.y;	
				person6.card4.x-=person6Dis.x4;
				person6.card4.y-=person6Dis.y;	
				person7.card4.x+=person7Dis.x4;
				person7.card4.y-=person7Dis.y;	
				person8.card4.x-=person8Dis.x4;
				person8.card4.y-=person8Dis.y;	
				
				animation4+=0.1;
			}
			if(animation4>0.5&&animation5<1){
					// 发牌
				mine.card5.x+=mineDis.x5
				mine.card5.y+=mineDis.y;		
				mine.card5.width+=mineDis.width;
				mine.card5.height+=mineDis.height;
				person1.card5.x+=person1Dis.x5;
				person1.card5.y+=person1Dis.y;						
				person2.card5.x-=person2Dis.x5;
				person2.card5.y+=person2Dis.y;						
				person3.card5.x+=person3Dis.x5;
				person3.card5.y-=person3Dis.y;						
				person4.card5.x-=person4Dis.x5;
				person4.card5.y-=person4Dis.y;
				person5.card5.x+=person5Dis.x5;
				person5.card5.y-=person5Dis.y;						
				person6.card5.x-=person6Dis.x5;
				person6.card5.y-=person6Dis.y;
				person7.card5.x+=person7Dis.x5;
				person7.card5.y-=person7Dis.y;						
				person8.card5.x-=person8Dis.x5;
				person8.card5.y-=person8Dis.y;
				
				animation5+=0.1;
			}
			if(animation5>=1){
				readyCount=0;
				// deal=1;
				readyDelay=0;
				animation1=0;
				animation2=0;
				animation3=0;
				animation4=0;
				animation5=0;
			}
		}else{
			// if(readyCount>3){
			// 	readyDelay=700;
			// 	timer.visible=false;
			// }
			// readyDelay+=1;
			// timer.text=(Math.floor((600-readyDelay)/60)>=0?Math.floor((600-readyDelay)/60):0);	
		}
	}
};
function createBtn(ele, x, y, num){
	multiple[ele] = that.add.sprite(x, y, 'multiple', num);
	multiple[ele].width = Game.WIDTH*12/75;
	multiple[ele].height = Game.WIDTH*6/75;
	multiple[ele].anchor = {x: 0.5, y: 0.5};
	multiple[ele].visible = false;
	if(num == 5){
		multiple[ele].inputEnabled = true;
		multiple[ele].events.onInputDown.add(function(){
			multiple.btn6.visible = false;
			multiple.btn1.x = Game.WIDTH/6;
			multiple.btn2.x = Game.WIDTH/3;
			multiple.btn3.x = Game.WIDTH/2;
			multiple.btn4.x = Game.WIDTH*2/3;
			multiple.btn5.x = Game.WIDTH*5/6;
			multiple.btn3.visible = true;
			multiple.btn5.visible = true;
		})
	}
}
function coinMove(obj, selfX, selfY, goalX, goalY){
	if(readyDelay<=8){
		obj.coin1.x+= (goalX.coinX-selfX.coinX)/8;
		obj.coin1.y+= (goalY.coinY-selfY.coinY)/8;
	}
	if(readyDelay>4&&readyDelay<=12){
		obj.coin2.x+= (goalX.coinX-selfX.coinX)/8;
		obj.coin2.y+= (goalY.coinY-selfY.coinY)/8;
	}
	if(readyDelay>8&&readyDelay<=16){
		obj.coin3.x+= (goalX.coinX-selfX.coinX)/8;
		obj.coin3.y+= (goalY.coinY-selfY.coinY)/8;
	}
	if(readyDelay>12&&readyDelay<=20){
		obj.coin4.x+= (goalX.coinX-selfX.coinX)/8;
		obj.coin4.y+= (goalY.coinY-selfY.coinY)/8;
	}
	if(readyDelay>16&&readyDelay<=24){
		obj.coin5.x+= (goalX.coinX-selfX.coinX)/8;
		obj.coin5.y+= (goalY.coinY-selfY.coinY)/8;
	}
}
function person(w, h, id, direct){
	var obj = {card1: '', card2: '', card3: '', card4: '', card5: ''};
	for(var k in obj){
		obj[k] = that.add.sprite(Game.WIDTH/2, Game.HEIGHT/2, 'poker', Math.floor(Math.random()*52));
		obj[k].anchor = {x: 0.5, y: 0.5};
		obj[k].width = Game.WIDTH*6/75;
		obj[k].height = Game.WIDTH*8/75;
	}
	if(direct == 'bottom'){
		obj['person'] = that.add.sprite(w, h, 'person');
		obj['person'].width = Game.WIDTH*100/750;
		obj['person'].height = Game.HEIGHT*136/1205;
		obj['choose'] = that.add.sprite(w, h, 'choose');
		obj['choose'].width = Game.WIDTH*100/750;
		obj['choose'].height = Game.HEIGHT*136/1205;
		obj['head'] = that.add.sprite(ml.headX, ml.headY, 'head');
		obj['head'].width = Game.WIDTH/10;
		obj['head'].height = Game.WIDTH/10;
		// qiangGroup.add(obj['head']);
		obj['name'] = that.add.text(ml.nameX, ml.nameY, '废柴一只', {font:'20px', fill: '#fff', align: 'center' });
		obj['name'].anchor = {x:0.5,y:0.5};
		obj['num'] = that.add.text(ml.nameX , ml.numY, '-200', {font: '20px', fill: '#fc0', align: "center"});
		obj['num'].anchor = {x:0.5,y:0.5};
		obj['cathectic'] = that.add.text(ml.readyX, ml.readyY, 'x1', {font: '40px', fill: '#fc0'});
		obj['ready'] = that.add.sprite(ml.readyX, ml.readyY, 'ready', 1);
		obj['result'] = that.add.sprite(w, ml.resultY, 'result', Math.floor(Math.random()*12));
		obj['btn'] = that.add.sprite(w+Game.WIDTH*5/75, h-50, 'ready', 0);
		obj['btn'].anchor = {x: 0.5, y: 0.5};
		obj['btn'].width = Game.WIDTH*142/750;
		obj['btn'].height = Game.HEIGHT*60/1205;
		obj['btn'].inputEnabled=true;
		// obj['btn'].visible = false;
		obj['coin1'] = that.add.sprite(ml.coinX, ml.coinY, 'coin');
		obj['coin2'] = that.add.sprite(ml.coinX, ml.coinY, 'coin');
		obj['coin3'] = that.add.sprite(ml.coinX, ml.coinY, 'coin');
		obj['coin4'] = that.add.sprite(ml.coinX, ml.coinY, 'coin');
		obj['coin5'] = that.add.sprite(ml.coinX, ml.coinY, 'coin');


		obj['btn'].events.onInputDown.add(function(){
			obj['btn'].visible=false;
			// console.log(multiple);
			multiple.btn1.x = Game.WIDTH/5;
			multiple.btn2.x = Game.WIDTH*2/5;
			multiple.btn4.x = Game.WIDTH*3/5;
			multiple.btn6.x = Game.WIDTH*4/5;
			multiple.btn1.visible = true;
			multiple.btn2.visible = true;
			multiple.btn4.visible = true;
			multiple.btn6.visible = true;
			// obj['card1'].frame = Math.floor(Math.random()*52);
			// obj['card2'].frame = Math.floor(Math.random()*52);
			// obj['card3'].frame = Math.floor(Math.random()*52);
			// obj['card4'].frame = Math.floor(Math.random()*52);
			// that.state.start('End')
			// winState=1;
			// choose = 1;
			// chooseCount = 0;
			// nowPerson = mine;
			// console.log(nowPerson);
			readyCount = 2;
			// that.world.bringToTop(coinGroup);
			// max=[0,1,3,5,,7,8,6,4,2];

		})
		coinGroup.add(obj['coin1']);
	}else{
		obj['person'] = that.add.sprite(w, h, 'person');
		obj['person'].width = PERSON_WIDTH;
		obj['person'].height = PERSON_HEIGHT;
		obj['choose'] = that.add.sprite(w, h, 'choose');
		obj['choose'].width = PERSON_WIDTH;
		obj['choose'].height = PERSON_HEIGHT;
		if(direct == 'right'){
			obj['name'] = that.add.text(rL.nameX, h+Game.HEIGHT*18/1205, 'default', {font: '20px', fill: '#fff'});
			obj['head'] = that.add.sprite(rL.headX, h+Game.HEIGHT*32/1205, 'head');
			obj['num'] = that.add.text(rL.nameX, h+Game.HEIGHT*110/1205, '-200', {font: '20px', fill: '#fc0'} );
			obj['cathectic'] = that.add.text(rL.readyX, h+60, 'x1', {font: '40px', fill: '#fc0'});
			obj['ready'] = that.add.sprite(rL.readyX, h+60, 'ready',1);
			obj['result'] = that.add.sprite(rL.resultX, h, 'result', Math.floor(Math.random()*12));
			obj['coin1'] = that.add.sprite(rL.coinX, h+Game.HEIGHT*61/1205, 'coin');
			obj['coin2'] = that.add.sprite(rL.coinX, h+Game.HEIGHT*61/1205, 'coin');
			obj['coin3'] = that.add.sprite(rL.coinX, h+Game.HEIGHT*61/1205, 'coin');
			obj['coin4'] = that.add.sprite(rL.coinX, h+Game.HEIGHT*61/1205, 'coin');
			obj['coin5'] = that.add.sprite(rL.coinX, h+Game.HEIGHT*61/1205, 'coin');
		}else if(direct == 'left'){
			obj['person'].anchor = {x: 1, y: 0};
			obj['choose'].anchor = {x: 1, y: 0};
			obj['name'] = that.add.text(lL.nameX, h+Game.HEIGHT*18/1205, 'default', {font: '20px', fill: '#fff'});
			obj['head'] = that.add.sprite(lL.headX, h+Game.HEIGHT*32/1205, 'head');
			obj['num'] = that.add.text(lL.nameX, h+Game.HEIGHT*110/1205, '-200', {font: '20px', fill: '#fc0'} );
			obj['cathectic'] = that.add.text(lL.readyX, h+60, 'x1', {font: '40px', fill: '#fc0'});
			obj['ready'] = that.add.sprite(lL.readyX, h+60, 'ready',1);
			obj['result'] = that.add.sprite(lL.resultX, h, 'result', Math.floor(Math.random()*12));
			obj['coin1'] = that.add.sprite(lL.coinX, h+Game.HEIGHT*61/1205, 'coin');
			obj['coin2'] = that.add.sprite(lL.coinX, h+Game.HEIGHT*61/1205, 'coin');
			obj['coin3'] = that.add.sprite(lL.coinX, h+Game.HEIGHT*61/1205, 'coin');
			obj['coin4'] = that.add.sprite(lL.coinX, h+Game.HEIGHT*61/1205, 'coin');
			obj['coin5'] = that.add.sprite(lL.coinX, h+Game.HEIGHT*61/1205, 'coin');
		}else if(direct == 'top'){
			obj['person'].anchor = {x: 0, y: 1};
			obj['choose'].anchor = {x: 0, y: 1};
			obj['name'] = that.add.text(w+Game.WIDTH*45/750, rLL.nameY, 'default', {font: '20px', fill: '#fff'});
			obj['head'] = that.add.sprite(w+Game.WIDTH*14/750, rLL.headY, 'head');
			obj['num'] = that.add.text(w+Game.WIDTH*45/750, rLL.numY, '-200', {font: '20px', fill: '#fc0'} );
			obj['cathectic'] = that.add.text(w+45, rLL.readyY, 'x1', {font: '40px', fill: '#fc0'});
			obj['ready'] = that.add.sprite(w+45, rLL.readyY, 'ready',1);
			obj['result'] = that.add.sprite(w, rLL.resultY, 'result', Math.floor(Math.random()*12));
			obj['coin1'] = that.add.sprite(w+Game.WIDTH*45/750, rLL.coinY, 'coin');
			obj['coin2'] = that.add.sprite(w+Game.WIDTH*45/750, rLL.coinY, 'coin');
			obj['coin3'] = that.add.sprite(w+Game.WIDTH*45/750, rLL.coinY, 'coin');
			obj['coin4'] = that.add.sprite(w+Game.WIDTH*45/750, rLL.coinY, 'coin');
			obj['coin5'] = that.add.sprite(w+Game.WIDTH*45/750, rLL.coinY, 'coin');
		}

			obj['head'].width = HEAD_SIZE;
			obj['head'].height = HEAD_SIZE;
	}
	obj['coin1'].anchor = {x: 0.5, y: 0.5};
	obj['coin2'].anchor = {x: 0.5, y: 0.5};
	obj['coin3'].anchor = {x: 0.5, y: 0.5};
	obj['coin4'].anchor = {x: 0.5, y: 0.5};
	obj['coin5'].anchor = {x: 0.5, y: 0.5};			
	coinGroup.add(obj['coin1']);
	coinGroup.add(obj['coin2']);
	coinGroup.add(obj['coin3']);
	coinGroup.add(obj['coin4']);
	coinGroup.add(obj['coin5']);
	obj['choose'].visible = false;
	obj['name'].anchor = {x: 0.5, y: 0.5};
	obj['num'].anchor = {x: 0.5, y: 0.5};
	obj['cathectic'].anchor = {x: 0.5, y: 0.5};
	obj['ready'].anchor = {x: 0.5, y: 0.5};
	obj['ready'].width = READY_WIDTH;
	obj['ready'].height = READY_HEIGHT;
	obj['cathectic'].visible=false;
	obj['ready'].visible=false;
	obj['result'].width = RESULT_WIDTH;
	obj['result'].height = RESULT_HEIGHT;
	obj['result'].visible=false;
	obj.id=id;
	obj.readyState=0;
	obj.multiple=0;
	obj.zhuang=0;
	obj.arr=[];
	obj.point=0;
	obj.win=0;
	obj.total=0;
	return obj;	
}