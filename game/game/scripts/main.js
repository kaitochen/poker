var _width=window.innerWidth*2;
var _height=window.innerHeight*2;
document.getElementById('cover').style['width']=window.innerWidth+'px';
setTimeout(function(){
	document.getElementById('cover').style['display']='none';
	document.getElementById('dialog').style['display']='block';
},2000);
var game = new Phaser.Game(_width,_height,Phaser.AUTO, "game", {preload:preload,create:create,update:update});
// game.state.add('')
// var cache=new Phaser.Cache(game);
// var loader=new Phaser.Loader(game);
// var pokerObj={
// 	king:{heart:0,spade:1,diamond:2,club:3},
// 	queen:{heart:4,spade:5,diamond:6,club:7},
// 	jack:{heart:8,spade:9,diamond:10,club:11},
// 	ten:{heart:12,spade:13,diamond:14,club:15},
// 	nine:{heart:16,spade:17,diamond:18,club:19},
// 	eight:{heart:20,spade:21,diamond:22,club:23},
// 	seven:{heart:24,spade:25,diamond:26,club:27},
// 	six:{heart:28,spade:29,diamond:30,club:31},
// 	five:{heart:32,spade:33,diamond:34,club:35},
// 	four:{heart:36,spade:37,diamond:38,club:39},
// 	three:{heart:40,spade:41,diamond:42,club:43},
// 	two:{heart:44,spade:45,diamond:46,club:47},
// 	one:{heart:48,spade:49,diamond:50,club:51}
// }
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
var ready={};

var show;
var map={map1:15,map2:10,map3:-10};

var locationLeft=-20;
var locationRight=20;

var timer,clock;

var personState=[0,0,0,0,0,0,0,0,0];
var personQiang=[0,0,0,0,0,0,0,0,0];
var max=[0,0,0,0,0,0,0,0,0];
var zhuang;
var check=false;
var poked=[];

var newsprite;
var nowPerson,prePerson;

var mineDis = {x1: _width*19.3/750, x2: _width*9.7/750, x3: _width*0.1/750, x4: _width*9.5/750, x5: _width*19.1/750, y: _height*25.6/1205, width: _width*2.4/750, height: _height*3.9/1025 };
var person1Dis = {x1: _width*12.3/750, x2: _width*14.1/750, x3: _width*15.9/750, x4: _width*17.7/750, x5: _width*19.5/750, y: _height*6.8/1025};
var person2Dis = {x1: _width*20.5/750, x2: _width*18.7/750, x3: _width*16.9/750, x4: _width*15.1/750, x5: _width*13.3/750, y: _height*6.8/1025};
var person3Dis = {x1: _width*12.3/750, x2: _width*14.1/750, x3: _width*15.9/750, x4: _width*17.7/750, x5: _width*19.5/750, y: _height*6.8/1025};
var person4Dis = {x1: _width*20.5/750, x2: _width*18.7/750, x3: _width*16.9/750, x4: _width*15.1/750, x5: _width*13.3/750, y: _height*6.8/1025};
var person5Dis = {x1: _width*12.3/750, x2: _width*14.1/750, x3: _width*15.9/750, x4: _width*17.7/750, x5: _width*19.5/750, y: _height*20.5/1025};
var person6Dis = {x1: _width*20.5/750, x2: _width*18.7/750, x3: _width*16.9/750, x4: _width*15.1/750, x5: _width*13.3/750, y: _height*20.5/1025};
var person7Dis = {x1: _width*7.7/750, x2: _width*9.5/750, x3: _width*11.3/750, x4: _width*13.1/750, x5: _width*14.9/750, y: _height*30.7/1025};
var person8Dis = {x1: _width*16.6/750, x2: _width*14.8/750, x3: _width*13/750, x4: _width*11.2/750, x5: _width*9.4/750, y: _height*30.7/1025};

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
	resultX: _width*617/750,
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

var group1;
var group2;
// document.getElementById("game").width=width;
// document.getElementById("game").height=height;
function preload(){
	game.load.image("background", "./image/bg.png");
	game.load.image("desk", "./image/desk.png");
	game.load.image("bar", "./image/status_bar.png");

	game.load.image("roomcard", "./image/roomcard.png");
	game.load.spritesheet("btnSet", "./image/btn-set.png", 140, 100);
	game.load.image('word', './image/message.png');

	game.load.image("person", "./image/person.png");
	game.load.image("head", "person.jpg");
	game.load.image("choose", "./image/choose.png");

	game.load.spritesheet('ready', './image/ready.png', 284, 120);
	game.load.spritesheet('result', './image/result.png', 182, 90);
	game.load.spritesheet('poker', './image/poker.png', 220, 314);
	game.load.image('coin', './image/gold.png', 30, 30);
	game.load.image('clock', './image/clock.png');
	game.load.image('zhuang','./image/zhuang.png');

	game.load.image('back','back.png');
	game.load.image('king','king.png');
	game.load.spritesheet('btn','btn.png',120,120);
	game.load.spritesheet('cathectic','cathectic.png',60,40);
	game.load.spritesheet('result','result.png',100,50);
	game.load.image('showBtn','show.png',120,120);
}
function startLoad(){
	game.load.image('newbg','timg.jpg');
	game.load.start();
}
function loadstart(){
	// var newImage = game.add.image(0, 0, cacheKey)
	console.log('loading');
}
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles){
	console.log("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles+' '+cacheKey);
	mine.person=game.add.sprite(10,_height-150,cacheKey);
	// mine.person.width=100;
	// mine.person.height=100;
}
function create(){
	// test=new Texture('timg.jpg');
	// loader.image('newbg','timg.jpg');
	// game.cache.addImage('newbg','timg.jpg',{});
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.input.maxPointers = 1;

	group1 = game.add.group();
	group2 = game.add.group();

	var bg = {};
	bg.background = game.add.sprite(0,0,'background');
	bg.background.width=_width;
	bg.background.height=_height;

	bg.desk = game.add.sprite(_width*5/75, _height*128/1205, 'desk');
	bg.desk.width = _width*65/75;
	bg.desk.height = _height*960/1205;

	bg.bar = game.add.sprite(0, _height*1115/1205, 'bar');
	bg.bar.width = _width;
	bg.bar.height = _height*97/1205;

	bg.roomcard = game.add.sprite(_width*28/750, _height*32/1205, 'roomcard');
	bg.roomcard.width = _width*7/75;
	bg.roomcard.height = _width*9/75;

	bg.roomcardNum = game.add.text(_width*62/750, _height*105/1205, '20张',{font:'20px', fill:'#fff'});
	bg.roomcardNum.anchor={x: 0.5, y: 0.5};

	var home = game.add.sprite(_width*648/750, _height*34/1205, 'btnSet', 3);
	home.width = _width*7/75;
	home.height = _width*5/75;

	var rule = game.add.sprite(_width*28/750, _height*1138/1205, 'btnSet', 0);
	rule.width = _width*7/75;
	rule.height = _width*5/75;

	var voice = game.add.sprite(_width*128/750, _height*1138/1205, 'btnSet', 1);
	voice.width = _width*7/75;
	voice.height = _width*5/75;

	var warn = game.add.sprite(_width*534/750, _height*1138/1205, 'btnSet', 2);
	warn.width = _width*7/75;
	warn.height = _width*5/75;

	var word = game.add.sprite(_width*636/750, _height*1138/1205, 'word');
	word.width = _width*7/75;
	word.height = _width*58/750;

	game.load.onLoadStart.add(loadstart, this);
	game.load.onFileComplete.add(fileComplete, this);

	gameTime = game.add.text(_width/2, _height*41/1205, '1/12局', {font: '32px', fill: '#fff'} );
	gameTime.anchor = {x: 0.5, y: 0.5};
	var basePoint = game.add.text(_width/2, _height*96/1205, '底分: 1分', {font: '24px', fill: '#fff'});
	basePoint.anchor = {x: 0.5, y: 0.5};


	mine=person(ml.x, ml.y, 0, 'bottom');
	person1=person(rL.x, bL.y, 1, 'right');
	person2=person(lL.x, bL.y, 2, 'left');
	person3=person(rL.x, mL.y, 3, 'right');	
	person4=person(lL.x, mL.y, 4, 'left');
	person5=person(rL.x, tL.y, 5, 'right');
	person6=person(lL.x, tL.y, 6, 'left');
	person7=person(rLL.x, rLL.y, 7, 'top');
	person8=person(lLL.x, lLL.y, 8, 'top');


	clock = game.add.sprite(_width/2, _height/2, 'clock');
	clock.width = _width*87/750;
	clock.height = _width*77/750;
	clock.anchor = {x: 0.5, y: 0.5};
	timer=game.add.text(_width/2, _height/2+5, '10',{font:'30px',fill:'#fff'});
	timer.anchor = {x: 0.5, y: 0.5};
	// timer.visible=false; 
	zhuang=game.add.sprite(-50, -50, 'zhuang');
	zhuang.anchor = {x: 0.7, y: 0.7};
}
function randomPoker(obj,n){
	var num=Math.floor(Math.random()*52);
	if(poked.indexOf(num)==-1){
		obj['card'+n].frame=num;
		obj.arr.push(num);
		poked.push(num);
	}else{
		randomPoker(obj,n);
	}
	if(obj==mine){
		mine.card5.inputEnabled=false;
	}
}
function calculate(obj){
	// console.log(obj.id);
	var arr=obj.arr;
	var arr2=[];
	for(var i=0;i<5;i++){
		arr2[i]=13-Math.floor(arr[i]/4);
	}
	var arr3=[];
	var result=0;
	var sum=0;
	var num1;
	var num2;
	var flagx=0;
	var exchange1=-1;
	var exchange2=-1;
	// console.log(arr2);
	for(var i=0;i<5;i++){
		if(arr2[i]>=10&&arr2[i]<=13){
			sum+=0;
			arr3[i]=0;	
		}else{
			sum+=arr2[i];
			arr3[i]=arr2[i];
		}
	}
	result=sum%10;
	// console.log(sum+' '+result);
	for(var m=0;m<5;m++){
		for(var n=m+1;n<5;n++){
			if((arr3[m]+arr3[n])%10==(result)){
				if((sum-arr3[m]-arr3[n])%10==0){
					num1=m;
					num2=n;
					flagx++;
				}
			}
		}
	}
	if(flagx>0){
		exchange1=obj['card4'].frame;
		obj['card4'].frame=obj['card'+(num2+1)].frame;
		obj['card'+(num2+1)].frame=exchange1;	

		exchange2=obj['card5'].frame;
		obj['card5'].frame=obj['card'+(num1+1)].frame;
		obj['card'+(num1+1)].frame=exchange2;
		if(result==0){
			obj.result.frame=10;
			obj.total=10;
		}else{
			obj.result.frame=result;
			obj.total=result;
		}
	}else{
		obj.result.frame=0;
		obj.total=0;
	}
	obj.result.visible=true;
	console.log(obj.id+' result: '+result+' sum:'+sum);
	console.log(arr2);
}
function reset(obj){
	for(var i=1;i<6;i++){
		obj['card'+i].x=(_width-50)/2;
		obj['card'+i].y=(_height-65)/2;
		obj['card'+i].frame=52;
		obj['card'+i].width=50;
		obj['card'+i].height=65;
	}
		obj.readyState=0;
		obj.multiple=0;
		obj.cathectic.visible=false;
		obj.result.visible=false;
		obj.zhuang=0;
		obj.total=0;
		obj.arr=[];
		if(obj==mine){
			ready.btn.visible=true;
		}else{
			obj.btn.visible=true;
		}
}
function person(w, h, id, direct){
	var obj = {card1: '', card2: '', card3: '', card4: '', card5: ''};
	for(var k in obj){
		obj[k] = game.add.sprite(_width/2, _height/2, 'poker', back);
		obj[k].anchor = {x: 0.5, y: 0.5};
		obj[k].width = _width*6/75;
		obj[k].height = _width*8/75;
	}
	if(direct == 'bottom'){
		obj['person'] = game.add.sprite(w, h, 'person');
		obj['person'].width = _width*100/750;
		obj['person'].height = _height*136/1205;
		obj['choose'] = game.add.sprite(w, h, 'choose');
		obj['choose'].width = _width*100/750;
		obj['choose'].height = _height*136/1205;
		obj['head'] = game.add.sprite(ml.headX, ml.headY, 'head');
		obj['head'].width = _width/10;
		obj['head'].height = _width/10;
		// group1.add(obj['head']);
		obj['name'] = game.add.text(ml.nameX, ml.nameY, '废柴一只', {font:'20px', fill: '#fff', align: 'center' });
		obj['name'].anchor = {x:0.5,y:0.5};
		obj['num'] = game.add.text(ml.nameX , ml.numY, '-200', {font: '20px', fill: '#fc0', align: "center"});
		obj['num'].anchor = {x:0.5,y:0.5};
		obj['cathectic'] = game.add.text(ml.readyX, ml.readyX, 'x1', {font: '40px', fill: '#fc0'});
		obj['ready'] = game.add.sprite(ml.readyX, ml.readyX, 'ready', 1);
		obj['result'] = game.add.sprite(w, ml.resultY, 'result', Math.floor(Math.random()*12));
		obj['btn'] = game.add.sprite(w+_width*5/75, h-50, 'ready', 0);
		obj['btn'].anchor = {x: 0.5, y: 0.5};
		obj['btn'].width = _width*142/750;
		obj['btn'].height = _height*60/1205;
		obj['btn'].inputEnabled=true;
		obj['coin1'] = game.add.sprite(ml.coinX, ml.coinY, 'coin');
		obj['coin2'] = game.add.sprite(ml.coinX, ml.coinY, 'coin');
		obj['coin3'] = game.add.sprite(ml.coinX, ml.coinY, 'coin');
		obj['coin4'] = game.add.sprite(ml.coinX, ml.coinY, 'coin');
		obj['coin5'] = game.add.sprite(ml.coinX, ml.coinY, 'coin');
		obj['btn'].events.onInputDown.add(function(){
			obj['btn'].visible=false;
			winState=1;
			// choose = 1;
			// chooseCount = 0;
			// nowPerson = mine;
			// console.log(nowPerson);
			game.world.bringToTop(group2);
			// max=[0,1,3,5,,7,8,6,4,2];

		})
		group2.add(obj['coin1']);
	}else{
		obj['person'] = game.add.sprite(w, h, 'person');
		obj['person'].width = PERSON_WIDTH;
		obj['person'].height = PERSON_HEIGHT;
		obj['choose'] = game.add.sprite(w, h, 'choose');
		obj['choose'].width = PERSON_WIDTH;
		obj['choose'].height = PERSON_HEIGHT;
		if(direct == 'right'){
			obj['name'] = game.add.text(rL.nameX, h+_height*18/1205, 'default', {font: '20px', fill: '#fff'});
			obj['head'] = game.add.sprite(rL.headX, h+_height*32/1205, 'head');
			obj['num'] = game.add.text(rL.nameX, h+_height*110/1205, '-200', {font: '20px', fill: '#fc0'} );
			obj['cathectic'] = game.add.text(rL.readyX, h+60, 'x1', {font: '40px', fill: '#fc0'});
			obj['ready'] = game.add.sprite(rL.readyX, h+60, 'ready',1);
			obj['result'] = game.add.sprite(rL.resultX, h, 'result', Math.floor(Math.random()*12));
			obj['coin1'] = game.add.sprite(rL.coinX, h+_height*61/1205, 'coin');
			obj['coin2'] = game.add.sprite(rL.coinX, h+_height*61/1205, 'coin');
			obj['coin3'] = game.add.sprite(rL.coinX, h+_height*61/1205, 'coin');
			obj['coin4'] = game.add.sprite(rL.coinX, h+_height*61/1205, 'coin');
			obj['coin5'] = game.add.sprite(rL.coinX, h+_height*61/1205, 'coin');
		}else if(direct == 'left'){
			obj['person'].anchor = {x: 1, y: 0};
			obj['choose'].anchor = {x: 1, y: 0};
			obj['name'] = game.add.text(lL.nameX, h+_height*18/1205, 'default', {font: '20px', fill: '#fff'});
			obj['head'] = game.add.sprite(lL.headX, h+_height*32/1205, 'head');
			obj['num'] = game.add.text(lL.nameX, h+_height*110/1205, '-200', {font: '20px', fill: '#fc0'} );
			obj['cathectic'] = game.add.text(lL.readyX, h+60, 'x1', {font: '40px', fill: '#fc0'});
			obj['ready'] = game.add.sprite(lL.readyX, h+60, 'ready',1);
			obj['result'] = game.add.sprite(lL.resultX, h, 'result', Math.floor(Math.random()*12));
			obj['coin1'] = game.add.sprite(lL.coinX, h+_height*61/1205, 'coin');
			obj['coin2'] = game.add.sprite(lL.coinX, h+_height*61/1205, 'coin');
			obj['coin3'] = game.add.sprite(lL.coinX, h+_height*61/1205, 'coin');
			obj['coin4'] = game.add.sprite(lL.coinX, h+_height*61/1205, 'coin');
			obj['coin5'] = game.add.sprite(lL.coinX, h+_height*61/1205, 'coin');
		}else if(direct == 'top'){
			obj['person'].anchor = {x: 0, y: 1};
			obj['choose'].anchor = {x: 0, y: 1};
			obj['name'] = game.add.text(w+_width*45/750, rLL.nameY, 'default', {font: '20px', fill: '#fff'});
			obj['head'] = game.add.sprite(w+_width*14/750, rLL.headY, 'head');
			obj['num'] = game.add.text(w+_width*45/750, rLL.numY, '-200', {font: '20px', fill: '#fc0'} );
			obj['cathectic'] = game.add.text(w+45, rLL.readyY, 'x1', {font: '40px', fill: '#fc0'});
			obj['ready'] = game.add.sprite(w+45, rLL.readyY, 'ready',1);
			obj['result'] = game.add.sprite(w, rLL.resultY, 'result', Math.floor(Math.random()*12));
			obj['coin1'] = game.add.sprite(w+_width*45/750, rLL.coinY, 'coin');
			obj['coin2'] = game.add.sprite(w+_width*45/750, rLL.coinY, 'coin');
			obj['coin3'] = game.add.sprite(w+_width*45/750, rLL.coinY, 'coin');
			obj['coin4'] = game.add.sprite(w+_width*45/750, rLL.coinY, 'coin');
			obj['coin5'] = game.add.sprite(w+_width*45/750, rLL.coinY, 'coin');
		}

			obj['head'].width = HEAD_SIZE;
			obj['head'].height = HEAD_SIZE;
	}
	obj['coin1'].anchor = {x: 0.5, y: 0.5};
	obj['coin2'].anchor = {x: 0.5, y: 0.5};
	obj['coin3'].anchor = {x: 0.5, y: 0.5};
	obj['coin4'].anchor = {x: 0.5, y: 0.5};
	obj['coin5'].anchor = {x: 0.5, y: 0.5};			
	group2.add(obj['coin1']);
	group2.add(obj['coin2']);
	group2.add(obj['coin3']);
	group2.add(obj['coin4']);
	group2.add(obj['coin5']);
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
function integarte(obj1,obj2){
	if(obj1.total>obj2.total){
		if(obj1.total==10){
			obj1.point+=obj1.multiple*obj2.multiple*4;
			obj2.point-=obj1.multiple*obj2.multiple*4;
		}else if(obj1.total==9){
			obj1.point+=obj1.multiple*obj2.multiple*3;
			obj2.point-=obj1.multiple*obj2.multiple*3;
		}else if(obj1.total==8||obj1.total==7){
			obj1.point+=obj1.multiple*obj2.multiple*2;
			obj2.point-=obj1.multiple*obj2.multiple*2;
		}else{
			obj1.point+=obj1.multiple*obj2.multiple*1;
			obj2.point-=obj1.multiple*obj2.multiple*1;
		}
		obj2.win=1;
	}else if(obj1.total==obj2.total){
		obj1.arr.sort(function(a,b){return a-b});
		obj2.arr.sort(function(a,b){return a-b});
		if(obj1.arr[0]<obj2.arr[0]){
			if(obj1.total==10){
				obj1.point+=obj1.multiple*obj2.multiple*4;
				obj2.point-=obj1.multiple*obj2.multiple*4;
			}else if(obj1.total==9){
				obj1.point+=obj1.multiple*obj2.multiple*3;
				obj2.point-=obj1.multiple*obj2.multiple*3;
			}else if(obj1.total==8||obj1.total==7){
				obj1.point+=obj1.multiple*obj2.multiple*2;
				obj2.point-=obj1.multiple*obj2.multiple*2;
			}else{
				obj1.point+=obj1.multiple*obj2.multiple*1;
				obj2.point-=obj1.multiple*obj2.multiple*1;
			}
			obj2.win=1;
		}else if(obj1.arr[0]>obj2.arr[0]){
			if(obj2.total==10){
				obj2.point+=obj2.multiple*obj1.multiple*4;
				obj1.point-=obj2.multiple*obj1.multiple*4;
			}else if(obj2.total==9){
				obj2.point+=obj2.multiple*obj1.multiple*3;
				obj1.point-=obj2.multiple*obj1.multiple*3;
			}else if(obj2.total==8||obj2.total==7){
				obj2.point+=obj2.multiple*obj1.multiple*2;
				obj1.point-=obj2.multiple*obj1.multiple*2;
			}else{
				obj2.point+=obj2.multiple*obj1.multiple*1;
				obj1.point-=obj2.multiple*obj1.multiple*1;
			}
			obj2.win=2;
		}
	}else if(obj1.total<obj2.total){
		if(obj2.total==10){
			obj2.point+=obj2.multiple*obj1.multiple*4;
			obj1.point-=obj2.multiple*obj1.multiple*4;
		}else if(obj2.total==9){
			obj2.point+=obj2.multiple*obj1.multiple*3;
			obj1.point-=obj2.multiple*obj1.multiple*3;
		}else if(obj2.total==8||obj2.total==7){
			obj2.point+=obj2.multiple*obj1.multiple*2;
			obj1.point-=obj2.multiple*obj1.multiple*2;
		}else{
			obj2.point+=obj2.multiple*obj1.multiple*1;
			obj1.point-=obj2.multiple*obj1.multiple*1;
		}
		obj2.win=2;
	}
	obj1.num.setText(obj1.point);
	obj2.num.setText(obj2.point);
}
function update(){

	// if(gameCount<13){
		// if(readyCount>1){
		// 	// timer.visible=true;
		// 	// if(readyDelay>600){
		// 		// console.log('readycount');
		// 		// ready.btn.visible=false;
		// 		// ready.text.visible=false;
		// 		// // mine.readyState=0;
		// 		// person1.ready.visible=false;
		// 		// person1.btn.visible=false;
		// 		// // person1.readyState=0;				
		// 		// person2.ready.visible=false;
		// 		// person2.btn.visible=false;				
		// 		// // person2.readyState=0;				
		// 		// person3.ready.visible=false;
		// 		// person3.btn.visible=false;
		// 		// person3.readyState=0;				

		// 		// timer.visible=false;
		// 		if(animation1<1){
		// 			/*	发牌
		// 				mine.card1.x-=mineDis.x1;
		// 				mine.card1.y+=mineDis.y;		
		// 				mine.card1.width+=mineDis.width;
		// 				mine.card1.height+=mineDis.height;
		// 				person1.card1.x+=person1Dis.x1;
		// 				person1.card1.y+=person1Dis.y;
		// 				person2.card1.x-=person2Dis.x1;
		// 				person2.card1.y+=person2Dis.y;
		// 				person3.card1.x+=person3Dis.x1;
		// 				person3.card1.y-=person3Dis.y;
		// 				person4.card1.x-=person4Dis.x1;
		// 				person4.card1.y-=person4Dis.y;
		// 				person5.card1.x+=person5Dis.x1;
		// 				person5.card1.y-=person5Dis.y;
		// 				person6.card1.x-=person6Dis.x1;
		// 				person6.card1.y-=person6Dis.y;
		// 				person7.card1.x+=person7Dis.x1;
		// 				person7.card1.y-=person7Dis.y;
		// 				person8.card1.x-=person8Dis.x1;
		// 				person8.card1.y-=person8Dis.y;
		// 			*/
		// 			animation1+=0.1;
		// 		}
		// 		if(animation1>0.5&&animation2<1){
		// 			/*	发牌
		// 				mine.card2.x-=mineDis.x2;
		// 				mine.card2.y+=mineDis.y;		
		// 				mine.card2.width+=mineDis.width;
		// 				mine.card2.height+=mineDis.height;
		// 				person1.card2.x+=person1Dis.x2;
		// 				person1.card2.y+=person1Dis.y;						
		// 				person2.card2.x-=person2Dis.x2;
		// 				person2.card2.y+=person2Dis.y;						
		// 				person3.card2.x+=person3Dis.x2;
		// 				person3.card2.y-=person3Dis.y;						
		// 				person4.card2.x-=person4Dis.x2;
		// 				person4.card2.y-=person4Dis.y;
		// 				person5.card2.x+=person5Dis.x2;
		// 				person5.card2.y-=person5Dis.y;						
		// 				person6.card2.x-=person6Dis.x2;
		// 				person6.card2.y-=person6Dis.y;
		// 				person7.card2.x+=person7Dis.x2;
		// 				person7.card2.y-=person7Dis.y;						
		// 				person8.card2.x-=person8Dis.x2;
		// 				person8.card2.y-=person8Dis.y;
		// 			*/
		// 			animation2+=0.1;
		// 		}
		// 		if(animation2>0.5&&animation3<1){
		// 				发牌
		// 				mine.card3.x-=mineDis.x3
		// 				mine.card3.y+=mineDis.y;		
		// 				mine.card3.width+=mineDis.width;
		// 				mine.card3.height+=mineDis.height;
		// 				person1.card3.x+=person1Dis.x3;
		// 				person1.card3.y+=person1Dis.y;							
		// 				person2.card3.x-=person2Dis.x3;
		// 				person2.card3.y+=person2Dis.y;							
		// 				person3.card3.x+=person3Dis.x3;
		// 				person3.card3.y-=person3Dis.y;							
		// 				person4.card3.x-=person4Dis.x3;
		// 				person4.card3.y-=person4Dis.y;	
		// 				person5.card3.x+=person5Dis.x3;
		// 				person5.card3.y-=person5Dis.y;							
		// 				person6.card3.x-=person6Dis.x3;
		// 				person6.card3.y-=person6Dis.y;	
		// 				person7.card3.x+=person7Dis.x3;
		// 				person7.card3.y-=person7Dis.y;							
		// 				person8.card3.x-=person8Dis.x3;
		// 				person8.card3.y-=person8Dis.y;							
						
		// 			animation3+=0.1;	
		// 		}
		// 		if(animation3>0.5&&animation4<1){
		// 			/*	发牌
		// 				mine.card4.x+=mineDis.x4
		// 				mine.card4.y+=mineDis.y;		
		// 				mine.card4.width+=mineDis.width;
		// 				mine.card4.height+=mineDis.height;
		// 				person1.card4.x+=person1Dis.x4;
		// 				person1.card4.y+=person1Dis.y;	
		// 				person2.card4.x-=person2Dis.x4;
		// 				person2.card4.y+=person2Dis.y;
		// 				person3.card4.x+=person3Dis.x4;
		// 				person3.card4.y-=person3Dis.y;	
		// 				person4.card4.x-=person4Dis.x4;
		// 				person4.card4.y-=person4Dis.y;
		// 				person5.card4.x+=person5Dis.x4;
		// 				person5.card4.y-=person5Dis.y;	
		// 				person6.card4.x-=person6Dis.x4;
		// 				person6.card4.y-=person6Dis.y;	
		// 				person7.card4.x+=person7Dis.x4;
		// 				person7.card4.y-=person7Dis.y;	
		// 				person8.card4.x-=person8Dis.x4;
		// 				person8.card4.y-=person8Dis.y;	
		// 			*/
		// 			animation4+=0.1;
		// 		}
		// 		if(animation4>0.5&&animation5<1){
		// 				发牌
		// 				mine.card5.x+=mineDis.x5
		// 				mine.card5.y+=mineDis.y;		
		// 				mine.card5.width+=mineDis.width;
		// 				mine.card5.height+=mineDis.height;
		// 				person1.card5.x+=person1Dis.x5;
		// 				person1.card5.y+=person1Dis.y;						
		// 				person2.card5.x-=person2Dis.x5;
		// 				person2.card5.y+=person2Dis.y;						
		// 				person3.card5.x+=person3Dis.x5;
		// 				person3.card5.y-=person3Dis.y;						
		// 				person4.card5.x-=person4Dis.x5;
		// 				person4.card5.y-=person4Dis.y;
		// 				person5.card5.x+=person5Dis.x5;
		// 				person5.card5.y-=person5Dis.y;						
		// 				person6.card5.x-=person6Dis.x5;
		// 				person6.card5.y-=person6Dis.y;
		// 				person7.card5.x+=person7Dis.x5;
		// 				person7.card5.y-=person7Dis.y;						
		// 				person8.card5.x-=person8Dis.x5;
		// 				person8.card5.y-=person8Dis.y;
					
		// 			animation5+=0.1;
		// 		}
		// 		if(animation5>=1){
		// 			readyCount=0;
		// 			// deal=1;
		// 			readyDelay=0;
		// 			animation1=0;
		// 			animation2=0;
		// 			animation3=0;
		// 			animation4=0;
		// 			animation5=0;
		// 		}
		// 	// }else{
		// 		// if(readyCount>3){
		// 		// 	readyDelay=700;
		// 		// 	timer.visible=false;
		// 		// }
		// 		// readyDelay+=1;
		// 		// timer.text=(Math.floor((600-readyDelay)/60)>=0?Math.floor((600-readyDelay)/60):0);

		// 	// }	
		// }
		// if(deal>0){
		// 	timer.visible=true;
		// 	if(personState[0]==1&&!check){
		// 		qiang.one.inputEnabled=true;
		// 		qiang.two.inputEnabled=true;
		// 		qiang.four.inputEnabled=true;
		// 		qiang.none.inputEnabled=true;
		// 		qiang.one.x=150;
		// 		qiang.two.x=270;
		// 		qiang.four.x=390;
		// 		qiang.none.x=510;
		// 		qiang.one.visible=true;
		// 		qiang.two.visible=true;
		// 		qiang.four.visible=true;
		// 		qiang.none.visible=true;
		// 	}
		// 	if(readyDelay>300){
		// 		timer.visible=false;
		// 		// startLoad();

		// 		if(personState[0]==1&&!check){
		// 			qiang.one.visible=false;
		// 			qiang.two.visible=false;
		// 			qiang.four.visible=false;
		// 			qiang.none.visible=false;
		// 		}
		// 		deal=0;
		// 		max.sort(function(a,b){return b-a});
		// 		var now=max[0];
		// 		max=[];
		// 		for(var i=0;i<9;i++){
		// 			if(personQiang[i]==now&&personState[i]==1){
		// 				max.push(i);
		// 			}
		// 		}
		// 		if(max.length>1){
		// 			var random=Math.floor(Math.random()*max.length);
		// 			switch(max[random]){
		// 				case 0:
		// 					mine.zhuang=1;
		// 					mine.multiple=personQiang[0];         
		// 					// zhuang.x=80;
		// 					// zhuang.y=_height-180;
		// 					// mine.cathectic.visible=true;
		// 				break;
		// 				case 1:
		// 					person1.zhuang=1;
		// 					person1.multiple=personQiang[1];
		// 					// zhuang.x=_width-120;
		// 					// zhuang.y=_height*2/3;
		// 					// person1.cathectic.visible=true;
		// 				break;						
		// 				case 2:
		// 					person2.multiple=personQiang[2];
		// 					person2.zhuang=1;
		// 					// zhuang.x=_width-120;
		// 					// zhuang.y=_height/2;
		// 					// person2.cathectic.visible=true;
		// 				break;
		// 				case 3:
		// 					person3.multiple=personQiang[3];
		// 					person3.zhuang=1;
		// 					// zhuang.x=80;
		// 					// zhuang.y=_height*2/3;
		// 					// person3.cathectic.visible=true;
		// 				break;
		// 			}	
		// 			choose=1;	
		// 		}else if(max.length==1){
		// 			mine.cathectic.visible=false;
		// 			person1.cathectic.visible=false;
		// 			person2.cathectic.visible=false;
		// 			person3.cathectic.visible=false;
		// 			switch(max[0]){
		// 				case 0:
		// 					mine.multiple=personQiang[0];
		// 					mine.zhuang=1;							
		// 					zhuang.x=80;
		// 					zhuang.y=_height-180;
		// 					mine.cathectic.visible=true;
		// 				break;
		// 				case 1:
		// 					person1.multiple=personQiang[1];
		// 					person1.zhuang=1;							
		// 					zhuang.x=_width-120;
		// 					zhuang.y=_height*2/3;
		// 					person1.cathectic.visible=true;
		// 				break;						
		// 				case 2:
		// 					person2.multiple=personQiang[2];
		// 					person2.zhuang=1;
		// 					zhuang.x=_width-120;
		// 					zhuang.y=_height/2;
		// 					person2.cathectic.visible=true;
		// 				break;
		// 				case 3:
		// 					person3.zhuang=1;
		// 					person3.multiple=personQiang[3];
		// 					zhuang.x=80;
		// 					zhuang.y=_height*2/3;
		// 					person3.cathectic.visible=true;
		// 				break;
		// 			}	
		// 			cathectic=1;
		// 			timer.visible=true;
		// 		}
		// 		// cathectic=1;
		// 		check=false;
		// 		readyDelay=0;
		// 		// timer.visible=true;
		// 		delay=0;
		// 		deal=0;
		// 	}else{
		// 		if(delay==0){
		// 			if(personState[1]==1){
		// 				personQiang[1]=Math.floor(Math.random()*4);
		// 				personQiang[1]=(personQiang[1]==3?4:personQiang[1]);						
		// 				max[1]=personQiang[1];
		// 				person1.cathectic.visible=true;
		// 				person1.cathectic.frame=personQiang[1];
		// 			}			
		// 			if(personState[2]==1){
		// 				personQiang[2]=Math.floor(Math.random()*4);
		// 				personQiang[2]=(personQiang[2]==3?4:personQiang[2]);						
		// 				max[2]=personQiang[2];
		// 				person2.cathectic.visible=true;
		// 				person2.cathectic.frame=personQiang[2];
		// 			}			
		// 			if(personState[3]==1){
		// 				personQiang[3]=Math.floor(Math.random()*4);
		// 				personQiang[3]=(personQiang[3]==3?4:personQiang[3]);						
		// 				max[3]=personQiang[3];
		// 				person3.cathectic.visible=true;
		// 				person3.cathectic.frame=personQiang[3];
		// 			}
		// 			delay=1;
		// 		}
		// 		readyDelay++;
		// 		timer.text=(Math.floor((300-readyDelay)/60)>=0?Math.floor((300-readyDelay)/60):0);
		// 	}
		// }
		// if(choose>0){
		// 	if(readyDelay>120){
		// 		chooseCount=0;
		// 		zhuang.x = nowPerson.head.x;
		// 		zhuang.y = nowPerson.name.y;
		// 		// mine.cathectic.visible=false;
		// 		// person1.cathectic.visible=false;
		// 		// person2.cathectic.visible=false;
		// 		// person3.cathectic.visible=false;
		// 		// if(mine.zhuang==1){
		// 		// 	zhuang.x=80;
		// 		// 	zhuang.y=_height-180;
		// 		// 	mine.cathectic.visible=true;
		// 		// }
		// 		// if(person1.zhuang==1){
		// 		// 	zhuang.x=_width-120;
		// 		// 	zhuang.y=_height*2/3;
		// 		// 	person1.cathectic.visible=true;
		// 		// }
		// 		// if(person2.zhuang==1){
		// 		// 	zhuang.x=_width-120;
		// 		// 	zhuang.y=_height/2;
		// 		// 	person2.cathectic.visible=true;
		// 		// }
		// 		// if(person3.zhuang==1){
		// 		// 	zhuang.x=80;
		// 		// 	zhuang.y=_height*2/3;
		// 		// 	person3.cathectic.visible=true;
		// 		// }
		// 		choose=0;
		// 		cathectic=1;
		// 		timer.visible=true;
		// 		readyDelay=0;
		// 		chooseCount=0;
		// 	}else{
		// 		readyDelay++;
		// 		if(readyDelay%12==0){
		// 			if(max[chooseCount]==0){
		// 				prePerson = nowPerson;
		// 				prePerson.choose.visible = false;
		// 				nowPerson = mine;
		// 				nowPerson.choose.visible = true;
		// 			}
		// 			if(max[chooseCount]==1){
		// 				prePerson = nowPerson;
		// 				prePerson.choose.visible = false;
		// 				nowPerson = person1;
		// 				nowPerson.choose.visible = true;
		// 			}
		// 			if(max[chooseCount]==2){
		// 				prePerson = nowPerson;
		// 				prePerson.choose.visible = false;
		// 				nowPerson = person2;
		// 				nowPerson.choose.visible = true;
		// 			}
		// 			if(max[chooseCount]==3){
		// 				prePerson = nowPerson;
		// 				prePerson.choose.visible = false;
		// 				nowPerson = person3;
		// 				nowPerson.choose.visible = true;
		// 			}					
		// 			if(max[chooseCount]==4){
		// 				prePerson = nowPerson;
		// 				prePerson.choose.visible = false;
		// 				nowPerson = person4;
		// 				nowPerson.choose.visible = true;
		// 			}					
		// 			if(max[chooseCount]==5){
		// 				prePerson = nowPerson;
		// 				prePerson.choose.visible = false;
		// 				nowPerson = person5;
		// 				nowPerson.choose.visible = true;
		// 			}					
		// 			if(max[chooseCount]==6){
		// 				prePerson = nowPerson;
		// 				prePerson.choose.visible = false;
		// 				nowPerson = person6;
		// 				nowPerson.choose.visible = true;
		// 			}					
		// 			if(max[chooseCount]==7){
		// 				prePerson = nowPerson;
		// 				prePerson.choose.visible = false;
		// 				nowPerson = person7;
		// 				nowPerson.choose.visible = true;
		// 			}					
		// 			if(max[chooseCount]==8){
		// 				prePerson = nowPerson;
		// 				prePerson.choose.visible = false;
		// 				nowPerson = person8;
		// 				nowPerson.choose.visible = true;
		// 			}

		// 			if(chooseCount>=max.length-1){
		// 				chooseCount=0;
		// 			}else{
		// 				chooseCount++;
		// 			}
		// 		}
		// 	}
		// }
		// if(cathectic>0){
		// 	if(mine.readyState==1&&mine.zhuang==0&&!check){
		// 		qiang.one.x=50;
		// 		qiang.two.x=170;
		// 		qiang.three.x=290;
		// 		qiang.four.x=410;
		// 		qiang.five.x=530;
		// 		qiang.one.inputEnabled=true;
		// 		qiang.two.inputEnabled=true;
		// 		qiang.three.inputEnabled=true;
		// 		qiang.four.inputEnabled=true;
		// 		qiang.five.inputEnabled=true;
		// 		qiang.one.visible=true;
		// 		qiang.two.visible=true;
		// 		qiang.three.visible=true;
		// 		qiang.four.visible=true;
		// 		qiang.five.visible=true;
		// 	}
		// 	if(readyDelay>300&&once==0){
		// 		timer.visible=false;
		// 		mine.card5.inputEnabled=true;
		// 		if(person1.readyState==1&&person1.zhuang==0){
		// 			person1.multiple=Math.floor(Math.random()*5)+1;
		// 			person1.cathectic.frame=person1.multiple;
		// 			person1.cathectic.visible=true;
		// 		}				
		// 		if(person2.readyState==1&&person2.zhuang==0){
		// 			person2.multiple=Math.floor(Math.random()*5)+1;
		// 			person2.cathectic.frame=person2.multiple;
		// 			person2.cathectic.visible=true;
		// 		}				
		// 		if(person3.readyState==1&&person3.zhuang==0){
		// 			person3.multiple=Math.floor(Math.random()*5)+1;
		// 			person3.cathectic.frame=person3.multiple;
		// 			person3.cathectic.visible=true;
		// 		}
		// 		if(mine.readyState==1&&mine.zhuang==0&&!check){
		// 			mine.multiple=1;
		// 			mine.cathectic.frame=1;
		// 			mine.cathectic.visible=true;
		// 			qiang.one.visible=false;
		// 			qiang.two.visible=false;
		// 			qiang.three.visible=false;
		// 			qiang.four.visible=false;
		// 			qiang.five.visible=false;
		// 		}
		// 		once=1;
		// 		calculation=1;
		// 		cathectic=0;
		// 		readyDelay=0;
		// 		check=false;
		// 	}else{
		// 		readyDelay++;
		// 		timer.text=(Math.floor((300-readyDelay)/60)>=0?Math.floor((300-readyDelay)/60):0);
		// 	}
		// }
		// if(calculation>0){
		// 	timer.visible=true;
		// 	if(readyDelay>300){
		// 		// console.log("摊牌");
		// 		if(mine.readyState==1){
		// 			if(!check){
		// 				randomPoker(mine,5);
		// 				calculate(mine);
						
		// 			}else{
		// 				calculate(mine);
		// 				show.visible=false;
		// 				// calculate(mine);
		// 			}
		// 		}
				
		// 			if(person1.readyState==1){
		// 				randomPoker(person1,1);
		// 				randomPoker(person1,2);
		// 				randomPoker(person1,3);
		// 				randomPoker(person1,4);
		// 				randomPoker(person1,5);	
		// 				calculate(person1);	
		// 			}
		// 			if(person2.readyState==1){
		// 				randomPoker(person2,1);
		// 				randomPoker(person2,2);
		// 				randomPoker(person2,3);
		// 				randomPoker(person2,4);
		// 				randomPoker(person2,5);	
		// 				calculate(person2);
		// 			}
		// 			if(person3.readyState==1){
		// 				randomPoker(person3,1);
		// 				randomPoker(person3,2);
		// 				randomPoker(person3,3);
		// 				randomPoker(person3,4);
		// 				randomPoker(person3,5);
		// 				calculate(person3);
		// 			}
		// 		calculation=0;
		// 		readyDelay=0;
		// 		check=false;
		// 		timer.visible=false;
		// 		integration=1;
		// 		once=0;	
		// 	}else{
		// 		readyDelay++;
		// 		timer.text=(Math.floor((300-readyDelay)/60)>=0?Math.floor((300-readyDelay)/60):0);
		// 	}
		// }
		// if(integration>0){
		// 	integration=0;
		// 	if(mine.readyState==1&&mine.zhuang==1){
		// 		if(person1.readyState==1){
		// 			integarte(mine,person1);
		// 		}
		// 		if(person2.readyState==1){
		// 			integarte(mine,person2);
		// 		}
		// 		if(person3.readyState==1){
		// 			integarte(mine,person3);
		// 		}
		// 	}
		// 	if(person1.readyState==1&&person1.zhuang==1){
		// 		if(mine.readyState==1){
		// 			integarte(person1,mine);
		// 		}
		// 		if(person2.readyState==1){
		// 			integarte(person1,person2);
		// 		}
		// 		if(person3.readyState==1){
		// 			integarte(person1,person3);
		// 		}
		// 	}			
		// 	if(person2.readyState==1&&person2.zhuang==1){
		// 		if(mine.readyState==1){
		// 			integarte(person2,mine);
		// 		}
		// 		if(person1.readyState==1){
		// 			integarte(person2,person1);
		// 		}
		// 		if(person3.readyState==1){
		// 			integarte(person2,person3);
		// 		}
		// 	}			
		// 	if(person3.readyState==1&&person3.zhuang==1){
		// 		if(mine.readyState==1){
		// 			integarte(person3,mine);
		// 		}
		// 		if(person1.readyState==1){
		// 			integarte(person3,person1);
		// 		}
		// 		if(person2.readyState==1){
		// 			integarte(person3,person2);
		// 		}
		// 	}
		// 	// restart=1;
		// 	winState=1;
		// 	// console.log(mine);
		// 	// console.log(person1);
		// 	// console.log(person2);
		// 	// console.log(person3);
		// }
		if(winState>0){
			if(readyDelay>40){
				readyDelay=0;
				winState=0;
				// loseState=1;
				// mine.coin.visible=false;
				// person1.coin.visible=false;
				// person2.coin.visible=false;
				// person3.coin.visible=false;
				// if(mine.readyState==1&&mine.zhuang==1){
				// 	mine.coin.x=10;
				// 	mine.coin.y=_height-150;				
				// 	person1.coin.x=10;
				// 	person1.coin.y=_height-150;				
				// 	person2.coin.x=10;
				// 	person2.coin.y=_height-150;				
				// 	person3.coin.x=10;
				// 	person3.coin.y=_height-150;
				// }
				// if(person1.readyState==1&&person1.zhuang==1){
				// 	mine.coin.x=_width-100;
				// 	mine.coin.y=_height*2/3+20;				
				// 	person1.coin.x=_width-100;
				// 	person1.coin.y=_height*2/3+20;				
				// 	person2.coin.x=_width-100;
				// 	person2.coin.y=_height*2/3+20;				
				// 	person3.coin.x=_width-100;
				// 	person3.coin.y=_height*2/3+20;
				// }				
				// if(person2.readyState==1&&person2.zhuang==1){
				// 	mine.coin.x=_width-100;
				// 	mine.coin.y=_height/2+20;				
				// 	person1.coin.x=_width-100;
				// 	person1.coin.y=_height/2+20;				
				// 	person2.coin.x=_width-100;
				// 	person2.coin.y=_height/2+20;				
				// 	person3.coin.x=_width-100;
				// 	person3.coin.y=_height/2+20;
				// }				
				// if(person3.readyState==1&&person3.zhuang==1){
				// 	mine.coin.x=20;
				// 	mine.coin.y=_height*2/3+20;				
				// 	person1.coin.x=20;
				// 	person1.coin.y=_height*2/3+20;				
				// 	person2.coin.x=20;
				// 	person2.coin.y=_height*2/3+20;				
				// 	person3.coin.x=20;
				// 	person3.coin.y=_height*2/3+20;
				// }
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
		// if(loseState>0){
		// 	if(readyDelay>60){
		// 		readyDelay=0;
		// 		loseState=0;
		// 		restart=1;
		// 		mine.coin.visible=false;
		// 		person1.coin.visible=false;
		// 		person2.coin.visible=false;
		// 		person3.coin.visible=false;
		// 		mine.coin.x=10;
		// 		mine.coin.y=_height-150;
		// 		person1.coin.x=_width-100;
		// 		person1.coin.y=_height*2/3+20;				
		// 		person2.coin.x=_width-100;
		// 		person2.coin.y=_height/2+20;				
		// 		person3.coin.x=20;
		// 		person3.coin.y=_height*2/3+20;
		// 	}else{
		// 		readyDelay++;
		// 		if(mine.readyState==1&&mine.zhuang==1){
		// 			if(person1.readyState==1&&person1.win==2){
		// 				person1.coin.visible=true;
		// 				person1.coin.x+=(_width-110)/60;
		// 				person1.coin.y-=(_height/3-170)/60;
		// 			}
		// 			if(person2.readyState==1&&person2.win==2){
		// 				person2.coin.visible=true;
		// 				person2.coin.x+=(_width-110)/60;
		// 				person2.coin.y-=(_height/2-170)/60;
		// 			}
		// 			if(person3.readyState==1&&person3.win==2){
		// 				person3.coin.visible=true;
		// 				person3.coin.x+=10/60;
		// 				person3.coin.y-=(_height/3-170)/60;
		// 			}
		// 		}
		// 		if(person1.readyState==1&&person1.zhuang==1){
		// 			if(mine.readyState==1&&mine.win==2){
		// 				mine.coin.visible=true;
		// 				mine.coin.x-=(_width-110)/60;
		// 				mine.coin.y+=(_height/3-170)/60;
		// 			}
		// 			if(person2.readyState==1&&person2.win==2){
		// 				person2.coin.visible=true;
		// 				person2.coin.y-=(_height/6)/60;
		// 			}
		// 			if(person3.readyState==1&&person3.win==2){
		// 				person3.coin.visible=true;
		// 				person3.coin.x-=(_width-120)/60;
		// 			}
		// 		}
		// 		if(person2.readyState==1&&person2.zhuang==1){
		// 			if(mine.readyState==1&&mine.win==2){
		// 				mine.coin.visible=true;
		// 				mine.coin.x-=(_width-110)/60;
		// 				mine.coin.y+=(_height/2-170)/60;
		// 			}
		// 			if(person1.readyState==1&&person1.win==2){
		// 				person1.coin.visible=true;
		// 				person1.coin.y+=(_height/6)/60;
		// 			}
		// 			if(person3.readyState==1&&person3.win==2){
		// 				person3.coin.visible=true;
		// 				person3.coin.x-=(_width-120)/60;
		// 				person3.coin.y+=(_height/6)/60;
		// 			}
		// 		}
		// 		if(person3.readyState==1&&person3.zhuang==1){
		// 			if(mine.readyState==1&&mine.win==2){
		// 				mine.coin.visible=true;
		// 				mine.coin.x-=10/60;
		// 				mine.coin.y+=(_height/3-170)/60;
		// 			}
		// 			if(person1.readyState==1&&person1.win==2){
		// 				person1.coin.visible=true;
		// 				person1.coin.x+=(_width-120)/60;
		// 			}
		// 			if(person2.readyState==1&&person2.win==2){
		// 				person2.coin.visible=true;
		// 				person2.coin.x+=(_width-120)/60;
		// 				person2.coin.y-=(_height/6)/60;
		// 			}
		// 		}

		// 	}
		// }
		// if(restart>0){
		// 	timer.visible=true;
		// 	if(readyDelay>300){
		// 		readyDelay=0;
		// 		restart=0;
		// 		timer.visible=false;
		// 		reset(mine);
		// 		reset(person1);
		// 		reset(person2);
		// 		reset(person3);
		// 		gameCount++;
		// 		gameTime.text='第'+gameCount+'局';
		// 		zhuang.x=-50;
		// 		zhuang.y=-50;
		// 		poked=[];
		// 		max=[0,0,0,0,0,0,0,0,0];
		// 		personState=[0,0,0,0,0,0,0,0,0];
		// 		personQiang=[0,0,0,0,0,0,0,0,0];
		// 	}else{
		// 		readyDelay++;
		// 		timer.text=(Math.floor((300-readyDelay)/60)>=0?Math.floor((300-readyDelay)/60):0);
		// 	}
		// }
		// if(){}
	// }
	
}