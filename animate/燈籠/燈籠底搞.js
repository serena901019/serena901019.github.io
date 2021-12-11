(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"燈籠底搞_atlas_1", frames: [[0,0,333,314],[416,0,82,229],[335,0,79,432]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["燈籠底搞_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["燈籠底搞_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["燈籠底搞_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.燈本體 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈本體
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈本體, new cjs.Rectangle(0,0,166.5,157), null);


(lib.燈下體 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈下線
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈下體, new cjs.Rectangle(0,0,41,114.5), null);


(lib.吊繩 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 吊繩
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.吊繩, new cjs.Rectangle(0,0,39.5,216), null);


(lib.中燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 中燈籠
	this.ikNode_4 = new lib.燈下體();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-332.65,-7.2,0.9998,0.9998,28.2566,0,0,20.2,0.1);

	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-52.5,-234.1,0.9998,0.9998,43.4441,0,0,39.5,-0.1);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-222.15,-118.85,0.9999,0.9999,44.6785,0,0,83.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:44.6785,x:-222.15,y:-118.85}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:43.4441,x:-52.5,y:-234.1,regX:39.5}},{t:this.ikNode_4,p:{rotation:28.2566,x:-332.65,y:-7.2,regX:20.2}}]}).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:43.2808,x:-218.5,y:-113.6}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:41.6682,x:-52.45,y:-233.95,regX:39.5}},{t:this.ikNode_4,p:{rotation:27.4391,x:-326.25,y:0.65,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:41.8839,x:-214.65,y:-108.5}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:39.8911,x:-52.55,y:-234.15,regX:39.4}},{t:this.ikNode_4,p:{rotation:26.6229,x:-319.65,y:8.3,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:40.4865,x:-210.7,y:-103.5}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:38.1151,x:-52.45,y:-234.1,regX:39.5}},{t:this.ikNode_4,p:{rotation:25.8063,x:-312.75,y:15.7,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:39.0901,x:-206.6,y:-98.65}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:36.3377,x:-52.5,y:-234.1,regX:39.4}},{t:this.ikNode_4,p:{rotation:24.9888,x:-305.75,y:23,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:37.6933,x:-202.35,y:-93.95}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:34.5618,x:-52.4,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:24.1733,x:-298.45,y:30.05,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:36.295,x:-197.9,y:-89.35}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:32.7846,x:-52.45,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:23.3561,x:-290.95,y:36.95,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:34.898,x:-193.4,y:-84.9}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:31.008,x:-52.45,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:22.5395,x:-283.35,y:43.65,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:33.5007,x:-188.7,y:-80.65}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:29.2317,x:-52.45,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:21.7236,x:-275.5,y:50.05,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:32.103,x:-183.9,y:-76.45}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:27.4548,x:-52.45,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:20.906,x:-267.45,y:56.3,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:30.7049,x:-178.9,y:-72.5}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:25.6792,x:-52.45,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:20.0891,x:-259.25,y:62.3,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:29.3075,x:-173.8,y:-68.7}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:23.9027,x:-52.45,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:19.2726,x:-250.85,y:68.05,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:27.91,x:-168.7,y:-64.95}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:22.1249,x:-52.4,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:18.456,x:-242.25,y:73.6,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:26.5134,x:-163.35,y:-61.45}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:20.3493,x:-52.45,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:17.6391,x:-233.55,y:78.85,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:25.116,x:-158,y:-58.1}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:18.5735,x:-52.4,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:16.8234,x:-224.7,y:83.85,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:23.7189,x:-152.45,y:-54.95}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:16.7959,x:-52.45,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:16.0057,x:-215.7,y:88.6,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:22.3212,x:-146.9,y:-51.9}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:15.0196,x:-52.4,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:15.1895,x:-206.6,y:93.2,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:20.9242,x:-141.2,y:-49.1}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:13.2423,x:-52.45,y:-234,regX:39.5}},{t:this.ikNode_4,p:{rotation:14.3735,x:-197.3,y:97.4,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:19.5262,x:-135.45,y:-46.35}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:11.4677,x:-52.5,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:13.5554,x:-187.8,y:101.4,regX:20.3}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:18.1291,x:-129.55,y:-43.9}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:9.6892,x:-52.45,y:-234,regX:39.5}},{t:this.ikNode_4,p:{rotation:12.7388,x:-178.5,y:105.15,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:16.7324,x:-123.65,y:-41.65}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:7.9132,x:-52.5,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:11.9219,x:-168.85,y:108.5,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:15.3345,x:-117.65,y:-39.55}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:6.1366,x:-52.6,y:-234.05,regX:39.4}},{t:this.ikNode_4,p:{rotation:11.1052,x:-159.25,y:111.7,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:13.9366,x:-111.5,y:-37.6}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.36,x:-52.45,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:10.2901,x:-149.45,y:114.65,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:12.5413,x:-105.45,y:-35.9}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.5841,x:-52.45,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:9.4732,x:-139.6,y:117.2,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:11.1439,x:-99.25,y:-34.25}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:0.8063,x:-52.45,y:-234,regX:39.5}},{t:this.ikNode_4,p:{rotation:8.6551,x:-129.65,y:119.55,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:9.7462,x:-93,y:-32.9}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-0.9655,x:-52.45,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:7.8395,x:-119.65,y:121.6,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:8.3487,x:-86.8,y:-31.75}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-2.7417,x:-52.45,y:-234,regX:39.5}},{t:this.ikNode_4,p:{rotation:7.0228,x:-109.65,y:123.35,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:6.9504,x:-80.5,y:-30.9}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-4.5179,x:-52.55,y:-234,regX:39.5}},{t:this.ikNode_4,p:{rotation:6.2051,x:-99.45,y:124.85,regX:20.3}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.5535,x:-74.2,y:-30.1}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-6.295,x:-52.45,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:5.3885,x:-89.45,y:126,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:4.1571,x:-67.85,y:-29.5}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-8.0712,x:-52.45,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:4.5721,x:-79.15,y:127,regX:20.3}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.759,x:-61.5,y:-29.15}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-9.8479,x:-52.45,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:3.755,x:-69.1,y:127.55,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.3607,x:-55.15,y:-28.95}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-11.624,x:-52.45,y:-234,regX:39.5}},{t:this.ikNode_4,p:{rotation:2.9386,x:-58.95,y:127.95,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-0.0315,x:-48.8,y:-29}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-13.4012,x:-52.5,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:2.1228,x:-48.75,y:127.95,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-1.429,x:-42.45,y:-29.15}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-15.1774,x:-52.65,y:-234.05,regX:39.4}},{t:this.ikNode_4,p:{rotation:1.3048,x:-38.6,y:127.65,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-2.8264,x:-36.1,y:-29.6}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-16.9539,x:-52.65,y:-234.05,regX:39.4}},{t:this.ikNode_4,p:{rotation:0.488,x:-28.4,y:127.1,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-4.2239,x:-29.8,y:-30.25}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-18.7306,x:-52.5,y:-234.1,regX:39.5}},{t:this.ikNode_4,p:{rotation:-0.3236,x:-18.25,y:126.25,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-5.6211,x:-23.45,y:-30.95}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-20.507,x:-52.55,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:-1.1404,x:-8.1,y:125.2,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-7.0173,x:-17.2,y:-32}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-22.2834,x:-52.55,y:-234,regX:39.5}},{t:this.ikNode_4,p:{rotation:-1.9574,x:1.95,y:123.75,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-8.4143,x:-10.95,y:-33.15}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-24.0609,x:-52.5,y:-234.1,regX:39.5}},{t:this.ikNode_4,p:{rotation:-2.7731,x:12,y:122,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-9.8128,x:-4.8,y:-34.6}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-25.8364,x:-52.55,y:-234.1,regX:39.5}},{t:this.ikNode_4,p:{rotation:-3.5902,x:21.9,y:120,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-11.2108,x:1.4,y:-36.1}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-27.6128,x:-52.5,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:-4.4081,x:31.75,y:117.75,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-12.6075,x:7.5,y:-37.9}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-29.3903,x:-52.55,y:-234.1,regX:39.5}},{t:this.ikNode_4,p:{rotation:-5.2234,x:41.65,y:115.15,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-14.0051,x:13.55,y:-39.85}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-31.1658,x:-52.55,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:-6.0398,x:51.4,y:112.4,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-15.402,x:19.6,y:-42}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-32.9425,x:-52.55,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:-6.8565,x:61.05,y:109.25,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-16.7999,x:25.5,y:-44.35}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-34.7195,x:-52.5,y:-234.1,regX:39.5}},{t:this.ikNode_4,p:{rotation:-7.6736,x:70.7,y:105.85,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-18.1963,x:31.3,y:-46.85}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-36.496,x:-52.55,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:-8.4915,x:80.2,y:102.15,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-19.5931,x:37.05,y:-49.6}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-38.2728,x:-52.55,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:-9.3068,x:89.55,y:98.25,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-20.9914,x:42.75,y:-52.4}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-40.0481,x:-52.55,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:-10.1238,x:98.9,y:94.05,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-22.3891,x:48.35,y:-55.5}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-41.8255,x:-52.5,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:-10.9414,x:108,y:89.55,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-23.7862,x:53.8,y:-58.7}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-43.6023,x:-52.55,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:-11.7565,x:117,y:84.85,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-25.1837,x:59.2,y:-62.05}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-45.3791,x:-52.5,y:-234,regX:39.5}},{t:this.ikNode_4,p:{rotation:-12.5741,x:125.85,y:79.9,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-26.5807,x:64.5,y:-65.6}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-47.1549,x:-52.55,y:-234,regX:39.5}},{t:this.ikNode_4,p:{rotation:-13.3908,x:134.6,y:74.7,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-27.9769,x:69.6,y:-69.25}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-48.9322,x:-52.55,y:-234,regX:39.5}},{t:this.ikNode_4,p:{rotation:-14.2074,x:143.2,y:69.2,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-29.3748,x:74.6,y:-73.2}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-50.707,x:-52.65,y:-234,regX:39.4}},{t:this.ikNode_4,p:{rotation:-15.0244,x:151.6,y:63.45,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-30.7727,x:79.5,y:-77.15}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-52.4844,x:-52.6,y:-234,regX:39.5}},{t:this.ikNode_4,p:{rotation:-15.8402,x:159.85,y:57.55,regX:20.3}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-32.1697,x:84.25,y:-81.4}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-54.2609,x:-52.6,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:-16.658,x:167.9,y:51.4,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-33.5681,x:88.95,y:-85.7}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-56.0366,x:-52.55,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:-17.4748,x:175.75,y:45,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-34.9639,x:93.45,y:-90.1}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-57.8146,x:-52.6,y:-234,regX:39.5}},{t:this.ikNode_4,p:{rotation:-18.2917,x:183.4,y:38.4,regX:20.2}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-36.362,x:97.85,y:-94.75}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-59.5895,x:-52.6,y:-233.95,regX:39.4}},{t:this.ikNode_4,p:{rotation:-19.108,x:191.1,y:31.5,regX:20.3}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-37.7593,x:102.1,y:-99.55}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-61.3668,x:-52.65,y:-234.05,regX:39.5}},{t:this.ikNode_4,p:{rotation:-19.9245,x:198.4,y:24.45,regX:20.3}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-404.6,-261.2,668.6,504.4);


(lib.大燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 大燈籠
	this.ikNode_4 = new lib.燈下體();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-168.45,57.25,0.9999,0.9999,44.1814,0,0,20.4,-0.1);

	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(44.2,-235.35,1,1,22.5473,0,0,39.4,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-72.8,-67.3,0.9999,0.9999,37.5015,0,0,83.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_2,p:{regX:83.4,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:37.5015,x:-72.8,y:-67.3}},{t:this.ikNode_1,p:{scaleX:1,scaleY:1,rotation:22.5473,x:44.2,y:-235.35,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:44.1814,x:-168.45,y:57.25}}]}).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9998,scaleY:0.9998,rotation:36.3524,x:-69.05,y:-64.75}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:21.2531,x:44.1,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9998,scaleY:0.9998,rotation:43.2283,x:-162.2,y:61.75}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9998,scaleY:0.9998,rotation:35.2043,x:-65.2,y:-62.3}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:19.9576,x:44.15,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9998,scaleY:0.9998,rotation:42.2742,x:-155.8,y:66.1}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:34.0555,x:-61.3,y:-59.75}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:18.6631,x:44.15,y:-235.35,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:41.3205,x:-149.3,y:70.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.1,scaleX:0.9998,scaleY:0.9998,rotation:32.9072,x:-57.3,y:-57.4}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:17.3673,x:44.2,y:-235.4,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:40.3658,x:-142.65,y:74.4}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.1,scaleX:0.9998,scaleY:0.9998,rotation:31.759,x:-53.25,y:-55.15}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:16.0719,x:44.15,y:-235.35,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9998,scaleY:0.9998,rotation:39.4116,x:-135.9,y:78.35}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9998,scaleY:0.9998,rotation:30.6095,x:-49.05,y:-53.1}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:14.7772,x:44.2,y:-235.35,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9998,scaleY:0.9998,rotation:38.4585,x:-129.1,y:82.15}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:29.4619,x:-45,y:-51}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:13.4817,x:44.1,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:-0.1,scaleX:0.9998,scaleY:0.9998,rotation:37.5047,x:-122.15,y:85.65}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.2,regY:-0.2,scaleX:0.9998,scaleY:0.9998,rotation:28.3141,x:-40.8,y:-49.1}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:12.1867,x:44.1,y:-235.4,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9998,scaleY:0.9998,rotation:36.552,x:-115.25,y:89.25}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9998,scaleY:0.9998,rotation:27.1641,x:-36.5,y:-47.2}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:10.8917,x:44.15,y:-235.4,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:35.597,x:-108.25,y:92.5}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9998,scaleY:0.9998,rotation:26.0152,x:-32.2,y:-45.4}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:9.5973,x:44.15,y:-235.35,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9998,scaleY:0.9998,rotation:34.6429,x:-101.2,y:95.8}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9998,scaleY:0.9998,rotation:24.8677,x:-27.95,y:-43.75}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:8.3014,x:44.15,y:-235.35,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9998,scaleY:0.9998,rotation:33.6891,x:-94.05,y:98.8}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:23.719,x:-23.55,y:-42.1}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.007,x:44.15,y:-235.35,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9998,scaleY:0.9998,rotation:32.7355,x:-86.8,y:101.7}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:22.5704,x:-19.15,y:-40.65}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.712,x:44.15,y:-235.35,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:31.7809,x:-79.55,y:104.45}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:21.4215,x:-14.8,y:-39.25}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.4173,x:44.15,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:30.8282,x:-72.2,y:107}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:20.2718,x:-10.35,y:-37.95}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.1212,x:44.2,y:-235.35,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:29.8723,x:-64.8,y:109.4}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:19.1246,x:-5.9,y:-36.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.8268,x:44.15,y:-235.4,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:28.9194,x:-57.35,y:111.6}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.2,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:17.9757,x:-1.45,y:-35.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.5307,x:44.2,y:-235.35,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9998,scaleY:0.9998,rotation:27.9647,x:-49.85,y:113.7}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.2,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:16.8274,x:3.05,y:-34.7}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.759,x:44.15,y:-235.25,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9998,scaleY:0.9998,rotation:27.0108,x:-42.35,y:115.65}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9998,scaleY:0.9998,rotation:15.6788,x:7.7,y:-33.85}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.0543,x:44.1,y:-235.35,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:26.0567,x:-34.75,y:117.4}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:14.5295,x:12.25,y:-33.05}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.3499,x:44.15,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9998,scaleY:0.9998,rotation:25.1028,x:-27.15,y:119}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.4,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:13.3814,x:16.9,y:-32.3}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-4.6435,x:44.1,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:24.1485,x:-19.5,y:120.45}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:12.2327,x:21.45,y:-31.75}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-5.9388,x:44.2,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:23.1963,x:-11.9,y:121.7}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:11.0837,x:26.05,y:-31.3}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-7.2343,x:44.15,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:22.2408,x:-4.05,y:122.7}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:9.9355,x:30.7,y:-30.95}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-8.5302,x:44.15,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9998,scaleY:0.9998,rotation:21.2872,x:3.55,y:123.7}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9998,scaleY:0.9998,rotation:8.7862,x:35.25,y:-30.7}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-9.8253,x:44.1,y:-235.25,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:20.3332,x:11.35,y:124.5}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:7.6386,x:39.9,y:-30.55}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-11.1199,x:44.15,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:19.3801,x:19.05,y:125.05}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.2,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:6.4897,x:44.4,y:-30.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-12.4159,x:44.1,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:18.4253,x:26.7,y:125.5}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:5.3414,x:49.2,y:-30.55}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-13.7092,x:44.05,y:-235.25,regX:39.3,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:17.4713,x:34.45,y:125.8}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.2,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:4.1921,x:53.65,y:-30.7}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-15.0044,x:44.1,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:16.5168,x:42.25,y:126}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.2,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:3.0434,x:58.25,y:-31}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-16.2996,x:44.1,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:15.5633,x:50,y:125.85}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:1.8951,x:63,y:-31.35}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-17.5949,x:44.15,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:14.6088,x:57.7,y:125.65}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:0.7468,x:67.65,y:-31.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-18.8895,x:44.15,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:13.6547,x:65.5,y:125.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:-0.397,x:72.2,y:-32.4}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-20.1852,x:44.15,y:-235.25,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:12.7011,x:73.25,y:124.65}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:-1.5452,x:76.85,y:-33.05}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-21.4801,x:44.15,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:11.7474,x:80.9,y:123.9}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9998,scaleY:0.9998,rotation:-2.6941,x:81.35,y:-33.85}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-22.7755,x:44.15,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:10.7941,x:88.65,y:123}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:-3.844,x:85.8,y:-34.75}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.0706,x:44.1,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:9.8405,x:96.35,y:121.95}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:-4.992,x:90.3,y:-35.75}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.3649,x:44.1,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:8.886,x:104.05,y:120.7}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9998,scaleY:0.9998,rotation:-6.1404,x:94.8,y:-36.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-26.6605,x:44.1,y:-235.35,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:7.9324,x:111.65,y:119.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.2,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:-7.2901,x:99.15,y:-38}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-27.9557,x:44.15,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:6.9773,x:119.25,y:117.75}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:-8.4378,x:103.7,y:-39.3}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-29.2504,x:44.1,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:6.0242,x:126.85,y:116}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.2,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:-9.5861,x:108,y:-40.7}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-30.5451,x:44.15,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:5.0693,x:134.35,y:114.1}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:-10.7348,x:112.6,y:-42.2}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-31.8401,x:44.1,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:4.1166,x:141.85,y:112.05}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:-11.883,x:116.85,y:-43.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-33.1347,x:44.2,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:3.1616,x:149.25,y:109.8}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9998,scaleY:0.9998,rotation:-13.0314,x:121.25,y:-45.55}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-34.4312,x:44.1,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:2.2083,x:156.7,y:107.5}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9998,scaleY:0.9998,rotation:-14.1802,x:125.45,y:-47.3}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-35.7268,x:44.2,y:-235.2,regX:39.4,regY:0.1}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:1.254,x:164,y:104.95}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9998,scaleY:0.9998,rotation:-15.3287,x:129.65,y:-49.15}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-37.0212,x:44.1,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:0.2999,x:171.3,y:102.25}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:-16.4777,x:133.85,y:-51.15}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-38.3161,x:44.15,y:-235.25,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-0.6488,x:178.5,y:99.4}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.4,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:-17.6264,x:138.1,y:-53.2}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-39.6111,x:44.1,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-1.6029,x:185.65,y:96.45}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:-18.7753,x:142.1,y:-55.4}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-40.906,x:44.15,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-2.5567,x:192.75,y:93.3}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:-19.9224,x:146.15,y:-57.7}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-42.2006,x:44.15,y:-235.25,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-3.5111,x:199.7,y:89.95}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:-21.0715,x:150.15,y:-60}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-43.4962,x:44.2,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-4.4648,x:206.7,y:86.5}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9998,scaleY:0.9998,rotation:-22.2215,x:154.05,y:-62.45}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-44.791,x:44.1,y:-235.2,regX:39.3,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-5.4188,x:213.55,y:82.9}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:-23.3698,x:157.9,y:-64.95}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-46.0858,x:44.15,y:-235.35,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-6.3734,x:220.3,y:79.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9999,scaleY:0.9999,rotation:-24.5171,x:161.75,y:-67.55}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-47.3816,x:44.1,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-7.3272,x:227,y:75.25}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.2,regY:-0.2,scaleX:0.9998,scaleY:0.9998,rotation:-25.6664,x:165.45,y:-70.3}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-48.6764,x:44.15,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-8.2803,x:233.65,y:71.2}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9998,scaleY:0.9998,rotation:-26.8149,x:169.25,y:-73.1}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-49.971,x:44.1,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-9.2349,x:240.15,y:67.15}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.2,scaleX:0.9998,scaleY:0.9998,rotation:-27.964,x:172.85,y:-75.95}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-51.2665,x:44.15,y:-235.35,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-10.1894,x:246.55,y:62.7}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.2,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:-29.1128,x:176.4,y:-78.7}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-52.5612,x:44.1,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-11.1433,x:252.9,y:58.25}}]},1).to({state:[{t:this.ikNode_2,p:{regX:83.3,regY:-0.1,scaleX:0.9998,scaleY:0.9998,rotation:-30.261,x:180,y:-81.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-53.8569,x:44.15,y:-235.3,regX:39.4,regY:0}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-12.0967,x:259.15,y:53.85}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262.9,-250.4,593.9,492.1);


(lib.小燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.ikNode_4 = new lib.燈下體();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(205.55,15.5,1,1,-37.5375,0,0,20.4,0);

	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-52.4,-234.05,1,1,-64.7523,0,0,39.6,0.1);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(109.95,-108.9,1,1,-37.5375,0,0,83.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_2,p:{scaleX:1,scaleY:1,rotation:-37.5375,x:109.95,y:-108.9,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0.1,scaleX:1,scaleY:1,rotation:-64.7523,y:-234.05,x:-52.4}},{t:this.ikNode_4,p:{regY:0,scaleX:1,scaleY:1,rotation:-37.5375,x:205.55,y:15.5,regX:20.4}}]}).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-36.2636,x:106.55,y:-104.7,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-63.2351,y:-234.1,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-36.6781,x:199.3,y:21.9,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-34.9876,x:103.05,y:-100.45,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-61.7185,y:-234,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-35.8173,x:193.05,y:28.1,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-33.7131,x:99.5,y:-96.4,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-60.201,y:-234,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-34.9563,x:186.5,y:34.15,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-32.4387,x:95.8,y:-92.5,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-58.6833,y:-234.05,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-34.0975,x:179.95,y:40.05,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-31.1626,x:92,y:-88.6,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-57.166,y:-234,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-33.2368,x:173.2,y:45.75,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-29.889,x:88.1,y:-84.9,regY:0,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-55.6484,y:-234.05,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-32.3766,x:166.3,y:51.3,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-28.614,x:84,y:-81.1,regY:0.1,regX:83.3}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-54.1308,y:-234.05,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-31.5153,x:159.3,y:56.7,regX:20.5}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-27.3385,x:80.1,y:-77.6,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-52.6128,y:-234,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-30.655,x:152.15,y:61.8,regX:20.5}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-26.063,x:75.7,y:-74.1,regY:0.1,regX:83.3}},{t:this.ikNode_1,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-51.0959,y:-233.95,x:-52.3}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-29.7962,x:144.7,y:66.9,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.7888,x:71.6,y:-70.7,regY:0.1,regX:83.3}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-49.5788,y:-234.05,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-28.9353,x:137.3,y:71.8,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-23.5144,x:67.2,y:-67.55,regY:0.1,regX:83.3}},{t:this.ikNode_1,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-48.0613,y:-233.95,x:-52.35}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-28.0742,x:129.75,y:76.4,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-22.239,x:62.9,y:-64.45,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-46.544,y:-234.05,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-27.2149,x:122.1,y:80.85,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-20.9646,x:58.35,y:-61.45,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-45.0266,y:-234,x:-52.35}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-26.3535,x:114.3,y:85.05,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-19.6881,x:53.6,y:-58.65,regY:0,regX:83.3}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-43.5086,y:-234.05,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-25.4932,x:106.35,y:89.2,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-18.4142,x:49,y:-55.85,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-41.9914,y:-234.05,x:-52.35}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-24.6338,x:98.45,y:93.1,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-17.1389,x:44.3,y:-53.15,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-40.4739,y:-233.9,x:-52.35}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-23.7729,x:90.35,y:96.8,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-15.8641,x:39.35,y:-50.65,regY:0.1,regX:83.3}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-38.9569,y:-233.95,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-22.9132,x:82.15,y:100.25,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-14.5889,x:34.6,y:-48.35,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-37.4396,y:-233.95,x:-52.4}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-22.0527,x:73.9,y:103.45,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-13.3142,x:29.6,y:-46.1,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-35.9224,y:-234,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-21.1924,x:65.6,y:106.7,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-12.0389,x:24.6,y:-43.95,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-34.4045,y:-233.95,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-20.332,x:57.15,y:109.55,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-10.7643,x:19.55,y:-42.05,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-32.8871,y:-233.95,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-19.471,x:48.7,y:112.15,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-9.4898,x:14.45,y:-40.2,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-31.3694,y:-234,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-18.6116,x:40.15,y:114.6,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-8.2146,x:9.3,y:-38.45,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-29.8522,y:-233.95,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-17.7512,x:31.55,y:116.85,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-6.9383,x:4.1,y:-36.9,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-28.3347,y:-233.95,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-16.8903,x:22.9,y:118.9,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-5.6645,x:-1.15,y:-35.45,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-26.8169,y:-234,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-16.0304,x:14.3,y:120.7,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-4.3891,x:-6.4,y:-34.15,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-25.2996,y:-234,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-15.1698,x:5.55,y:122.25,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.1142,x:-11.75,y:-33,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-23.781,y:-233.95,x:-52.35}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-14.3092,x:-3.3,y:123.7,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.839,x:-17.05,y:-31.95,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-22.2645,y:-233.95,x:-52.35}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-13.4482,x:-12.15,y:124.8,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:1,scaleY:1,rotation:-0.5648,x:-22.4,y:-31.1,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-20.7468,y:-234,x:-52.35}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-12.5884,x:-21.05,y:125.8,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.7056,x:-27.8,y:-30.4,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-19.2293,y:-233.85,x:-52.3}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-11.728,x:-29.9,y:126.45,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.9799,x:-33.2,y:-29.8,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-17.713,y:-233.95,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-10.8675,x:-38.75,y:127,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.256,x:-38.6,y:-29.35,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-16.1953,y:-233.95,x:-52.35}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-10.0078,x:-47.7,y:127.2,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.5303,x:-44,y:-29.1,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-14.678,y:-233.95,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-9.1468,x:-56.6,y:127.3,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.8051,x:-49.45,y:-28.9,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-13.1598,y:-233.95,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-8.2869,x:-65.5,y:127.15,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.0801,x:-54.9,y:-28.85,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-11.6433,y:-233.95,x:-52.35}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-7.4264,x:-74.3,y:126.75,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:8.355,x:-60.3,y:-29.1,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-10.1251,y:-233.95,x:-52.35}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-6.5658,x:-83.25,y:126.1,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:9.6298,x:-65.75,y:-29.35,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-8.608,y:-233.95,x:-52.35}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-5.7057,x:-92.15,y:125.3,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:10.9049,x:-71.1,y:-29.75,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-7.0906,y:-234,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-4.8453,x:-101.05,y:124.25,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:12.1802,x:-76.55,y:-30.35,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-5.5723,y:-233.95,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-3.9849,x:-109.8,y:123.05,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:13.4552,x:-81.85,y:-31.05,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-4.0551,y:-233.95,x:-52.35}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-3.1256,x:-118.55,y:121.6,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:14.7299,x:-87.35,y:-31.9,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-2.5382,y:-233.95,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-2.2643,x:-127.35,y:119.85,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:16.0047,x:-92.6,y:-32.85,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-1.0204,y:-233.95,x:-52.3}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-1.4043,x:-136.05,y:117.95,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:17.28,x:-97.95,y:-34.05,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:0.4914,y:-233.95,x:-52.35}},{t:this.ikNode_4,p:{regY:0.1,scaleX:1,scaleY:1,rotation:-0.5438,x:-144.65,y:115.8,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:18.5552,x:-103.2,y:-35.3,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:2.0088,y:-233.9,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:0.3113,x:-153.25,y:113.4,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:19.83,x:-108.45,y:-36.7,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:3.5268,y:-233.95,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:1,scaleY:1,rotation:1.1717,x:-161.85,y:110.85,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:21.1052,x:-113.65,y:-38.25,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:5.0444,y:-233.9,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:2.0324,x:-170.3,y:108.1,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:22.3798,x:-118.85,y:-39.95,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:6.5614,y:-233.95,x:-52.3}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:2.8926,x:-178.75,y:105.15,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:23.6551,x:-123.95,y:-41.8,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:8.0794,y:-233.95,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:3.7536,x:-187.05,y:101.9,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:24.9304,x:-129.05,y:-43.75,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:9.5963,y:-233.95,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:4.6136,x:-195.25,y:98.5,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:26.2053,x:-134.05,y:-45.85,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:11.1145,y:-233.9,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:5.4738,x:-203.45,y:94.9,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:27.4797,x:-138.95,y:-48.05,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:12.6314,y:-233.95,x:-52.35}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:6.3334,x:-211.55,y:91.1,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:28.7545,x:-143.9,y:-50.4,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:14.1488,y:-233.9,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:7.1946,x:-219.45,y:87.1,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:30.0292,x:-148.8,y:-52.95,regY:0.1,regX:83.3}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:15.6668,y:-233.9,x:-52.35}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:8.0547,x:-227.35,y:82.9,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:31.3041,x:-153.5,y:-55.55,regY:0.1,regX:83.3}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:17.184,y:-233.9,x:-52.35}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:8.9149,x:-235.1,y:78.45,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:32.5786,x:-158.1,y:-58.25,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:18.7015,y:-233.9,x:-52.4}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:9.7751,x:-242.75,y:73.9,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:33.8542,x:-162.7,y:-61.1,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:20.2183,y:-233.9,x:-52.4}},{t:this.ikNode_4,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:10.636,x:-250.3,y:69.05,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:35.1283,x:-167.3,y:-64.1,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:21.7353,y:-233.95,x:-52.35}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:11.4958,x:-257.6,y:64.15,regX:20.5}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:36.4042,x:-171.7,y:-67.2,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:23.2536,y:-233.9,x:-52.3}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:12.3563,x:-265,y:59.05,regX:20.4}}]},1).to({state:[{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:37.6791,x:-176.1,y:-70.45,regY:0.1,regX:83.4}},{t:this.ikNode_1,p:{regY:0,scaleX:0.9999,scaleY:0.9999,rotation:24.7707,y:-233.9,x:-52.35}},{t:this.ikNode_4,p:{regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:13.2172,x:-272.15,y:53.7,regX:20.4}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-338,-250.5,629.6,494);


// stage content:
(lib.燈籠底搞 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 遮色片9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_81 = new cjs.Graphics().p("AgHCYQg8gDgognQgngmgFg8QgFg6AhgtQAigsA6gMQA6gNAwAcQAhATAVAgQAVAhACAmQADAkgPAkQgQAkgdAXQgoAfg2AAIgIAAg");
	var mask_graphics_82 = new cjs.Graphics().p("AikC4QgngZgTguQgTguAKguQAMgzAtgjQAugjA1ACIALABQAHgaARgXQAhgsA6gMQA6gNAxAcQAgATAVAgQAVAhADAmQADAlgQAjQgPAkgeAXQgrAig8gDIgJgBIgBAEQgPAwglAcQglAdgxACIgHAAQguAAglgXg");
	var mask_graphics_83 = new cjs.Graphics().p("AjSDtQg0gbgVg9QgVg9AZg1QANgdAZgVQAZgVAegKQALgDAMgCQAPgiAhgZQAugjA1ACIALABQAGgbARgWQAhgtA7gMQA6gMAxAbQAgATAVAhQAVAhADAlQADAlgQAkQgPAkgeAWQgrAjg8gDIgJgBIgBAEQgPAvglAdQggAYgnAFIgFAOQgdA0g9ATQgaAIgYAAQgiAAgfgQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(81).to({graphics:mask_graphics_81,x:366.3223,y:520.9917}).wait(1).to({graphics:mask_graphics_82,x:358.0625,y:526.4871}).wait(1).to({graphics:mask_graphics_83,x:352.195,y:531.0221}).wait(1));

	// 第九畫
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D3828").s().p("AiGgsQAhgoAogoIAigfID8gSIm+FbQgQhaBniAg");
	this.shape.setTransform(356.7486,533.525);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(81).to({_off:false},0).wait(3));

	// 遮色片8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_73 = new cjs.Graphics().p("AgvCRQgqgNgbggQghgmgDg1QgDg0AcgqQAbgpAygRQAygSAvAQQAwAPAeAsQAeArgCAxQgCAygiApQgiApgxALQgRAEgRAAQgXAAgYgIg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AgGCPQgJgGgIgHIgTAGQgpAJgpgNQgqgOgbggQghgmgDg0QgDg1AcgpQAbgqAygRQAzgRAvAPQAdAKAYAVQAWgJAZgBQAxgCAsAeQArAfAQAvQAOAsgOAwQgPAwgmAdQglAcgyACIgHAAQgvAAgjgYg");
	var mask_1_graphics_75 = new cjs.Graphics().p("ABZDdQgzgNgmgfQgbAMgfABQgzACgngaQgKgGgHgHIgTAFQgpAKgpgOQgqgNgbggQghgmgDg1QgDg0AcgqQAbgpAygRQAzgSAvAQQAeAKAXAVQAXgJAZgBIASAAIAQgWQAmgzA5gXQA5gXBAAKQA/AKAvAnQAvAoAWA8QAVA9gMA7QgMA9grAvQgsAwg7ASQgfAJggAAQgdAAgdgHg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AhqE0QgfgQgVgdQgVgdgHgiQgJg0AcgxQAIgQAMgNIgBgBQgKgGgHgHIgTAGQgpAJgpgNQgqgOgbggQghglgDg1QgDg1AcgpQAbgqAygRQAzgRAvAPQAeAKAXAVQAXgJAZgBIASABIAQgXQAmgzA5gXQA5gXBAAKQA/AKAvAoQAvAnAWA9QAVA8gMA9QgMA7grAwQgsAvg7ASQgxAPgzgIQAHAYgCAdQgDA2giAmQghAmg1AKQgQADgPAAQgkAAgfgRg");
	var mask_1_graphics_77 = new cjs.Graphics().p("Aj1GUQgxgMgfgjQgjgogCg6QgBg5AhgqQAcgkAugOQAjgLAhAFQgEguAZgrQAIgPAMgNIgBgBQgKgGgHgHIgTAGQgpAJgpgNQgqgOgbggQghgmgDg1QgDg1AcgpQAbgqAygRQAzgRAvAPQAeAKAXAVQAXgJAZgBIASABIAQgXQAmgzA5gXQA5gXBAAKQA/AKAvAoQAvAnAWA9QAVA8gMA9QgMA8grAwQgsAug7ASQgxAPgzgIQAHAYgCAdQgDA2giAmQghAmg1AKQgZAFgYgDIABAIQACAwgbAqQgbAqgsASQgbALgdAAQgSAAgTgFg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AilIeQhAgEg0giQgzgigcg7Qgbg6AGg+QAGg5AigyIABgBQgKgagBgfQgCg5AigqQAcgjAugOQAjgLAhAEQgEgtAYgrQAJgQALgNIgBgBQgJgGgIgHIgSAGQgpAJgqgNQgpgOgcggQgggmgDg1QgEg1AcgpQAcgqAygRQAygRAwAPQAeAKAXAVQAXgJAYgBIATABIAPgXQAmgzA5gXQA6gXA/AKQBAAKAvAoQAvAnAVA9QAWA8gMA9QgNA8grAwQgrAvg7ASQgxAPg0gJQAHAZgBAdQgEA1ghAmQgiAmg1AKQgZAEgXgCIAAAFIANAIQAwAeAeA1QAdA0AAA7QAAA9ghA4QghA4g2AdQgxAag6AAIgMAAg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AilIeQhAgEg0giQgzgigcg7Qgbg6AGg+QAGg5AigyIABgBQgKgagBgfQgCg5AigqQAcgjAugOQAjgLAhAEQgEgtAYgrQAJgQALgNIgBgBQgJgGgIgHIgSAGQgpAJgqgNQgpgOgcggQgggmgDg1QgEg1AcgpQAcgqAygRQAygRAwAPQAeAKAXAVQAXgJAYgBIATABIAPgXQAmgzA5gXQA6gXA/AKQBAAKAvAoQAvAnAVA9QAWA8gMA9QgNA8grAwQgrAvg7ASQgxAPg0gJQAHAZgBAdIAAADQAhADAgAOQA8AaAmA5QAmA4ACBCQABBEgjA3QgiA4g+AeQg+AehBgIIgYgEIgHANQghA4g2AdQgxAag6AAIgMAAg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AilIeQhAgEg0giQgzgigcg7Qgbg6AGg+QAGg5AigyIABgBQgKgagBgfQgCg5AigqQAcgjAugOQAjgLAhAEQgEgtAYgrQAJgQALgNIgBgBQgJgGgIgHIgSAGQgpAJgqgNQgpgOgcggQgggmgDg1QgEg1AcgpQAcgqAygRQAygRAwAPQAeAKAXAVQAXgJAYgBIATABIAPgXQAmgzA5gXQA6gXA/AKQBAAKAvAoQAvAnAVA9QAWA8gMA9QgNA8grAwQgrAvg7ASQgxAPg0gJQAHAZgBAdIAAADQAhADAgAOIARAIIABgGQAHgVASgLQAGgFAJgBIAPgDQAVABARAPQARAOACAVQADATgMATQgMARgRAGIAGAKQAmA4ACBCQABBEgjA3QgiA4g+AeQg+AehBgIIgYgEIgHANQghA4g2AdQgxAag6AAIgMAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(73).to({graphics:mask_1_graphics_73,x:342.665,y:447.4072}).wait(1).to({graphics:mask_1_graphics_74,x:350.3681,y:448.7931}).wait(1).to({graphics:mask_1_graphics_75,x:364.5955,y:446.5125}).wait(1).to({graphics:mask_1_graphics_76,x:364.5955,y:456.1727}).wait(1).to({graphics:mask_1_graphics_77,x:364.5955,y:464.5726}).wait(1).to({graphics:mask_1_graphics_78,x:363.5112,y:477.8876}).wait(1).to({graphics:mask_1_graphics_79,x:363.5112,y:477.8876}).wait(1).to({graphics:mask_1_graphics_80,x:363.5112,y:477.8876}).wait(4));

	// 第八畫
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D3828").s().p("Ak5GpIAAlwQBOgcBTgsQCmhaAghXQgyATg9AKQh8AUg2gsQg3gtAIg9QACgKAfhSIAaAFQAiAFAlgBQB0gBBigzIA2gJQA/gIAuAGQCUAShNCTIh9CmQiLCthMAiIAnACQAvACAtgGQCSgSA/hQIh9GSIj8AFQgMARgiALQgbAJgjAAQgzAAhBgSg");
	this.shape_1.setTransform(362.9176,476.0489);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(73).to({_off:false},0).wait(11));

	// 遮色片7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_66 = new cjs.Graphics().p("Ag9DbQg/gSgrguQgrgugNhBQgNhAAWg7QAWg7A1gpQA0goA+gHQA+gHA8AcQA7AcAjA1QANAUAKAaQAWA7gMA+QgMA+gsAxQgtAxg9ARQgdAJgfAAQgeAAghgKg");
	var mask_2_graphics_67 = new cjs.Graphics().p("AjQEIQhAgSgrguQgrgvgMhBQgNhBAWg6QAWg7A0goQA0gpA/gHQA+gHA8AcIACABIAIgMQAkg0A1gaQA3gaA+AFQA/AFAxAjQA/AsAXBHQAOApgCArQgDA7gjA1QgiA0g2AbQg2Abg/gEQgugCgngTQgMATgQASQgrAxg9ARQgeAJgfAAQgfAAgggJg");
	var mask_2_graphics_68 = new cjs.Graphics().p("AlxEJQhAgSgrguQgrgugMhBQgNhBAWg6QAWg7A0gpQA0goA/gHQA+gHA8AcIACABIAIgNQAkg0A2gaQA3gaA9AGQA/AFAxAiQAQAMAOANQAjglAvgRQA8gXBCAOQBCANAvAtQAuAsAQBCQAQBBgUA8QgPAtggAkQggAkgrATQgrAUgxAAQgwABgrgSQgogRgfgfQgbAcgiARQg2Abg+gEQgugDgngSQgMATgQASQgsAxg9ARQgeAIgfAAQgfAAgggJg");
	var mask_2_graphics_69 = new cjs.Graphics().p("AFDFpQhCgNgxgqQgxgrgWg/QgXhAAMg/IABgGQghgQgcgbQgaAcgiARQg1Abg/gEQgugDgngSQgMATgQASQgtAxg9ARQg8ARhAgSQg/gSgrguQgrgugNhAQgNhBAWg7QAWg7A1gpQA0goA+gHQA/gHA8AcIACABIAIgNQAjg0A3gaQA2gaA/AGQA/AFAwAiQAQAMAOANQAjglAugRQA8gXBDAOQBCANAuAtQAuAsARBCQAJAngDAlQAqAOAhAbQAyApAZA+QAYA/gKBAQgMBTg9A6QgnAng3ATQglAMgnAAQgZAAgagFg");
	var mask_2_graphics_70 = new cjs.Graphics().p("ADoH2QhFgnghhDQghhDALhOQALhOAzg3IAJgKQgbghgPgsQgXg+AMhAIABgFQghgRgcgaQgaAbgiARQg1Abg/gEQgugCgngTQgMAUgQARQgtAxg9AQQg8AShAgSQg/gRgrguQgrgvgNhBQgNhBAWg7QAWg7A1goQA0gpA+gHQA/gHA8AcIACABIAIgMQAjg0A3gaQA2gaA/AFQA/AFAwAjQAQALAOANQAjgkAugSQA8gXBDAOQBCAOAuAsQAuAtARBBQAJAngDAlQAqAOAhAcQAyApAZA/QAYA+gKBAQgMBTg8A5QAcAjAPAuQAZBLgVBIQgUBIg9AyQg+AyhKAHIgVABQg/AAg7ghg");
	var mask_2_graphics_71 = new cjs.Graphics().p("AEfLMQhIgKg9gsQg9gsgghCQgXgvgGg2QgGg1ANgzQAJgiAOgcQAWgtAkgjQgdhAALhKQALhNAzg3IAJgKQgcghgOgsQgXg/AMhAIABgFQgigQgbgbQgaAbgiARQg1Abg/gEQgugCgngTQgMAUgQARQgtAxg9ARQg8AShAgSQg/gSgrguQgrgvgNhBQgNhBAWg7QAWg7A1goQA0gpA+gHQA/gHA8AcIACABIAIgMQAjg0A3gaQA2gaA/AFQA/AFAwAjQAQALANANQAjgkAvgSQA8gXBDAOQBCAOAuAsQAuAtARBBQAJAngDAlQApAOAiAcQAyApAZA/QAYA+gKBAQgMBUg8A5QAcAjAPAtQAZBLgVBIQgJAggRAcIAIAKQAlAzAOA7QARBGgTBJQgTBJgxA2QgwA2hHAZQgzATg0AAQgUAAgUgDg");
	var mask_2_graphics_72 = new cjs.Graphics().p("ADyNqQhSgFhBgsQgrgegggqQgegsgOgyQgPgyAEg1QAEg1AVgwQAVgxAmglQgNgjgEgnQgGg1ANgzQAJgiAOgcQAWgtAkgjQgdg/ALhKQALhOAzg3IAJgKQgcgigOgrQgXg/AMhAIABgFQgigRgbgaQgaAbgiARQg1Abg/gEQgugCgngTQgMAUgQARQgtAxg9ARQg8AShAgSQg/gSgrguQgrgvgNhBQgNhBAWg7QAWg7A1goQA0gpA+gHQA/gHA8AcIACABIAIgMQAjg0A3gaQA2gaA/AFQA/AFAwAjQAQALANANQAjgkAvgSQA8gXBDAOQBCAOAuAsQAuAtARBBQAJAngDAlQApAOAiAcQAyApAZA/QAYA+gKBAQgMBUg8A5QAcAjAPAuQAZBLgVBHQgJAggRAcIAIAKQAlAzAOA7QARBGgTBJQgTBJgxA2IgIAJQAWA6gDA9QgEBPguBFQgtBEhGAkQg9AehGAAIgWgBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(66).to({graphics:mask_2_graphics_66,x:337.2068,y:406.5113}).wait(1).to({graphics:mask_2_graphics_67,x:351.9775,y:402.0833}).wait(1).to({graphics:mask_2_graphics_68,x:368.0891,y:401.9165}).wait(1).to({graphics:mask_2_graphics_69,x:376.4035,y:411.1124}).wait(1).to({graphics:mask_2_graphics_70,x:376.4035,y:427.9571}).wait(1).to({graphics:mask_2_graphics_71,x:377.0475,y:446.351}).wait(1).to({graphics:mask_2_graphics_72,x:377.0475,y:461.9725}).wait(12));

	// 第七畫
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3D3828").s().p("AD5L/Qg1gjjmi9IB8mTIgBhrIAnk7QgHgngCgwQgDhgAdgwQAJgXgkgQQhIggjcAhIk5BVIgRiZIB7g2QCVg6CGgZQGqhQBvEdIAeDBQAfDqAEDGQANJ8kGA2QALALgDAAQgCAAgMgIg");
	this.shape_2.setTransform(382.7307,461.8263);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(66).to({_off:false},0).wait(18));

	// 遮色片6 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_61 = new cjs.Graphics().p("AhODVQg9gWgngxQgeglgMgwQgMgvAHgvQAKg9ArgyQArgxA7gTQA7gUA+APQBAAPAsArQAtArAQA/QARA/gSA7QgSA8gwAsQgxArg9AMQgUAEgVAAQgnAAgpgPg");
	var mask_3_graphics_62 = new cjs.Graphics().p("AhlF2Qg+gagng8Qgng7AAhEQABhEAog6QATgcAYgTIgHgJQgeglgMgvQgMgwAHgvQAKg+ArgxQArgyA7gTQA6gTA/AOQBAAPAsArQAtAsAQA/QARA/gSA8QgSA7gwArIgJAIQAZAcAPAjQAaA+gOBGQgOBGgwAvQgwAwhGAOQgYAFgXAAQgsAAgogSg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AgiIoQgngDgkgQQgkgRgcgbQgnglgSg2QgSg2AIg2QAIg2AhguQALgPAOgOQgPgPgMgSQgng8ABhEQAAhCApg7QATgcAYgUIgIgIQgdglgNgwQgMgvAIgwQAKg9AqgyQArgxA7gTQA6gUBAAPQA/APAtArQAsArARA/QAQBAgSA7QgSA8gwAsIgIAHQAZAcAOAjQAaA/gOBEQgOBGgwAwIgBABQANAOALAQQAgAvAHA2QAJBNgnBDQghA3g7AfQgzAag1AAIgTgBg");
	var mask_3_graphics_64 = new cjs.Graphics().p("AgtLDQg5gGgtgfQgugfgbgzQgagygBg3QAAgYAEgUQALg8ApgwIAKgLQgeghgPgtQgSg2AIg2QAIg2AhguQAMgQANgNQgOgOgMgSQgng8AAhEQABhDAog7QATgcAYgUIgHgIQgeglgMgwQgMgvAHgwQAKg9ArgyQArgxA7gTQA6gUA/APQBAAPAsArQAtArAQA/QARBAgSA7QgSA8gwAsIgJAHQAZAcAPAjQAaA/gOBFQgOBGgwAvIgBABQANAOALAQQAgAvAGA2QAKBNgoBDQgOAYgUAUQAhAkAPAyQASA9gPA7QgNA2gmArQglAqg0AUQgnAPgoAAQgOAAgOgCg");
	var mask_3_graphics_65 = new cjs.Graphics().p("AAFNtQhEgGgzgoQg9gugThJQgHgagBgdQgBgXADgTQAFglASgiQALgXARgTIgDgCQgtgfgbgyQgbgzgBg3QAAgYAEgTQALg8AqgwIAKgLQgegigPgsQgSg2AIg1QAIg2AhguQALgQAOgNQgPgPgMgTQgng7ABhEQAAhEApg6QATgcAYgUIgIgJQgdglgNgvQgMgwAIgvQAKg+AqgxQArgyA7gTQA6gTBAAOQA/APAtArQAsAsARA/QAQA/gSA8QgSA7gwAsIgIAIQAZAcAOAjQAaA+gOBGQgOBGgwAvIgBACQANANALARQAgAvAHA2QAJBMgnBCQgPAZgTATQAgAlAPAyQASA8gOA8QgNAzgjAqQAiAWAZAkQAoA4ADBBQAEBBgiA7QgiA8g6AeQgwAag3AAIgWgBg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(61).to({graphics:mask_3_graphics_61,x:320.8003,y:394.7103}).wait(1).to({graphics:mask_3_graphics_62,x:319.4443,y:411.0578}).wait(1).to({graphics:mask_3_graphics_63,x:319.2715,y:427.1328}).wait(1).to({graphics:mask_3_graphics_64,x:318.8196,y:442.7455}).wait(1).to({graphics:mask_3_graphics_65,x:319.2711,y:459.6651}).wait(19));

	// 第六畫
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D3828").s().p("AiQEqQgRiAgDiYIABh8QA+kMBfjbQAdhEAdg4IAYgpIAwAeIApECIgZJxIAAGXIg2DFQixgug1mfg");
	this.shape_3.setTransform(317.475,462.3);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(61).to({_off:false},0).wait(23));

	// 遮色片5 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_51 = new cjs.Graphics().p("AhHBpQgkgYgNgmQgOgmAMgpQANgpAggZQAggZArgBQAqAAAhAXQAhAXAPAoQAOAogMAmQgLAngiAaQgiAagpABIgDABQglAAgigYg");
	var mask_4_graphics_52 = new cjs.Graphics().p("AA9CAQgmgQgWghIgGgOQgLAPgPAMQgiAagpABQgoABgjgZQgkgYgNgmQgOglAMgpQANgqAggZQAggYArgBQArgBAhAXQAcAUAOAfQAJgNANgLQATgQAYgIQAYgHAZACQAaACAWALQAjASAUAlQATAlgFAmQgFAngcAfQgcAfgmAIQgOADgNAAQgZAAgZgKg");
	var mask_4_graphics_53 = new cjs.Graphics().p("AC6COQgngKgZgcQgLgMgHgOIgIAKQgcAfgmAIQgmAJgmgQQgmgQgWghIgHgOQgLAPgPAMQgiAagpABQgoABgjgZQgkgYgNgmQgOglAMgpQANgqAggZQAggYArgBQArgBAhAXQAcATAOAgQAKgNANgLQATgQAYgIQAYgHAYACQAaACAWALQAjASATAlQAIgLALgJQAcgZAogGQAngFAiAQQAiARAVAiQAUAjgCAlQgCAmgZAgQgYAfgjANQgUAGgVAAQgRAAgRgEg");
	var mask_4_graphics_54 = new cjs.Graphics().p("AEFDUQgmgFgigVQgigVgVghQgRgZgIgdQgWADgYgGQgngKgYgcQgLgNgHgNIgIAJQgcAfgmAJQgnAIgmgPQgmgQgWgiIgHgMQgLANgPAMQgiAagpABQgoABgjgYQgkgXgNgmQgOgmAMgqQANgpAggZQAggZArgBQArAAAhAXQAcATAOAfQAKgNANgKQATgRAYgHQAYgIAZACQAaACAWAMQAjARATAlQAIgLAKgJQAcgZAogFQAngGAiARQAbANASAYQASgKAUgGQAsgOAwALQAvALAjAfQAjAeAQAvQAQAsgIAuQgHAjgTAeQgTAfgcAUQgdAVgjAJQgVAFgWAAQgNAAgNgCg");
	var mask_4_graphics_55 = new cjs.Graphics().p("AGJDrQgogHgjgYQghgWgTghIgIAGQgdAVgjAJQgiAIgjgFQgmgFgigVQgigVgUghQgRgYgIgdQgWACgYgGQgngKgZgcQgLgMgHgNIgIAJQgcAegmAJQgnAIgmgPQgmgQgWghIgHgNQgLAOgPAMQgiAZgpABQgoABgjgXQgkgYgNgmQgOgmAMgqQANgpAggZQAggZArgBQArAAAhAXQAcATAOAfQAKgMANgLQATgRAYgHQAYgIAZACQAaACAWAMQAjASATAkQAIgKALgKQAcgZAogFQAngGAhARQAbANASAYQASgKAUgGQAsgOAwALQAvALAjAfQAVASAOAXQAMgKAOgIQApgXAwAAQAxAAApAXQAoAWAaAqQAaApACAuQACApgRAmQgQAngfAbQgeAbgpAMQgZAIgaAAQgPAAgOgDg");
	var mask_4_graphics_56 = new cjs.Graphics().p("AHaFRQg7gHg0giQg0gjgcg1QgSgjgGgmIgCgBQgogGgjgZQghgWgTggIgIAGQgdAUgjAJQgiAJgigFQgmgFgigWQgigVgVggQgRgYgIgdQgWADgYgHQgngKgZgcQgLgMgHgNIgIAJQgcAfgmAIQgnAJgmgQQgmgQgWghIgHgOQgLAPgPAMQgiAagpABQgoABgjgZQgkgYgNgmQgOgmAMgpQANgqAggZQAggYArgBQArgBAhAXQAcAUAOAfQAKgNANgLQATgQAYgIQAYgHAZACQAaACAWALQAjASATAlQAIgLALgJQAcgZAogGQAngFAiAQQAbANASAZQASgLAUgGQArgNAwAKQAvALAjAfQAVASAOAYQAMgKAOgIQApgXAwAAQAxAAApAWQAoAXAaApQARgEASgCQBHgHBDAkQBCAkAiA/QAhA/gHBLQgIBMguA3QgmAug6AYQguATgvAAIgYgBg");
	var mask_4_graphics_57 = new cjs.Graphics().p("AIIGmQhNgegxg/QgigsgPg1QgYACgZgCQg8gHg0giQg0gjgbg1QgSgjgGgmIgDgBQgogGgigYQgggWgTggIgJAGQgcAUgjAJQgjAJgjgFQgmgFgigWQghgVgWggQgQgZgIgdQgWADgYgHQgngKgZgcQgLgMgHgNIgIAJQgcAfgnAIQgmAJgmgQQgngQgVghIgHgOQgLAPgQAMQgiAagoABQgoABgkgZQgjgYgOgmQgOgmANgpQAMgqAhgZQAggYArgBQAqgBAiAXQAcAUAOAfQAKgNAMgLQAUgQAYgIQAXgHAaACQAZACAXALQAjASATAlQAIgLAKgJQAcgZAogGQAogFAiAQQAbANASAZQASgLATgGQAtgNAvAKQAwALAjAfQAVASAOAYQALgKAOgIQAogXAxAAQAwAAApAWQApAXAaApQARgEASgCQBHgHBCAkQBAAjAiA7QAigMAlgCQBQgGBKAmQBKAlArBDQAqBDACBTQACBTgoBFQggA5g3AmQg3AnhAALQgYAEgYAAQg2AAg2gVg");
	var mask_4_graphics_58 = new cjs.Graphics().p("AKwIkQhAgWgvgvQgvgwgXhBQgIgXgEgYQhEAHhCgaQhOgfgxg+QgigsgPg2QgYADgZgDQg7gGg0gjQgzgjgcg0QgSgigGgnIgCAAQgogHgjgYQghgXgTggIgIAGQgdAVgjAJQgiAIgjgFQgmgFgigVQgigVgVghQgRgYgIgdQgWACgYgGQgngKgZgcQgLgMgHgOIgIAJQgcAfgmAJQgnAIgmgPQgmgQgWgiIgHgNQgLAOgPAMQgiAagpABQgoABgjgYQgkgYgNgmQgOgmAMgqQANgpAggZQAggZArgBQArAAAhAXQAcATAOAfQAKgNANgKQATgRAYgHQAYgIAZACQAaACAWAMQAjASATAkQAIgLALgJQAcgZAogFQAngGAiARQAbANASAYQASgKAUgGQAsgOAwALQAvALAjAfQAVASAOAXQAMgKAOgIQApgXAwAAQAxAAAoAXQAoAWAaApQARgEASgCQBHgGBDAkQA/AiAiA8QAjgMAlgDQBPgFBLAlQBKAmAqBDQAgAyAJA7QBBgGA9AVQA+AUAwAwQAwAwAWA+QAWA+gHBEQgHBEgjA4QgjA4g6AlQg6AlhCAIQgQACgQAAQgyAAgxgSg");
	var mask_4_graphics_59 = new cjs.Graphics().p("AFYIzQg/gOgtgrQgkgjgTgwQgTgwAEgyQAEg+Alg1QAIgLAJgKQgagmgNgtQgYACgZgCQg7gHg0giQgzgjgcg0QgSgjgGgmIgCgBQgogGgjgZQghgWgTggIgIAGQgdAUgjAJQgiAJgjgFQgmgFgigWQgigVgVggQgRgZgIgdQgWADgYgHQgngKgZgcQgLgMgHgNIgIAJQgcAfgmAIQgnAJgmgQQgmgQgWghIgHgOQgLAPgPAMQgiAagpABQgoABgjgZQgkgYgNgmQgOgmAMgpQANgqAggZQAggYArgBQArgBAhAXQAcAUAOAfQAKgNANgLQATgQAYgIQAYgHAZACQAaACAWALQAjASATAlQAIgLALgJQAcgZAogGQAngFAiAQQAbANASAZQASgLAUgGQAsgNAwAKQAvALAjAfQAVASAOAYQAMgKAOgIQApgXAwAAQAxAAAoAWQAoAXAaApQARgEASgCQBHgHBDAkQA/AjAiA7QAjgMAlgCQBPgGBLAmQBKAlAqBDQAgAzAJA7QBBgHA9AVQA+AVAwAwQAwAvAWA+QAWA/gHBDQgHBEgjA4QgjA5g6AlQg6AkhCAIQhCAIhBgXQhAgWgvgvIgKANQgrAxg6AUQgiALgjAAQgbAAgagGg");
	var mask_4_graphics_60 = new cjs.Graphics().p("AFYIzQg/gOgtgrQgXgWgQgbIgNAJQg6AnhBABQhBABg6glQg6glgcg7Qgbg7AHg/QAHhBAsg2QArg1A/gVIAUgFQgogggXgsQgSgjgGgmIgCgBQgogGgjgZQghgWgTggIgIAGQgdAUgjAJQgiAJgjgFQgmgFgigWQgigVgVggQgRgZgIgdQgWADgYgHQgngKgZgcQgLgMgHgNIgIAJQgcAfgmAIQgnAJgmgQQgmgQgWghIgHgOQgLAPgPAMQgiAagpABQgoABgjgZQgkgYgNgmQgOgmAMgpQANgqAggZQAggYArgBQArgBAhAXQAcAUAOAfQAKgNANgLQATgQAYgIQAYgHAZACQAaACAWALQAjASATAlQAIgLALgJQAcgZAogGQAngFAiAQQAbANASAZQASgLAUgGQAsgNAwAKQAvALAjAfQAVASAOAYQAMgKAOgIQApgXAwAAQAxAAAoAWQAoAXAaApQARgEASgCQBHgHBDAkQA/AjAiA7QAjgMAlgCQBPgGBLAmQBKAlAqBDQAgAzAJA7QBBgHA9AVQA+AVAwAwQAwAvAWA+QAWA/gHBDQgHBEgjA4QgjA5g6AlQg6AkhCAIQhCAIhBgXQhAgWgvgvIgKANQgrAxg6AUQgiALgjAAQgbAAgagGg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(51).to({graphics:mask_4_graphics_51,x:346.2645,y:352.7014}).wait(1).to({graphics:mask_4_graphics_52,x:357.2562,y:353.675}).wait(1).to({graphics:mask_4_graphics_53,x:368.0893,y:354.4967}).wait(1).to({graphics:mask_4_graphics_54,x:380.3776,y:361.2421}).wait(1).to({graphics:mask_4_graphics_55,x:393.991,y:363.6034}).wait(1).to({graphics:mask_4_graphics_56,x:407.5988,y:373.6605}).wait(1).to({graphics:mask_4_graphics_57,x:425.41,y:384.159}).wait(1).to({graphics:mask_4_graphics_58,x:441.3897,y:396.4167}).wait(1).to({graphics:mask_4_graphics_59,x:441.3897,y:396.7587}).wait(1).to({graphics:mask_4_graphics_60,x:441.3897,y:396.7587}).wait(24));

	// 第五畫
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3D3828").s().p("AHfGQQirgrjQg9IirgzIgSh3QCiCHB+gzQA/gZAeg0Qo7nemvhLQiGgYhpAUQggAGgaAKIgTAJIAhhGQEzg0ITBiQEIAxDMA7QHdDUCmEtQA0BeAPBcQAHAugDAbQABAfhLAAQiAAAlahYg");
	this.shape_4.setTransform(438.245,397.7556);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(51).to({_off:false},0).wait(33));

	// 遮色片4 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_30 = new cjs.Graphics().p("AgRDTQglgDgggPQg+gbgig6Qgjg6AGhDQAEg1AfgvQAfguAvgZQAvgYA3ABQA3AAAvAbQAuAaAdAwQAdAwACA1QACAjgLAkQgLAjgWAeQgtA8hIASQgaAHgbAAIgRgBg");
	var mask_5_graphics_31 = new cjs.Graphics().p("AghF4QhJgUgxg1Qgxg1gOhLQgOhLAbhEQAFgOAHgNQgqgZgbgtQgig6AFhEQAFg1AeguQAfgvAvgYQAvgZA4ABQA4ABAtAaQAuAbAdAvQAeAwACA1QACAjgKAiIAKAEQAwAVAmAnQAlAnATAxQASAxgDA2QgDA3gXAvQgXAvgqAjQgpAjgzAQQgkAKgkAAQgjAAgjgKg");
	var mask_5_graphics_32 = new cjs.Graphics().p("AgpIcQgygRgpglQgpglgVgxQgYg2ACg6QACg3AZgzQAMgZAQgVIgBgBQgxg1gOhLQgNhKAahEQAGgOAHgMQgrgbgagtQgjg6AGhEQAEg1AfguQAfgvAvgYQAvgZA4ABQA3ABAuAaQAuAbAdAvQAdAwACA1QACAjgKAiIAKAEQAxAVAlAnQAmAnASAyQATAxgDA2QgDA2gYAvQgMAYgRAWQARARANAUQAbAsAJA1QAIA0gMAyQgMA0giAsQghArgvAaQgvAag3AFIgXABQgqAAgogOg");
	var mask_5_graphics_33 = new cjs.Graphics().p("AhJLQQg3gGgxgdQgwgdggguQgegsgLg2QgKg2AMg1QAOg8AqgxQAZgeAggUIgHgOQgYg2ADg6QABg3AZgzQAMgYARgVIgBgBQgxg1gOhLQgOhLAbhEQAFgOAHgMQgqgbgbgtQgig6AFhEQAFg1AeguQAfgvAvgYQAvgZA4ABQA4ABAtAaQAuAbAdAvQAeAwACA1QACAjgKAiIAKAEQAwAVAmAnQAlAnATAyQASAxgDA2QgDA3gXAvQgMAYgRAVQAQASANAUQAcArAIA1QAJA0gMAyQgNA0ghAsQgdAlgmAYQAbA1ACA6QABA3gWA0QgWA0gpAmQgoAlg2ASQgoANgoAAQgOAAgOgCg");
	var mask_5_graphics_34 = new cjs.Graphics().p("AiwNkQhGgWgug0QglgqgRg3QgQg3AIg3QAKhGAug4QAeglAmgYQgJgWgEgZQgLg3AMg0QAPg9ApgxQAagdAfgVIgGgOQgYg1ACg5QACg3AZgzQAMgZAQgVIgBgCQgxg1gOhLQgNhLAahDQAGgOAHgNQgrgagagtQgjg6AGhEQAEg1AfgvQAfguAvgZQAvgYA4ABQA2AAAvAbQAuAaAdAwQAdAwACA1QACAjgKAiIAKAEQAxAUAlAoQAmAnASAxQATAygDA2QgDA2gYAwQgMAYgRAVQARASANAUQAbAsAJA0QAIA0gMAxQgMA0giAsQgcAlgnAZQAcA1ABA5QACA3gWA1QgWA0gpAlQgVATgYAOIAIAWQAVBGgSBEQgRBEg0AzQg0AzhDARQgdAHgeAAQgnAAgogNg");
	var mask_5_graphics_35 = new cjs.Graphics().p("AjbPrQg/gDgvgjQgsghgVgxQgJgVgFgZQgIgrALgrQALgvAfgkQAigoAzgSQgIgRgFgSQgRg3AIg3QAKhGAug4QAegmAngXQgJgXgFgYQgKg3AMg0QAOg9AqgxQAZgdAggUIgHgOQgYg1ADg6QABg3AZgzQAMgZARgWIgBgBQgxg1gOhLQgOhLAbhDQAFgOAHgNQgqgagbgtQgig6AFhEQAFg1AegvQAfguAvgZQAvgYA3ABQA4AAAuAbQAuAaAdAwQAeAwACA1QABAigJAjIAKAEQAwAUAmAoQAlAnATAxQASAygDA2QgDA2gXAwQgMAYgRAVQAQARANAVQAcAsAIA0QAJA0gMAyQgNA0ghArQgdAlgmAYQAbA1ACA6QABA3gWA1QgWA0gpAlQgVATgYAOIAIAWQAVBGgRBEQgRBEg0AzQg0AzhEARIgZAEIAEAWQAGA7gcA3QgcA4gzAdQguAag2AAIgNAAg");
	var mask_5_graphics_36 = new cjs.Graphics().p("AlCR1QgugQghgiQgagcgOgjQgSgqACguQADgtAVgpQAWgoAkgbQAUgPAWgJQgJgPgHgQQgJgUgFgZQgHgsAKgrQAMguAfgkQAigoAygSQgHgRgGgSQgQg4AIg3QAKhFAug5QAeglAmgXQgJgXgEgZQgLg2AMg0QAPg8ApgxQAageAfgVIgGgNQgYg2ACg6QACg3AZgzQAMgZAQgVIgBgBQgxg1gOhLQgNhLAahEQAGgOAHgNQgrgagagtQgjg6AGhEQAEg1AfguQAfgvAvgYQAugZA4ABQA3ABAvAaQAuAbAdAvQAdAwACA1QACAjgKAiIAKAEQAxAVAlAnQAmAnASAyQATAxgDA2QgDA3gYAvQgMAYgRAVQARASANAUQAbAsAJA1QAIA0gMAyQgMA0giAsQgcAlgnAYQAcA1ABA5QACA3gWA0QgWA0gpAmQgVASgYAOIAIAWQAVBGgSBEQgRBEg0AzQg0A0hEAQIgZAFIADAVQAHA7gcA4QgbA3gzAeQgMAGgLAFQAKAPAHARQATAsgDAxQgDAwgYApQgXApgpAbQgpAbgvAGIgXABQgkAAgigNg");
	var mask_5_graphics_37 = new cjs.Graphics().p("AmOTxQgygOgnglQgmgmgPgxQgFgTgDgYQgBgPACgWQAFguAagpQAZgpAogYQAogZAvgEQgDgWABgWQACgtAWgpQAWgoAkgbQAUgPAWgJQgJgPgHgQQgJgUgFgZQgIgsALgrQALguAfgkQAjgoAygSQgIgRgFgSQgRg4AIg3QAKhFAug5QAfglAmgXQgJgWgFgZQgKg2AMg1QAOg8ApgxQAageAfgVIgHgNQgYg2ADg6QABg3AZgzQANgZAQgVIgBgBQgxg1gOhLQgOhLAbhEQAFgOAHgNQgqgagagtQgig6AFhEQAFg1AeguQAegvAvgYQAvgZA4ABQA4ABAuAaQAuAbAdAvQAeAwACA1QACAjgKAiIAKAEQAwAVAmAnQAlAnATAyQASAxgDA2QgDA3gXAvQgMAYgRAVQAQASANAUQAcAsAIA1QAJA0gMAyQgNA0ghAsQgdAlgmAYQAcA1ABA6QABA3gWAzQgWA0gpAmQgUASgYAOIAHAWQAVBGgRBEQgRBEg0AzQg0A0hEAQIgaAFIAEAVQAHA7gdA4QgcA3gzAeQgLAGgMAFQALAPAHARQASAsgDAxQgDAwgXApQgXApgpAbQgpAbgvAGIgEAAQAIAwgQAxQgRAzgmAjQgmAjg0ANQgaAGgZAAQgaAAgZgHg");
	var mask_5_graphics_38 = new cjs.Graphics().p("AnyVgQg8gUgmgyQgcgkgKgvQgKgvAMgtQALgtAgglQAfglArgSQAdgNAegCIgBgJQgBgPACgWQAFgvAagpQAZgoAogZQAngYAwgEQgEgWACgXQACgsAWgpQAWgpAkgbQATgOAXgKQgJgOgHgQQgJgVgFgZQgIgrALgrQALgvAfgkQAignAzgSQgIgRgFgTQgRg3AIg3QAKhGAug3QAdglAngYQgJgWgFgZQgKg3AMg0QAOg9AqgxQAZgeAggUIgHgOQgYg1ADg6QABg3AZgzQAMgZARgVIgBgCQgxg1gOhLQgOhLAbhDQAFgOAHgNQgqgagbgtQgig6AFhEQAFg1AegvQAfguAvgZQAvgYA4ABQA4AAAuAbQAuAaAdAwQAeAwACA1QABAigJAjIAKAEQAwAUAmAoQAlAnATAxQASAygDA2QgDA2gXAwQgMAYgRAVQAQARANAVQAcAsAIA0QAJA0gMAyQgNA0ghAsQgdAlgmAZQAbA1ACA5QABA3gWA1QgWA0gpAlQgVASgYAOIAIAWQAVBGgRBEQgRBEg0AzQg0AzhEARIgaAFIAEAVQAHA7gdA3QgcA4gzAdQgLAHgMAFQAKAPAIARQASArgDAxQgDAxgXApQgYApgpAbQgoAbgvAFIgFABQAIAwgPAwQgRAzgmAkQgmAjg0AMQgPAEgOACQAHA8gZA1QgQAhgbAaQgbAaghAOQgoARgoAAQgfAAgggKg");
	var mask_5_graphics_39 = new cjs.Graphics().p("AowXZQg4gIgqgiQgpghgUgwQgOgjgBgjQgBgOACgRQAGg1AhgtQAigtAxgVQAhgPAlgBQgFgmAJgkQAMguAfgkQAgglArgTQAcgMAfgDIgBgJQgBgPABgWQAFguAagqQAagoAogYQAngZAwgEQgEgWABgWQADgtAVgpQAWgoAkgbQAUgPAXgKQgKgOgHgQQgJgUgFgZQgHgsAKgrQAMguAfgkQAigoAygSQgIgRgGgSQgQg4AIg2QAKhFAug5QAeglAngXQgJgXgFgZQgLg2AMg1QAPg8ApgyQAagdAfgVIgGgNQgYg2ACg6QACg3AZgzQAMgZARgVIgCgBQgxg1gOhLQgNhLAahEQAGgOAHgNQgrgagagtQgjg6AGhEQAEg1AfguQAfgvAvgYQAvgZA4ABQA3ABAvAaQAuAbAdAvQAdAwACA1QACAjgKAiIAKAEQAxAVAlAnQAmAnASAxQATAygDA2QgDA2gYAwQgMAYgQAVQAQASANAUQAbAsAJA1QAIA0gMAxQgMA1giAsQgcAlgmAYQAbA1ABA6QACA3gWA0QgWA0gpAmQgVASgYAOIAIAWQAVBFgSBEQgRBEg0AzQg0A0hEAQIgZAFIADAVQAHA7gcA4QgcA3gzAdQgLAHgMAFQAKAPAHARQATAsgDAwQgDAxgYApQgXApgpAbQgpAbgvAGIgFAAQAIAwgQAwQgRA0glAjQgmAjg0ANQgOADgPACQAHA8gZA1QgQAhgaAaQgbAagiAOQgiAPgiACQADAZgEAZQgHA1giAtQgjAsgyAUQgjAOgmAAQgQAAgQgCg");
	var mask_5_graphics_40 = new cjs.Graphics().p("AqvX+QgngDgegXQgVgQgNgXQgNgYgCgZQgDgaAIgZQAHgaARgUQAYgdAmgLQAagIAaADIgBgKQAAgNABgRQAGg1AigtQAhgtAxgVQAigPAkgBQgEgmAJglQALgtAgglQAfglArgSQAdgNAegCIgBgJQgBgPACgWQAFgvAagpQAZgoAogZQAogYAvgEQgDgWABgXQACgsAWgpQAWgpAkgbQAUgOAVgKQgJgOgGgQQgJgVgFgZQgIgrALgrQALgvAegkQAjgnAygSQgIgRgFgTQgRg2AIg3QAKhGAug4QAfgmAmgXQgJgWgFgZQgKg3AMg0QAOg9AqgxQAageAfgUIgHgOQgYg1ADg6QABg3AZgzQANgZAQgVIgBgCQgxg1gOhLQgOhLAbhDQAFgOAHgNQgqgagbgtQgig6AFhEQAFg1AegvQAfguAvgZQAvgYA4ABQA4AAAuAbQAuAaAdAwQAeAwACA1QACAigKAjIAKAEQAwAUAmAoQAlAnATAxQASAygDA2QgDA2gXAwQgMAYgRAVQAQARANAVQAcAsAIA0QAJA0gMAyQgNA0ghAsQgdAlgmAZQAcA1ABA5QABA3gWA1QgWA0gpAlQgUATgYAOIAHAWQAVBGgRBDQgRBEg0AzQg0AzhEARIgaAFIAEAVQAHA7gdA3QgcA4gzAdQgLAHgMAFQAKAPAIARQASArgDAxQgDAxgXApQgYApgpAbQgpAbgvAFIgEABQAIAwgQAwQgRAzgmAkQgmAjgzAMQgPAEgOACQAHA8gZA1QgQAhgbAaQgbAaghAOQgiAPgjACQADAZgDAZQgHA1gjAsQgiAsgyAVQgyAUg4gJQgjgFgegPQgEAMgGAMQgSAjghASQgcAQghAAIgLAAg");
	var mask_5_graphics_41 = new cjs.Graphics().p("AsQYqQgbgDgXgNQgWgOgQgVQgQgWgGgaQgJgpATgoQATgpAlgUQAlgUAsAIQATADAPAHIADgMQAIgZAQgUQAZgdAlgLQAbgIAaADIgBgKQgBgOACgQQAGg2AhgtQAigtAxgVQAigOAkgCQgFglAJglQAMguAfgkQAgglArgTQAdgMAegDIgBgJQgBgPABgWQAFguAagpQAagpAogYQAngYAwgFQgEgVABgXQADgtAUgpQAWgoAkgbQAUgPAXgJQgKgOgHgRQgJgUgFgZQgHgsAKgrQAMguAfgkQAigoAzgSQgIgRgGgRQgQg4AIg3QAKhFAug5QAeglAngXQgJgXgFgZQgLg2AMg1QAPg8ApgxQAageAfgUIgGgOQgYg2ACg6QACg3AZgzQAMgZARgVIgCgBQgxg1gOhLQgNhLAahEQAGgNAHgNQgrgbgagtQgjg6AGhEQAEg1AfguQAfgvAvgYQAvgZA4ABQA3ABAvAaQAuAbAdAvQAdAwACA1QACAjgKAiIAKAEQAxAVAlAnQAmAnASAyQATAxgDA2QgDA3gYAvQgLAZgRAVQAQARANAUQAbAsAJA1QAIA0gMAyQgMA0giAsQgcAlgmAYQAbA1ABA6QACA3gWA0QgWA0gpAmQgVATgYAOIAIAVQAVBGgSBEQgRBDg0AzQg0A0hEAQIgZAFIADAVQAHA7gcA4QgcA3gzAeQgLAGgMAFQAKAPAHARQATAsgDAxQgDAwgYApQgXApgpAbQgpAbgvAGIgFAAQAIAwgQAxQgRAzgmAjQgmAjg0ANQgOAEgPABQAIA9gaA0QgPAhgaAaQgbAagiAPQgiAPgiABQADAZgEAZQgHA1giAtQgjAsgyAUQgyAUg3gIQgjgFgegQQgEAMgGAMQgSAjghATQghASgngDQgZgBgVgKQgEAWgNAUQgaAqgvANQgRAGgSAAIgRgCg");
	var mask_5_graphics_42 = new cjs.Graphics().p("AuOYuQgogRgUgjQgUgiADgqQAEgqAagfQAageAqgLQAqgKAlAQQAQAGANALQARgZAbgPQAlgUAsAIQATADAPAHIADgMQAIgZAQgUQAZgdAlgLQAbgIAZADIAAgKQgBgOACgQQAGg2AhgtQAigtAxgVQAhgOAlgCQgFglAJglQAMguAfgkQAgglArgTQAcgMAfgDIgBgJQgBgPABgWQAFguAagpQAagpAogYQAmgYAwgFQgEgVABgXQADgtAVgpQAWgoAkgbQAUgPAWgJQgJgOgHgRQgJgUgFgZQgHgsAKgrQAMguAfgkQAigoAygSQgHgRgGgRQgQg4AIg3QAKhFAug5QAeglAmgXQgIgXgFgZQgLg2AMg1QAPg8ApgxQAageAfgUIgGgOQgYg2ACg6QACg3AZgzQAMgZAQgVIgBgBQgxg1gOhLQgNhLAahEQAGgNAHgNQgrgbgagtQgjg6AGhEQAEg1AfguQAfgvAvgYQAvgZA4ABQA3ABAvAaQAuAbAdAvQAdAwACA1QACAjgKAiIAKAEQAxAVAlAnQAmAnASAyQATAxgDA2QgDA3gYAvQgMAZgQAVQAQARANAUQAbAsAJA1QAIA0gMAyQgMA0giAsQgcAlgnAYQAcA1ABA6QACA3gWA0QgWA0gpAmQgVATgYAOIAIAVQAVBGgSBEQgRBDg0AzQg0A0hEAQIgZAFIADAVQAHA7gcA4QgcA3gzAeQgMAGgLAFQAKAQAHAQQATAsgDAxQgDAwgYApQgXApgpAbQgpAbgvAGIgFAAQAIAxgQAwQgRAzgmAjQgmAjg0ANQgOAEgPABQAHA9gZA0QgQAhgaAaQgbAaghAPQgiAPgjABQAEAZgEAZQgHA1giAtQgjAsgyAUQgyAUg3gIQgkgFgegQQgDANgGALQgSAjghATQghASgngDQgZgBgVgKQgFAWgMAUQgaAqgvANQgZAIgbgEQgbgDgXgNIgNgJIgHAKQgdAggnAJQgOAEgNAAQgaAAgagMg");
	var mask_5_graphics_43 = new cjs.Graphics().p("As4YuQgngRgVgjQgUgiAEgqIABgHIgLAEQguANgpgSQgpgRgVgqQgWgrAKgrQAHghAXgaQAggkA0gEQA1gFAmAeQAmAeAIA0QADATgCARIAQgFQAqgKAmAQQAQAGAMALQASgZAagPQAlgUAtAIQASADAQAHIADgMQAHgZARgUQAYgdAmgLQAbgIAZADIgBgKQAAgOABgQQAGg2AigtQAhgtAxgVQAigOAkgCQgEglAJglQALguAggkQAfglArgTQAdgMAegDIgBgJQgBgPACgWQAFguAZgpQAZgpAogYQAogYAvgFQgDgVABgXQACgtAWgpQAWgoAkgbQAUgPAWgJQgJgOgHgRQgJgUgFgZQgIgsALgrQALguAfgkQAjgoAygSQgIgRgFgRQgRg4AIg3QAKhFAug5QAfglAmgXQgJgXgFgZQgKg2AMg1QAOg8AqgxQAageAfgUIgHgOQgYg2ADg6QABg3AZgzQANgZAQgVIgBgBQgxg1gOhLQgOhLAbhEQAFgNAHgNQgqgbgbgtQgig6AFhEQAFg1AeguQAfgvAvgYQAvgZA4ABQA4ABAuAaQAuAbAdAvQAeAwACA1QACAjgKAiIAKAEQAwAVAmAnQAlAnATAyQASAxgDA2QgDA3gXAvQgMAZgRAVQAQARANAUQAcAsAIA1QAJA0gMAyQgNA0ghAsQgdAlgmAYQAcA1ABA6QABA3gWA0QgWA0gpAmQgUATgYAOIAHAVQAVBGgRBEQgRBDg0AzQg0A0hEAQIgaAFIAEAVQAHA7gdA4QgcA3gzAeQgLAGgMAFQALAQAHAQQASAsgDAxQgDAwgXApQgYApgpAbQgpAbgvAGIgEAAQAIAxgQAwQgRAzgmAjQgmAjg0ANQgPAEgOABQAHA9gZA0QgQAhgbAaQgbAaghAPQgiAPgjABQADAZgDAZQgHA1giAtQgiAsgyAUQgyAUg4gIQgjgFgegQQgDANgHALQgSAjghATQggASgogDQgYgBgWgKQgEAWgMAUQgaAqgwANQgZAIgbgEQgagDgXgNIgNgJIgIAKQgcAggoAJQgNAEgNAAQgaAAgbgMg");
	var mask_5_graphics_44 = new cjs.Graphics().p("As0YuQgngRgVgjQgUgiAEgqIAAgHIgKAEQguANgpgSQgpgRgVgqQgWgrAKgrQAHghAXgaQAHgIAJgHQgTgMgNgTQgcgkAEgxQADgyAgggQAbgcApgHQApgIAjAQQAkAQAVAjQAVAkgCAnQgDAngaAgQgJANgMAJIAKAGQAmAeAIA0QADATgCARIAQgFQAqgKAmAQQAPAGANALQASgZAagPQAlgUAtAIQASADAQAHIADgMQAHgZARgUQAYgdAmgLQAagIAaADIgBgKQAAgOABgQQAGg2AigtQAhgtAxgVQAigOAkgCQgFglAKglQALguAggkQAfglArgTQAdgMAegDIgBgJQgBgPACgWQAFguAZgpQAZgpAogYQAngYAwgFQgEgVACgXQACgtAWgpQAWgoAkgbQATgPAXgJQgJgOgHgRQgJgUgFgZQgIgsALgrQALguAfgkQAjgoAygSQgIgRgFgRQgRg4AIg3QAKhFAug5QAeglAngXQgJgXgFgZQgKg2AMg1QAOg8AqgxQAZgeAggUIgHgOQgYg2ADg6QABg3AZgzQAMgZARgVIgBgBQgxg1gOhLQgOhLAbhEQAFgNAHgNQgqgbgbgtQgig6AFhEQAFg1AeguQAfgvAvgYQAvgZA4ABQA4ABAuAaQAuAbAdAvQAeAwACA1QACAjgKAiIAKAEQAwAVAmAnQAlAnATAyQASAxgDA2QgDA3gXAvQgMAZgRAVQAQARANAUQAcAsAIA1QAJA0gMAyQgNA0ghAsQgdAlgmAYQAbA1ACA6QABA3gWA0QgWA0gpAmQgUATgZAOIAIAVQAVBGgRBEQgRBDg0AzQg0A0hEAQIgaAFIAEAVQAHA7gdA4QgcA3gzAeQgLAGgMAFQAKAQAIAQQASAsgDAxQgDAwgXApQgYApgpAbQgpAbgvAGIgFAAQAIAxgPAwQgRAzgmAjQgmAjg0ANQgPAEgOABQAHA9gZA0QgQAhgbAaQgbAaghAPQgjAPgiABQADAZgDAZQgHA1giAtQgiAsgyAUQgyAUg4gIQgjgFgegQQgEANgGALQgSAjghATQggASgogDQgZgBgVgKQgEAWgMAUQgaAqgwANQgZAIgbgEQgagDgXgNIgNgJIgIAKQgcAggoAJQgNAEgOAAQgaAAgagMg");
	var mask_5_graphics_45 = new cjs.Graphics().p("As0YuQgngRgVgjQgUgiAEgqIAAgHIgKAEQguANgpgSQgpgRgVgqQgWgrAKgrQAHghAXgaQAHgIAJgHQgTgMgNgTQgcgkAEgxQADgyAgggQAbgcApgHQAKgCALgBQgJgaACgeQAFguAdgfQAdgfAtgHQAtgHAmAVQAlAVARAqQASArgLApQgJAegWAXQgWAYgeAKQgTAHgUAAQAJAagBAbQgDAngaAgQgJANgMAJIAKAGQAmAeAIA0QADATgCARIAQgFQAqgKAmAQQAPAGANALQASgZAagPQAlgUAtAIQASADAQAHIADgMQAHgZARgUQAYgdAmgLQAagIAaADIgBgKQAAgOABgQQAGg2AigtQAhgtAxgVQAigOAkgCQgFglAKglQALguAggkQAfglArgTQAdgMAegDIgBgJQgBgPACgWQAFguAZgpQAZgpAogYQAngYAwgFQgEgVACgXQACgtAWgpQAWgoAkgbQATgPAXgJQgJgOgHgRQgJgUgFgZQgIgsALgrQALguAfgkQAjgoAygSQgIgRgFgRQgRg4AIg3QAKhFAug5QAeglAngXQgJgXgFgZQgKg2AMg1QAOg8AqgxQAZgeAggUIgHgOQgYg2ADg6QABg3AZgzQAMgZARgVIgBgBQgxg1gOhLQgOhLAbhEQAFgNAHgNQgqgbgbgtQgig6AFhEQAFg1AeguQAfgvAvgYQAvgZA4ABQA4ABAuAaQAuAbAdAvQAeAwACA1QACAjgKAiIAKAEQAwAVAmAnQAlAnATAyQASAxgDA2QgDA3gXAvQgMAZgRAVQAQARANAUQAcAsAIA1QAJA0gMAyQgNA0ghAsQgdAlgmAYQAbA1ACA6QABA3gWA0QgWA0gpAmQgUATgZAOIAIAVQAVBGgRBEQgRBDg0AzQg0A0hEAQIgaAFIAEAVQAHA7gdA4QgcA3gzAeQgLAGgMAFQAKAQAIAQQASAsgDAxQgDAwgXApQgYApgpAbQgpAbgvAGIgFAAQAIAxgPAwQgRAzgmAjQgmAjg0ANQgPAEgOABQAHA9gZA0QgQAhgbAaQgbAaghAPQgjAPgiABQADAZgDAZQgHA1giAtQgiAsgyAUQgyAUg4gIQgjgFgegQQgEANgGALQgSAjghATQggASgogDQgZgBgVgKQgEAWgMAUQgaAqgwANQgZAIgbgEQgagDgXgNIgNgJIgIAKQgcAggoAJQgNAEgOAAQgaAAgagMg");
	var mask_5_graphics_46 = new cjs.Graphics().p("As0YuQgngRgVgjQgUgiAEgqIAAgHIgKAEQguANgpgSQgpgRgVgqQgWgrAKgrQAHghAXgaQAHgIAJgHQgTgMgNgTQgcgkAEgxQADgyAgggQAbgcApgHQAKgCALgBQgJgaACgeQAFguAdgfQAdgfAtgHQAjgFAeALQADgjATgcQAYgiApgNQAqgOAnANQAmANAaAkQAZAjgBApQgBApgbAjQgaAigoALQgnAMgogPQgBALgDAMQgJAegWAXQgWAYgeAKQgTAHgUAAQAJAagBAbQgDAngaAgQgJANgMAJIAKAGQAmAeAIA0QADATgCARIAQgFQAqgKAmAQQAPAGANALQASgZAagPQAlgUAtAIQASADAQAHIADgMQAHgZARgUQAYgdAmgLQAagIAaADIgBgKQAAgOABgQQAGg2AigtQAhgtAxgVQAigOAkgCQgFglAKglQALguAggkQAfglArgTQAdgMAegDIgBgJQgBgPACgWQAFguAZgpQAZgpAogYQAngYAwgFQgEgVACgXQACgtAWgpQAWgoAkgbQATgPAXgJQgJgOgHgRQgJgUgFgZQgIgsALgrQALguAfgkQAjgoAygSQgIgRgFgRQgRg4AIg3QAKhFAug5QAeglAngXQgJgXgFgZQgKg2AMg1QAOg8AqgxQAZgeAggUIgHgOQgYg2ADg6QABg3AZgzQAMgZARgVIgBgBQgxg1gOhLQgOhLAbhEQAFgNAHgNQgqgbgbgtQgig6AFhEQAFg1AeguQAfgvAvgYQAvgZA4ABQA4ABAuAaQAuAbAdAvQAeAwACA1QACAjgKAiIAKAEQAwAVAmAnQAlAnATAyQASAxgDA2QgDA3gXAvQgMAZgRAVQAQARANAUQAcAsAIA1QAJA0gMAyQgNA0ghAsQgdAlgmAYQAbA1ACA6QABA3gWA0QgWA0gpAmQgUATgZAOIAIAVQAVBGgRBEQgRBDg0AzQg0A0hEAQIgaAFIAEAVQAHA7gdA4QgcA3gzAeQgLAGgMAFQAKAQAIAQQASAsgDAxQgDAwgXApQgYApgpAbQgpAbgvAGIgFAAQAIAxgPAwQgRAzgmAjQgmAjg0ANQgPAEgOABQAHA9gZA0QgQAhgbAaQgbAaghAPQgjAPgiABQADAZgDAZQgHA1giAtQgiAsgyAUQgyAUg4gIQgjgFgegQQgEANgGALQgSAjghATQggASgogDQgZgBgVgKQgEAWgMAUQgaAqgwANQgZAIgbgEQgagDgXgNIgNgJIgIAKQgcAggoAJQgNAEgOAAQgaAAgagMg");
	var mask_5_graphics_47 = new cjs.Graphics().p("As0YuQgngRgVgjQgUgiAEgqIAAgHIgKAEQguANgpgSQgpgRgVgqQgWgrAKgrQAHghAXgaQAHgIAJgHQgTgMgNgTQgcgkAEgxQADgyAgggQAbgcApgHQAKgCALgBQgJgaACgeQAFguAdgfQAdgfAtgHQAjgFAeALQADgjATgcQAYgiApgNQAqgOAnANIADACQAAgMADgMQAHghAWgaQAfgjAygGQAygGAmAaQAmAaANAwQANAxgVApQgVAqguASQgvATgsgPIgBgBQgBApgbAjQgaAigoALQgnAMgogPQgBALgDAMQgJAegWAXQgWAYgeAKQgTAHgUAAQAJAagBAbQgDAngaAgQgJANgMAJIAKAGQAmAeAIA0QADATgCARIAQgFQAqgKAmAQQAPAGANALQASgZAagPQAlgUAtAIQASADAQAHIADgMQAHgZARgUQAYgdAmgLQAagIAaADIgBgKQAAgOABgQQAGg2AigtQAhgtAxgVQAigOAkgCQgFglAKglQALguAggkQAfglArgTQAdgMAegDIgBgJQgBgPACgWQAFguAZgpQAZgpAogYQAngYAwgFQgEgVACgXQACgtAWgpQAWgoAkgbQATgPAXgJQgJgOgHgRQgJgUgFgZQgIgsALgrQALguAfgkQAjgoAygSQgIgRgFgRQgRg4AIg3QAKhFAug5QAeglAngXQgJgXgFgZQgKg2AMg1QAOg8AqgxQAZgeAggUIgHgOQgYg2ADg6QABg3AZgzQAMgZARgVIgBgBQgxg1gOhLQgOhLAbhEQAFgNAHgNQgqgbgbgtQgig6AFhEQAFg1AeguQAfgvAvgYQAvgZA4ABQA4ABAuAaQAuAbAdAvQAeAwACA1QACAjgKAiIAKAEQAwAVAmAnQAlAnATAyQASAxgDA2QgDA3gXAvQgMAZgRAVQAQARANAUQAcAsAIA1QAJA0gMAyQgNA0ghAsQgdAlgmAYQAbA1ACA6QABA3gWA0QgWA0gpAmQgUATgZAOIAIAVQAVBGgRBEQgRBDg0AzQg0A0hEAQIgaAFIAEAVQAHA7gdA4QgcA3gzAeQgLAGgMAFQAKAQAIAQQASAsgDAxQgDAwgXApQgYApgpAbQgpAbgvAGIgFAAQAIAxgPAwQgRAzgmAjQgmAjg0ANQgPAEgOABQAHA9gZA0QgQAhgbAaQgbAaghAPQgjAPgiABQADAZgDAZQgHA1giAtQgiAsgyAUQgyAUg4gIQgjgFgegQQgEANgGALQgSAjghATQggASgogDQgZgBgVgKQgEAWgMAUQgaAqgwANQgZAIgbgEQgagDgXgNIgNgJIgIAKQgcAggoAJQgNAEgOAAQgaAAgagMg");
	var mask_5_graphics_48 = new cjs.Graphics().p("As0YuQgngRgVgjQgUgiAEgqIAAgHIgKAEQguANgpgSQgpgRgVgqQgWgrAKgrQAHghAXgaQAHgIAJgHQgTgMgNgTQgcgkAEgxQADgyAgggQAbgcApgHQAKgCALgBQgJgaACgeQAFguAdgfQAdgfAtgHQAjgFAeALQADgjATgcQAYgiApgNQAqgOAnANIADACQAAgMADgMQAHghAWgaQAfgjAygGQAtgFAjAUIACgMQAJgvAigdQAigcAwAAQAwAAAiAcQAjAdAJAwQAIAwgXAnQgZArgtAOQgqAOgtgRIgRgIQgCAZgLAWQgVAqguASQgvATgsgPIgBgBQgBApgbAjQgaAigoALQgnAMgogPQgBALgDAMQgJAegWAXQgWAYgeAKQgTAHgUAAQAJAagBAbQgDAngaAgQgJANgMAJIAKAGQAmAeAIA0QADATgCARIAQgFQAqgKAmAQQAPAGANALQASgZAagPQAlgUAtAIQASADAQAHIADgMQAHgZARgUQAYgdAmgLQAagIAaADIgBgKQAAgOABgQQAGg2AigtQAhgtAxgVQAigOAkgCQgFglAKglQALguAggkQAfglArgTQAdgMAegDIgBgJQgBgPACgWQAFguAZgpQAZgpAogYQAngYAwgFQgEgVACgXQACgtAWgpQAWgoAkgbQATgPAXgJQgJgOgHgRQgJgUgFgZQgIgsALgrQALguAfgkQAjgoAygSQgIgRgFgRQgRg4AIg3QAKhFAug5QAeglAngXQgJgXgFgZQgKg2AMg1QAOg8AqgxQAZgeAggUIgHgOQgYg2ADg6QABg3AZgzQAMgZARgVIgBgBQgxg1gOhLQgOhLAbhEQAFgNAHgNQgqgbgbgtQgig6AFhEQAFg1AeguQAfgvAvgYQAvgZA4ABQA4ABAuAaQAuAbAdAvQAeAwACA1QACAjgKAiIAKAEQAwAVAmAnQAlAnATAyQASAxgDA2QgDA3gXAvQgMAZgRAVQAQARANAUQAcAsAIA1QAJA0gMAyQgNA0ghAsQgdAlgmAYQAbA1ACA6QABA3gWA0QgWA0gpAmQgUATgZAOIAIAVQAVBGgRBEQgRBDg0AzQg0A0hEAQIgaAFIAEAVQAHA7gdA4QgcA3gzAeQgLAGgMAFQAKAQAIAQQASAsgDAxQgDAwgXApQgYApgpAbQgpAbgvAGIgFAAQAIAxgPAwQgRAzgmAjQgmAjg0ANQgPAEgOABQAHA9gZA0QgQAhgbAaQgbAaghAPQgjAPgiABQADAZgDAZQgHA1giAtQgiAsgyAUQgyAUg4gIQgjgFgegQQgEANgGALQgSAjghATQggASgogDQgZgBgVgKQgEAWgMAUQgaAqgwANQgZAIgbgEQgagDgXgNIgNgJIgIAKQgcAggoAJQgNAEgOAAQgaAAgagMg");
	var mask_5_graphics_49 = new cjs.Graphics().p("As0YuQgngRgVgjQgUgiAEgqIAAgHIgKAEQguANgpgSQgpgRgVgqQgWgrAKgrQAHghAXgaQAHgIAJgHQgTgMgNgTQgcgkAEgxQADgyAgggQAbgcApgHQAKgCALgBQgJgaACgeQAFguAdgfQAdgfAtgHQAjgFAeALQADgjATgcQAYgiApgNQAqgOAnANIADACQAAgMADgMQAHghAWgaQAfgjAygGQAtgFAjAUIACgMQAJgvAigdQAigcAwAAQAoAAAfAUQAAgZAKgZQAKgaAUgTQAggeAugEQAvgEAkAZQAjAYAOAtQANAtgQAoQgQApgoAXQgoAWgrgHQgcgEgXgRQACAlgTAfQgZArgtAOQgqAOgtgRIgRgIQgCAZgLAWQgVAqguASQgvATgsgPIgBgBQgBApgbAjQgaAigoALQgnAMgogPQgBALgDAMQgJAegWAXQgWAYgeAKQgTAHgUAAQAJAagBAbQgDAngaAgQgJANgMAJIAKAGQAmAeAIA0QADATgCARIAQgFQAqgKAmAQQAPAGANALQASgZAagPQAlgUAtAIQASADAQAHIADgMQAHgZARgUQAYgdAmgLQAagIAaADIgBgKQAAgOABgQQAGg2AigtQAhgtAxgVQAigOAkgCQgFglAKglQALguAggkQAfglArgTQAdgMAegDIgBgJQgBgPACgWQAFguAZgpQAZgpAogYQAngYAwgFQgEgVACgXQACgtAWgpQAWgoAkgbQATgPAXgJQgJgOgHgRQgJgUgFgZQgIgsALgrQALguAfgkQAjgoAygSQgIgRgFgRQgRg4AIg3QAKhFAug5QAeglAngXQgJgXgFgZQgKg2AMg1QAOg8AqgxQAZgeAggUIgHgOQgYg2ADg6QABg3AZgzQAMgZARgVIgBgBQgxg1gOhLQgOhLAbhEQAFgNAHgNQgqgbgbgtQgig6AFhEQAFg1AeguQAfgvAvgYQAvgZA4ABQA4ABAuAaQAuAbAdAvQAeAwACA1QACAjgKAiIAKAEQAwAVAmAnQAlAnATAyQASAxgDA2QgDA3gXAvQgMAZgRAVQAQARANAUQAcAsAIA1QAJA0gMAyQgNA0ghAsQgdAlgmAYQAbA1ACA6QABA3gWA0QgWA0gpAmQgUATgZAOIAIAVQAVBGgRBEQgRBDg0AzQg0A0hEAQIgaAFIAEAVQAHA7gdA4QgcA3gzAeQgLAGgMAFQAKAQAIAQQASAsgDAxQgDAwgXApQgYApgpAbQgpAbgvAGIgFAAQAIAxgPAwQgRAzgmAjQgmAjg0ANQgPAEgOABQAHA9gZA0QgQAhgbAaQgbAaghAPQgjAPgiABQADAZgDAZQgHA1giAtQgiAsgyAUQgyAUg4gIQgjgFgegQQgEANgGALQgSAjghATQggASgogDQgZgBgVgKQgEAWgMAUQgaAqgwANQgZAIgbgEQgagDgXgNIgNgJIgIAKQgcAggoAJQgNAEgOAAQgaAAgagMg");
	var mask_5_graphics_50 = new cjs.Graphics().p("As0YuQgngRgVgjQgUgiAEgqIAAgHIgKAEQguANgpgSQgpgRgVgqQgWgrAKgrQAHghAXgaQAHgIAJgHQgTgMgNgTQgcgkAEgxQADgyAgggQAbgcApgHQAKgCALgBQgJgaACgeQAFguAdgfQAdgfAtgHQAjgFAeALQADgjATgcQAYgiApgNQAqgOAnANIADACQAAgMADgMQAHghAWgaQAfgjAygGQAtgFAjAUIACgMQAJgvAigdQAigcAwAAQAoAAAfAUQAAgZAKgZQAKgaAUgTQAggeAugEQAvgEAkAZIAAAAQAJgTAOgQQAeghAvgHQAwgGAmAYQAaAQAOAaQASgYAZgSQATgPAXgJQgJgOgHgRQgJgUgFgZQgIgsALgrQALguAfgkQAjgoAygSQgIgRgFgRQgRg4AIg3QAKhFAug5QAeglAngXQgJgXgFgZQgKg2AMg1QAOg8AqgxQAZgeAggUIgHgOQgYg2ADg6QABg3AZgzQAMgZARgVIgBgBQgxg1gOhLQgOhLAbhEQAFgNAHgNQgqgbgbgtQgig6AFhEQAFg1AeguQAfgvAvgYQAvgZA4ABQA4ABAuAaQAuAbAdAvQAeAwACA1QACAjgKAiIAKAEQAwAVAmAnQAlAnATAyQASAxgDA2QgDA3gXAvQgMAZgRAVQAQARANAUQAcAsAIA1QAJA0gMAyQgNA0ghAsQgdAlgmAYQAbA1ACA6QABA3gWA0QgWA0gpAmQgUATgZAOIAIAVQAVBGgRBEQgRBDg0AzQg0A0hEAQIgaAFIAEAVQAHA7gdA4QgcA3gzAeQgLAGgMAFQAKAQAIAQQASAsgDAxQgDAwgXApQgYApgpAbQgpAbgvAGIgFAAQAIAxgPAwQgRAzgmAjQgmAjg0ANQgPAEgOABQAHA9gZA0QgQAhgbAaQgbAaghAPQgjAPgiABQADAZgDAZQgHA1giAtQgiAsgyAUQgyAUg4gIQgjgFgegQQgEANgGALQgSAjghATQggASgogDQgZgBgVgKQgEAWgMAUQgaAqgwANQgZAIgbgEQgagDgXgNIgNgJIgIAKQgcAggoAJQgNAEgOAAQgaAAgagMgArPVCQAPAGANALQASgZAagPQAlgUAtAIQASADAQAHIADgMQAHgZARgUQAYgdAmgLQAagIAaADIgBgKQAAgOABgQQAGg2AigtQAhgtAxgVQAigOAkgCQgFglAKglQALguAggkQAfglArgTQAdgMAegDIgBgJQgBgPACgWQAFguAZgpQAVgiAfgXQgYgFgUgOQgQAmgnAWQgoAWgrgHQgcgEgXgRQACAlgTAfQgZArgtAOQgqAOgtgRIgRgIQgCAZgLAWQgVAqguASQgvATgsgPIgBgBQgBApgbAjQgaAigoALQgnAMgogPQgBALgDAMQgJAegWAXQgWAYgeAKQgTAHgUAAQAJAagBAbQgDAngaAgQgJANgMAJIAKAGQAmAeAIA0QADATgCARIAQgFQARgDAPAAQAZAAAXAJg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(30).to({graphics:mask_5_graphics_30,x:348.0526,y:181.6605}).wait(1).to({graphics:mask_5_graphics_31,x:356.0331,y:199.0419}).wait(1).to({graphics:mask_5_graphics_32,x:356.6884,y:215.8201}).wait(1).to({graphics:mask_5_graphics_33,x:356.2312,y:232.6246}).wait(1).to({graphics:mask_5_graphics_34,x:350.7956,y:248.5516}).wait(1).to({graphics:mask_5_graphics_35,x:345.345,y:260.7916}).wait(1).to({graphics:mask_5_graphics_36,x:340.786,y:275.8403}).wait(1).to({graphics:mask_5_graphics_37,x:331.7062,y:287.6419}).wait(1).to({graphics:mask_5_graphics_38,x:322.6437,y:299.0642}).wait(1).to({graphics:mask_5_graphics_39,x:313.07,y:310.3498}).wait(1).to({graphics:mask_5_graphics_40,x:305.9103,y:313.869}).wait(1).to({graphics:mask_5_graphics_41,x:296.854,y:318.4037}).wait(1).to({graphics:mask_5_graphics_42,x:287.7752,y:319.8009}).wait(1).to({graphics:mask_5_graphics_43,x:279.1057,y:319.8009}).wait(1).to({graphics:mask_5_graphics_44,x:278.7315,y:319.8009}).wait(1).to({graphics:mask_5_graphics_45,x:278.7315,y:319.8009}).wait(1).to({graphics:mask_5_graphics_46,x:278.7315,y:319.8009}).wait(1).to({graphics:mask_5_graphics_47,x:278.7315,y:319.8009}).wait(1).to({graphics:mask_5_graphics_48,x:278.7315,y:319.8009}).wait(1).to({graphics:mask_5_graphics_49,x:278.7315,y:319.8009}).wait(1).to({graphics:mask_5_graphics_50,x:278.7315,y:319.8009}).wait(34));

	// 第四畫
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A3629").s().p("AtXWpQhPg4gshoQgNgggJghIgFgbQAPgwAbguQgrBbAcBXQAXBHBFA9QAiAeAeAQQEIgBGMm8QDFjeCRjdIA5hwQCCj9BCijIAohvQCPkXAYl1QAHh1gFhwIgHhZQhAkfAeh0QAJgkASgOQAJgIAHAAQBAglBfBsQAvA2AiA9QA4AnAmDhQAUBwAIBpIh0HHImLNiQg1CFkRFQQiICoh9CNQlWDyjhAAQhxAAhTg8gAs+OpQCtikFDiYQEdiGEIhJIgPAqQhbgHl/CuIltCxQhyBGhNBDQhUBRgxBVQAnhSBehUg");
	this.shape_5.setTransform(280.025,319.3152);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(30).to({_off:false},0).wait(54));

	// 遮色片3 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_20 = new cjs.Graphics().p("AhmFkIAArHIDOAAIAALHg");
	var mask_6_graphics_21 = new cjs.Graphics().p("AkXFkIAArHIIvAAIAALHg");
	var mask_6_graphics_22 = new cjs.Graphics().p("AnHFkIAArHIOPAAIAALHg");
	var mask_6_graphics_23 = new cjs.Graphics().p("Ap3FkIAArHITvAAIAALHg");
	var mask_6_graphics_24 = new cjs.Graphics().p("AsnFkIAArHIZPAAIAALHg");
	var mask_6_graphics_25 = new cjs.Graphics().p("AvYFkIAArHIewAAIAALHg");
	var mask_6_graphics_26 = new cjs.Graphics().p("AyIFkIAArHMAkRAAAIAALHg");
	var mask_6_graphics_27 = new cjs.Graphics().p("A04FkIAArHMApxAAAIAALHg");
	var mask_6_graphics_28 = new cjs.Graphics().p("A3oFkIAArHMAvRAAAIAALHg");
	var mask_6_graphics_29 = new cjs.Graphics().p("AsMeFIAArJMA0yAAAIAALJg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_6_graphics_20,x:191.95,y:349.375}).wait(1).to({graphics:mask_6_graphics_21,x:209.575,y:349.375}).wait(1).to({graphics:mask_6_graphics_22,x:227.2,y:349.375}).wait(1).to({graphics:mask_6_graphics_23,x:244.825,y:349.375}).wait(1).to({graphics:mask_6_graphics_24,x:262.45,y:349.375}).wait(1).to({graphics:mask_6_graphics_25,x:280.1,y:349.375}).wait(1).to({graphics:mask_6_graphics_26,x:297.725,y:349.375}).wait(1).to({graphics:mask_6_graphics_27,x:315.35,y:349.375}).wait(1).to({graphics:mask_6_graphics_28,x:332.975,y:349.375}).wait(1).to({graphics:mask_6_graphics_29,x:259.7642,y:192.5}).wait(55));

	// 第三畫
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#332F1F").s().p("AzuDaQhFgigmg6IgYgzIN7irIFahMILkhYQI9gFCuBuQA2AjAHApQAEAVgHAOQgeCOn/gqQifgNi8gfIidgaQkfgGlZBZQhsAdhlAiIhQAdQkWBki/AAQh/AAhZgrg");
	this.shape_6.setTransform(368.1727,339.6402);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(20).to({_off:false},0).wait(64));

	// 遮色片2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_10 = new cjs.Graphics().p("AhUDhIAAnBICpAAIAAHBg");
	var mask_7_graphics_11 = new cjs.Graphics().p("AifDhIAAnBIE/AAIAAHBg");
	var mask_7_graphics_12 = new cjs.Graphics().p("AjqDhIAAnBIHVAAIAAHBg");
	var mask_7_graphics_13 = new cjs.Graphics().p("Ak1DhIAAnBIJrAAIAAHBg");
	var mask_7_graphics_14 = new cjs.Graphics().p("AmADhIAAnBIMBAAIAAHBg");
	var mask_7_graphics_15 = new cjs.Graphics().p("AnLDhIAAnBIOXAAIAAHBg");
	var mask_7_graphics_16 = new cjs.Graphics().p("AoWDhIAAnBIQtAAIAAHBg");
	var mask_7_graphics_17 = new cjs.Graphics().p("AphDhIAAnBITDAAIAAHBg");
	var mask_7_graphics_18 = new cjs.Graphics().p("AqsDhIAAnBIVZAAIAAHBg");
	var mask_7_graphics_19 = new cjs.Graphics().p("AIXZPIAAnCIXwAAIAAHCg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_7_graphics_10,x:267.5,y:300.45}).wait(1).to({graphics:mask_7_graphics_11,x:275,y:300.45}).wait(1).to({graphics:mask_7_graphics_12,x:282.5,y:300.45}).wait(1).to({graphics:mask_7_graphics_13,x:290,y:300.45}).wait(1).to({graphics:mask_7_graphics_14,x:297.5,y:300.45}).wait(1).to({graphics:mask_7_graphics_15,x:305,y:300.45}).wait(1).to({graphics:mask_7_graphics_16,x:312.5,y:300.45}).wait(1).to({graphics:mask_7_graphics_17,x:320,y:300.45}).wait(1).to({graphics:mask_7_graphics_18,x:327.5,y:300.45}).wait(1).to({graphics:mask_7_graphics_19,x:205.5075,y:161.475}).wait(65));

	// 第二畫
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#332F1F").s().p("AoVA0QgogWgVgVIgOgRINuiKQBwglB9A0QA+AaAoAhQgCBXhMA4QgYARgcANIgYAIQhRgBkMAbIj8AbQkDgpiAhFg");
	this.shape_7.setTransform(342.025,296.2144);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(10).to({_off:false},0).wait(74));

	// 遮色片1 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_0 = new cjs.Graphics().p("Ag2EnIAApNIBtAAIAAJNg");
	var mask_8_graphics_1 = new cjs.Graphics().p("AiGEnIAApNIENAAIAAJNg");
	var mask_8_graphics_2 = new cjs.Graphics().p("AjVEnIAApNIGrAAIAAJNg");
	var mask_8_graphics_3 = new cjs.Graphics().p("AklEnIAApNIJLAAIAAJNg");
	var mask_8_graphics_4 = new cjs.Graphics().p("Al1EnIAApNILrAAIAAJNg");
	var mask_8_graphics_5 = new cjs.Graphics().p("AnFEnIAApNIOLAAIAAJNg");
	var mask_8_graphics_6 = new cjs.Graphics().p("AoUEnIAApNIQpAAIAAJNg");
	var mask_8_graphics_7 = new cjs.Graphics().p("ApkEnIAApNITJAAIAAJNg");
	var mask_8_graphics_8 = new cjs.Graphics().p("Aq0EnIAApNIVpAAIAAJNg");
	var mask_8_graphics_9 = new cjs.Graphics().p("AItV9IAApOIYKAAIAAJOg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:mask_8_graphics_0,x:271.5,y:251.45}).wait(1).to({graphics:mask_8_graphics_1,x:279.475,y:251.45}).wait(1).to({graphics:mask_8_graphics_2,x:287.45,y:251.45}).wait(1).to({graphics:mask_8_graphics_3,x:295.425,y:251.45}).wait(1).to({graphics:mask_8_graphics_4,x:303.4,y:251.45}).wait(1).to({graphics:mask_8_graphics_5,x:311.375,y:251.45}).wait(1).to({graphics:mask_8_graphics_6,x:319.35,y:251.45}).wait(1).to({graphics:mask_8_graphics_7,x:327.325,y:251.45}).wait(1).to({graphics:mask_8_graphics_8,x:335.3,y:251.45}).wait(1).to({graphics:mask_8_graphics_9,x:210.2754,y:140.475}).wait(75));

	// 第一畫
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#332F20").s().p("AoVDBQgzgMgsgUIghgRIHpjiIBjgeQCLgmDFgjIAdgFQC3geBwAUQA5ALATAQQgrCCijBSQgzAZg5ASIgvANInpBSQhqAghlAAQhHAAhEgQg");
	this.shape_8.setTransform(354.3,254.6058);

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(84));

	// 底稿顏色
	this.instance = new lib.小燈籠();
	this.instance.setTransform(147.7,123.1,0.4111,0.4449,0,0,0,9.8,-57.6);

	this.instance_1 = new lib.中燈籠();
	this.instance_1.setTransform(375.75,163.85,0.5586,0.6303,0,0,0,-103,-78.6);

	this.instance_2 = new lib.大燈籠();
	this.instance_2.setTransform(257.9,285.9,0.8104,0.8665,0,0,0,-1.9,-48.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5F3F2").s().p("EgruAs5MAAAhZxMBXdAAAMAAABZxg");
	this.shape_9.setTransform(279.925,287.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(84));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(279.5,287.8,280.4,287.2);
// library properties:
lib.properties = {
	id: '29BBFF96B013E14C81C3F8AFBE673EBE',
	width: 559,
	height: 575,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/燈籠底搞_atlas_1.png?1639203221928", id:"燈籠底搞_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['29BBFF96B013E14C81C3F8AFBE673EBE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;