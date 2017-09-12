var _width=window.innerWidth*2;
var _height=window.innerHeight*2;
var game = new Phaser.Game(_width,_height,Phaser.AUTO, "game", {preload:preload,create:create,update:update});

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
var readyCount=0;
var mine={};
var person1,person2,person3;
var qiang={};
var ready={};
var map={map1:15,map2:10,map3:-10};
var locationLeft=-20;
var locationRight=20;
var timer;
var personState=[0,0,0,0,0,0,0,0,0];
var personQiang=[0,0,0,0,0,0,0,0,0];
var max=[0,0,0,0,0,0,0,0,0];
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
}
function create(){
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.input.maxPointers = 1;
	var background = game.add.sprite(0,0,'background');
	background.width=_width;
	background.height=_height;
	
	mine=person(0,0,0);
	mine.person=game.add.sprite(10,_height-150,'person');
	mine.person.width=100;
	mine.person.height=100;
	mine.cover=game.add.sprite(10,_height-60,'textback');
	mine.point=game.add.text(50 ,_height-55,'10',{font: '20px',fill:'#fff',align: "center"});
	mine.readyState=0;
	mine.multiple=0;
	mine.zhuang=0;

	qiang.one=game.add.sprite(150,_height-270,'btn',btn.one);
	qiang.two=game.add.sprite(270,_height-270,'btn',btn.two);
	qiang.four=game.add.sprite(390,_height-270,'btn',btn.four);
	qiang.none=game.add.sprite(510,_height-270,'btn',btn.none);
	qiang.one.visible=false;
	qiang.two.visible=false;
	qiang.four.visible=false;
	qiang.none.visible=false;
	qiang.one.events.onInputDown.add(function(){
		personQiang[0]=1;
	},this);	
	qiang.two.events.onInputDown.add(function(){
		personQiang[0]=2;
	},this);	
	qiang.four.events.onInputDown.add(function(){
		personQiang[0]=3;
	},this);	
	qiang.none.events.onInputDown.add(function(){
		personQiang[0]=0;
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
		// mine.card1.frame=pokerObj.king['heart'];
		// mine.card2.frame=pokerObj.seven['spade'];
		// mine.card3.frame=pokerObj.six['club'];
		// mine.card4.frame=pokerObj.two['diamond'];
		// mine.card5.inputEnabled=true;
		// mine.card5.events.onInputDown.add(function(){
		// 	mine.card5.frame=24;
		// },game);
	},this);

	person1=person((_width-200),_height*2/3+20,1);
	person2=person((_width-200),_height/2+20,2);
	person3=person(120,_height*2/3+20,3);
	person1.person=game.add.sprite((_width-100),_height*2/3+20,'person');
	person1.person.width=80;
	person1.person.height=80;	
	person2.person=game.add.sprite((_width-100),_height/2+20,'person');
	person2.person.width=80;
	person2.person.height=80;	
	person3.person=game.add.sprite(20,_height*2/3+20,'person');
	person3.person.width=80;
	person3.person.height=80;

	timer=game.add.text(_width/2-20,_height*2/3,'10',{font:'40px',fill:'#f00'});
	timer.visible=false;
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
	}
	return obj;	
}

function update(){
	if(!gameFlag){
		if(readyCount>1){
			timer.visible=true;
			if(readyDelay>600&&readyDelay%10==0){
				ready.btn.visible=false;
				ready.text.visible=false;
				mine.readyState=0;
				person1.ready.visible=false;
				person1.btn.visible=false;
				person1.readyState=0;				
				person2.ready.visible=false;
				person2.btn.visible=false;				
				person2.readyState=0;				
				person3.ready.visible=false;
				person3.btn.visible=false;
				person3.readyState=0;				

				timer.visible=false;
				if(mine.ready>0){
					mine.card1.frame=pokerObj.king['heart'];
					mine.card2.frame=pokerObj.seven['spade'];
					mine.card3.frame=pokerObj.six['club'];
					mine.card4.frame=pokerObj.two['diamond'];
					mine.card5.inputEnabled=true;
					mine.card5.events.onInputDown.add(function(){
						mine.card5.frame=24;
					},game);
				}
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
				}
			}else{
				readyDelay+=1;
				timer.text=(Math.floor((600-readyDelay)/60)>=0?Math.floor((600-readyDelay)/60):0);

			}	
		}
		if(deal>0){
			timer.visible=true;
			if(readyDelay>300){
				if(personState[0]==1){
					qiang.one.visible=true;
					qiang.two.visible=true;
					qiang.four.visible=true;
					qiang.none.visible=true;
				}
				if(personState[1]==1){
					personQiang[1]=Math.floor(Math.random()*4);
					max[1]=personQiang[1];
				}			
				if(personState[2]==1){
					personQiang[2]=Math.floor(Math.random()*4);
					max[2]=personQiang[2];

				}			
				if(personState[3]==1){
					personQiang[3]=Math.floor(Math.random()*4)
					max[3]=personQiang[3];

				}
				deal=0;
				// console.log(personQiang);
				max.sort(function(a,b){return b-a});
				var now=max[0];
				// console.log(now);
				// console.log(personQiang);
				// console.log(max);
				max=[];
				for(var i=0;i<9;i++){
					if(personQiang[i]==now&&personState[i]==1){
						max.push(i);
					}
				}
				console.log(max);
				if(max.length>1){
					var zhuang=Math.floor(Math.random()*max.length);
					switch(zhuang){
						case 0:
							mine.zhuang=1;
						break;
						case 1:
							person1.zhuang=1;
						break;						
						case 2:
							person2.zhuang=1;
						break;
						case 3:
							person3.zhuang=1;
						break;
					}	
				}else if(max.length==1){
					switch(max[0]){
						case 0:
							mine.zhuang=1;
						break;
						case 1:
							person1.zhuang=1;
						break;						
						case 2:
							person2.zhuang=1;
						break;
						case 3:
							person3.zhuang=1;
						break;
					}	
				}
				// console.log(mine.zhuang);
				// console.log(person1.zhuang);
				// console.log(person2.zhuang);
				// console.log(person3.zhuang);
			}else{
				readyDelay++;
				timer.text=(Math.floor((300-readyDelay)/60)>=0?Math.floor((300-readyDelay)/60):0);
			}
		}
	}
	
}