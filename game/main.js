var _width=window.innerWidth*2;
var _height=window.innerHeight*2;
var game = new Phaser.Game(_width,_height,Phaser.AUTO, "game", {preload:preload,create:create,update:update});
var cache=new Phaser.Cache(game);
var loader=new Phaser.Loader(game);
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
var person1,person2,person3;
var qiang={};
var ready={};
var show;
var map={map1:15,map2:10,map3:-10};
var locationLeft=-20;
var locationRight=20;
var timer;
var personState=[0,0,0,0,0,0,0,0,0];
var personQiang=[0,0,0,0,0,0,0,0,0];
var max=[0,0,0,0,0,0,0,0,0];
var zhuang;
var check=false;
var poked=[];
var newsprite;
// document.getElementById("game").width=width;
// document.getElementById("game").height=height;
function preload(){
	game.load.image("background", 'bg.jpg');
	game.load.image('person','person.jpg');
	game.load.image('textback','textback.png');
	game.load.image('back','back.png');
	game.load.image('king','king.png');
	game.load.spritesheet('poker','pokerSheet.png',100,130);
	game.load.spritesheet('btn','btn.png',120,120);
	game.load.spritesheet('ready','ready.png',100,100);
	game.load.image('zhuang','zhuang.png');
	game.load.spritesheet('cathectic','cathectic.png',60,40);
	game.load.spritesheet('result','result.png',100,50);
	game.load.image('showBtn','show.png',120,120);
	game.load.image('coin','coin.png',100,86);
}
function create(){
	// loader.image('newbg','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505306847393&di=b4c2d0fb961a7cdf1c8863cf5467efad&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01d62258731da9a801219c770c34d8.jpg%40900w_1l_2o_100sh.jpg');
	game.cache.addImage('newbg','timg.jpg',{});
	game.load.image('newbg','timg.jpg');
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.input.maxPointers = 1;
	var background = game.add.sprite(0,0,'background');
	// console.log(game.cache);
	gameTime=game.add.text(_width/2-20,0,'第1局',{font:'26px',fill:'#fff'} );
	background.width=_width;
	background.height=_height;
	mine=person(0,0,0);
	mine.person=game.add.sprite(10,_height-150,'person');
	mine.person.width=100;
	mine.person.height=100;
	mine.cover=game.add.sprite(10,_height-60,'textback');
	mine.num=game.add.text(50 ,_height-55,'0',{font: '20px',fill:'#fff',align: "center"});
	mine.point=0;
	mine.id=0;
	mine.readyState=0;
	mine.multiple=0;
	mine.zhuang=0;
	mine.cathectic=game.add.sprite(25,_height-200,'cathectic');
	mine.cathectic.visible=false;
	mine.arr=[];
	mine.result=game.add.sprite((_width-100)/2,_height-250,'result',0);
	mine.result.visible=false;
	mine.total;

	qiang.one=game.add.sprite(150,_height-270,'btn',btn.one);
	qiang.two=game.add.sprite(270,_height-270,'btn',btn.two);
	qiang.three=game.add.sprite(270,_height-270,'btn',btn.three)
	qiang.four=game.add.sprite(390,_height-270,'btn',btn.four);
	qiang.five=game.add.sprite(390,_height-270,'btn',btn.five);
	qiang.none=game.add.sprite(510,_height-270,'btn',btn.none);
	qiang.one.visible=false;
	qiang.two.visible=false;
	qiang.three.visible=false;
	qiang.four.visible=false;
	qiang.five.visible=false;
	qiang.none.visible=false;
	qiang.one.events.onInputDown.add(function(){
		if(deal>0){
			personQiang[0]=1;
			max[0]=1;
			qiang.one.visible=false;
			qiang.two.visible=false;
			qiang.four.visible=false;
			qiang.none.visible=false;
			mine.cathectic.frame=1;
			mine.cathectic.visible=true;
			check=true;
		}
		if(cathectic>0){
			mine.multiple=1;
			qiang.one.visible=false;
			qiang.two.visible=false;
			qiang.three.visible=false;
			qiang.four.visible=false;
			qiang.five.visible=false;
			check=true;			
			mine.cathectic.frame=1;
			mine.cathectic.visible=true;
		}
	},this);	
	qiang.two.events.onInputDown.add(function(){
		if(deal>0){
			personQiang[0]=2;
			max[0]=2;
			qiang.one.visible=false;
			qiang.two.visible=false;
			qiang.four.visible=false;
			qiang.none.visible=false;
			check=true;			
			mine.cathectic.frame=2;
			mine.cathectic.visible=true;
		}
		if(cathectic>0){
			mine.multiple=2;
			qiang.one.visible=false;
			qiang.two.visible=false;
			qiang.three.visible=false;
			qiang.four.visible=false;
			qiang.five.visible=false;
			check=true;			
			mine.cathectic.frame=2;
			mine.cathectic.visible=true;
		}
	},this);
	qiang.three.events.onInputDown.add(function(){
		if(cathectic>0){
			mine.multiple=3;
			qiang.one.visible=false;
			qiang.two.visible=false;
			qiang.three.visible=false;
			qiang.four.visible=false;
			qiang.five.visible=false;
			check=true;			
			mine.cathectic.frame=3;
			mine.cathectic.visible=true;
		}
	},this);	
	qiang.four.events.onInputDown.add(function(){
		if(deal>0){
			personQiang[0]=4;
			max[0]=4;
			qiang.one.visible=false;
			qiang.two.visible=false;
			qiang.four.visible=false;
			qiang.none.visible=false;
			check=true;		
			mine.cathectic.frame=4;
			mine.cathectic.visible=true;
		}
		if(cathectic>0){
			mine.multiple=4;
			qiang.one.visible=false;
			qiang.two.visible=false;
			qiang.three.visible=false;
			qiang.four.visible=false;
			qiang.five.visible=false;
			check=true;			
			mine.cathectic.frame=4;
			mine.cathectic.visible=true;
		}
	},this);		
	qiang.five.events.onInputDown.add(function(){
		if(cathectic>0){
			mine.multiple=5;
			qiang.one.visible=false;
			qiang.two.visible=false;
			qiang.three.visible=false;
			qiang.four.visible=false;
			qiang.five.visible=false;
			check=true;			
			mine.cathectic.frame=5;
			mine.cathectic.visible=true;
		}
	},this);	
	qiang.none.events.onInputDown.add(function(){
		if(deal>0){
			personQiang[0]=0;
			max[0]=0;
			qiang.one.visible=false;
			qiang.two.visible=false;
			qiang.four.visible=false;
			qiang.none.visible=false;
			check=true;			
			mine.cathectic.frame=0;
			mine.cathectic.visible=true;
		}
	},this);

	show=game.add.sprite((_width-100)/2,_height-250,'showBtn');
	show.visible=false;
	show.events.onInputDown.add(function(){
		calculate(mine);
		calculation=0;
		readyDelay=0;
		once=0;
		check=false;
		timer.visible=false;
		integration=1;
		if(person1.readyState==1){
			randomPoker(person1,1);
			randomPoker(person1,2);
			randomPoker(person1,3);
			randomPoker(person1,4);
			randomPoker(person1,5);	
			calculate(person1);	
		}
		if(person2.readyState==1){
			randomPoker(person2,1);
			randomPoker(person2,2);
			randomPoker(person2,3);
			randomPoker(person2,4);
			randomPoker(person2,5);	
			calculate(person2);
		}
		if(person3.readyState==1){
			randomPoker(person3,1);
			randomPoker(person3,2);
			randomPoker(person3,3);
			randomPoker(person3,4);
			randomPoker(person3,5);
			calculate(person3);
		}
		show.visible=false;
		// console.log(mine);
		// console.log(person1);
		// console.log(person2);
		// console.log(person3);
	},this);

	ready.btn=game.add.sprite((_width-100)/2,_height-250,'ready',ready.btn);
	ready.text=game.add.sprite((_width-100)/2,_height-250,'ready',1);
	ready.text.visible=false;
	ready.btn.inputEnabled = true;
	ready.btn.events.onInputDown.add(function(){
		ready.btn.visible=false;
		ready.text.visible=true;
		// readyFlag=true;
		readyCount++;
		mine.readyState=1;
		personState[0]=1;
		randomPoker(mine,1);
		randomPoker(mine,2);
		randomPoker(mine,3);
		randomPoker(mine,4);
		// mine.card5.inputEnabled=true;
		mine.card5.events.onInputDown.add(function(){
			// console.log(mine.card5.frame=22);
			if(mine.card5.inputEnabled){
				randomPoker(mine,5);
			}
			check=true;
			mine.card5.inputEnabled=false;
			show.visible=true;
			show.inputEnabled=true;
		},game);
	},this);

	person1=person((_width-200),_height*2/3+20,1);
	person2=person((_width-200),_height/2+20,2);
	person3=person(120,_height*2/3+20,3);
	person1.person=game.add.sprite((_width-100),_height*2/3+20,'person');
	person1.person.width=80;
	person1.person.height=80;	
	person1.cathectic=game.add.sprite((_width-100),_height*2/3-30,'cathectic',1);
	person1.cathectic.visible=false;
	person1.result=game.add.sprite((_width-200),_height*2/3-30,'result',0);
	person1.result.visible=false;
	person1.num=game.add.text((_width-65),_height*2/3+100,'0',{font: '20px',fill:'#fff',align: "center"});

	person2.person=game.add.sprite((_width-100),_height/2+20,'person');
	person2.person.width=80;
	person2.person.height=80;	
	person2.cathectic=game.add.sprite((_width-100),_height/2-30,'cathectic',1);
	person2.cathectic.visible=false;
	person2.result=game.add.sprite((_width-200),_height/2-30,'result',0);
	person2.result.visible=false;
	person2.num=game.add.text((_width-65),_height/2+100,'0',{font: '20px',fill:'#fff',align: "center"});

	person3.person=game.add.sprite(20,_height*2/3+20,'person');
	person3.person.width=80;
	person3.person.height=80;
	person3.cathectic=game.add.sprite(20,_height*2/3-30,'cathectic',1);
	person3.cathectic.visible=false;
	person3.result=game.add.sprite(120,_height*2/3-30,'result',0);
	person3.result.visible=false;
	person3.num=game.add.text(50,_height*2/3+100,'0',{font: '20px',fill:'#fff',align: "center"});

	mine.coin=game.add.sprite(10,_height-150,'coin');
	mine.coin.visible=false;
	person1.coin=game.add.sprite((_width-100),_height*2/3+20,'coin');
	person1.coin.visible=false;
	person2.coin=game.add.sprite((_width-100),_height/2+20,'coin');
	person2.coin.visible=false;
	person3.coin=game.add.sprite(20,_height*2/3+20,'coin');
	person3.coin.visible=false;

	timer=game.add.text(_width/2-20,_height*2/3,'10',{font:'40px',fill:'#f00'});
	timer.visible=false;
	zhuang=game.add.sprite(-50,-50,'zhuang');
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
function person(w,h,id){
	var obj={card1:'',card2:'',card3:'',card4:'',card5:''};
	for(var k in obj){
		obj[k]=game.add.sprite((_width-50)/2,(_height-65)/2,'poker',back);
		obj[k].width/=2;
		obj[k].height/=2;
	}
	if(w==0&&h==0){

	}else{
		obj.id=id;
		obj.readyState=0;
		obj.ready=game.add.sprite(w,h,'ready',1);
		obj.ready.visible=false;
		obj.btn=game.add.sprite(w,h,'ready',0);
		obj.btn.inputEnabled=true;
		obj.btn.events.onInputDown.add(function(){
			obj.readyState=1;
			obj.btn.visible=false;
			obj.ready.visible=true;
			readyCount++;
			personState[id]=1;
		},game);
		obj.multiple=0;
		obj.zhuang=0;
		obj.arr=[];
		obj.point=0;
		obj.win=0;
	}
	return obj;	
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
	if(gameCount<13){
		if(readyCount>1){
			timer.visible=true;
			if(readyDelay>600){
				// console.log('readycount');
				ready.btn.visible=false;
				ready.text.visible=false;
				// mine.readyState=0;
				person1.ready.visible=false;
				person1.btn.visible=false;
				// person1.readyState=0;				
				person2.ready.visible=false;
				person2.btn.visible=false;				
				// person2.readyState=0;				
				person3.ready.visible=false;
				person3.btn.visible=false;
				// person3.readyState=0;				

				timer.visible=false;

				if(animation1<1){
					if(personState[0]==1){
						mine.card1.x-=18;
						mine.card1.y+=40;		
						mine.card1.width+=3;
						mine.card1.height+=3.9;
					}
					if(personState[1]==1){
						person1.card1.x+=locationRight;
						person1.card1.y+=(_height+315)/60;
					}
					if(personState[2]==1){
						person2.card1.x+=locationRight;
						person2.card1.y+=6;		
					}
					if(personState[3]==1){
						person3.card1.x+=locationLeft;
						person3.card1.y+=(_height+315)/60;
					}
					animation1+=0.1;
				}
				if(animation1>0.5&&animation2<1){
					if(personState[0]==1){
						mine.card2.x-=10;
						mine.card2.y+=40;
						mine.card2.width+=3;
						mine.card2.height+=3.9;
					}
					if(personState[1]==1){
						person1.card2.x+=(locationRight-1);
						person1.card2.y+=(_height+315)/60;
					}
					if(personState[2]==1){
						person2.card2.x+=(locationRight-1);
						person2.card2.y+=6;
					}
					if(personState[3]==1){
						person3.card2.x+=(locationLeft+1);
						person3.card2.y+=(_height+315)/60;
					}
					animation2+=0.1;
				}
				if(animation2>0.5&&animation3<1){
					if(personState[0]==1){
						mine.card3.x-=2;
						mine.card3.y+=40;
						mine.card3.width+=3;
						mine.card3.height+=3.9;
					}
					if(personState[1]==1){
						person1.card3.x+=(locationRight-2);
						person1.card3.y+=(_height+315)/60;	
					}
					if(personState[2]==1){
						person2.card3.x+=(locationRight-2);
						person2.card3.y+=6;
					}
					if(personState[3]==1){
						person3.card3.x+=(locationLeft+2);
						person3.card3.y+=(_height+315)/60;
					}
					animation3+=0.1;	
				}
				if(animation3>0.5&&animation4<1){
					if(personState[0]==1){
						mine.card4.x+=6;
						mine.card4.y+=40;
						mine.card4.width+=3;
						mine.card4.height+=3.9;
					}
					if(personState[1]==1){
						person1.card4.x+=(locationRight-3);
						person1.card4.y+=(_height+315)/60;	
					}
					if(personState[2]==1){
						person2.card4.x+=(locationRight-3);
						person2.card4.y+=6;
					}
					if(personState[3]==1){
						person3.card4.x+=(locationLeft+3);
						person3.card4.y+=(_height+315)/60;
					}
					animation4+=0.1;
				}
				if(animation4>0.5&&animation5<1){
					if(personState[0]==1){
						mine.card5.x+=14;
						mine.card5.y+=40;
						mine.card5.width+=3;
						mine.card5.height+=3.9;
					}
					if(personState[1]==1){
						person1.card5.x+=(locationRight-4);
						person1.card5.y+=(_height+315)/60;
					}
					if(personState[2]==1){
						person2.card5.x+=(locationRight-4);
						person2.card5.y+=6;
					}
					if(personState[3]==1){
						person3.card5.x+=(locationLeft+4);
						person3.card5.y+=(_height+315)/60;
					}
					animation5+=0.1;
				}
				if(animation5>=1){
					readyCount=0;
					deal=1;
					readyDelay=0;
					animation1=0;
					animation2=0;
					animation3=0;
					animation4=0;
					animation5=0;
				}
			}else{
				if(readyCount>3){
					readyDelay=700;
					timer.visible=false;
				}
				readyDelay+=1;
				timer.text=(Math.floor((600-readyDelay)/60)>=0?Math.floor((600-readyDelay)/60):0);

			}	
		}
		if(deal>0){
			timer.visible=true;
			if(personState[0]==1&&!check){
				qiang.one.inputEnabled=true;
				qiang.two.inputEnabled=true;
				qiang.four.inputEnabled=true;
				qiang.none.inputEnabled=true;
				qiang.one.x=150;
				qiang.two.x=270;
				qiang.four.x=390;
				qiang.none.x=510;
				qiang.one.visible=true;
				qiang.two.visible=true;
				qiang.four.visible=true;
				qiang.none.visible=true;
			}
			if(readyDelay>300){
				timer.visible=false;
				if(personState[0]==1&&!check){
					qiang.one.visible=false;
					qiang.two.visible=false;
					qiang.four.visible=false;
					qiang.none.visible=false;
				}
				deal=0;
				max.sort(function(a,b){return b-a});
				var now=max[0];
				max=[];
				for(var i=0;i<9;i++){
					if(personQiang[i]==now&&personState[i]==1){
						max.push(i);
					}
				}
				if(max.length>1){
					var random=Math.floor(Math.random()*max.length);
					switch(max[random]){
						case 0:
							mine.zhuang=1;
							mine.multiple=personQiang[0];         
							// zhuang.x=80;
							// zhuang.y=_height-180;
							// mine.cathectic.visible=true;
						break;
						case 1:
							person1.zhuang=1;
							person1.multiple=personQiang[1];
							// zhuang.x=_width-120;
							// zhuang.y=_height*2/3;
							// person1.cathectic.visible=true;
						break;						
						case 2:
							person2.multiple=personQiang[2];
							person2.zhuang=1;
							// zhuang.x=_width-120;
							// zhuang.y=_height/2;
							// person2.cathectic.visible=true;
						break;
						case 3:
							person3.multiple=personQiang[3];
							person3.zhuang=1;
							// zhuang.x=80;
							// zhuang.y=_height*2/3;
							// person3.cathectic.visible=true;
						break;
					}	
					choose=1;	
				}else if(max.length==1){
					mine.cathectic.visible=false;
					person1.cathectic.visible=false;
					person2.cathectic.visible=false;
					person3.cathectic.visible=false;
					switch(max[0]){
						case 0:
							mine.multiple=personQiang[0];
							mine.zhuang=1;							
							zhuang.x=80;
							zhuang.y=_height-180;
							mine.cathectic.visible=true;
						break;
						case 1:
							person1.multiple=personQiang[1];
							person1.zhuang=1;							
							zhuang.x=_width-120;
							zhuang.y=_height*2/3;
							person1.cathectic.visible=true;
						break;						
						case 2:
							person2.multiple=personQiang[2];
							person2.zhuang=1;
							zhuang.x=_width-120;
							zhuang.y=_height/2;
							person2.cathectic.visible=true;
						break;
						case 3:
							person3.zhuang=1;
							person3.multiple=personQiang[3];
							zhuang.x=80;
							zhuang.y=_height*2/3;
							person3.cathectic.visible=true;
						break;
					}	
					cathectic=1;
					timer.visible=true;
				}
				// cathectic=1;
				check=false;
				readyDelay=0;
				// timer.visible=true;
				delay=0;
				deal=0;
			}else{
				if(delay==0){
					if(personState[1]==1){
						personQiang[1]=Math.floor(Math.random()*4);
						personQiang[1]=(personQiang[1]==3?4:personQiang[1]);						
						max[1]=personQiang[1];
						person1.cathectic.visible=true;
						person1.cathectic.frame=personQiang[1];
					}			
					if(personState[2]==1){
						personQiang[2]=Math.floor(Math.random()*4);
						personQiang[2]=(personQiang[2]==3?4:personQiang[2]);						
						max[2]=personQiang[2];
						person2.cathectic.visible=true;
						person2.cathectic.frame=personQiang[2];
					}			
					if(personState[3]==1){
						personQiang[3]=Math.floor(Math.random()*4);
						personQiang[3]=(personQiang[3]==3?4:personQiang[3]);						
						max[3]=personQiang[3];
						person3.cathectic.visible=true;
						person3.cathectic.frame=personQiang[3];
					}
					delay=1;
				}
				readyDelay++;
				timer.text=(Math.floor((300-readyDelay)/60)>=0?Math.floor((300-readyDelay)/60):0);
			}
		}
		if(choose>0){
			if(readyDelay>120){
				chooseCount=0;
				mine.cathectic.visible=false;
				person1.cathectic.visible=false;
				person2.cathectic.visible=false;
				person3.cathectic.visible=false;
				if(mine.zhuang==1){
					zhuang.x=80;
					zhuang.y=_height-180;
					mine.cathectic.visible=true;
				}
				if(person1.zhuang==1){
					zhuang.x=_width-120;
					zhuang.y=_height*2/3;
					person1.cathectic.visible=true;
				}
				if(person2.zhuang==1){
					zhuang.x=_width-120;
					zhuang.y=_height/2;
					person2.cathectic.visible=true;
				}
				if(person3.zhuang==1){
					zhuang.x=80;
					zhuang.y=_height*2/3;
					person3.cathectic.visible=true;
				}
				choose=0;
				cathectic=1;
				timer.visible=true;
				readyDelay=0;
				chooseCount=0;
			}else{
				readyDelay++;
				if(readyDelay%10==0){
					if(max[chooseCount]==0){
						zhuang.x=80;
						zhuang.y=_height-180;
					}
					if(max[chooseCount]==1){
						zhuang.x=_width-120;
						zhuang.y=_height*2/3;
					}
					if(max[chooseCount]==2){
						zhuang.x=_width-120;
						zhuang.y=_height/2;
					}
					if(max[chooseCount]==3){
						zhuang.x=80;
						zhuang.y=_height*2/3;
					}
					if(chooseCount>=max.length-1){
						chooseCount=0;
					}else{
						chooseCount++;
					}
				}
			}
		}
		if(cathectic>0){
			if(mine.readyState==1&&mine.zhuang==0&&!check){
				qiang.one.x=50;
				qiang.two.x=170;
				qiang.three.x=290;
				qiang.four.x=410;
				qiang.five.x=530;
				qiang.one.inputEnabled=true;
				qiang.two.inputEnabled=true;
				qiang.three.inputEnabled=true;
				qiang.four.inputEnabled=true;
				qiang.five.inputEnabled=true;
				qiang.one.visible=true;
				qiang.two.visible=true;
				qiang.three.visible=true;
				qiang.four.visible=true;
				qiang.five.visible=true;
			}
			if(readyDelay>300&&once==0){
				timer.visible=false;
				mine.card5.inputEnabled=true;
				if(person1.readyState==1&&person1.zhuang==0){
					person1.multiple=Math.floor(Math.random()*5)+1;
					person1.cathectic.frame=person1.multiple;
					person1.cathectic.visible=true;
				}				
				if(person2.readyState==1&&person2.zhuang==0){
					person2.multiple=Math.floor(Math.random()*5)+1;
					person2.cathectic.frame=person2.multiple;
					person2.cathectic.visible=true;
				}				
				if(person3.readyState==1&&person3.zhuang==0){
					person3.multiple=Math.floor(Math.random()*5)+1;
					person3.cathectic.frame=person3.multiple;
					person3.cathectic.visible=true;
				}
				if(mine.readyState==1&&mine.zhuang==0&&!check){
					mine.multiple=1;
					mine.cathectic.frame=1;
					mine.cathectic.visible=true;
					qiang.one.visible=false;
					qiang.two.visible=false;
					qiang.three.visible=false;
					qiang.four.visible=false;
					qiang.five.visible=false;
				}
				once=1;
				calculation=1;
				cathectic=0;
				readyDelay=0;
				check=false;
			}else{
				readyDelay++;
				timer.text=(Math.floor((300-readyDelay)/60)>=0?Math.floor((300-readyDelay)/60):0);
			}
		}
		if(calculation>0){
			timer.visible=true;
			if(readyDelay>300){
				// console.log("摊牌");
				if(mine.readyState==1){
					if(!check){
						randomPoker(mine,5);
						calculate(mine);
						
					}else{
						calculate(mine);
						show.visible=false;
						// calculate(mine);
					}
				}
				
					if(person1.readyState==1){
						randomPoker(person1,1);
						randomPoker(person1,2);
						randomPoker(person1,3);
						randomPoker(person1,4);
						randomPoker(person1,5);	
						calculate(person1);	
					}
					if(person2.readyState==1){
						randomPoker(person2,1);
						randomPoker(person2,2);
						randomPoker(person2,3);
						randomPoker(person2,4);
						randomPoker(person2,5);	
						calculate(person2);
					}
					if(person3.readyState==1){
						randomPoker(person3,1);
						randomPoker(person3,2);
						randomPoker(person3,3);
						randomPoker(person3,4);
						randomPoker(person3,5);
						calculate(person3);
					}
				calculation=0;
				readyDelay=0;
				check=false;
				timer.visible=false;
				integration=1;
				once=0;	
			}else{
				readyDelay++;
				timer.text=(Math.floor((300-readyDelay)/60)>=0?Math.floor((300-readyDelay)/60):0);
			}
		}
		if(integration>0){
			integration=0;
			if(mine.readyState==1&&mine.zhuang==1){
				if(person1.readyState==1){
					integarte(mine,person1);
				}
				if(person2.readyState==1){
					integarte(mine,person2);
				}
				if(person3.readyState==1){
					integarte(mine,person3);
				}
			}
			if(person1.readyState==1&&person1.zhuang==1){
				if(mine.readyState==1){
					integarte(person1,mine);
				}
				if(person2.readyState==1){
					integarte(person1,person2);
				}
				if(person3.readyState==1){
					integarte(person1,person3);
				}
			}			
			if(person2.readyState==1&&person2.zhuang==1){
				if(mine.readyState==1){
					integarte(person2,mine);
				}
				if(person1.readyState==1){
					integarte(person2,person1);
				}
				if(person3.readyState==1){
					integarte(person2,person3);
				}
			}			
			if(person3.readyState==1&&person3.zhuang==1){
				if(mine.readyState==1){
					integarte(person3,mine);
				}
				if(person1.readyState==1){
					integarte(person3,person1);
				}
				if(person2.readyState==1){
					integarte(person3,person2);
				}
			}
			// restart=1;
			winState=1;
			// console.log(mine);
			// console.log(person1);
			// console.log(person2);
			// console.log(person3);
		}
		if(winState>0){
			if(readyDelay>60){
				readyDelay=0;
				winState=0;
				loseState=1;
				mine.coin.visible=false;
				person1.coin.visible=false;
				person2.coin.visible=false;
				person3.coin.visible=false;
				if(mine.readyState==1&&mine.zhuang==1){
					mine.coin.x=10;
					mine.coin.y=_height-150;				
					person1.coin.x=10;
					person1.coin.y=_height-150;				
					person2.coin.x=10;
					person2.coin.y=_height-150;				
					person3.coin.x=10;
					person3.coin.y=_height-150;
				}
				if(person1.readyState==1&&person1.zhuang==1){
					mine.coin.x=_width-100;
					mine.coin.y=_height*2/3+20;				
					person1.coin.x=_width-100;
					person1.coin.y=_height*2/3+20;				
					person2.coin.x=_width-100;
					person2.coin.y=_height*2/3+20;				
					person3.coin.x=_width-100;
					person3.coin.y=_height*2/3+20;
				}				
				if(person2.readyState==1&&person2.zhuang==1){
					mine.coin.x=_width-100;
					mine.coin.y=_height/2+20;				
					person1.coin.x=_width-100;
					person1.coin.y=_height/2+20;				
					person2.coin.x=_width-100;
					person2.coin.y=_height/2+20;				
					person3.coin.x=_width-100;
					person3.coin.y=_height/2+20;
				}				
				if(person3.readyState==1&&person3.zhuang==1){
					mine.coin.x=20;
					mine.coin.y=_height*2/3+20;				
					person1.coin.x=20;
					person1.coin.y=_height*2/3+20;				
					person2.coin.x=20;
					person2.coin.y=_height*2/3+20;				
					person3.coin.x=20;
					person3.coin.y=_height*2/3+20;
				}
			}else{
				readyDelay++;
				if(mine.readyState==1&&mine.zhuang==1){
					if(person1.readyState==1&&person1.win==1){
						person1.coin.visible=true;
						person1.coin.x-=(_width-110)/60;
						person1.coin.y+=(_height/3-170)/60;
					}
					if(person2.readyState==1&&person2.win==1){
						person2.coin.visible=true;
						person2.coin.x-=(_width-110)/60;
						person2.coin.y+=(_height/2-170)/60;
					}
					if(person3.readyState==1&&person3.win==1){
						person3.coin.visible=true;
						person3.coin.x-=10/60;
						person3.coin.y+=(_height/3-170)/60;
					}
				}
				if(person1.readyState==1&&person1.zhuang==1){
					if(mine.readyState==1&&mine.win==1){
						mine.coin.visible=true;
						mine.coin.x+=(_width-110)/60;
						mine.coin.y-=(_height/3-170)/60;
					}
					if(person2.readyState==1&&person2.win==1){
						person2.coin.visible=true;
						person2.coin.y+=(_height/6)/60;
					}
					if(person3.readyState==1&&person3.win==1){
						person3.coin.visible=true;
						person3.coin.x+=(_width-120)/60;
					}
				}
				if(person2.readyState==1&&person2.zhuang==1){
					if(mine.readyState==1&&mine.win==1){
						mine.coin.visible=true;
						mine.coin.x+=(_width-110)/60;
						mine.coin.y-=(_height/2-170)/60;
					}
					if(person1.readyState==1&&person1.win==1){
						person1.coin.visible=true;
						person1.coin.y-=(_height/6)/60;
					}
					if(person3.readyState==1&&person3.win==1){
						person3.coin.visible=true;
						person3.coin.x+=(_width-120)/60;
						person3.coin.y-=(_height/6)/60;
					}
				}
				if(person3.readyState==1&&person3.zhuang==1){
					if(mine.readyState==1&&mine.win==1){
						mine.coin.visible=true;
						mine.coin.x+=10/60;
						mine.coin.y-=(_height/3-170)/60;
					}
					if(person1.readyState==1&&person1.win==1){
						person1.coin.visible=true;
						person1.coin.x-=(_width-120)/60;
					}
					if(person2.readyState==1&&person2.win==1){
						person2.coin.visible=true;
						person2.coin.x-=(_width-120)/60;
						person2.coin.y+=(_height/6)/60;
					}
				}

			}
		}
		if(loseState>0){
			if(readyDelay>60){
				readyDelay=0;
				loseState=0;
				restart=1;
				mine.coin.visible=false;
				person1.coin.visible=false;
				person2.coin.visible=false;
				person3.coin.visible=false;
				mine.coin.x=10;
				mine.coin.y=_height-150;
				person1.coin.x=_width-100;
				person1.coin.y=_height*2/3+20;				
				person2.coin.x=_width-100;
				person2.coin.y=_height/2+20;				
				person3.coin.x=20;
				person3.coin.y=_height*2/3+20;
			}else{
				readyDelay++;
				if(mine.readyState==1&&mine.zhuang==1){
					if(person1.readyState==1&&person1.win==2){
						person1.coin.visible=true;
						person1.coin.x+=(_width-110)/60;
						person1.coin.y-=(_height/3-170)/60;
					}
					if(person2.readyState==1&&person2.win==2){
						person2.coin.visible=true;
						person2.coin.x+=(_width-110)/60;
						person2.coin.y-=(_height/2-170)/60;
					}
					if(person3.readyState==1&&person3.win==2){
						person3.coin.visible=true;
						person3.coin.x+=10/60;
						person3.coin.y-=(_height/3-170)/60;
					}
				}
				if(person1.readyState==1&&person1.zhuang==1){
					if(mine.readyState==1&&mine.win==2){
						mine.coin.visible=true;
						mine.coin.x-=(_width-110)/60;
						mine.coin.y+=(_height/3-170)/60;
					}
					if(person2.readyState==1&&person2.win==2){
						person2.coin.visible=true;
						person2.coin.y-=(_height/6)/60;
					}
					if(person3.readyState==1&&person3.win==2){
						person3.coin.visible=true;
						person3.coin.x-=(_width-120)/60;
					}
				}
				if(person2.readyState==1&&person2.zhuang==1){
					if(mine.readyState==1&&mine.win==2){
						mine.coin.visible=true;
						mine.coin.x-=(_width-110)/60;
						mine.coin.y+=(_height/2-170)/60;
					}
					if(person1.readyState==1&&person1.win==2){
						person1.coin.visible=true;
						person1.coin.y+=(_height/6)/60;
					}
					if(person3.readyState==1&&person3.win==2){
						person3.coin.visible=true;
						person3.coin.x-=(_width-120)/60;
						person3.coin.y+=(_height/6)/60;
					}
				}
				if(person3.readyState==1&&person3.zhuang==1){
					if(mine.readyState==1&&mine.win==2){
						mine.coin.visible=true;
						mine.coin.x-=10/60;
						mine.coin.y+=(_height/3-170)/60;
					}
					if(person1.readyState==1&&person1.win==2){
						person1.coin.visible=true;
						person1.coin.x+=(_width-120)/60;
					}
					if(person2.readyState==1&&person2.win==2){
						person2.coin.visible=true;
						person2.coin.x+=(_width-120)/60;
						person2.coin.y-=(_height/6)/60;
					}
				}

			}
		}
		if(restart>0){
			timer.visible=true;
			if(readyDelay>300){
				readyDelay=0;
				restart=0;
				timer.visible=false;
				reset(mine);
				reset(person1);
				reset(person2);
				reset(person3);
				gameCount++;
				gameTime.text='第'+gameCount+'局';
				zhuang.x=-50;
				zhuang.y=-50;
				poked=[];
				max=[0,0,0,0,0,0,0,0,0];
				personState=[0,0,0,0,0,0,0,0,0];
				personQiang=[0,0,0,0,0,0,0,0,0];
			}else{
				readyDelay++;
				timer.text=(Math.floor((300-readyDelay)/60)>=0?Math.floor((300-readyDelay)/60):0);
			}
		}
		// if(){}
	}
	
}