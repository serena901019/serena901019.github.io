(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"手繪女人_atlas_1", frames: [[0,0,623,434],[0,436,278,280],[581,467,153,408],[625,0,180,465],[280,669,192,322],[0,718,231,138],[280,436,299,231],[474,877,312,103],[474,669,54,128]]}
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



(lib.CachedBmp_9 = function() {
	this.initialize(ss["手繪女人_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["手繪女人_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["手繪女人_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["手繪女人_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["手繪女人_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["手繪女人_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["手繪女人_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["手繪女人_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["手繪女人_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7660,5107);// helper functions:

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


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7ZTvMAAAgndMA2zAAAMAAAAndg");
	mask.setTransform(175.425,126.3);

	// 圖層_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.0458,0.0495);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,350.8,252.6), null);


(lib.手握筆 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_12
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(282.9,207.3,1.6129,1.6414,0,0,0,175.4,126.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.手握筆, new cjs.Rectangle(0,0,565.9,414.6), null);


// stage content:
(lib.手繪女人 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pen11
	this.instance = new lib.手握筆();
	this.instance.setTransform(422.55,377.65,1,1,0,0,0,282.9,207.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(170).to({_off:false},0).wait(1).to({x:415.55,y:387.45},0).wait(1).to({x:420.45,y:397.95},0).wait(1).to({x:430.95,y:406.35},0).wait(1).to({x:433.75,y:414.75},0).wait(1).to({x:426.75,y:427.35},0).wait(1).to({x:423.25,y:439.25},0).wait(4));

	// 遮色片11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_170 = new cjs.Graphics().p("AgSBXQgagFgRgRQgXgWgEghQgEghASgaQARgZAegKQAegKAcALQAcAKARAcQARAbgEAdQgDAYgRAVQgQAUgXAIQgOAGgPAAQgJAAgKgDg");
	var mask_graphics_171 = new cjs.Graphics().p("Ag6CGQgbgFgUgVQgUgVgFgbQgEgbAMgaQANgZAYgOQASgKAVgBQgBgdAPgXQARgZAegKQAegKAcALQAdAKAQAcQARAbgEAeQgDAYgQAUQgQAUgYAIQgMAFgNAAQABAbgNAWQgOAXgaAMQgTAIgSAAIgQgBg");
	var mask_graphics_172 = new cjs.Graphics().p("AghDCQgggCgZgYQgYgYgDghQgCgeATgbIgFgFQgUgVgFgaQgEgaAMgaQANgbAYgNQASgLAVgBQgBgdAPgXQARgZAegJQAegKAcAKQAdALAQAbQARAcgEAdQgDAZgQAUQgQAUgYAJQgMAEgNABQABAZgNAWIgEAFQASAPAHAWQAIAXgEAZQgHAfgbAVQgZATgbAAIgHAAg");
	var mask_graphics_173 = new cjs.Graphics().p("AAxDoQgggDgWgaQgUgWgEgaQgKACgLgBQgggCgZgZQgYgYgDggQgCgfATgbIgFgEQgUgUgFgbQgEgbAMgaQANgaAYgOQASgKAVgBQgBgdAPgXQARgZAfgKQAdgKAcALQAdAKAQAcQARAbgEAeQgDAYgQAVQgQAUgYAIQgMAFgNAAQABAbgNAWIgEAEQASAPAHAWQAEAJABAJQAZgFAYAKQAdAMAQAfQAQAfgIAfQgIAfgcAUQgYARgbAAIgKgBg");
	var mask_graphics_174 = new cjs.Graphics().p("ABJEVQgagFgTgTQgTgUgGgZQgCgNABgNQgWgGgRgUQgUgWgEgaQgKACgLgBQgggCgZgZQgYgYgDggQgCgdATgbIgFgFQgUgVgFgbQgEgbAMgaQANgaAYgOQASgKAVgBQgBgdAPgXQARgZAfgKQAegKAbALQAdAKAQAcQARAbgEAeQgDAYgQAVQgQAUgYAIQgMAFgMAAQABAbgNAWIgEAFQARAPAHAWQADAJACAJQAZgFAYAJQAdAMAQAfQAMAYgCAZIABAAQAiAKARAcQANAWAAAbQgBAcgPAVQgPAWgaAKQgRAGgQAAQgJAAgJgCg");
	var mask_graphics_175 = new cjs.Graphics().p("AAmFUQgdAAgXgUQgYgTgHgcQgFgUAFgVQAEgVANgRQAQgTAWgIQgEgJgDgLQgCgNABgMQgWgHgRgTQgUgWgEgbQgKACgLgBQgggCgZgYQgYgXgDghQgCgeATgbIgFgFQgUgVgFgaQgEgbAMgaQANgbAYgNQASgLAVgBQgBgcAPgYQARgZAfgJQAegKAbAKQAdALAQAbQARAcgEAdQgDAZgQAUQgQAUgYAJQgMAEgMABQABAagNAWIgEAFQARAPAHAWQADAJACAKQAZgFAYAJQAdAMAQAfQAMAXgCAZIABAAQAiALARAbQANAWAAAcQgBAbgPAWQgPAVgaAKIgCABIACAFQAMAfgKAdQgIAcgaARQgXARgcAAIgDAAg");
	var mask_graphics_176 = new cjs.Graphics().p("AgKGEQghgBgXgUQgOgMgIgRQgIgRAAgTQgBgeAUgbQANgRASgJQgDgRAEgTQAEgVANgQQAQgTAWgIQgEgKgDgKQgCgNABgNQgWgGgRgUQgUgWgEgZQgKABgLgBQgggBgZgZQgYgYgDggQgCgfATgaIgFgFQgUgVgFgbQgEgbAMgaQANgaAYgOQASgKAVgBQgBgdAPgXQARgZAfgKQAegKAbALQAdAKAQAcQARAbgEAeQgDAYgQAVQgQAUgYAIQgMAFgMAAQABAbgNAWIgEAFQARAPAHAWQADAJACAKQAZgGAYAKQAdAMAQAfQAMAYgCAZIABAAQAiAJARAcQANAWAAAbQgBAcgPAVQgPAWgaAKIgCABIACAEQAMAfgKAeQgIAbgaASIgMAHQADATgEAUQgIAfgZATQgWARgdAAIgFAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(170).to({graphics:mask_graphics_170,x:316.0259,y:280.3641}).wait(1).to({graphics:mask_graphics_171,x:311.7881,y:284.9546}).wait(1).to({graphics:mask_graphics_172,x:311.7881,y:290.8441}).wait(1).to({graphics:mask_graphics_173,x:313.4612,y:294.6822}).wait(1).to({graphics:mask_graphics_174,x:316.6759,y:299.3537}).wait(1).to({graphics:mask_graphics_175,x:316.6759,y:305.4337}).wait(1).to({graphics:mask_graphics_176,x:316.6759,y:310.2617}).wait(4));

	// lady11
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(302.3,281.05,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(170).to({_off:false},0).wait(10));

	// pen10
	this.instance_2 = new lib.手握筆();
	this.instance_2.setTransform(272.6,352.55,1,1,0,0,0,282.9,207.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(165).to({_off:false},0).wait(1).to({x:281},0).wait(1).to({x:291.5},0).to({_off:true},3).wait(10));

	// 遮色片10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_165 = new cjs.Graphics().p("AgMBZQgWgDgTgOQgTgPgJgVQgJgUACgXQACgYANgSQAOgUAXgLQAXgLAXADQAZADAUAQQAUAPAJAXQAIAXgEAYQgFAZgQASQgOARgWAIQgPAFgQAAIgMAAg");
	var mask_1_graphics_166 = new cjs.Graphics().p("AgyBcQgWgDgTgOQgTgOgJgVQgJgVACgWQACgYANgTQAOgUAXgLQAXgKAYADQALABAJADQAHgEAIgDQAggLAiAPQAiAPANAgQANAggNAhQgOAjgfAOQgSAIgTAAQgRABgPgGIgNAGQgPAGgRAAIgMgBg");
	var mask_1_graphics_167 = new cjs.Graphics().p("AhfBcQgWgDgTgOQgTgOgJgVQgJgVACgWQACgYANgTQAOgUAXgLQAXgKAYADQALABAJADQAIgEAIgDQAggLAhAPIAJAEQAMgHAQgDQAfgHAbAOQAbANANAeQAOAdgIAcQgHAegZATQgaAUgegBQgXAAgUgMIgIAEQgSAIgSAAQgRABgPgGIgOAGQgQAGgQAAIgMgBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(165).to({graphics:mask_1_graphics_165,x:161.0597,y:261.0326}).wait(1).to({graphics:mask_1_graphics_166,x:164.8757,y:260.6914}).wait(1).to({graphics:mask_1_graphics_167,x:169.3907,y:260.6914}).wait(13));

	// lady10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60B2F").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape.setTransform(170.825,260.625);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(165).to({_off:false},0).wait(15));

	// pen下
	this.instance_3 = new lib.手握筆();
	this.instance_3.setTransform(336.55,362.45,1,1,0,0,0,282.9,207.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(155).to({_off:false},0).wait(1).to({x:344.25,y:365.25},0).wait(1).to({x:355.45,y:368.75},0).wait(1).to({x:365.25},0).wait(1).to({x:376.45,y:366.65},0).to({_off:true},6).wait(15));

	// 遮色片下 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_155 = new cjs.Graphics().p("AgQAyQgNgFgJgKQgJgJgDgOQgEgMAEgNQAFgTARgLQARgLASACQASADAOAPQANAPABASQABASgNAQQgNAQgTADIgJABQgHAAgJgDg");
	var mask_2_graphics_156 = new cjs.Graphics().p("AgmA+QgTgRgEgbQgLgFgHgIQgJgIgDgOQgEgNAEgNQAFgTARgLQARgLATACQAPACAMAKIADAAQAcgIAZANQAYAMAMAZQAMAagGAZQgHAZgWASQgWARgaAAIgDAAQgcAAgWgVg");
	var mask_2_graphics_157 = new cjs.Graphics().p("AAVBjQgWgMgNgVIgGgMQgLADgLAAQgeABgYgWQgSgRgFgaQgKgFgIgIQgJgKgDgNQgDgOADgNQAGgSARgLQAQgLATACQAQACALAKIADgBQAegHAZAMQATALAMAUQAKgFALgCQAWgDAWAHQAVAHAPAQQAQAQAGAWQAGAVgFAVQgHAcgWAUQgXAUgcACIgIAAQgVAAgTgKg");
	var mask_2_graphics_158 = new cjs.Graphics().p("AgXBjQgXgMgNgVIgHgMQgKADgLAAQgeABgYgWQgSgRgFgaQgKgFgIgIQgJgKgDgNQgDgOADgNQAGgSARgLQAQgLATACQAPACAMAKIADgBQAegHAZAMQAUALALAUQALgFAKgCQAWgDAWAHQAJADAHAEQAPgJASgCQAegEAcARQAcAQALAdQANAkgSAjQgOAbgeANQgeANgegIQgLgDgKgGQgRALgUABIgJAAQgTAAgTgKg");
	var mask_2_graphics_159 = new cjs.Graphics().p("AhZBjQgXgMgNgVIgGgMQgKADgLAAQgfABgXgWQgTgRgFgaQgKgFgHgIQgJgKgDgNQgEgOAEgNQAFgSARgLQARgLATACQAPACALAKIAEgBQAdgHAZAMQAUALAMAUQAKgFAMgCQAVgDAWAHQAJADAIAEQAOgJARgCQAfgEAcARIAKAHQAGgKAKgIQATgSAZgEQAdgGAdAQQAdAPAMAcQALAcgJAeQgIAggZARQgZASghgDQgdgBgWgSQgOAWgaALQgeANgdgIQgMgDgIgGQgSALgUABIgIAAQgUAAgUgKg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(155).to({graphics:mask_2_graphics_155,x:226.3161,y:268.7043}).wait(1).to({graphics:mask_2_graphics_156,x:230.4125,y:271.7368}).wait(1).to({graphics:mask_2_graphics_157,x:236.1511,y:274.3562}).wait(1).to({graphics:mask_2_graphics_158,x:240.6768,y:274.3562}).wait(1).to({graphics:mask_2_graphics_159,x:247.2351,y:274.3562}).wait(21));

	// 下嘴唇
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E73400").s().p("AgDA6QgSABgbgJQg1gSgpgvIhBg1IBrAAIB6AhICBgGIA5AJIg5BDQgOAOgbALQgZAJgbAAQgdAAgggLg");
	this.shape_1.setTransform(243.75,275.9762);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(155).to({_off:false},0).wait(25));

	// pen上
	this.instance_4 = new lib.手握筆();
	this.instance_4.setTransform(336.85,360.45,1,1,0,0,0,282.9,207.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(145).to({_off:false},0).wait(1).to({x:342.45},0).wait(1).to({x:346.6,y:354.85},0).wait(1).to({x:355.7},0).wait(1).to({x:366.9,y:358.35},0).wait(1).to({x:371.1,y:364.65},0).to({_off:true},5).wait(25));

	// 遮色片上 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_145 = new cjs.Graphics().p("AgXArQgNgHgGgMQgEgIgBgLQgCgPAHgNQAFgJAKgHQAJgGAMAAQAGAAAAgDQAQAAAMAKQANAJAEAOQAGAOgFAOQgEAPgKAJQgLAKgQACIgFAAQgMAAgLgGg");
	var mask_3_graphics_146 = new cjs.Graphics().p("AgPAvIgJgIIgBAAQgPABgNgHQgNgHgGgMQgEgIgBgKQgCgQAHgNQAFgJAKgHQAJgGAMAAQAGAAABgDQANAAALAHIADgCQALgFALAAQASABAPALQAQALAGARQAGAQgFARQgFATgNALQgQANgVABIgCAAQgTAAgPgMg");
	var mask_3_graphics_147 = new cjs.Graphics().p("AgpA5IgIgIIgBAAQgQABgNgHQgNgHgGgMQgEgIgBgLQgBgPAGgNQAFgJAKgHQAKgGALAAQAHAAABgDQAMAAALAHIADgCQANgFALAAIAGABQAHgIAKgFQASgKATADQASAEANANQAOAOACASQADAPgHAOQgGAPgMAJQgPAMgVAAIgEgBIgJAJQgPANgVABIgBAAQgUAAgQgMg");
	var mask_3_graphics_148 = new cjs.Graphics().p("AhQBKIgJgIIgBAAQgPACgNgHQgNgIgGgLQgEgJgBgLQgCgQAHgLQAFgKAKgGQAJgGAMgBQAGAAABgDQAMABALAGIAEgBQAMgFALAAIAHAAQAHgHAKgGQAKgFAKgCQAEgHAHgGQAUgTAbgDQAagCAXAPQAYAOAJAZQAIAZgIAZQgJAbgVAOQgWAPgcgCQgTgBgPgJQgKADgKAAIgFAAIgHAJQgQANgVAAIgCAAQgUAAgPgMg");
	var mask_3_graphics_149 = new cjs.Graphics().p("AB0BcQgbgBgUgRQgKgJgHgMQgVANgbgCQgSgBgPgIQgJADgLAAIgFAAIgIAIQgQANgVABQgVAAgQgMIgJgIIgBAAQgPABgNgHQgNgHgGgMQgEgIgBgLQgCgQAHgMQAFgJAKgHQAJgGAMAAQAGAAABgDQANAAALAHIADgCQAMgFALAAIAHABQAHgIAKgFQAKgGALgBQAFgHAGgHQAUgTAagCQAagDAXAPQASALAJARQAUgNAXAAQAZAAAWAQQAVAQAHAZQAHAXgJAZQgJAZgVAOQgTANgXAAIgGgBg");
	var mask_3_graphics_150 = new cjs.Graphics().p("ACjBoQgSgBgNgKQgHgGgFgHQgLACgLgBQgbgCgUgQQgLgJgGgMQgVANgagCQgTgBgPgJQgKADgKAAIgFAAIgIAJQgQANgVAAQgVABgQgNIgJgIIgBAAQgPACgNgHQgNgIgGgLQgEgJgBgLQgCgPAHgMQAFgKAKgGQAJgGAMgBQAGAAABgDQANABAKAGIAEgBQAMgFALAAIAHABQAHgIAKgGQAKgFALgCQAEgHAHgGQAUgTAbgDQAZgCAXAPQASALAJAQQAUgNAXAAQAZAAAWARQAVAQAHAYQADALAAAJQAJADAIAGQANALAFAQQAEAQgGAQQgGARgOAJQgNAJgQAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(145).to({graphics:mask_3_graphics_145,x:226.9498,y:264.9132}).wait(1).to({graphics:mask_3_graphics_146,x:229.9574,y:265.901}).wait(1).to({graphics:mask_3_graphics_147,x:232.5207,y:264.9306}).wait(1).to({graphics:mask_3_graphics_148,x:236.4984,y:263.1831}).wait(1).to({graphics:mask_3_graphics_149,x:242.0641,y:263.8196}).wait(1).to({graphics:mask_3_graphics_150,x:243.8824,y:264.9585}).wait(30));

	// 上嘴唇
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E73400").s().p("ACXA9Ig8gwIg7AFIg1gLIhjAfIhXgbICshQIBOAQIA8gHIAtAjQAwAtAMAyg");
	this.shape_2.setTransform(243.75,265.7);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(145).to({_off:false},0).wait(35));

	// pen8
	this.instance_5 = new lib.手握筆();
	this.instance_5.setTransform(400.05,447,1,1,0,0,0,282.9,207.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(135).to({_off:false},0).wait(1).to({x:377.05,y:457},0).wait(1).to({x:355.05,y:469},0).wait(1).to({x:334.05,y:478},0).wait(1).to({x:309.05,y:488},0).wait(1).to({x:282.05,y:493},0).wait(1).to({x:257.05,y:496},0).to({_off:true},4).wait(35));

	// 遮色片8 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_135 = new cjs.Graphics().p("AgGCZQgqgCgigVQghgWgUglQgTgkABgnQABgpAXgkQAWgkAlgTQAkgTApACQArACAiAXQAiAVATAmQATAmgCAoQgCAogXAjQgXAjgkASQggARglAAIgHgBg");
	var mask_4_graphics_136 = new cjs.Graphics().p("Ah+C8QgqgCgigVQgigWgTgkQgUglACgoQABgoAXgkQAWgkAkgTQAkgTArACQAqACAiAWIAMAIQAGgPAJgPQAVgkAlgSQAkgTAqACQArACAiAWQAiAWATAmQATAmgCAoQgCAngXAjQgXAjgkASQgjATgqgCQgqgCgigWIgMgJQgGARgLAQQgWAjgjASQggAQglAAIgIAAg");
	var mask_4_graphics_137 = new cjs.Graphics().p("AjsECQgqgBghgWQgigVgUglQgTgkABgpQABgoAXgkQAWgjAkgTQAkgTArACQAfACAbAMIAAgHQABgoAXgkQAXgkAkgTQAkgTAqACQAqACAiAWIAMAIQAFgPAJgPQAXgkAkgTQAkgTArACQAqACAiAXQAiAVATAmQAUAmgDApQgCAogXAjQgXAigjASQgkASgqgCQgpgCgigVIgNgJQgGARgKAPQgXAkgkASQgkASgogCQgfgCgbgMIgBAKQgCAogXAjQgWAjgkASQggARglAAIgIgBg");
	var mask_4_graphics_138 = new cjs.Graphics().p("AlVE0QgqgBgigWQgigWgTgkQgUglACgoQABgpAXgkQAWgkAkgTQAkgSArABQAeACAZALQAGgUAMgTQAXgjAkgTQAkgTAqACQAgABAbAMIAAgGQABgpAXgkQAWgkAjgTQAkgTArACQAqACAiAWIAMAIQAGgPAJgPQAWgkAlgSQAkgTAqACQArACAiAWQAiAWATAmQATAmgCAoQgCAogXAjQgXAjgkASQgjASgqgBQgqgCgigWIgMgJQgGARgLAQQgXAigjASQgkASgpgCQgggBgbgNIAAAKQgCAogXAjQgWAjgjASQgkATgpgCQgegBgagMQgGAXgOAUQgXAjgjASQggAQglAAIgIAAg");
	var mask_4_graphics_139 = new cjs.Graphics().p("AnTFcQgpgCgigVQgigWgTglQgUgkACgoQABgpAXgkQAWgkAkgTQAlgTAqACQArACAiAXIAQAMQAGgXAOgWQAWgjAkgTQAkgTArACQAeACAZALQAGgVAMgTQAXgjAkgTQAkgTApACQAgABAbAMIAAgGQABgpAXgkQAWgkAkgTQAkgTArACQAqACAiAWIAMAIQAGgPAJgPQAWgkAlgSQAkgTAqACQArACAiAWQAiAWATAmQATAmgCAoQgCAogXAjQgXAjgkASQgjATgqgCQgqgCgigWIgMgJQgGARgLAQQgXAjgjARQgkASgpgCQgggBgbgNIAAAKQgCAogXAjQgXAjgjASQgkATgogCQgegBgagMQgGAXgOAUQgXAjgjASQgkASgpgCQgqgBgigWQgJgGgIgHQgHAZgPAWQgXAjgjASQggAQglAAIgJAAg");
	var mask_4_graphics_140 = new cjs.Graphics().p("ApTGEQgqgCgigVQghgWgUgkQgTglABgoQABgpAXgkQAWgkAkgSQAkgTArACQAqACAiAWQANAIALALQAFgbAQgZQAXgkAkgTQAkgSArABQAqACAiAXIAQAMQAGgXAOgVQAXgkAkgTQAkgTAqACQAeACAaALQAGgVALgTQAWgjAkgTQAkgTArACQAfABAbAMIAAgGQABgpAXgkQAXgkAkgTQAkgTAqACQArACAiAWIALAIQAGgPAJgPQAXgkAkgSQAkgTArACQAqACAiAWQAiAWATAmQAUAmgDAoQgCAogXAjQgXAjgjASQgkATgqgCQgpgCgigWIgNgJQgGARgKAQQgXAjgkASQgkASgpgCQgggBgbgNIAAAKQgCAngXAjQgWAjgkASQgjATgqgCQgegBgZgMQgHAXgNAUQgXAjgjASQgjASgqgCQgqgBghgWQgKgGgIgHQgGAZgPAWQgXAjgkASQgjASgqgCQgqgCgigVQgNgJgMgLQgFAcgRAaQgXAjgjASQggAQglAAIgIAAg");
	var mask_4_graphics_141 = new cjs.Graphics().p("ArMGPQgqgCgigWQgigWgTgkQgTglABgoQABgpAXgkQAXgjAkgTQAkgTArACQAqACAiAWQAQALANANQAWgiAjgSQAkgTAqACQArACAiAWQANAJAKAKQAGgbAQgZQAWgjAkgTQAlgSAqACQArACAiAVIAQAMQAGgXAOgUQAWgkAkgTQAjgTArACQAeABAZALQAGgUAMgTQAXgkAkgTQAkgTAqACQAgABAbANIAAgHQABgoAXgkQAWgkAkgTQAkgTArACQAqACAiAWIAMAIQAFgQAKgOQAWgkAlgTQAkgTAqACQArACAiAWQAiAWATAmQATAmgCApQgCAogXAjQgXAjgkASQgjASgqgCQgqgCgigVIgMgJQgHARgKAPQgXAjgjATQgkASgpgCQgggCgbgNIAAALQgCAngXAjQgXAjgjASQgkASgpgCQgegBgagLQgGAWgOAUQgXAjgjATQgkASgpgCQgpgCgigVQgJgGgJgIQgGAZgPAXQgXAjgjASQgkASgqgCQgpgCgigWQgOgIgLgMQgGAdgRAZQgXAjgjASQgjATgqgCQgpgCgigWQgRgLgNgOIgBABQgXAigjATQggAQglAAIgIAAg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(135).to({graphics:mask_4_graphics_135,x:301.9618,y:355.0002}).wait(1).to({graphics:mask_4_graphics_136,x:289.9588,y:358.4755}).wait(1).to({graphics:mask_4_graphics_137,x:279.0088,y:365.5002}).wait(1).to({graphics:mask_4_graphics_138,x:268.4588,y:370.4755}).wait(1).to({graphics:mask_4_graphics_139,x:255.9588,y:374.4755}).wait(1).to({graphics:mask_4_graphics_140,x:243.0368,y:378.4752}).wait(1).to({graphics:mask_4_graphics_141,x:230.9838,y:379.5255}).wait(39));

	// lady08
	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(153.35,351.75,0.5,0.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(135).to({_off:false},0).wait(45));

	// pen7
	this.instance_7 = new lib.手握筆();
	this.instance_7.setTransform(384.05,390,1,1,0,0,0,282.9,207.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120).to({_off:false},0).wait(1).to({y:414},0).wait(1).to({x:395.05,y:433},0).wait(1).to({x:414.05,y:439},0).wait(1).to({x:436.05,y:438},0).wait(1).to({x:457.05,y:431},0).wait(1).to({x:478.05,y:432},0).wait(1).to({x:498.05,y:440},0).wait(1).to({x:511.05,y:456},0).wait(1).to({x:523.05,y:478},0).wait(1).to({x:534.05,y:499},0).to({_off:true},5).wait(45));

	// 遮色片7 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_120 = new cjs.Graphics().p("AgGCZQgqgBghgWQgigVgUgmQgTglABgmQACgpAWgkQAXgjAkgTQAjgTAqACQAqABAiAWQAiAWAUAmQATAlgCAoQgCAogXAjQgXAjgkASQggARglAAIgHAAg");
	var mask_5_graphics_121 = new cjs.Graphics().p("AgkEXQgqgDgigWQghgVgTglQgUglACgoQACgoAWgkQAXgkAkgRIASgIQgOgPgKgUQgUglACgoQABgoAXgkQAWgkAkgSQAkgUApADQArABAiAWQAiAWATAmQATAlgCApQgCAngXAjQgXAjgjASIgTAIQAPAQALAVQATAmgDApQgCAngXAjQgXAjgjASQggARgkAAIgIAAg");
	var mask_5_graphics_122 = new cjs.Graphics().p("AANGDQgpgDgigVQghgVgUglQgTglABgoQABgpAXgkIABgCIgEgDQghgVgTglQgUglACgoQACgnAWgkQAXgkAkgSIASgIQgOgPgKgUQgUglACgoQABgoAXgkQAWgkAkgSQAkgUApADQArABAiAWQAiAWATAmQATAlgCApQgCAngXAjQgXAjgjATIgTAIQAPAQALAVQATAmgDAoQgCAngXAjIAAAAIAFADQAiAWATAmQAUAlgDApQgCAogXAjQgXAjgjASQggARglAAIgIAAg");
	var mask_5_graphics_123 = new cjs.Graphics().p("ABmHEQgqgCgigWQghgVgTglQgNgYgEgZQgLABgMgBQgqgCgigVQghgWgUgkQgTglABgoQABgpAXgkIABgCIgEgDQghgVgTglQgUgkACgoQACgoAWgkQAXgkAkgSIATgIQgPgQgKgTQgUglACgoQABgpAXgjQAWgkAkgTQAkgTAqACQArACAhAWQAiAWATAmQATAlgCAoQgCAogXAjQgXAjgjATIgTAIQAPAQALAVQATAmgDAoQgCAngXAjIAAAAIAFADQAiAWATAmQAMAWAEAYQAMgBAMABQAqACAiAWQAiAWAUAmQATAmgCApQgDAogXAiQgXAjgjATQggAQglAAIgIAAg");
	var mask_5_graphics_124 = new cjs.Graphics().p("ADPHJQgqgCghgVQgQgKgMgOQgOAMgQAJQgkASgogCQgqgCgigWQgigVgTglQgNgYgEgZQgLABgMgBQgqgCgigVQghgWgUgkQgTglABgoQABgpAXgkIABgCIgEgDQghgVgTglQgUgkACgoQACgoAWgkQAXgkAkgSIATgIQgPgQgKgTQgUglACgoQABgpAXgjQAWgkAkgTQAkgTAqACQArACAiAWQAiAWATAmQASAlgBAoQgCAogXAjQgXAjgjATIgTAIQAPAQALAVQATAmgDAoQgCAogXAiIAAAAIAFADQAiAWATAmQAMAWAEAYQAMgBALABQAqACAiAWQAPAKANAMQANgLAPgIQAkgTAqACQArACAiAWQAiAWATAmQATAmgCApQgCAngXAjQgXAjgkATQggAQgkAAIgJAAg");
	var mask_5_graphics_125 = new cjs.Graphics().p("ABmHJQgqgCghgVQgQgKgLgOQgOAMgQAJQgkASgpgCQgqgCgigWQgigVgTglQgNgYgEgZQgLABgMgBQgqgCgigVQghgWgUgkQgTglABgoQABgpAXgkIABgCIgEgDQghgVgTglQgUgkACgoQACgoAWgkQAXgkAkgSIATgIQgPgQgKgTQgUglACgoQABgpAXgjQAWgkAkgTQAkgTAqACQArACAiAWQAiAWATAmQATAlgCAoQgCAogXAjQgXAjgjATIgTAIQAPAQALAVQATAmgDAoQgCAogXAiIAAAAIAFADQAiAWATAmQAMAWAEAYQAMgBAMABQAqACAiAWQAPAKAMAMQANgLAPgIQAkgTAqACQAmACAeARIAFgHQAWgkAkgTQAkgTArACQAqACAiAWQAiAWAUAmQATAmgCAoQgDAogXAjQgXAjgjATQgkASgpgCQgmgCgegRIgGAJQgXAjgkATQggAQgkAAIgJAAg");
	var mask_5_graphics_126 = new cjs.Graphics().p("AgCHJQgqgCghgVQgQgKgMgOQgOAMgQAJQgkASgpgCQgqgCgigWQgigVgTglQgNgYgEgZQgLABgMgBQgqgCgigVQghgWgUgkQgTglABgoQABgpAXgkIABgCIgEgDQghgVgTglQgUgkACgoQACgoAWgkQAXgkAkgSIATgIQgPgQgKgTQgUglACgoQABgpAXgjQAWgkAkgTQAkgTAqACQArACAiAWQAiAWATAmQATAlgCAoQgCAogXAjQgXAjgjATIgTAIQAPAQALAVQATAmgDAoQgCAogXAiIAAAAIAFADQAiAWATAmQAMAWAEAYQAMgBAMABQAqACAiAWQAPAKANAMQANgLAPgIQAkgTApACQAmACAeARIAFgHQAWgkAkgTQAkgTArACQAqACAiAWIACAAQAVgeAggRQAkgTArACQAqACAjAWQAiAWATAmQATAmgCApQgCAogXAjQgXAjgkASQgjASgqgCQgqgCgigVIgCgCQgWAgghARQgkASgpgCQgmgCgegRIgGAJQgXAjgkATQggAQgkAAIgIAAg");
	var mask_5_graphics_127 = new cjs.Graphics().p("AhrHJQgqgCghgVQgQgKgMgOQgOAMgQAJQgkASgpgCQgqgCgigWQgigVgTglQgNgYgEgZQgLABgMgBQgqgCgigVQghgWgUgkQgTglABgoQABgpAXgkIABgCIgEgDQghgVgTglQgUgkACgoQACgoAWgkQAXgkAkgSIATgIQgPgQgKgTQgUglACgoQABgpAXgjQAWgkAkgTQAkgTAqACQArACAiAWQAiAWATAmQATAlgCAoQgCAogXAjQgXAjgjATIgTAIQAPAQALAVQATAmgDAoQgCAogXAiIAAAAIAFADQAiAWATAmQAMAWAEAYQAMgBAMABQAqACAiAWQAPAKANAMQANgLAPgIQAkgTAqACQAmACAeARIAFgHQAVgkAkgTQAkgTArACQAqACAiAWIACAAQAVgeAggRQAkgTArACQAqACAjAWQAgAVATAjIAEgCQAkgSAqACQAqABAiAWQAjAWATAmQATAmgCApQgCAogXAiQgXAjgjATQgkASgqgCQgqgBghgWQghgVgUgkIgFADQgjASgqgCQgqgCgigVIgCgCQgWAgghARQgkASgpgCQgmgCgegRIgGAJQgXAjgjATQggAQgkAAIgJAAg");
	var mask_5_graphics_128 = new cjs.Graphics().p("AJfH7QgqgCgigWQghgVgUglQgOgcgDgeQgMACgMgBQgqgBghgWQghgWgUgjIgFACQgjATgqgCQgqgCgigWIgCgBQgWAfghARQgkATgpgDQglgBgegSIgGAKQgXAjgkASQgjASgqgBQgqgCghgWQgQgJgMgOQgOAMgQAIQgkASgpgBQgqgDgigVQgigVgTglQgNgYgEgaQgLACgMgBQgqgCgigWQghgVgUglQgTgkABgoQABgpAXgkIABgCIgEgDQghgWgTgkQgUglACgnQACgpAWgjQAXgkAkgTIATgIQgPgPgKgUQgUglACgnQABgpAXgkQAWgjAkgTQAkgTAqACQArABAiAWQAiAWATAmQATAlgCApQgCAogXAjQgXAjgjASIgTAJQAPAQALAVQATAmgDAoQgCAogXAiIAAABIAFADQAiAUATAmQAMAXAEAYQAMgBAMAAQAqACAiAWQAPAKANANQANgLAPgIQAkgTAqACQAmACAeARIAFgIQAWgkAkgTQAkgTAqACQAqACAiAXIACAAQAVgeAggRQAkgSArABQAqACAjAWQAgAVATAjIAEgCQAkgTAqACQAqACAiAWQAjAWATAmQAOAbADAdQALgBAMAAQArACAiAWQAiAWATAmQATAmgCApQgCAogXAiQgXAkgkARQggARglAAIgIAAg");
	var mask_5_graphics_129 = new cjs.Graphics().p("AKhJfQgqgCgigVQgigWgTgkQgUglACgoQAAgWAHgVQgkgDgfgUQghgVgUglQgOgcgDgeQgMABgMAAQgqgCghgVQghgWgUgjIgFACQgjATgqgCQgqgCgigWIgCgBQgWAfghARQgjASgpgCQgmgCgegRIgGAKQgXAjgkASQgjASgqgCQgqgBghgWQgQgKgMgNQgOAMgQAIQgkASgpgCQgqgCgigVQgigWgTgkQgNgYgEgaQgLABgMAAQgqgCgigWQghgVgUglQgTgkABgoQABgoAXgkIABgDIgEgCQghgWgTglQgUglACgnQACgpAWgjQAXgkAkgTIATgIQgPgPgKgUQgUglACgoQABgoAXgkQAWgjAkgTQAkgTAqACQArABAiAWQAiAWATAmQATAlgCApQgCAogXAjQgXAjgjASIgTAIQAPARALAVQATAlgDApQgCAogXAiIAAAAIAFADQAiAWATAmQAMAXAEAYQAMgBAMAAQAqACAiAVQAPAKANANQANgLAPgIQAkgSAqABQAmACAeARIAFgIQAWgjAkgTQAkgTArACQApACAiAWIACABQAVgeAggRQAkgTArACQAqACAjAWQAgAVATAjIAEgCQAkgTAqACQAqACAiAWQAjAVATAmQAOAbADAdQALgBAMAAQArACAiAWQAiAWATAmQATAmgCApQgBAUgGASQAkAEAeAUQAiAWAUAlQATAmgCAoQgCAogXAjQgXAjgjATQggAQglAAIgIAAg");
	var mask_5_graphics_130 = new cjs.Graphics().p("ALXLDQgqgCgigVQgigWgTglQgTglABgoQABgXAIgWQgZgGgWgNQgigWgTgkQgUglACgoQAAgWAHgVQgkgDgfgUQghgVgUglQgOgcgDgeQgMABgMAAQgqgCghgVQghgWgUgjIgFACQgjATgqgCQgqgCgigWIgCgBQgWAfggARQgkASgpgCQgmgCgegRIgGAKQgXAjgkASQgjASgqgCQgqgBghgWQgQgKgMgNQgOAMgQAIQgkASgpgCQgqgCgigVQgigWgTgkQgNgYgEgaQgLABgMAAQgqgCgigWQghgVgUgkQgTgkABgoQABgpAXgkIABgDIgEgCQghgWgTglQgUglACgnQACgpAWgjQAXgkAkgTIATgIQgPgPgKgUQgUglACgoQABgoAXgkQAWgjAkgTQAkgTAqACQArABAiAWQAiAWATAmQATAlgCApQgCAogXAjQgXAjgjASIgTAIQAPARALAVQATAlgDApQgCAogXAiIAAAAIAFADQAiAWATAmQAMAXAEAYQAMgBAMAAQAqACAiAWQAPAKANANQANgLAPgIQAkgTAqACQAmACAeARIAFgIQAWgkAkgTQAkgTArACQAqACAiAWIACABQAUgeAggRQAkgTArACQAqACAjAWQAgAVATAjIAEgCQAkgTAqACQAqACAiAWQAjAWATAmQAOAbADAcQALgBAMAAQArACAiAWQAiAWATAmQATAmgCApQgBAUgGASQAkAEAeAUQAiAWAUAlQATAmgCAoQgBAWgHAUQAaAGAWAOQAiAWATAmQATAmgCApQgDAogXAjQgXAjgjASQggAQglAAIgIAAg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(120).to({graphics:mask_5_graphics_120,x:281.0292,y:287.2502}).wait(1).to({graphics:mask_5_graphics_121,x:278.0792,y:299.8002}).wait(1).to({graphics:mask_5_graphics_122,x:278.0792,y:310.6002}).wait(1).to({graphics:mask_5_graphics_123,x:286.0588,y:317.1255}).wait(1).to({graphics:mask_5_graphics_124,x:296.5592,y:317.6255}).wait(1).to({graphics:mask_5_graphics_125,x:307.0588,y:317.6255}).wait(1).to({graphics:mask_5_graphics_126,x:317.5588,y:317.6255}).wait(1).to({graphics:mask_5_graphics_127,x:328.0588,y:317.6255}).wait(1).to({graphics:mask_5_graphics_128,x:336.5592,y:322.6502}).wait(1).to({graphics:mask_5_graphics_129,x:343.0588,y:332.6752}).wait(1).to({graphics:mask_5_graphics_130,x:348.5592,y:342.6752}).wait(50));

	// lady07
	this.instance_8 = new lib.CachedBmp_3();
	this.instance_8.setTransform(270.45,282.15,0.5,0.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120).to({_off:false},0).wait(60));

	// pen6
	this.instance_9 = new lib.手握筆();
	this.instance_9.setTransform(397.05,358,1,1,0,0,0,282.9,207.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(110).to({_off:false},0).wait(1).to({x:387.05,y:377},0).wait(1).to({x:365.05,y:395},0).wait(1).to({x:344.05,y:406},0).wait(1).to({x:319.45,y:395.35},0).wait(1).to({x:298.45,y:377.35},0).wait(1).to({x:288.45,y:358.35},0).wait(1).to({y:333.35},0).to({_off:true},3).wait(60));

	// 遮色片6 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_110 = new cjs.Graphics().p("AgGCZQgqgCgigVQghgWgUglQgTgkABgnQABgpAXgkQAXgkAkgTQAkgTApACQArACAiAWQAiAXATAmQATAmgCAnQgCAogYAjQgXAjgjASQggARglAAIgHgBg");
	var mask_6_graphics_111 = new cjs.Graphics().p("AgzEMQgqgCgigVQgigWgTgkQgUglACgoQABgpAXgkQAWgjAkgTQAPgIARgEIgGgJQgTglABgoQABgpAXgkQAXgjAkgTQAjgTAqACQArACAiAWQAiAWATAmQATAmgCApQgCAngYAjQgXAigjATQgOAHgPAEIAGALQATAmgCApQgDAogXAjQgXAjgjASQgfAQglAAIgIAAg");
	var mask_6_graphics_112 = new cjs.Graphics().p("AiIFjQgqgCghgWQgigVgTglQgUglACgoQABgpAXgjQAWgkAkgTQAkgSAqACIAJAAQgBgMAAgOQABgnAXgkQAXgkAkgTQAPgIAQgFIgFgJQgUgkABgoQACgpAWgkQAWgkAkgTQAkgTArACQAqACAiAWQAjAXATAmQATAmgDAoQgCAogXAjQgXAjgkASQgOAHgPAEIAGAMQAUAmgDAoQgCAogXAiQgXAjgkATQgkASgpgCIgJgBQACAOgBAPQgCAogWAjQgXAjgkATQggAQglAAIgIAAg");
	var mask_6_graphics_113 = new cjs.Graphics().p("AjsGTQgqgCgigVQgigWgTgkQgUglACgoQABgpAXgkQAWgkAkgTQAkgTArACQAZABAXAJQAGgSAKgRQAXgjAkgTQAkgSAqABIAJABQgCgMABgNQABgpAWgkQAWgkAkgTQAPgIARgEIgGgJQgTglABgoQABgpAXgkQAXgjAkgTQAkgTAqACQArACAiAWQAiAWATAmQATAmgCApQgCAngYAjQgXAjgjATQgOAHgPAEIAGALQATAmgCApQgDAngXAjQgXAjgjASQgkASgpgCIgKgBQACAPgBAPQgCAogXAjQgXAjgjASQgkASgogCQgZgBgWgIQgHATgMASQgXAjgjASQggAQglAAIgIAAg");
	var mask_6_graphics_114 = new cjs.Graphics().p("AhzGTQgqgCgigVQgdgTgTgeIgPANQgwAlg4gDQg4gEgrgrQgrgrgEg4QgDg4AkgwQAlgvA3gMQA3gLA0AfQAkAUAUAfQAQgQAUgLQAkgTArACQAZABAXAJQAGgSAKgRQAXgjAjgTQAkgSAqABIAJABQgCgMABgNQABgpAXgkQAWgkAkgTQAPgIARgEIgGgJQgTglABgoQABgpAXgkQAXgjAkgTQAkgTAqACQArACAiAWQAiAWATAmQATAmgCApQgCAngYAjQgXAjgjATQgOAHgPAEIAGALQATAmgCApQgDAngXAjQgXAjgjASQgkASgpgCIgKgBQACAPgBAPQgCAogXAjQgXAjgjASQgkASgpgCQgZgBgWgIQgHATgMASQgWAjgjASQghAQgkAAIgIAAg");
	var mask_6_graphics_115 = new cjs.Graphics().p("AgLGTQgqgCgigVQgdgTgTgeIgPANQgwAlg4gDQg4gEgrgrQgrgrgEg4QgBgOACgOQgdALghgBQgpgCgigWQgigVgUglQgTglABgoQABgpAXgjQAXgjAkgTQAkgTAqACQArACAiAWQAiAWATAmQATAlgCAoIgBAIQANgFANgDQA3gLA0AfQAkAUAUAfQAQgQAUgLQAkgTAqACQAZABAXAJQAGgSAKgRQAXgjAkgTQAkgSAqABIAJABQgCgMABgNQABgpAXgkQAWgkAkgTQAPgIAQgEIgFgJQgTglABgoQABgpAXgkQAXgjAkgTQAkgTAqACQArACAiAWQAiAWATAmQATAmgCApQgCAngYAjQgXAjgjATQgOAHgQAEIAHALQATAmgCApQgDAngXAjQgXAjgjASQgkASgpgCIgKgBQACAPgBAPQgCAogXAjQgXAjgjASQgkASgpgCQgagBgWgIQgGATgMASQgXAjgjASQghAQgjAAIgIAAg");
	var mask_6_graphics_116 = new cjs.Graphics().p("ABEGTQgqgCghgVQgdgTgTgeIgPANQgwAlg4gDQg4gEgrgrQgrgrgEg4QgBgOACgOQgdALghgBQgpgCgigWQgigVgUglQgTglABgoQAAgLACgLIgPAAQgpgCgigVQgigVgTgkQgUglABgoQACgpAWgkQAXgkAkgTQAkgTAqACQArACAiAWQAiAWATAmQAUAmgDApIgCASIAPAAQArACAiAWQAiAWATAmQATAlgCAoIgBAIQANgFANgDQA3gLA0AfQAkAUAUAfQAQgQATgLQAkgTArACQAZABAXAJQAGgSAKgRQAXgjAkgTQAkgSAqABIAJABQgCgMABgNQABgpAXgkQAWgkAkgTQAPgIAQgEIgFgJQgTglABgoQABgpAXgkQAXgjAkgTQAkgTAqACQArACAiAWQAiAWATAmQATAmgCApQgCAngYAjQgXAjgjATQgPAHgPAEIAHALQATAmgCApQgDAngXAjQgXAjgjASQgkASgpgCIgKgBQACAPgBAPQgCAogXAjQgXAjgjASQgkASgpgCQgagBgWgIQgGATgMASQgXAjgjASQghAQgkAAIgIAAg");
	var mask_6_graphics_117 = new cjs.Graphics().p("ABiG/QgqgCgigVQgcgTgTgeIgPANQgwAlg4gDQg4gDgrgsQgrgqgEg5QgBgOACgOQgdAMghgCQgpgCgigWQgigVgUglQgTglABgoQAAgLACgLIgPAAQgpgCgigVQgigWgTgjQgUglABgoQACgoAWgkIgMgIQgigVgUglQgTglABgoQACgoAWgkQAXgkAkgTQAkgTAqACQArACAiAXQAiAVATAmQATAmgCAoQgCAngWAiIAOAHQAiAXATAmQAUAlgDApIgCASIAPAAQArACAiAWQAiAWATAlQATAmgCAoIgBAIQANgFANgDQA3gLA0AfQAkAUAUAfQAPgQAUgLQAkgTArACQAZACAXAIQAGgSAKgQQAXgkAkgTQAkgSAqACIAJAAQgCgNABgNQABgoAXgkQAWgjAkgUQAPgHAQgFIgFgJQgTglABgoQABgpAXgkQAXgjAkgTQAkgTAqACQArACAiAWQAiAWATAmQATAmgCApQgCAngYAjQgXAjgjATQgOAHgQAEIAHAMQATAlgCAoQgDAogXAjQgXAjgjATQgkASgpgDIgKAAQACAOgBAPQgCAogXAjQgXAjgjASQgkASgpgBQgagCgWgIQgGATgMASQgXAjgjATQghAQgkAAIgIgBg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(110).to({graphics:mask_6_graphics_110,x:291.9621,y:260.0005}).wait(1).to({graphics:mask_6_graphics_111,x:287.4592,y:271.4755}).wait(1).to({graphics:mask_6_graphics_112,x:279.0342,y:280.1255}).wait(1).to({graphics:mask_6_graphics_113,x:268.9592,y:284.9755}).wait(1).to({graphics:mask_6_graphics_114,x:256.8742,y:284.9755}).wait(1).to({graphics:mask_6_graphics_115,x:246.4842,y:284.9755}).wait(1).to({graphics:mask_6_graphics_116,x:238.4871,y:284.9755}).wait(1).to({graphics:mask_6_graphics_117,x:235.4842,y:280.5502}).wait(63));

	// lady06
	this.instance_10 = new lib.CachedBmp_4();
	this.instance_10.setTransform(179.55,246.75,0.5,0.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(110).to({_off:false},0).wait(70));

	// pen5
	this.instance_11 = new lib.手握筆();
	this.instance_11.setTransform(290.05,376.05,1,1,0,0,0,282.9,207.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(95).to({_off:false},0).wait(1).to({y:400.05},0).wait(1).to({y:420.05},0).wait(1).to({y:442.05},0).wait(1).to({y:464.05},0).wait(1).to({x:273.05,y:476},0).wait(1).to({x:255.05,y:488},0).wait(1).to({x:234.05},0).wait(1).to({x:213.05,y:504},0).wait(1).to({x:199.05,y:519},0).to({_off:true},6).wait(70));

	// 遮色片5 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_95 = new cjs.Graphics().p("AgcB9QgggHgZgXQgagXgKgfQgOgoAPgqQAPgrAjgXQAkgYAsAEQAtADAgAdQAfAdAIAsQAIAsgUAmQgTAlgqATQgaANgbAAQgOAAgOgEg");
	var mask_7_graphics_96 = new cjs.Graphics().p("AhBDdQglgZgOgnQgQgvAWgwQATgoAigUQgSgHgPgOQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAsAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgRAhgjATQAWAIAQAQQAbAaAIAnQAJAmgNAjQgNAjggAXQggAXglACIgHABQgkAAgigXg");
	var mask_7_graphics_97 = new cjs.Graphics().p("AABFeQgfgHgZgXQgagXgKgfQgOgoAPgrQAMghAXgWQgSgFgRgMQglgYgOgoQgQguAWgwQATgoAigUQgSgIgPgOQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgXAtADQAsAEAgAdQAfAcAIAtQAIAsgUAmQgRAhgjATQAWAJAQARQAbAaAIAmQAJAlgNAjQgLAegYAVQAdAHAWAVQAfAdAIAsQAIAtgUAlQgTAmgqATQgaAMgbAAQgPAAgOgDg");
	var mask_7_graphics_98 = new cjs.Graphics().p("AABHMQgfgIgZgWQgagXgKgfQgOgoAPgsQAPgqAjgXIAEgDQgKgGgJgIQgagXgKgfQgOgoAPgrQAMghAXgWQgSgFgRgMQglgXgOgoQgQguAWgxQATgoAigUQgSgIgPgOQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgXAtADQAsAEAgAdQAfAcAIAtQAIAsgUAmQgRAhgjATQAWAJAQARQAbAaAIAmQAJAmgNAjQgLAegYAVQAdAHAWAUQAfAdAIAsQAIAtgUAlQgQAggfASQALAGAJAJQAfAdAIAsQAIAsgUAnQgTAlgqATQgaAMgbAAQgPAAgOgDg");
	var mask_7_graphics_99 = new cjs.Graphics().p("AgSIwQgggHgZgXQgagYgKgeQgOgoAPgrQAPgrAjgYIABAAQgWgWgKgcQgOgoAPgsQAPgqAjgXIAEgDQgKgGgJgIQgagXgKgfQgOgoAPgqQAMghAXgWQgSgFgRgMQglgYgOgoQgQguAWgxQATgoAigUQgSgIgPgOQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgXAtADQAsAEAgAdQAfAcAIAtQAIAsgUAmQgRAhgjATQAWAJAQARQAbAaAIAmQAJAmgNAjQgLAegYAVQAdAHAWAVQAfAdAIAsQAIAsgUAlQgQAggfASQALAGAJAJQAfAdAIAsQAIAsgUAnQgPAdgdASQAdAcAHAqQAIAtgUAmQgTAlgqATQgaAMgbAAQgOAAgOgDg");
	var mask_7_graphics_100 = new cjs.Graphics().p("AhdKKQgggHgZgXQgagYgKgeQgOgoAPgrQAPgrAjgYQAdgSAigCIgEgKQgOgoAPgrQAPgrAjgYIABAAQgWgWgKgcQgOgoAPgsQAPgqAjgXIAEgDQgKgGgJgIQgagWgKgfQgOgoAPgrQAMghAXgWQgSgFgRgMQglgYgOgoQgQguAWgxQATgoAigUQgSgIgPgOQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgXAsADQAtAEAgAdQAfAcAIAtQAIAsgUAmQgRAhgjATQAWAJAQARQAbAaAIAmQAJAmgNAjQgLAegYAVQAdAHAWAVQAfAdAIAsQAIAtgUAlQgQAfgfASQALAGAJAJQAfAdAIAsQAIAsgUAnQgPAdgdASQAdAcAHAqQAIAtgUAmQgTAlgqATQgWAKgXACQAGAOACAPQAIAtgUAmQgUAlgoATQgbAMgbAAQgOAAgOgDg");
	var mask_7_graphics_101 = new cjs.Graphics().p("AjGLGQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtADQArAEAeAZQgFgeALggQAPgrAjgYQAdgSAhgCIgEgKQgOgoAPgrQAPgrAjgYIABAAQgWgWgKgcQgOgoAPgsQAPgqAjgWIAEgDQgKgGgJgIQgagXgKgfQgOgoAPgrQAMghAXgWQgSgFgRgMQglgYgNgoQgQguAVgxQATgoAigUQgSgIgPgOQgZgXgKgfQgOgoAPgrQAOgrAjgXQAkgXAtADQAtAEAgAdQAfAcAIAtQAIAsgUAmQgRAhgjATQAWAJAQARQAbAaAIAmQAJAmgNAjQgLAegYAVQAdAHAWAVQAfAdAIAsQAIAtgUAlQgQAggfASQALAGAJAJQAfAcAIAsQAIAsgUAnQgPAdgdASQAdAcAHAqQAIAtgUAmQgTAlgqATQgWAKgXACQAGAOACAPQAIAtgUAmQgUAlgpATQgpATgpgKQgdgHgZgVIAAAAQAIAtgUAlQgTAmgqATQgaAMgbAAQgPAAgOgDg");
	var mask_7_graphics_102 = new cjs.Graphics().p("AkvL9QgggHgZgYQgagWgKggQgOgoAPgqQAPgrAjgXQAkgYAtAEQAqADAdAYQgBgZAJgaQAPgrAjgXQAkgYAtADQArAEAdAZQgFgeALggQAPgrAjgYQAdgSAigCIgEgKQgOgoAPgrQAPgrAjgYIABAAQgWgWgKgcQgOgoAPgrQAPgqAjgXIAEgDQgKgGgJgIQgagXgKgfQgOgoAPgrQAMghAXgWQgSgFgRgMQglgYgOgoQgQguAWgxQATgoAigUQgSgIgPgOQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgXAtADQAtAEAgAdQAfAcAIAtQAIAsgUAmQgRAhgjATQAWAJAQARQAbAaAIAmQAJAmgNAjQgLAegYAVQAdAHAWAVQAfAdAIAsQAIAtgUAlQgQAggfASQALAGAJAJQAfAdAIArQAIAsgUAnQgPAdgdASQAdAcAHAqQAIAtgUAmQgTAlgqATQgWAKgXACQAGAOACAPQAIAtgUAmQgUAlgpATQgpATgpgKQgegHgZgVIAAAAQAIAtgUAlQgTAmgpATQgpATgpgKQgdgHgYgUQAEAmgSAiQgTAlgqATQgaAMgbAAQgPAAgOgDg");
	var mask_7_graphics_103 = new cjs.Graphics().p("AmdMlQgggHgZgYQgagWgKggQgOgoAPgqQAPgrAjgXQAkgYAtAEQAtADAgAdIAFAEQACgPAFgPQAPgrAjgXQAkgYAtAEQAqADAdAYQgBgZAJgaQAPgrAjgXQAjgYAtADQArAEAeAZQgFgeALggQAPgrAjgYQAdgSAigCIgEgKQgOgoAPgrQAPgrAjgYIABAAQgWgWgKgcQgOgnAPgsQAPgqAjgXIAEgDQgKgGgJgIQgagXgKgfQgOgoAPgrQAMghAXgWQgSgFgRgMQglgYgOgoQgQguAWgxQATgoAigUQgSgIgPgOQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgXAtADQAtAEAgAdQAfAcAIAtQAIAsgUAmQgRAhgjATQAWAJAQARQAbAaAIAmQAJAmgNAjQgLAegYAVQAdAHAWAVQAfAdAIAsQAIAtgUAlQgQAggfASQALAGAJAJQAfAdAIAsQAIArgUAnQgPAdgdASQAdAcAHAqQAIAtgUAmQgTAlgqATQgWAKgXACQAGAOACAPQAIAtgUAmQgUAlgpATQgpATgpgKQgegHgZgVIAAAAQAIAtgUAlQgTAmgqATQgpATgpgKQgcgHgYgUQAEAmgSAiQgTAlgqATQgpATgpgKQgggHgZgYIgGgFQgBAbgNAXQgTAmgqATQgaAMgbAAQgPAAgOgDg");
	var mask_7_graphics_104 = new cjs.Graphics().p("AnoNrQgggHgZgXQgagYgKgeQgOgoAPgrQAPgrAjgYQAkgXAtAEIAMABQgDgbAKgcQAPgrAjgXQAkgYAtAEQAtADAgAdIAFAEQACgPAFgPQAPgrAjgXQAkgYAtAEQAqADAdAYQgBgZAJgaQAOgrAjgXQAkgYAtADQArAEAeAZQgFgeALggQAPgrAjgYQAdgSAigCIgEgKQgOgoAPgrQAPgrAjgYIABAAQgWgVgKgcQgOgoAPgsQAPgqAjgXIAEgDQgKgGgJgIQgagXgKgfQgOgoAPgrQAMghAXgWQgSgFgRgMQglgYgOgoQgQguAWgxQATgoAigUQgSgIgPgOQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgXAtADQAtAEAgAdQAfAcAIAtQAIAsgUAmQgRAhgjATQAWAJAQARQAbAaAIAmQAJAmgNAjQgLAegYAVQAdAHAWAVQAfAdAIAsQAIAtgUAlQgQAggfASQALAGAJAJQAfAdAIAsQAIAsgUAnQgPAcgdASQAdAcAHAqQAIAtgUAmQgTAlgqATQgWAKgXACQAGAOACAPQAIAtgUAmQgUAlgpATQgpATgpgKQgegHgZgVIAAAAQAIAtgUAlQgTAmgqATQgpATgpgKQgdgHgYgUQAEAmgSAiQgTAlgpATQgpATgpgKQgggHgZgYIgGgFQgBAbgNAXQgTAmgqATQglARgmgGQAEAngSAiQgTAlgqATQgaAMgbAAQgPAAgOgDg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(95).to({graphics:mask_7_graphics_95,x:181.9014,y:276.0747}).wait(1).to({graphics:mask_7_graphics_96,x:182.4051,y:287.5637}).wait(1).to({graphics:mask_7_graphics_97,x:184.9014,y:298.5497}).wait(1).to({graphics:mask_7_graphics_98,x:184.9014,y:309.5497}).wait(1).to({graphics:mask_7_graphics_99,x:184.9014,y:319.5497}).wait(1).to({graphics:mask_7_graphics_100,x:181.4014,y:328.5497}).wait(1).to({graphics:mask_7_graphics_101,x:170.9014,y:334.5497}).wait(1).to({graphics:mask_7_graphics_102,x:160.4014,y:340.0497}).wait(1).to({graphics:mask_7_graphics_103,x:149.4014,y:344.0497}).wait(1).to({graphics:mask_7_graphics_104,x:141.9014,y:351.0497}).wait(76));

	// lady05
	this.instance_12 = new lib.CachedBmp_5();
	this.instance_12.setTransform(96.75,268.65,0.5,0.5);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(95).to({_off:false},0).wait(85));

	// pen4
	this.instance_13 = new lib.手握筆();
	this.instance_13.setTransform(282.9,255.1,1,1,0,0,0,282.9,207.3);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(75).to({_off:false},0).wait(1).to({x:259.9},0).wait(1).to({x:238.9,y:265.1},0).wait(1).to({x:221.9,y:280.1},0).wait(1).to({x:208.9,y:298.75},0).wait(1).to({y:319.75},0).wait(1).to({x:226.9,y:335.75},0).wait(1).to({x:237.9,y:351.75},0).wait(1).to({x:250.9,y:372.75},0).wait(1).to({x:230.9,y:382.75},0).wait(1).to({y:404.75},0).wait(1).to({x:246.9,y:417.75},0).wait(1).to({y:427.75},0).wait(1).to({y:451.75},0).wait(1).to({x:259.9,y:465.75},0).wait(1).to({x:275.9,y:483.75},0).to({_off:true},5).wait(85));

	// 遮色片4 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_75 = new cjs.Graphics().p("AgcB9QgggHgZgXQgagXgKgfQgOgoAPgqQAPgrAjgXQAkgYAsAEQAtADAgAdQAfAdAIAsQAIAsgUAmQgTAlgqATQgaANgbAAQgOAAgOgEg");
	var mask_8_graphics_76 = new cjs.Graphics().p("AiKCHQgggHgZgXQgagXgKgfQgOgoAPgqQAPgrAjgXQAkgYAtAEQAtADAgAdQAKAJAIALQAOghAdgTQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAsgUAmQgTAlgqATQgpATgpgKQgggHgZgXQgKgJgIgKIgCAEQgTAlgpATQgbANgbAAQgOAAgOgEg");
	var mask_8_graphics_77 = new cjs.Graphics().p("Aj4CbQgggHgZgXQgagXgKgfQgOgoAPgqQAPgrAjgXQAkgYAtAEQAtADAgAdIAMANQAPgqAjgXQAkgYAsAEQAtADAgAdQAKAJAIALQAPghAdgTQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAlQgTAlgqATQgpATgpgKQgggHgZgXQgKgJgIgKIgCAEQgUAlgpATQgpATgogKQgggHgZgXIgMgNIgIASQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_8_graphics_78 = new cjs.Graphics().p("AlhDXQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgWQAkgYAtAEQArADAeAaQgFgfALggQAPgrAjgXQAkgYAtAEQAtADAgAdIAMANQAPgqAigXQAkgYAtAEQAtADAgAdQAKAJAIALQAPghAdgTQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAkgqATQgpATgpgKQgggHgZgXQgKgIgIgKIgCAEQgUAkgpATQgpATgpgKQgggHgZgXIgMgNIgHASQgTAlgqATQgpATgpgKQgegHgZgVIAAAAQAIAtgUAmQgUAlgpATQgbANgbAAQgOAAgOgEg");
	var mask_8_graphics_79 = new cjs.Graphics().p("AmdE2QgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAjgXArADQgFgKgEgLQgOgnAPgrQAPgrAjgXQAkgYAtAEQArADAeAaQgFgfALggQAPgrAjgXQAkgYAtAEQAsADAgAdIAMANQAPgqAjgXQAkgYAtAEQAtADAgAdQAKAJAIALQAPghAdgTQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgpATgpgKQgggHgZgXQgKgJgIgKIgCAEQgUAlgpATQgpATgpgKQgggHgZgXIgMgNIgIASQgTAlgpATQgpASgpgKQgegGgZgVIAAAAQAIAsgUAmQgUAlgpATQgeAOgegBQAKARADAVQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_8_graphics_80 = new cjs.Graphics().p("AmsGaQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXIAHgEQgTgVgJgaQgOgoAPgrQAPgrAjgWQAjgXArADQgFgKgEgLQgOgoAPgrQAPgrAjgXQAkgYAtAEQArADAeAaQgFgfALggQAPgrAjgXQAkgYAtAEQAsADAgAdIAMANQAPgqAjgXQAkgYAtAEQAtADAgAdQAKAJAIALQAPghAdgTQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgpATgpgKQgggHgZgXQgKgJgIgKIgCAEQgUAlgpATQgpATgpgKQgggHgZgXIgMgNIgIASQgTAlgqATQgoATgpgKQgegHgZgVIAAAAQAIAtgUAmQgUAlgpASQgeAOgegBQAKARADAVQAIAtgUAmQgQAggiATQAZAbAHAnQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_8_graphics_81 = new cjs.Graphics().p("AlSH+QgggHgZgXQgagXgKgfQgOgoAPgrQAGgRAJgNIgNgDQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXIAHgEQgTgVgJgaQgOgnAPgrQAPgrAjgXQAjgXArADQgFgKgEgLQgOgoAPgrQAPgrAjgXQAkgYAtAEQArADAeAaQgFgfALggQAPgrAjgXQAkgYAtAEQAsADAgAdIAMANQAPgqAjgXQAkgYAtAEQAtADAgAdQAKAJAIALQAPghAdgTQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgpATgpgKQgggHgZgXQgKgJgIgKIgCAEQgUAlgpATQgpATgpgKQgggHgZgXIgMgNIgIASQgTAlgqATQgoATgpgKQgegHgZgVIAAAAQAIAtgUAmQgUAlgpATQgeAOgegBQAKARADAVQAIAsgUAmQgQAggiATQAZAbAHAnQAIAtgUAmIgHAMQApAFAdAbQAfAdAIAsQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_8_graphics_82 = new cjs.Graphics().p("AjGJTQgggHgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgGQgggHgZgXQgagXgKgfQgOgoAPgrQAGgRAJgNIgNgDQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgWIAHgEQgTgVgJgaQgOgoAPgrQAPgrAjgXQAjgXArADQgFgKgEgLQgOgoAPgrQAPgrAjgXQAkgYAtAEQArADAeAaQgFgfALggQAPgrAjgXQAkgYAtAEQAsADAgAdIAMANQAPgqAjgXQAkgYAtAEQAtADAgAdQAKAJAIALQAPghAdgTQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgpATgpgKQgggHgZgXQgKgJgIgKIgCAEQgUAlgpATQgpATgpgKQgggHgZgXIgMgNIgIASQgTAlgqATQgoATgpgKQgegHgZgVIAAAAQAIAtgUAmQgUAlgpATQgeAOgegBQAKARADAVQAIAtgUAmQgQAggiASQAZAbAHAnQAIAtgUAmIgHAMQApAFAdAbQAfAdAIAsQAHAjgLAeQAOgBAOABQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_8_graphics_83 = new cjs.Graphics().p("AhYKoQgggHgZgXQgagXgKgfQgOgoAPgrIgSgDQgggHgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgGQgggHgZgXQgagXgKgfQgOgoAPgrQAGgRAJgNIgNgDQgggHgZgXQgagXgKgfQgOgoAPgqQAPgrAjgXIAHgEQgTgVgJgaQgOgoAPgrQAPgrAjgXQAjgXArADQgFgKgEgLQgOgoAPgrQAPgrAjgXQAkgYAtAEQArADAeAaQgFgfALggQAPgrAjgXQAkgYAtAEQAsADAgAdIAMANQAPgqAjgXQAkgYAtAEQAtADAgAdQAKAJAIALQAPghAdgTQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgpATgpgKQgggHgZgXQgKgJgIgKIgCAEQgUAlgpATQgpATgpgKQgggHgZgXIgMgNIgIASQgTAlgqATQgoATgpgKQgegHgZgVIAAAAQAIAtgUAmQgUAlgpATQgeAOgegBQAKARADAVQAIAtgUAmQgQAggiATQAZAbAHAnQAIAsgUAmIgHAMQApAFAdAbQAfAdAIAsQAHAjgLAeQAOgBAOABQAtADAgAdQAfAdAIAsQAHAigLAfQAsAEAeAcQAfAdAIAsQAIAtgUAmQgTAlgpATQgaANgbAAQgPAAgOgEg");
	var mask_8_graphics_84 = new cjs.Graphics().p("AkCLfQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQARABAPAFQACgPAFgPIgSgDQgggHgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgGQgggHgZgXQgagXgKgfQgOgoAPgrQAGgRAJgNIgNgDQgggHgZgXQgagXgKgfQgOgnAPgrQAPgrAjgXIAHgEQgTgVgJgaQgOgoAPgrQAPgrAjgXQAjgXArADQgFgKgEgLQgOgoAPgrQAPgrAjgXQAkgYAtAEQArADAeAaQgFgfALggQAPgrAjgXQAkgYAtAEQAsADAgAdIAMANQAPgqAjgXQAkgYAtAEQAtADAgAdQAKAJAIALQAPghAdgTQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgpATgpgKQgggHgZgXQgKgJgIgKIgCAEQgUAlgpATQgpATgpgKQgggHgZgXIgMgNIgIASQgTAlgqATQgoATgpgKQgegHgZgVIAAAAQAIAtgUAmQgUAlgpATQgeAOgegBQAKARADAVQAIAtgUAmQgQAggiATQAZAbAHAnQAIAtgUAlIgHAMQApAFAdAbQAfAdAIAsQAHAjgLAeQAOgBAOABQAtADAgAdQAfAdAIAsQAHAigLAfQAsAEAeAcQAfAdAIAsQAIAtgUAmQgTAlgpATQgpATgpgKIgNgDQgBAZgNAXQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_8_graphics_85 = new cjs.Graphics().p("AkuM5QgkgZgNgoQgNgmANgpQAMgoAggZIALgHQgKgGgJgIQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQARABAPAFQACgPAFgPIgSgDQgggHgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgGQgggHgZgXQgagXgKgfQgOgoAPgrQAGgQAJgNIgNgDQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXIAHgEQgTgVgJgaQgOgoAPgrQAPgrAjgXQAjgXArADQgFgKgEgLQgOgoAPgrQAPgrAjgXQAkgYAtAEQArADAeAaQgFgfALggQAPgrAjgXQAkgYAtAEQAsADAgAdIAMANQAPgqAjgXQAkgYAtAEQAtADAgAdQAKAJAIALQAPghAdgTQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgpATgpgKQgggHgZgXQgKgJgIgKIgCAEQgUAlgpATQgpATgpgKQgggHgZgXIgMgMIgIARQgTAlgqATQgoATgpgKQgegHgZgVIAAAAQAIAtgUAmQgUAlgpATQgeAOgegBQAKARADAVQAIAtgUAmQgQAggiATQAZAbAHAnQAIAtgUAmIgHANQApAEAdAbQAfAdAIArQAHAjgLAeQAOgBAOABQAtADAgAdQAfAdAIAsQAHAjgLAeQAsAEAeAcQAfAdAIAsQAIAtgUAmQgTAlgpATQgpATgpgKIgNgDQgBAZgNAXQgQAfgfASIAGAEQAhAXAPAoQAOApgLAmQgLAngiAaQgiAbgoABIgGABQgmAAgigYg");
	var mask_8_graphics_86 = new cjs.Graphics().p("Ah2OJQgggHgZgXQgagYgKgeQgGgQgBgRIgGAAQgpADglgaQgkgZgNgnQgNgmANgpQAMgpAggYIALgHQgKgHgJgIQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgXAtADQARABAPAFQACgPAFgOIgSgDQgggIgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgFQgggIgZgXQgagXgKgfQgOgnAPgrQAGgQAJgOIgNgDQgggHgZgXQgagXgKgfQgOgoAPgrQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQAjgXArADQgFgKgEgLQgOgoAPgrQAPgqAjgYQAkgXAtADQArADAeAaQgFgfALggQAPgqAjgYQAkgXAtADQAsAEAgAdIAMAMQAPgqAjgXQAkgYAtAEQAtAEAgAdQAKAJAIAKQAPggAdgUQAkgXAtADQAtAEAgAdQAfAcAIAtQAIAsgUAmQgTAmgqATQgpATgpgKQgggIgZgXQgKgJgIgKIgCAEQgUAmgpASQgpAUgpgLQgggHgZgXIgMgMIgIARQgTAmgqATQgoATgpgKQgegIgZgVIAAABQAIAsgUAmQgUAmgpATQgeANgegBQAKARADAWQAIAsgUAmQgQAhgiASQAZAbAHAoQAIAsgUAmIgHANQApAFAdAaQAfAdAIAtQAHAhgLAeQAOgBAOABQAtAEAgAdQAfAcAIAtQAHAigLAeQAsAEAeAcQAfAdAIAtQAIAsgUAmQgTAlgpATQgpAUgpgLIgNgDQgBAZgNAXQgQAfgfATIAGADQAhAYAPAnQAGASACASQAKgBALABQAtADAgAdQAeAdAIAsQAIAtgUAmQgTAlgpATQgaAMgbAAQgPAAgOgDg");
	var mask_8_graphics_87 = new cjs.Graphics().p("AgSPKQgggHgZgYQgagWgKggQgIgWABgXIAAAAQgggHgZgXQgagYgKgeQgGgQgBgRIgGAAQgpADglgaQgkgZgNgnQgNgmANgpQAMgpAggYIALgHQgKgHgJgIQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgXAtADQARABAPAFQACgPAFgOIgSgDQgggIgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgFQgggIgZgXQgagWgKgfQgOgoAPgrQAGgQAJgOIgNgDQgggHgZgXQgagXgKgfQgOgoAPgrQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQAjgXArADQgFgKgEgLQgOgoAPgrQAPgqAjgYQAkgXAtADQArADAeAaQgFgfALggQAPgqAjgYQAkgXAtADQAsAEAgAdIAMAMQAPgqAjgXQAkgYAtAEQAtAEAgAdQAKAJAIAKQAPggAdgUQAkgXAtADQAtAEAgAdQAfAcAIAtQAIAsgUAmQgTAmgqATQgpATgpgKQgggIgZgXQgKgJgIgKIgCAEQgUAmgpASQgpAUgpgLQgggHgZgXIgMgMIgIARQgTAmgqATQgoATgpgKQgegIgZgVIAAABQAIAsgUAmQgUAmgpATQgeANgegBQAKARADAWQAIAsgUAmQgQAhgiASQAZAbAHAoQAIAsgUAmIgHANQApAFAdAaQAfAdAIAtQAHAigLAeQAOgBAOABQAtAEAgAcQAfAcAIAtQAHAigLAeQAsAEAeAcQAfAdAIAtQAIAsgUAmQgTAlgpATQgpAUgpgLIgNgDQgBAZgNAXQgQAfgfATIAGADQAhAYAPAnQAGASACASQAKgBALABQAtADAgAdQAeAdAIAsQADAOAAANQAhAHAZAXQAfAdAIAsQAIAtgUAmQgTAlgqATQgaAMgbAAQgOAAgOgDg");
	var mask_8_graphics_88 = new cjs.Graphics().p("AhiQuQgggIgZgWQgagXgKgfQgOgoAPgsQAPgqAjgXQAVgOAZgFQgLgPgGgSQgIgWABgXIAAAAQgggHgZgXQgagYgKgeQgGgQgBgRIgGAAQgpADglgaQgkgZgNgnQgNgmANgpQAMgpAggYIALgHQgKgHgJgIQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgXAtADQARABAPAFQACgPAFgOIgSgDQgggIgZgXQgagXgKgfQgOgnAPgrIAAgBQgYAEgYgFQgggIgZgXQgagXgKgfQgOgoAPgrQAGgQAJgOIgNgDQgggHgZgXQgagXgKgfQgOgoAPgrQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQAjgXArADQgFgKgEgLQgOgoAPgrQAPgqAjgYQAkgXAtADQArADAeAaQgFgfALggQAPgqAjgYQAkgXAtADQAsAEAgAdIAMAMQAPgqAjgXQAkgYAtAEQAtAEAgAdQAKAJAIAKQAPggAdgUQAkgXAtADQAtAEAgAdQAfAcAIAtQAIAsgUAmQgTAmgqATQgpATgpgKQgggIgZgXQgKgJgIgKIgCAEQgUAmgpASQgpAUgpgLQgggHgZgXIgMgMIgIARQgTAmgqATQgoATgpgKQgegIgZgVIAAABQAIAsgUAmQgUAmgpATQgeANgegBQAKARADAWQAIAsgUAmQgQAhgiASQAZAbAHAoQAIAsgUAmIgHANQApAFAdAaQAfAdAIAtQAHAigLAeQAOgBAOABQAtAEAgAdQAfAcAIAtQAHAhgLAeQAsAEAeAcQAfAdAIAtQAIAsgUAmQgTAlgpATQgpAUgpgLIgNgDQgBAZgNAXQgQAfgfATIAGADQAhAYAPAnQAGASACASQAKgBALABQAtADAgAdQAeAdAIAsQADAOAAANQAhAHAZAXQAfAdAIAsQAIAtgUAmQgTAlgqATQgNAGgOAEQAPAWAFAdQAIAtgUAmQgTAlgpATQgaAMgbAAQgPAAgOgDg");
	var mask_8_graphics_89 = new cjs.Graphics().p("AgISNQgggIgZgWQgagXgKgfQgOgoAPgrQAEgMAFgJIgHgCQgggIgZgWQgagXgKgfQgOgoAPgsQAPgqAjgXQAVgOAZgFQgLgPgGgSQgIgWABgXIAAAAQgggHgZgXQgagYgKgeQgGgQgBgRIgGAAQgpADglgaQgkgZgNgnQgNgmANgpQAMgpAggYIALgHQgKgHgJgIQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgXAtADQARABAPAFQACgPAFgOIgSgDQgggIgZgWQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgFQgggIgZgXQgagXgKgfQgOgoAPgrQAGgQAJgOIgNgDQgggHgZgXQgagXgKgfQgOgoAPgrQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQAjgXArADQgFgKgEgLQgOgoAPgrQAPgqAjgYQAkgXAtADQArADAeAaQgFgfALggQAPgqAjgYQAkgXAtADQAsAEAgAdIAMAMQAPgqAjgXQAkgYAtAEQAtAEAgAdQAKAJAIAKQAPggAdgUQAkgXAtADQAtAEAgAdQAfAcAIAtQAIAsgUAmQgTAmgqATQgpATgpgKQgggIgZgXQgKgJgIgKIgCAEQgUAmgpASQgpAUgpgLQgggHgZgXIgMgMIgIARQgTAmgqATQgoATgpgKQgegIgZgVIAAABQAIAsgUAmQgUAmgpATQgeANgegBQAKARADAWQAIAsgUAmQgQAhgiASQAZAbAHAoQAIAsgUAmIgHANQApAFAdAaQAfAdAIAtQAHAigLAeQAOgBAOABQAtAEAgAdQAfAcAIAtQAHAigLAeQAsAEAeAcQAfAcAIAtQAIAsgUAmQgTAlgpATQgpAUgpgLIgNgDQgBAZgNAXQgQAfgfATIAGADQAhAYAPAnQAGASACASQAKgBALABQAtADAgAdQAeAdAIAsQADAOAAANQAhAHAZAXQAfAdAIAsQAIAtgUAmQgTAlgqATQgNAGgOAEQAPAWAFAdQAIAtgUAmIgBADQAlAGAbAZQAfAdAIAsQAIAtgUAmQgTAlgqATQgaAMgbAAQgPAAgNgDg");
	var mask_8_graphics_90 = new cjs.Graphics().p("ACrTdQgggHgZgXQgagXgKgfQgOgoAPgsIACgFIgIAEQgpATgogKQgggIgZgWQgagXgKgfQgOgoAPgrQAEgMAFgJIgHgCQgggIgZgWQgagXgKgfQgOgoAPgsQAPgqAjgXQAVgOAZgFQgLgPgGgSQgIgWABgXIAAAAQgggHgZgXQgagYgKgeQgGgQgBgRIgGAAQgpADglgaQgkgZgNgnQgNgmANgpQAMgpAggYIALgHQgKgHgJgIQgagXgKgfQgOgoAPgrQAPgrAjgWQAkgXAtADQARABAPAFQACgPAFgOIgSgDQgggIgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgFQgggIgZgXQgagXgKgfQgOgoAPgrQAGgQAJgOIgNgDQgggHgZgXQgagXgKgfQgOgoAPgrQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQAjgXArADQgFgKgEgLQgOgoAPgrQAPgqAjgYQAkgXAtADQArADAeAaQgFgfALggQAPgqAjgYQAkgXAtADQAsAEAgAdIAMAMQAPgqAjgXQAkgYAtAEQAtAEAgAdQAKAJAIAKQAPggAdgUQAkgXAtADQAtAEAgAdQAfAcAIAtQAIAsgUAmQgTAmgqATQgpATgpgKQgggIgZgXQgKgJgIgKIgCAEQgUAmgpASQgpAUgpgLQgggHgZgXIgMgMIgIARQgTAmgqATQgoATgpgKQgegIgZgVIAAABQAIAsgUAmQgUAmgpATQgeANgegBQAKARADAWQAIAsgUAmQgQAhgiASQAZAbAHAoQAIAsgUAmIgHANQApAFAdAaQAfAdAIAtQAHAigLAeQAOgBAOABQAtAEAgAdQAfAcAIAtQAHAigLAeQAsAEAeAcQAfAdAIAtQAIArgUAmQgTAlgpATQgpAUgpgLIgNgDQgBAZgNAXQgQAfgfATIAGADQAhAYAPAnQAGASACASQAKgBALABQAtADAgAdQAeAdAIAsQADAOAAANQAhAHAZAXQAfAdAIAsQAIAtgUAmQgTAlgqATQgNAGgOAEQAPAWAFAdQAIAtgUAmIgBADQAlAGAbAZQAfAdAIAsQAHAkgMAgQAfgQAmADQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgaAMgbAAQgPAAgOgDg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(75).to({graphics:mask_8_graphics_75,x:182.9014,y:163.0747}).wait(1).to({graphics:mask_8_graphics_76,x:171.9014,y:164.0747}).wait(1).to({graphics:mask_8_graphics_77,x:160.9014,y:166.0747}).wait(1).to({graphics:mask_8_graphics_78,x:150.4014,y:172.0747}).wait(1).to({graphics:mask_8_graphics_79,x:144.4014,y:181.5747}).wait(1).to({graphics:mask_8_graphics_80,x:142.9014,y:191.5747}).wait(1).to({graphics:mask_8_graphics_81,x:142.9014,y:201.5747}).wait(1).to({graphics:mask_8_graphics_82,x:142.9014,y:210.0747}).wait(1).to({graphics:mask_8_graphics_83,x:142.9014,y:218.5747}).wait(1).to({graphics:mask_8_graphics_84,x:142.9014,y:224.0747}).wait(1).to({graphics:mask_8_graphics_85,x:142.9014,y:235.0596}).wait(1).to({graphics:mask_8_graphics_86,x:142.9014,y:241.0497}).wait(1).to({graphics:mask_8_graphics_87,x:142.9014,y:247.5497}).wait(1).to({graphics:mask_8_graphics_88,x:142.9014,y:257.5497}).wait(1).to({graphics:mask_8_graphics_89,x:142.9014,y:267.0497}).wait(1).to({graphics:mask_8_graphics_90,x:142.9014,y:275.0497}).wait(90));

	// lady04
	this.instance_14 = new lib.CachedBmp_6();
	this.instance_14.setTransform(99.25,158.25,0.5,0.5);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(75).to({_off:false},0).wait(105));

	// pen3
	this.instance_15 = new lib.手握筆();
	this.instance_15.setTransform(311.05,255.1,1,1,0,0,0,282.9,207.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).wait(1).to({x:300.05,y:271.1},0).wait(1).to({y:294.1},0).wait(1).to({x:275.05,y:304.1},0).wait(1).to({x:253.05},0).wait(1).to({x:236.05,y:322.1},0).wait(1).to({x:248.05,y:340.1},0).wait(1).to({x:259.3,y:354.15},0).wait(1).to({x:275.3,y:374.15},0).wait(1).to({x:264.3,y:397.15},0).wait(1).to({y:417.15},0).wait(1).to({x:276.3,y:429.15},0).wait(1).to({x:260.3,y:447.15},0).to({_off:true},3).wait(105));

	// 遮色片3 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_60 = new cjs.Graphics().p("AgcB9QgggHgZgXQgagXgKgfQgOgoAPgqQAPgrAjgXQAkgYAsAEQAtADAgAdQAfAdAIAsQAIAsgUAmQgTAlgqATQgaANgbAAQgOAAgOgEg");
	var mask_9_graphics_61 = new cjs.Graphics().p("Ag1DwQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAVgNAYgFIgKgIQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAsAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqASQgNAGgOAEIALAIQAfAdAIAsQAIAtgUAmQgUAlgpATQgbANgaAAQgOAAgOgEg");
	var mask_9_graphics_62 = new cjs.Graphics().p("AhYFeQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAYgQAcgDQgXgXgKgdQgOgoAPgqQAPgrAjgXQAVgOAYgFIgKgIQgagXgKgfQgOgoAPgrQAPgrAjgXQAjgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgNAGgOAEIALAIQAfAdAIAsQAIAsgUAmQgUAlgpATQgQAIgRADQAdAcAHAqQAIAtgUAmQgTAlgpATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_63 = new cjs.Graphics().p("Ai3GkQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAeACAYAOQgIgiANgkQAPgrAjgXQAYgQAbgDQgWgXgKgcQgOgoAPgrQAPgrAigXQAVgOAYgFIgKgIQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgNAGgOAEIALAIQAfAdAIAsQAIAtgUAmQgUAkgpATQgQAIgRADQAdAcAHAqQAIAtgUAmQgTAlgqATQgpATgpgKQgSgEgRgKIABAGQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_64 = new cjs.Graphics().p("AkKGvQgvgDgjglQgjglgCgvQgCgvAggoQAggoAugJQAtgJAoAUQAVALAQASQANgTAUgNQAjgXAuADQAdACAXAOQgHgiAMgkQAPgqAkgYQAXgQAdgDQgYgWgKgdQgOgoAPgrQAPgqAkgYQAUgOAZgEIgLgJQgZgXgLgfQgOgoAPgrQAPgqAkgYQAjgXAuADQAtAEAfAcQAgAdAIAtQAIAsgUAmQgUAmgpATQgOAGgNADIAKAJQAgAcAIAtQAIAsgUAmQgUAlgpATQgRAHgRADQAdAcAIArQAIAsgUAmQgUAmgpATQgpATgqgKQgTgFgRgKIACAHQAIAsgUAmQgUAmgpATQgoATgqgKQgggIgZgXIgJgJQgKAOgNALQgUASgZAIQgVAHgVAAIgJAAg");
	var mask_9_graphics_65 = new cjs.Graphics().p("Al1HqQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAUABARAHIAAgBQgCgvAggoQAfgnAvgJQAsgKApAVQAVAKAPATQAOgTATgNQAjgYAtAEQAeACAYAOQgIgiANgkQAPgrAjgWQAYgQAcgDQgXgXgKgdQgOgoAPgrQAPgrAjgXQAVgOAYgFIgKgIQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgNAGgOAEIALAIQAfAdAIAsQAIAtgUAmQgUAlgpATQgQAIgRADQAdAbAHAqQAIAtgUAmQgTAlgqATQgpATgpgKQgTgEgRgKIABAGQAIAtgUAmQgTAlgqATQgpATgpgKQgfgHgZgXIgKgKQgJAOgNAMQgUARgZAJQgaAJgZgCQgUgCgSgHQACAigQAfQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_66 = new cjs.Graphics().p("AlhJOQgggHgZgXQgagXgKgfQgOgoAPgrQALgeAUgUQgIgGgIgHQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAUABARAHIAAgBQgCgvAggoQAfgnAvgJQAsgJApAUQAVAKAPATQAOgTATgNQAjgXAtAEQAeACAYANQgIghANgkQAPgrAjgXQAYgQAcgDQgXgXgKgdQgOgoAPgrQAPgrAjgXQAVgOAYgFIgKgIQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgNAGgOAEIALAIQAfAdAIAsQAIAtgUAmQgUAlgpATQgQAIgRADQAdAcAHAqQAIAsgUAmQgTAlgqATQgpATgpgKQgTgEgRgKIABAGQAIAtgUAmQgTAlgqATQgpATgpgKQgfgHgZgXIgKgKQgJAOgNAMQgUARgZAJQgaAJgZgCQgUgCgSgHQACAigQAfQgJASgOAOQAIAFAIAHQAfAdAIAsQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_67 = new cjs.Graphics().p("AjpKjQgggHgZgXQgagXgKgfQgOgoAPgqQgOAAgOgEQgggHgZgXQgagXgKgfQgOgoAPgrQALgeAUgUQgIgGgIgHQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAUABARAHIAAgBQgCgvAggnQAfgnAvgJQAsgKApAVQAVAKAPATQAOgTATgNQAjgYAtAEQAeACAYAOQgIgiANgkQAPgrAjgXQAYgQAcgDQgXgXgKgdQgOgoAPgrQAPgrAjgXQAVgOAYgFIgKgIQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgNAGgOAEIALAIQAfAdAIAsQAIAtgUAmQgUAlgpATQgQAIgRADQAdAcAHAqQAIAtgUAmQgTAlgqASQgpATgpgKQgTgEgRgKIABAGQAIAtgUAmQgTAlgqATQgpATgpgKQgfgHgZgXIgKgKQgJAOgNAMQgUARgZAJQgaAJgZgCQgUgCgSgHQACAigQAfQgJASgOAOQAIAFAIAHQAfAdAIAsQAHAigLAeIAIABQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_9_graphics_68 = new cjs.Graphics().p("AhJLuQgggHgZgXQgagXgKgfQgLghAHgiQgfAJgggIQgggHgZgXQgagXgKgfQgOgoAPgqQgOAAgOgEQgggHgZgXQgagXgKgfQgOgoAPgrQALgeAUgUQgIgGgIgHQgagXgKgfQgOgoAPgrQAPgrAjgWQAkgYAtAEQAUABARAHIAAgBQgCgvAggoQAfgnAvgJQAsgKApAVQAVAKAPATQAOgTATgNQAjgYAtAEQAeACAYAOQgIgiANgkQAPgrAjgXQAYgQAcgDQgXgXgKgdQgOgoAPgrQAPgrAjgXQAVgOAYgFIgKgIQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgNAGgOAEIALAIQAfAdAIAsQAIAtgUAmQgUAlgpATQgQAIgRADQAdAcAHAqQAIAtgUAmQgTAlgqATQgpATgpgKQgTgEgRgKIABAGQAIAtgUAlQgTAlgqATQgpATgpgKQgfgHgZgXIgKgKQgJAOgNAMQgUARgZAJQgaAJgZgCQgUgCgSgHQACAigQAfQgJASgOAOQAIAFAIAHQAfAdAIAsQAHAigLAeIAIABQAtADAgAdQAfAdAIAsQAFAZgEAXQAUgFAXACQAsADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgZANgbAAQgPAAgOgEg");
	var mask_9_graphics_69 = new cjs.Graphics().p("AhmNYQgqgKgcgiQgdgjgCgrQgBgqAaglQAUgbAbgOQgZgXgKgeQgLghAHgiQgfAJgggHQgggIgZgXQgagXgKgfQgOgoAPgqQgOAAgOgDQgggIgZgXQgagXgKgfQgOgoAPgrQALgeAUgUQgIgGgIgHQgagXgKgfQgOgoAPgqQAPgqAjgYQAkgXAtADQAUACARAGIAAAAQgCgvAggoQAfgoAvgJQAsgJApAUQAVALAPASQAOgTATgNQAjgXAtADQAeACAYAOQgIgiANgkQAPgqAjgYQAYgQAcgDQgXgXgKgdQgOgoAPgrQAPgqAjgYQAVgOAYgEIgKgJQgagXgKgfQgOgoAPgrQAPgqAjgYQAkgXAtADQAtAEAgAcQAfAdAIAtQAIAsgUAmQgTAmgqATQgNAGgOADIALAJQAfAcAIAtQAIAsgUAmQgUAmgpATQgQAHgRADQAdAcAHArQAIAsgUAmQgTAmgqATQgpATgpgKQgTgFgRgKIABAHQAIAsgUAmQgTAmgqATQgpATgpgKQgfgIgZgXIgKgJQgJAOgNALQgUASgZAIQgaAIgZgCQgUgBgSgHQACAigQAeQgJASgOAOQAIAFAIAIQAfAcAIAtQAHAhgLAfIAIAAQAtAEAgAdQAfAcAIAtQAFAZgEAXQAUgGAXACQAsAEAgAdQAfAcAIAtQAIAsgUAmQgSAkgnATQAOAMAJAPQAWAlgFAtQgFAtgdAeQgWAYghAKQgTAFgTAAQgOAAgNgCg");
	var mask_9_graphics_70 = new cjs.Graphics().p("AiPO2QgggHgZgXQgagYgKgeQgOgoAPgrQAPgrAjgYIAJgEQgZgigCgnQgBgqAaglQAUgbAbgOQgZgXgKgeQgLghAHgiQgfAJgggIQgggHgZgXQgagXgKgfQgOgoAPgqQgOAAgOgEQgggHgZgXQgagXgKgfQgOgoAPgrQALgeAUgUQgIgGgIgHQgagWgKgfQgOgoAPgrQAPgqAjgYQAkgYAtAEQAUACARAGIAAAAQgCgwAggnQAfgoAvgJQAsgJApAUQAVALAPASQAOgTATgNQAjgXAtADQAeACAYAOQgIgiANgkQAPgqAjgYQAYgQAcgDQgXgXgKgdQgOgoAPgrQAPgrAjgXQAVgOAYgEIgKgJQgagXgKgfQgOgoAPgrQAPgqAjgYQAkgXAtADQAtAEAgAcQAfAdAIAtQAIAsgUAmQgTAmgqATQgNAGgOADIALAJQAfAcAIAtQAIAsgUAmQgUAmgpATQgQAHgRADQAdAcAHArQAIAsgUAmQgTAmgqATQgpATgpgKQgTgFgRgKIABAHQAIAsgUAmQgTAmgqATQgpASgpgJQgfgIgZgXIgKgJQgJAOgNALQgUASgZAIQgaAJgZgCQgUgBgSgIQACAjgQAeQgJASgOAOQAIAEAIAIQAfAcAIAtQAHAhgLAfIAIAAQAtAEAgAdQAfAcAIAtQAFAZgEAXQAUgGAXACQAsAEAgAcQAfAdAIAtQAIAsgUAmQgSAkgnATQAOAMAJAPQAWAlgFAtQgFAsgdAfQgNAOgQAJQARAXAFAgQAIAtgTAmQgTAlgqATQgaAMgbAAQgPAAgOgDg");
	var mask_9_graphics_71 = new cjs.Graphics().p("AgrP8QgggHgZgXQgagXgKgfQgJgbADgdIgBAAQgggHgZgXQgagYgKgeQgOgoAPgrQAPgrAjgYIAJgEQgZgigCgnQgBgqAaglQAUgbAbgOQgZgXgKgeQgLghAHgiQgfAJgggIQgggHgZgXQgagXgKgfQgOgoAPgqQgOAAgOgEQgggHgZgXQgagXgKgfQgOgoAPgqQALgeAUgUQgIgGgIgHQgagXgKgfQgOgoAPgrQAPgqAjgYQAkgYAtAEQAUACARAGIAAAAQgCgwAggnQAfgoAvgJQAsgJApAUQAVALAPASQAOgTATgNQAjgXAtADQAeACAYAOQgIgiANgkQAPgqAjgYQAYgQAcgDQgXgXgKgdQgOgoAPgrQAPgrAjgXQAVgOAYgEIgKgJQgagXgKgfQgOgoAPgrQAPgqAjgYQAkgXAtADQAtAEAgAcQAfAdAIAtQAIAsgUAmQgTAmgqATQgNAGgOADIALAJQAfAcAIAtQAIAsgUAmQgUAmgpATQgQAHgRADQAdAcAHArQAIAsgUAmQgTAmgqATQgpATgpgKQgTgFgRgKIABAHQAIAsgUAmQgTAmgqATQgpASgpgJQgfgIgZgXIgKgJQgJAOgNALQgUASgZAIQgaAJgZgCQgUgBgSgIQACAjgQAeQgJASgOAOQAIAFAIAIQAfAcAIAsQAHAhgLAfIAIAAQAtAEAgAdQAfAcAIAtQAFAZgEAXQAUgGAXACQAsAEAgAcQAfAdAIAtQAIAsgUAmQgSAkgnATQAOAMAJAPQAWAlgFAtQgFAsgdAfQgNAOgQAJQARAXAFAgQAEATgCASQAiAHAZAWQAfAeAIAsQAIAtgUAmQgTAlgqATQgaAMgaAAQgPAAgOgDg");
	var mask_9_graphics_72 = new cjs.Graphics().p("AiFRRQgggHgZgYQgagWgKggQgOgoAPgqQAPgrAjgXQATgNAVgFIgBgDQgJgbADgdIgBAAQgggHgZgXQgagYgKgeQgOgoAPgrQAPgrAjgYIAJgEQgZgigCgnQgBgqAaglQAUgbAbgOQgZgXgKgeQgLghAHgiQgfAJgggIQgggHgZgXQgagXgKgfQgOgoAPgqQgOAAgOgEQgggHgZgXQgagXgKgeQgOgoAPgrQALgeAUgUQgIgGgIgHQgagXgKgfQgOgoAPgrQAPgqAjgYQAkgYAtAEQAUACARAGIAAAAQgCgwAggnQAfgoAvgJQAsgJApAUQAVALAPASQAOgTATgNQAjgXAtADQAeACAYAOQgIgiANgkQAPgqAjgYQAYgQAcgDQgXgXgKgdQgOgoAPgrQAPgrAjgXQAVgOAYgEIgKgJQgagXgKgfQgOgoAPgrQAPgqAjgYQAkgXAtADQAtAEAgAcQAfAdAIAtQAIAsgUAmQgTAmgqATQgNAGgOADIALAJQAfAcAIAtQAIAsgUAmQgUAmgpATQgQAHgRADQAdAcAHArQAIAsgUAmQgTAmgqATQgpATgpgKQgTgFgRgKIABAHQAIAsgUAmQgTAmgqATQgpASgpgJQgfgIgZgXIgKgJQgJAOgNALQgUASgZAIQgaAJgZgCQgUgBgSgIQACAjgQAeQgJASgOAOQAIAFAIAIQAfAcAIAtQAHAhgLAfIAIAAQAtAEAgAcQAfAcAIAtQAFAZgEAXQAUgGAXACQAsAEAgAcQAfAdAIAtQAIAsgUAmQgSAkgnATQAOAMAJAPQAWAlgFAtQgFAsgdAfQgNAOgQAJQARAXAFAgQAEATgCASQAiAHAZAWQAfAeAIAsQAIAtgUAmQgTAlgqATQgLAFgMADQAEALACAMQAIAtgUAmQgTAlgpATQgbAMgbAAQgOAAgOgDg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(60).to({graphics:mask_9_graphics_60,x:202.9014,y:154.0747}).wait(1).to({graphics:mask_9_graphics_61,x:200.4014,y:165.5747}).wait(1).to({graphics:mask_9_graphics_62,x:196.9014,y:176.5747}).wait(1).to({graphics:mask_9_graphics_63,x:187.4014,y:183.5747}).wait(1).to({graphics:mask_9_graphics_64,x:177.1834,y:184.3455}).wait(1).to({graphics:mask_9_graphics_65,x:168.4014,y:190.5747}).wait(1).to({graphics:mask_9_graphics_66,x:168.4014,y:200.5747}).wait(1).to({graphics:mask_9_graphics_67,x:168.4014,y:209.0747}).wait(1).to({graphics:mask_9_graphics_68,x:168.4014,y:216.5747}).wait(1).to({graphics:mask_9_graphics_69,x:168.4014,y:227.0464}).wait(1).to({graphics:mask_9_graphics_70,x:168.4014,y:236.5497}).wait(1).to({graphics:mask_9_graphics_71,x:168.4014,y:243.5497}).wait(1).to({graphics:mask_9_graphics_72,x:168.4014,y:252.0497}).wait(108));

	// lady03
	this.instance_16 = new lib.CachedBmp_7();
	this.instance_16.setTransform(128,146.85,0.5,0.5);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},0).wait(120));

	// pen2
	this.instance_17 = new lib.手握筆();
	this.instance_17.setTransform(374.05,271.1,1,1,0,0,0,282.9,207.3);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(35).to({_off:false},0).wait(1).to({x:390.05,y:284.6},0).wait(1).to({x:406.05,y:298.75},0).wait(1).to({x:424.05},0).wait(1).to({x:434.05,y:284.6},0).wait(1).to({y:264.6},0).wait(1).to({y:241.6},0).wait(1).to({y:219.6},0).wait(1).to({x:423.05,y:200.6},0).wait(1).to({x:410.05,y:189.6},0).wait(1).to({x:394.05,y:178.6},0).wait(1).to({x:371.05},0).wait(1).to({x:351.05},0).wait(1).to({x:334.05},0).wait(1).to({x:317.05,y:191.6},0).wait(1).to({x:306.05,y:207.3},0).to({_off:true},10).wait(120));

	// 遮色片2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_35 = new cjs.Graphics().p("AgcB9QgggHgZgXQgagXgKgfQgOgoAPgqQAPgrAjgXQAkgYAsAEQAtADAgAdQAfAdAIAsQAIAsgUAmQgTAlgqATQgaANgbAAQgOAAgOgEg");
	var mask_10_graphics_36 = new cjs.Graphics().p("AA4C+QgggHgYgXQgagXgKgfQgJgZADgZQgjANgkgJQgggHgZgXQgagXgKgeQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAfAdQAfAdAIAsQADAQAAAPQAYgIAbACQAtADAgAdQAfAdAIArQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_10_graphics_37 = new cjs.Graphics().p("ACID6QgggHgZgXQgagXgKgfQgGgSgBgSQgeAIgdgIQgggHgZgXQgagXgKgfQgJgZADgYQgjAMgkgJQgggGgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQADAQAAAPQAYgIAaACQAtADAgAdQAfAdAIAsIACARQAUgEAWACQAtACAgAdQAfAdAIAsQAIAtgUAmQgUAlgpATQgbANgbAAQgOAAgOgEg");
	var mask_10_graphics_38 = new cjs.Graphics().p("ADnEnQgggHgZgXQgagXgKgfQgDgKgCgJIgKAEQgpATgpgKQgggHgYgXQgagXgKgfQgGgSgBgSQgeAIgegIQgggHgZgXQgagXgKgfQgJgYADgZQgjANgkgJQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQADAQAAAPQAYgIAbACQAtADAgAdQAeAdAIAsIACASQAUgFAWACQAtADAgAdQAfAcAIAsIAAABQAhgTApADQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_10_graphics_39 = new cjs.Graphics().p("ACXEnQgggHgZgXQgagXgKgfQgDgKgCgJIgKAEQgpATgogKQgggHgZgXQgagXgKgfQgGgSgBgSQgeAIgegIQgggHgZgXQgagXgKgfQgJgYADgZQgjANgkgJQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQADAQAAAPQAYgIAbACQAtADAgAdQAfAdAIAsIACASQAUgFAVACQAtADAgAdQAfAcAIAsIAAABQAhgTApADQALABAKACQABgSAHgTQAPgqAjgXQAkgYAtAEQAtADAgAdQAfAdAIArQAIAtgUAmQgTAlgqATQgpATgpgKIgCAAQgBAdgOAaQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_10_graphics_40 = new cjs.Graphics().p("ACXEnQgggHgZgXQgagXgKgfQgDgKgCgJIgKAEQgpATgogKQgggHgZgXQgagXgKgfQgGgSgBgSQgeAIgegIQgggHgZgXQgagXgKgfQgJgYADgZQgjANgkgJQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQADAQAAAPQAYgIAbACQAtADAgAdQAfAdAIAsIACASQAUgFAVACQAtADAgAdQAfAcAIAsIAAABQAhgTApADQALABAKACQABgSAHgTQANgjAbgXIgFgEQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgMAXgVARIAGAEQAfAdAIArQAIAtgUAmQgTAlgqATQgpATgpgKIgCAAQgBAdgOAaQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_10_graphics_41 = new cjs.Graphics().p("ACDGLQgggHgZgXQgagXgKgfQgDgKgCgJIgKAEQgoATgpgKQgggHgZgXQgagXgKgfQgGgSgBgSQgeAIgegIQgggHgZgXQgagXgKgfQgJgZADgZQgjANgkgJQgggHgZgXQgagXgKgeQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQADAQAAAPQAYgIAbACQAtADAgAdQAfAdAIArIACASQAUgFAWACQAsADAgAdQAfAdAIAsIAAABQAhgTApADQALABAKACQABgSAHgTQANgkAbgXIgFgEQgagXgKgeQgOgoAPgrQAPgrAjgXQAOgJAOgFIgDgDQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATIgKAFIAEADQAfAdAIAsQAIAtgUAlQgMAXgVARIAGAEQAfAdAIAsQAIAtgUAmQgTAlgqATQgpATgpgKIgCAAQgBAdgOAaQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_10_graphics_42 = new cjs.Graphics().p("AB+H5QgggHgZgXQgagXgKgfQgDgKgCgJIgKAEQgoATgpgKQgggHgZgXQgagXgKgfQgGgSgBgSQgeAIgegIQgggHgZgXQgagXgKgfQgJgZADgZQgjANgkgJQgggHgZgXQgagXgKgfQgOgoAPgqQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIArQADAQAAAPQAYgIAbACQAtADAgAdQAfAdAIAsIACASQAUgFAWACQAsADAgAdQAfAdAIAsIAAABQAhgTApADQALABAKACQABgSAHgTQANgkAbgXIgFgEQgagXgKgfQgOgoAPgrQAPgqAjgXQAOgJAOgFIgDgDQgagXgKgfQgOgoAPgrQAPgrAjgXIAJgGIgOgLQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmQgRAhgjATQAIAGAHAGQAfAdAIAsQAIAtgUAmQgTAlgqATIgKAFIAEADQAfAdAIArQAIAtgUAmQgMAXgVARIAGAEQAfAdAIAsQAIAtgUAmQgTAlgqATQgpATgpgKIgCAAQgBAdgOAaQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_10_graphics_43 = new cjs.Graphics().p("AB+JYQgggHgZgXQgagXgKgfQgDgKgCgJIgKAEQgoATgpgKQgggHgZgXQgagXgKgfQgGgSgBgSQgeAIgegIQgggHgZgXQgagXgKgfQgJgZADgZQgjANgkgJQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQADAQAAAPQAYgIAbACQAtADAgAdQAfAdAIAsIACASQAUgFAWACQAsADAgAdQAfAdAIAsIAAABQAhgTApADQALABAKACQABgSAHgTQANgkAbgXIgFgEQgagXgKgfQgOgoAPgrQAPgrAjgXQAOgJAOgFIgDgDQgagXgKgeQgOgoAPgrQAPgrAjgXIAJgGIgOgLQgagXgKgfQgOgoAPgrQAEgMAGgLQgfgIgYgWQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQAIAtgUAmIgCAFQAfAHAYAWQAfAdAIAsQAIAtgUAmQgRAhgjATQAIAGAHAGQAfAdAIAsQAIAtgUAmQgTAkgqATIgKAFIAEADQAfAdAIAsQAIAtgUAmQgMAXgVARIAGAEQAfAdAIAsQAIAtgUAmQgTAlgqATQgpATgpgKIgCAAQgBAdgOAaQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_10_graphics_44 = new cjs.Graphics().p("AB+KeQgggHgZgXQgagXgKgfQgDgKgCgJIgKAEQgoATgpgKQgggHgZgXQgagXgKgfQgGgSgBgSQgeAIgegIQgggHgZgXQgagXgKgfQgJgZADgZQgjANgkgJQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQADAQAAAPQAYgIAbACQAtADAgAdQAfAdAIAsIACASQAUgFAWACQAsADAgAdQAfAdAIAsIAAABQAhgTApADQALABAKACQABgSAHgTQANgkAbgXIgFgEQgagXgKgfQgOgoAPgrQAPgrAjgXQAOgJAOgFIgDgDQgagXgKgfQgOgoAPgqQAPgrAjgXIAJgGIgOgLQgagXgKgfQgOgoAPgrQAEgMAGgLQgfgIgYgWQgagXgKgfQgJgaADgaQgQAAgPgEQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQAEASgCAQIAMABQAtADAgAdQAfAdAIAsQAIAtgUAmIgCAFQAfAHAYAWQAfAdAIAsQAIAtgUAmQgRAhgjATQAIAGAHAGQAfAdAIAsQAIAsgUAmQgTAlgqATIgKAFIAEADQAfAdAIAsQAIAtgUAmQgMAXgVARIAGAEQAfAdAIAsQAIAtgUAmQgTAlgqATQgpATgpgKIgCAAQgBAdgOAaQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_10_graphics_45 = new cjs.Graphics().p("AB+LGQgggHgZgXQgagXgKgfQgDgKgCgJIgKAEQgoATgpgKQgggHgZgXQgagXgKgfQgGgSgBgSQgeAIgegIQgggHgZgXQgagXgKgfQgJgZADgZQgjANgkgJQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQADAQAAAPQAYgIAbACQAtADAgAdQAfAdAIAsIACASQAUgFAWACQAsADAgAdQAfAdAIAsIAAABQAhgTApADQALABAKACQABgSAHgTQANgkAbgXIgFgEQgagXgKgfQgOgoAPgrQAPgrAjgXQAOgJAOgFIgDgDQgagXgKgfQgOgoAPgrQAPgqAjgXIAJgGIgOgLQgagXgKgfQgOgoAPgrQAEgMAGgLQgfgIgYgWQgagXgKgfQgJgaADgaQgQAAgPgEQgggHgZgXQgagXgKgfIgCgGIgDABQgoATgpgKQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAsADAgAdQAbAYAJAkQAfgPAkADQAtADAgAdQAfAdAIAsQAEASgCAQIAMABQAtADAgAdQAfAdAIAsQAIAtgUAmIgCAFQAfAHAYAWQAfAdAIAsQAIAtgUAmQgRAhgjATQAIAGAHAGQAfAdAIArQAIAtgUAmQgTAlgqATIgKAFIAEADQAfAdAIAsQAIAtgUAmQgMAXgVARIAGAEQAfAdAIAsQAIAtgUAmQgTAlgqATQgpATgpgKIgCAAQgBAdgOAaQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_10_graphics_46 = new cjs.Graphics().p("AB+LzQgggHgZgXQgagXgKgfQgDgKgCgJIgKAEQgoATgpgKQgggHgZgXQgagXgKgfQgGgSgBgSQgeAIgegIQgggHgZgXQgagXgKgfQgJgZADgZQgjANgkgJQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQADAQAAAPQAYgIAbACQAtADAgAdQAfAdAIAsIACASQAUgFAWACQAsADAgAdQAfAdAIAsIAAABQAhgTApADQALABAKACQABgSAHgTQANgkAbgXIgFgEQgagXgKgfQgOgoAPgrQAPgrAjgXQAOgJAOgFIgDgDQgagXgKgfQgOgoAPgrQAPgrAjgWIAJgGIgOgLQgagXgKgfQgOgoAPgrQAEgMAGgLQgfgIgYgWQgagXgKgfQgJgaADgaQgQAAgPgEQgggHgZgXQgagXgKgfIgCgGIgDABQgoATgpgKQgggHgZgXQgagXgKgfQgEgMgCgNQgJAGgKAEQgpATgpgKQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsIABAGIACgBQAkgYAtAEQAsADAgAdQAbAYAJAkQAfgPAkADQAtADAgAdQAfAdAIAsQAEASgCAQIAMABQAtADAgAdQAfAdAIAsQAIAtgUAmIgCAFQAfAHAYAWQAfAdAIAsQAIAtgUAmQgRAhgjATQAIAGAHAGQAfAcAIAsQAIAtgUAmQgTAlgqATIgKAFIAEADQAfAdAIAsQAIAtgUAmQgMAXgVARIAGAEQAfAdAIAsQAIAtgUAmQgTAlgqATQgpATgpgKIgCAAQgBAdgOAaQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_10_graphics_47 = new cjs.Graphics().p("AChL9QgggHgZgXQgagXgKgfQgDgKgCgJIgKAEQgpATgogKQgggHgZgXQgagXgKgfQgGgSgBgSQgeAIgegIQgggHgZgXQgagXgKgfQgJgZADgZQgjANgkgJQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQADAQAAAPQAYgIAbACQAtADAgAdQAfAdAIAsIACASQAUgFAVACQAtADAgAdQAfAdAIAsIAAABQAhgTApADQALABAKACQABgSAHgTQANgkAbgXIgFgEQgagXgKgfQgOgoAPgrQAPgrAjgXQAOgJAOgFIgDgDQgagXgKgfQgOgoAPgrQAPgrAjgWIAJgGIgOgLQgagXgKgfQgOgoAPgrQAEgMAGgLQgfgIgYgWQgagXgKgfQgJgaADgaQgQAAgPgEQgggHgZgXQgagXgKgfIgCgGIgDABQgpATgogKQgggHgZgXQgagXgKgfQgEgMgCgNQgJAGgKAEQgpATgpgKQgggHgZgXQgQgOgKgRQgRAUgcAMQgpATgpgKQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAPAOAKASQAMgOAPgKQAkgYAtAEQAtADAgAdQAfAdAIAsIABAGIACgBQAkgYAsAEQAtADAgAdQAbAYAJAkQAfgPAkADQAtADAgAdQAfAdAIAsQAEASgCAQIAMABQAtADAgAdQAfAdAIAsQAIAtgUAmIgCAFQAfAHAYAWQAfAdAIAsQAIAtgUAmQgRAhgjATQAIAGAHAFQAfAdAIAsQAIAtgUAmQgTAlgqATIgKAFIAEADQAfAdAIAsQAIAtgUAmQgMAXgVARIAGAEQAfAdAIAsQAIAtgUAmQgTAlgqATQgpATgpgKIgCAAQgBAdgOAaQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_10_graphics_48 = new cjs.Graphics().p("AD7L9QgggHgZgXQgagXgKgfQgDgKgCgJIgKAEQgpATgpgKQgggHgZgXQgZgXgKgfQgGgSgBgSQgeAIgegIQgggHgZgXQgagXgKgfQgJgZADgZQgjANgkgJQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQADAQAAAPQAYgIAbACQAtADAfAdQAfAdAIAsIACASQAUgFAWACQAtADAgAdQAfAdAIAsIAAABQAhgTApADQALABAKACQABgSAHgTQANgkAbgXIgFgEQgagXgKgfQgOgoAPgrQAPgrAjgXQAOgJAOgFIgDgDQgagXgKgfQgOgoAPgrQAPgrAjgWIAJgGIgOgLQgagXgKgfQgOgoAPgrQAEgMAGgLQgfgIgYgWQgagXgKgfQgJgaADgaQgQAAgPgEQgggHgZgXQgagXgKgfIgCgGIgDABQgpATgpgKQgggHgZgXQgZgXgKgfQgEgMgCgNQgJAGgKAEQgpATgpgKQgggHgZgXQgQgOgKgRQgRAUgcAMQgpATgpgKQgUgEgRgLQgTAlgqATQgpATgpgKQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAgACAZAPQAPgdAbgSQAkgYAtAEQAtADAgAdQAPAOAKASQAMgOAPgKQAkgYAtAEQAtADAgAdQAeAdAIAsIABAGIACgBQAkgYAtAEQAtADAgAdQAbAYAJAkQAfgPAkADQAtADAgAdQAfAdAIAsQAEASgCAQIAMABQAtADAgAdQAfAdAIAsQAIAtgUAmIgCAFQAfAHAYAWQAfAdAIAsQAIAtgUAmQgRAhgjATQAIAGAHAFQAfAdAIAsQAIAtgUAmQgTAlgqATIgKAFIAEADQAfAdAIAsQAIAtgUAmQgMAXgVARIAGAEQAfAdAIAsQAIAtgUAmQgTAlgqATQgpATgpgKIgCAAQgBAdgOAaQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_10_graphics_49 = new cjs.Graphics().p("AFLL9QgggHgZgXQgagXgKgfQgDgKgCgJIgKAEQgpATgpgKQgggHgZgXQgagXgKgfQgGgSgBgSQgeAIgdgIQgggHgZgXQgagXgKgfQgJgZADgZQgjANgkgJQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAfAdAIAsQADAQAAAPQAYgIAaACQAtADAgAdQAfAdAIAsIACASQAUgFAWACQAtADAgAdQAfAdAIAsIAAABQAhgTApADQALABAKACQABgSAHgTQANgkAbgXIgFgEQgagXgKgfQgOgoAPgrQAPgrAjgXQAOgJAOgFIgDgDQgagXgKgfQgOgoAPgrQAPgrAjgWIAJgGIgOgLQgagXgKgfQgOgoAPgrQAEgMAGgLQgfgIgYgWQgagXgKgfQgJgaADgaQgQAAgPgEQgggHgZgXQgagXgKgfIgCgGIgDABQgpATgpgKQgggHgZgXQgagXgKgfQgEgMgCgNQgJAGgKAEQgoATgpgKQgggHgZgXQgQgOgKgRQgRAUgcAMQgpATgpgKQgUgEgRgLQgTAlgqATQgpATgpgKIgJgCIgIARQgTAlgqATQgpATgpgKQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAQABANAEQAPgqAjgXQAkgYAtAEQAgACAZAPQAPgdAbgSQAkgYAtAEQAtADAgAdQAPAOAKASQAMgOAPgKQAkgYAtAEQAsADAgAdQAfAdAIAsIABAGIACgBQAkgYAtAEQAtADAgAdQAbAYAJAkQAfgPAkADQAtADAgAdQAfAdAIAsQAEASgCAQIAMABQAtADAgAdQAfAdAIAsQAIAtgUAmIgCAFQAfAHAYAWQAfAdAIAsQAIAtgUAmQgRAhgjATQAIAGAHAFQAfAdAIAsQAIAtgUAmQgTAlgqATIgKAFIAEADQAfAdAIAsQAIAtgUAmQgMAXgVARIAGAEQAfAdAIAsQAIAtgUAmQgTAlgqATQgpATgpgKIgCAAQgBAdgOAaQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_10_graphics_50 = new cjs.Graphics().p("AGRL9QgggHgZgXQgagXgKgfQgDgKgCgJIgKAEQgpATgpgKQgggHgZgXQgagXgKgfQgGgSgBgSQgeAIgegIQgggHgYgXQgagXgKgfQgJgZADgZQgjANgkgJQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEQAtADAgAdQAeAdAIAsQADAQAAAPQAYgIAbACQAtADAgAdQAfAdAIAsIACASQAUgFAWACQAtADAgAdQAfAdAIAsIAAABQAhgTApADQALABAKACQABgSAHgTQANgkAbgXIgFgEQgagXgKgfQgOgoAPgrQAPgrAjgXQAOgJAOgFIgDgDQgagXgKgfQgOgoAPgrQAPgrAjgWIAJgGIgOgLQgagXgKgfQgOgoAPgrQAEgMAGgLQgfgIgYgWQgagXgKgfQgJgaADgaQgQAAgPgEQgggHgZgXQgagXgKgfIgCgGIgDABQgpATgpgKQgggHgZgXQgagXgKgfQgEgMgCgNQgJAGgKAEQgpATgpgKQgfgHgZgXQgQgOgKgRQgRAUgcAMQgpATgpgKQgUgEgRgLQgTAlgqATQgpATgpgKIgJgCIgIARQgTAlgqATQggAPghgDQAEAmgSAiQgTAlgqATQgpATgpgKQgggHgZgXQgagXgKgfQgOgoAPgrQAPgrAjgXQAkgYAtAEIACAAQgDgbAKgbQAPgrAjgXQAkgYAtAEQAQABANAEQAPgqAjgXQAkgYAtAEQAgACAZAPQAPgdAbgSQAkgYAtAEQAtADAgAdQAPAOAKASQAMgOAPgKQAjgYAtAEQAtADAgAdQAfAdAIAsIABAGIACgBQAkgYAtAEQAtADAgAdQAbAYAJAkQAfgPAkADQAtADAgAdQAfAdAIAsQAEASgCAQIAMABQAtADAgAdQAfAdAIAsQAIAtgUAmIgCAFQAfAHAYAWQAfAdAIAsQAIAtgUAmQgRAhgjATQAIAGAHAFQAfAdAIAsQAIAtgUAmQgTAlgqATIgKAFIAEADQAfAdAIAsQAIAtgUAmQgMAXgVARIAGAEQAfAdAIAsQAIAtgUAmQgTAlgqATQgpATgpgKIgCAAQgBAdgOAaQgTAlgqATQgaANgbAAQgPAAgOgEg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(35).to({graphics:mask_10_graphics_35,x:257.9014,y:176.0747}).wait(1).to({graphics:mask_10_graphics_36,x:266.4014,y:182.5747}).wait(1).to({graphics:mask_10_graphics_37,x:274.4014,y:188.5747}).wait(1).to({graphics:mask_10_graphics_38,x:283.9014,y:193.0747}).wait(1).to({graphics:mask_10_graphics_39,x:291.9014,y:193.0747}).wait(1).to({graphics:mask_10_graphics_40,x:291.9014,y:193.0747}).wait(1).to({graphics:mask_10_graphics_41,x:293.9014,y:183.0747}).wait(1).to({graphics:mask_10_graphics_42,x:294.4014,y:172.0747}).wait(1).to({graphics:mask_10_graphics_43,x:294.4014,y:162.5747}).wait(1).to({graphics:mask_10_graphics_44,x:294.4014,y:155.5747}).wait(1).to({graphics:mask_10_graphics_45,x:294.4014,y:151.5747}).wait(1).to({graphics:mask_10_graphics_46,x:294.4014,y:147.0747}).wait(1).to({graphics:mask_10_graphics_47,x:290.9014,y:146.0747}).wait(1).to({graphics:mask_10_graphics_48,x:281.9014,y:146.0747}).wait(1).to({graphics:mask_10_graphics_49,x:273.9014,y:146.0747}).wait(1).to({graphics:mask_10_graphics_50,x:266.9014,y:146.0747}).wait(130));

	// lady02
	this.instance_18 = new lib.CachedBmp_8();
	this.instance_18.setTransform(195.3,77.3,0.5,0.5);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(35).to({_off:false},0).wait(145));

	// pen1
	this.instance_19 = new lib.手握筆();
	this.instance_19.setTransform(204,298.75,1,1,0,0,0,282.9,207.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({x:191.15,y:282.75},0).wait(1).to({x:181.15,y:258.75},0).wait(1).to({y:238.75},0).wait(1).to({y:217.75},0).wait(1).to({x:196.15,y:201.75},0).wait(1).to({x:210.15,y:190.75},0).wait(1).to({x:225.15,y:184.75},0).wait(1).to({x:246.15},0).wait(1).to({x:266.15},0).wait(1).to({x:282.9,y:200.75},0).wait(1).to({x:295.9,y:213.75},0).wait(1).to({x:310.9,y:229.75},0).wait(1).to({x:324.9,y:245.75},0).wait(1).to({x:334.9,y:261.75},0).wait(1).to({x:352.25,y:276.75},0).wait(1).to({x:362.25,y:298.75},0).wait(1).to({x:374.25,y:316.75},0).wait(1).to({x:387.25,y:333.75},0).wait(1).to({x:397.25,y:349.75},0).wait(1).to({x:415.25,y:363.75},0).wait(1).to({x:432.25,y:375.7},0).wait(1).to({x:449.25,y:390.7},0).wait(1).to({x:467.25,y:401.7},0).wait(1).to({x:481.25,y:389.7},0).wait(1).to({x:493.25,y:369.7},0).wait(1).to({x:474.25,y:349.75},0).wait(1).to({x:461.25,y:329.75},0).wait(1).to({x:449.25,y:309.75},0).to({_off:true},7).wait(145));

	// 遮色片1 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("AgKBnQgfgEgZgVQgZgVgIgeQgIgdAKgfQALgfAYgTQAbgUAjAAQAkAAAbAVQAaAUAKAjQAKAhgNAfQgMAggfASQgZARgcAAIgKgBg");
	var mask_11_graphics_1 = new cjs.Graphics().p("AAnC3QgfgEgYgVQgZgVgIgeQgIgeAKgfQAFgNAHgLQgMACgNgBQgfgEgZgUQgZgVgIgeQgIgeAKgfQALgfAYgTQAbgUAkAAQAkAAAaAVQAaAUAKAjQAKAigNAfQgEALgGAJIAOgBQAkAAAbAVQAaATAKAjQAKAigNAfQgMAggfASQgZARgdAAIgKgBg");
	var mask_11_graphics_2 = new cjs.Graphics().p("ABhEeQgfgEgZgVQgZgVgIgeQgIgeAKgfQAFgNAHgLQgNACgLgBQgfgEgZgVQgZgVgIgeQgIgeAKgeQAEgJAEgJQgPAAgPgDQgggIgZgXQgZgXgLgfQgOgoAPgrQAPgqAkgYQAjgXAuADQAtAEAeAdQAgAcAIAtQAIAsgUAmQgFAKgGAIQAcADAWARQAaAUAKAjQAKAhgNAfQgEALgGAJIAOgBQAkAAAbAVQAaAUAKAjQAKAigNAfQgMAggfASQgZAQgdAAIgKAAg");
	var mask_11_graphics_3 = new cjs.Graphics().p("ABrGCQgfgEgZgVQgZgVgIgeQgIgeAKgfQAFgNAHgLQgNACgMgBQgegEgZgVQgZgVgIgeQgIgeAKgfQAEgJAEgJQgPAAgPgDQgggIgZgXQgZgXgLgeQgOgoAPgrQALgeAUgUIgQgNQgZgXgLgfQgOgoAPgrQAPgqAkgYQAjgXAuADQAtAEAfAcQAfAdAIAtQAIAsgUAmQgKASgNAOQAIAGAHAHQAgAcAIAtQAIAsgUAlQgFAKgGAIQAcADAWARQAaAUAKAjQAKAigNAfQgEALgGAJIAOgBQAkAAAbAVQAaAUAKAjQAKAigNAfQgMAggfASQgZAQgdAAIgKAAg");
	var mask_11_graphics_4 = new cjs.Graphics().p("ABrHmQgfgEgZgVQgZgVgIgeQgIgeAKgfQAFgNAHgLQgNACgMgBQgegEgZgVQgZgVgIgeQgIgeAKgfQAEgJAEgJQgPAAgPgDQgggIgZgXQgZgXgLgfQgOgoAPgrQALgdAUgUIgQgNQgZgXgLgfQgOgoAPgrQAPgqAkgYIAHgEQgUgVgJgaQgOgoAPgrQAPgqAkgYQAjgXAuADQAtAEAeAdQAgAcAIAtQAIAsgUAmQgRAhghASQAZAbAHAoQAIAsgUAmQgKASgNAOQAIAGAHAHQAgAcAIAsQAIAsgUAmQgFAKgGAIQAcADAWARQAaAUAKAjQAKAigNAfQgEALgGAJIAOgBQAkAAAbAVQAaAUAKAjQAKAigNAfQgMAggfASQgZAQgdAAIgKAAg");
	var mask_11_graphics_5 = new cjs.Graphics().p("ABrI7QgfgEgZgVQgZgVgIgeQgIgeAKgfQAFgNAHgLQgNACgMgBQgegEgZgVQgZgVgIgeQgIgeAKgfQAEgJAEgJQgPAAgPgDQgggIgZgXQgZgXgLgfQgOgoAPgrQALgeAUgUIgQgNQgZgWgLgfQgOgoAPgrQAPgqAkgYIAHgEQgUgVgJgaQgOgoAPgrQAPgqAkgYQAKgHAMgFIgEgJQgOgoAPgrQAPgqAkgYQAjgXAtADQAtAEAfAdQAgAcAIAtQAIAsgUAmQgUAmgpATIgFACQAFANADAQQAIAsgUAmQgRAhghASQAZAbAHAoQAIAsgUAmQgKARgNAOQAIAGAHAHQAgAcAIAtQAIAsgUAmQgFAKgGAIQAcADAWARQAaAUAKAjQAKAigNAfQgEALgGAJIAOgBQAkAAAbAVQAaAUAKAjQAKAigNAfQgMAggfASQgZAQgdAAIgKAAg");
	var mask_11_graphics_6 = new cjs.Graphics().p("ABPJ8QgegEgZgVQgYgVgJgeQgIgeALgfQAEgNAGgLQgLACgNgBQgegEgZgVQgZgVgJgeQgIgeALgfQADgJAFgJQgPAAgPgDQgggIgZgXQgagXgKgfQgOgoAPgrQALgeAUgUIgQgNQgagXgKgfQgOgnAPgrQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQALgHALgFIgDgJQgOgoAPgrQAPgqAjgYQAkgXAtADIABAAQAAgVAIgXQAOgqAjgYQAkgXAtADQAtAEAgAdQAfAcAIAtQAIAsgUAmQgTAmgqATQggAPgggDQABAggQAdQgUAmgpATIgFACQAGANACAQQAIAsgUAmQgQAhghASQAZAbAGAoQAIArgTAmQgJASgOAOQAIAGAIAHQAeAcAIAtQAIAsgUAmQgFAKgGAIQAcADAWARQAbAUAKAjQAJAigMAfQgEALgHAJIAOgBQAkAAAbAVQAbAUAKAjQAJAigMAfQgNAggeASQgaAQgcAAIgLAAg");
	var mask_11_graphics_7 = new cjs.Graphics().p("AAAKkQgegEgZgVQgZgVgJgeQgIgeALgfQAEgNAHgLQgMACgNgBQgegEgZgVQgZgVgJgeQgIgeALgfQADgJAFgJQgPAAgPgDQgggIgZgXQgagXgKgfQgOgoAPgrQALgeAUgUIgQgNQgagXgKgfQgOgoAPgqQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQALgHALgFIgDgJQgOgoAPgrQAPgqAjgYQAkgXAtADIABAAQAAgVAIgXQAPgqAjgYQAjgXAtADQAQABANAEQAPgqAjgXQAkgXAtADQAtAEAgAdQAfAcAIAtQAIAsgUAmQgTAmgqATQgpATgpgKIgJgDIgIARQgTAmgqATQggAPgggDQABAggQAdQgTAmgpATIgFACQAGANACAQQAIAsgUAmQgQAhgiASQAZAbAHAnQAIAsgUAmQgJASgOAOQAIAGAIAHQAfAcAIAtQAIAsgUAmQgFAKgGAIQAcADAWARQAaAUAKAjQAJAigMAfQgEALgGAJIANgBQAkAAAbAVQAbAUAKAjQAJAigMAfQgNAggeASQgaAQgcAAIgKAAg");
	var mask_11_graphics_8 = new cjs.Graphics().p("AhkKpQgegEgZgVQgZgVgJgeQgIgeALgfQAEgNAHgLQgMACgNgBQgegEgZgVQgZgVgJgeQgIgeALgfQADgJAFgJQgPAAgPgDQgggIgZgXQgagXgKgfQgOgoAPgrQALgeAUgUIgQgNQgagXgKgfQgOgoAPgqQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQALgHALgFIgDgJQgOgoAPgrQAPgqAjgYQAkgXAtADIABAAQAAgVAIgXQAPgqAjgYQAkgXAtADQAQABANAEQAPgqAigXQAkgXAtADQAtAEAgAdIAJAJQAOgTATgNQAkgXAtADQAtAEAgAdQAfAcAIAtQAIAsgUAmQgTAmgqATQgpATgpgKQgggIgZgXIgJgJQgTAaghAPQgpATgpgKIgJgDIgIARQgTAmgpATQggAPgggDQABAggQAdQgUAmgpATIgFACQAGANACAQQAIAsgUAmQgQAhgiASQAZAbAHAnQAIAsgUAmQgJASgOAOQAIAGAIAHQAfAcAIAtQAIAsgUAmQgFAKgGAIQAcADAWARQAbAUAKAjQAJAigMAfQgEALgHAJIAOgBQAkAAAbAVQAaAUAKAjQAJAigMAfQgMAggeASQgaAQgcAAIgLAAg");
	var mask_11_graphics_9 = new cjs.Graphics().p("Ai+KpQgegEgZgVQgZgVgJgeQgIgeALgfQAEgNAHgLQgMACgNgBQgegEgZgVQgZgVgJgeQgIgeALgfQADgJAFgJQgPAAgPgDQgggIgZgXQgagXgKgfQgOgoAPgrQALgeAUgUIgQgNQgagXgKgfQgOgoAPgqQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQALgHALgFIgDgJQgOgoAPgrQAPgqAjgYQAkgXAtADIABAAQAAgVAIgXQAPgqAjgYQAkgXAtADQAQABANAEQAPgqAjgXQAkgXAsADQAtAEAgAdIAJAJQAOgTATgNQAkgXAtADQAtAEAgAdQANAMAKAPQAjgXAtADQAtAEAgAdQAfAcAIAtQAIAsgUAmQgTAmgqATQgpATgpgKQgggIgZgXQgOgMgKgQIgRAKQgpATgpgKQgggIgZgXIgJgJQgTAaghAPQgpATgogKIgJgDIgIARQgTAmgqATQggAPgggDQABAggQAdQgUAmgpATIgFACQAGANACAQQAIAsgUAmQgQAhgiASQAZAbAHAnQAIAsgUAmQgJASgOAOQAIAGAIAHQAfAcAIAtQAIAsgUAmQgFAKgGAIQAcADAWARQAbAUAKAjQAJAigMAfQgEALgHAJIAOgBQAkAAAbAVQAbAUAKAjQAJAigMAfQgNAggeASQgaAQgcAAIgLAAg");
	var mask_11_graphics_10 = new cjs.Graphics().p("AkTKpQgegEgZgVQgZgVgJgeQgIgeALgfQAEgNAHgLQgMACgNgBQgegEgZgVQgZgVgJgeQgIgeALgfQADgJAFgJQgPAAgPgDQgggIgZgXQgagXgKgfQgOgoAPgrQALgeAUgUIgQgNQgagXgKgfQgOgoAPgqQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQALgHALgFIgDgJQgOgoAPgrQAPgqAjgYQAkgXAtADIABAAQAAgVAIgXQAPgqAjgYQAkgXAtADQAQABANAEQAPgqAjgXQAkgXAtADQAtAEAfAdIAJAJQAOgTATgNQAkgXAtADQAtAEAgAdQANAMAKAPQAjgXAtADQAtAEAgAdQAPANAJARQAggQAlADQAtAEAgAdQAfAcAIAtQAIAsgUAmQgTAmgqATQgpATgpgKQgggIgZgXQgQgOgKgRIgFADQgpATgpgKQgggIgZgXQgOgMgKgQIgRAKQgpATgpgKQgggIgZgXIgJgJQgTAaggAPQgpATgpgKIgJgDIgIARQgTAmgqATQggAPgggDQABAggQAdQgUAmgpATIgFACQAGANACAQQAIAsgUAmQgQAhgiASQAZAbAHAnQAIAsgUAmQgJASgOAOQAIAGAIAHQAfAcAIAtQAIAsgUAmQgFAKgGAIQAcADAWARQAbAUAKAjQAJAigMAfQgEALgHAJIAOgBQAkAAAbAVQAbAUAKAjQAJAigMAfQgNAggeASQgaAQgcAAIgLAAg");
	var mask_11_graphics_11 = new cjs.Graphics().p("AleKpQgegEgZgVQgZgVgJgeQgIgeALgfQAEgNAHgLQgMACgNgBQgegEgZgVQgZgVgJgeQgIgeALgfQADgJAFgJQgPAAgPgDQgggIgZgXQgagXgKgfQgOgoAPgrQALgeAUgUIgQgNQgagXgKgfQgOgoAPgqQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQALgHALgFIgDgJQgOgoAPgrQAPgqAjgYQAkgXAtADIABAAQAAgVAIgXQAPgqAjgYQAkgXAtADQAQABANAEQAPgqAjgXQAkgXAtADQAtAEAgAdIAJAJQAOgTATgNQAjgXAtADQAtAEAgAdQANAMAKAPQAjgXAtADQAtAEAgAdQAPANAJARQAggQAlADQAtAEAgAdQAfAcAIAtQADANAAAMQAPgCAQABQAtAEAgAdQAfAcAIAtQAIAsgUAmQgUAmgpATQgpATgpgKQgggIgZgXQgagXgKgfQgIgVABgXQgZAFgZgGQgggIgZgXQgQgOgKgRIgFADQgpATgpgKQgggIgZgXQgOgMgKgQIgRAKQgpATgpgKQgfgIgZgXIgJgJQgTAaghAPQgpATgpgKIgJgDIgIARQgTAmgqATQggAPgggDQABAggQAdQgUAmgpATIgFACQAGANACAQQAIAsgUAmQgQAhgiASQAZAbAHAnQAIAsgUAmQgJASgOAOQAIAGAIAHQAfAcAIAtQAIAsgUAmQgFAKgGAIQAcADAWARQAbAUAKAjQAJAigMAfQgEALgHAJIAOgBQAkAAAbAVQAbAUAKAjQAJAigMAfQgNAggeASQgaAQgcAAIgLAAg");
	var mask_11_graphics_12 = new cjs.Graphics().p("AmkKpQgegEgZgVQgZgVgJgeQgIgeALgfQAEgNAHgLQgMACgNgBQgegEgZgVQgZgVgJgeQgIgeALgfQADgJAFgJQgPAAgPgDQgggIgZgXQgagXgKgfQgOgoAPgrQALgeAUgUIgQgNQgagXgKgfQgOgoAPgqQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQALgHALgFIgDgJQgOgoAPgrQAPgqAjgYQAkgXAtADIABAAQAAgVAIgXQAPgqAjgYQAkgXAtADQAQABANAEQAPgqAjgXQAkgXAtADQAtAEAgAdIAJAJQAOgTATgNQAkgXAtADQAsAEAgAdQANAMAKAPQAjgXAtADQAtAEAgAdQAPANAJARQAggQAlADQAtAEAgAdQAfAcAIAtQADANAAAMQAPgCAQABQAtAEAgAdQAfAcAIAtQAHAigLAfQAOgCAOABQAtAEAgAdQAfAcAIAtQAIAsgUAmQgTAmgqATQgpATgpgKQgggIgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAFgYgGQgggIgZgXQgagXgKgfQgIgVABgXQgZAFgZgGQgggIgZgXQgQgOgKgRIgFADQgpATgpgKQgggIgZgXQgOgMgKgQIgRAKQgoATgpgKQgggIgZgXIgJgJQgTAaghAPQgpATgpgKIgJgDIgIARQgTAmgqATQggAPgggDQABAggQAdQgUAmgpATIgFACQAGANACAQQAIAsgUAmQgQAhgiASQAZAbAHAnQAIAsgUAmQgJASgOAOQAIAGAIAHQAfAcAIAtQAIAsgUAmQgFAKgGAIQAcADAWARQAbAUAKAjQAJAigMAfQgEALgHAJIAOgBQAkAAAbAVQAbAUAKAjQAJAigMAfQgNAggeASQgaAQgcAAIgLAAg");
	var mask_11_graphics_13 = new cjs.Graphics().p("AnqKpQgegEgZgVQgZgVgJgeQgIgeALgfQAEgNAHgLQgMACgNgBQgegEgZgVQgZgVgJgeQgIgeALgfQADgJAFgJQgPAAgPgDQgggIgZgXQgagXgKgfQgOgoAPgrQALgeAUgUIgQgNQgagXgKgfQgOgoAPgqQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQALgHALgFIgDgJQgOgoAPgrQAPgqAjgYQAkgXAtADIABAAQAAgVAIgXQAPgqAjgYQAkgXAtADQAQABANAEQAPgqAjgXQAkgXAtADQAtAEAgAdIAJAJQAOgTATgNQAkgXAtADQAtAEAgAdQAMAMAKAPQAjgXAtADQAtAEAgAdQAPANAJARQAggQAlADQAtAEAgAdQAfAcAIAtQADANAAAMQAPgCAQABQAtAEAgAdQAfAcAIAtQAHAigLAfQAOgCAOABQAtAEAgAdQAfAcAIAtQAGAcgHAaQAMgBANABQAtAEAgAdQAfAcAIAtQAIArgUAmQgTAmgqATQgpATgpgKQgggIgZgXQgagXgKgfQgMgjAKglQgWADgXgFQgggIgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAFgYgGQgggIgZgXQgagXgKgfQgIgVABgXQgZAFgZgGQgggIgZgXQgQgOgKgRIgFADQgpATgpgKQgggIgZgXQgNgMgKgQIgRAKQgpATgpgKQgggIgZgXIgJgJQgTAaghAPQgpATgpgKIgJgDIgIARQgTAmgqATQggAPgggDQABAggQAdQgUAmgpATIgFACQAGANACAQQAIAsgUAmQgQAhgiASQAZAbAHAnQAIAsgUAmQgJASgOAOQAIAGAIAHQAfAcAIAtQAIAsgUAmQgFAKgGAIQAcADAWARQAbAUAKAjQAJAigMAfQgEALgHAJIAOgBQAkAAAbAVQAbAUAKAjQAJAigMAfQgNAggeASQgaAQgcAAIgLAAg");
	var mask_11_graphics_14 = new cjs.Graphics().p("AorKpQgegEgZgVQgZgVgJgeQgIgeALgfQAEgNAHgLQgMACgNgBQgegEgZgVQgZgVgJgeQgIgeALgfQADgJAFgJQgPAAgPgDQgggIgZgXQgagXgKgfQgOgoAPgrQALgeAUgUIgQgNQgagXgKgfQgOgoAPgqQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQALgHALgFIgDgJQgOgoAPgrQAPgqAjgYQAkgXAtADIABAAQAAgVAIgXQAPgqAjgYQAkgXAtADQAQABANAEQAPgqAjgXQAkgXAtADQAtAEAgAdIAJAJQAOgTATgNQAkgXAtADQAtAEAgAdQANAMAKAPQAjgXAsADQAtAEAgAdQAPANAJARQAggQAlADQAtAEAgAdQAfAcAIAtQADANAAAMQAPgCAQABQAtAEAgAdQAfAcAIAtQAHAigLAfQAOgCAOABQAtAEAgAdQAfAcAIAtQAGAcgHAaQAMgBANABQAtAEAgAdQAfAcAIAtQAHAhgLAeIASAAQAtAEAgAdQAfAcAIAtQAIAsgUAmQgTAmgqATQgpATgpgKQgggIgZgXQgagXgKgfQgOgoAPgqQgTABgTgEQgggIgZgXQgagXgKgfQgMgjAKglQgWADgXgFQgggIgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAFgYgGQgggIgZgXQgagXgKgfQgIgVABgXQgZAFgZgGQgggIgZgXQgQgOgKgRIgFADQgpATgogKQgggIgZgXQgOgMgKgQIgRAKQgpATgpgKQgggIgZgXIgJgJQgTAaghAPQgpATgpgKIgJgDIgIARQgTAmgqATQggAPgggDQABAggQAdQgUAmgpATIgFACQAGANACAQQAIAsgUAmQgQAhgiASQAZAbAHAnQAIAsgUAmQgJASgOAOQAIAGAIAHQAfAcAIAtQAIAsgUAmQgFAKgGAIQAcADAWARQAbAUAKAjQAJAigMAfQgEALgHAJIAOgBQAkAAAbAVQAbAUAKAjQAJAigMAfQgNAggeASQgaAQgcAAIgLAAg");
	var mask_11_graphics_15 = new cjs.Graphics().p("ApnKpQgegEgZgVQgZgVgJgeQgIgeALgfQAEgNAHgLQgMACgNgBQgegEgZgVQgZgVgJgeQgIgeALgfQADgJAFgJQgPAAgPgDQgggIgZgXQgagXgKgfQgOgoAPgrQALgeAUgUIgQgNQgagXgKgfQgOgoAPgqQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQALgHALgFIgDgJQgOgoAPgrQAPgqAjgYQAkgXAtADIABAAQAAgVAIgXQAPgqAjgYQAkgXAtADQAQABANAEQAPgqAjgXQAkgXAtADQAtAEAgAdIAJAJQAOgTATgNQAkgXAtADQAtAEAgAdQANAMAKAPQAjgXAtADQAsAEAgAdQAPANAJARQAggQAlADQAtAEAgAdQAfAcAIAtQADANAAAMQAPgCAQABQAtAEAgAdQAfAcAIAtQAHAigLAfQAOgCAOABQAtAEAgAdQAfAcAIAtQAGAcgHAaQAMgBANABQAtAEAgAdQAfAcAIAtQAHAhgLAeIASAAQAtAEAgAdQAfAcAIAtQAHAigLAeIAIAAQAtAEAgAdQAfAcAIAtQAIAsgUAmQgTAmgqATQgpATgpgKQgggIgZgXQgagXgKgfQgOgnAPgrQgOAAgOgDQgggIgZgXQgagXgKgfQgOgoAPgqQgTABgTgEQgggIgZgXQgagXgKgfQgMgjAKglQgWADgXgFQgggIgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAFgYgGQgggIgZgXQgagXgKgfQgIgVABgXQgZAFgZgGQgggIgZgXQgQgOgKgRIgFADQgoATgpgKQgggIgZgXQgOgMgKgQIgRAKQgpATgpgKQgggIgZgXIgJgJQgTAaghAPQgpATgpgKIgJgDIgIARQgTAmgqATQggAPgggDQABAggQAdQgUAmgpATIgFACQAGANACAQQAIAsgUAmQgQAhgiASQAZAbAHAnQAIAsgUAmQgJASgOAOQAIAGAIAHQAfAcAIAtQAIAsgUAmQgFAKgGAIQAcADAWARQAbAUAKAjQAJAigMAfQgEALgHAJIAOgBQAkAAAbAVQAbAUAKAjQAJAigMAfQgNAggeASQgaAQgcAAIgLAAg");
	var mask_11_graphics_16 = new cjs.Graphics().p("AqeKpQgegEgZgVQgZgVgJgeQgIgeALgfQAEgNAHgLQgMACgNgBQgegEgZgVQgZgVgJgeQgIgeALgfQADgJAFgJQgPAAgPgDQgggIgZgXQgagXgKgfQgOgoAPgrQALgeAUgUIgQgNQgagXgKgfQgOgoAPgqQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQALgHALgFIgDgJQgOgoAPgrQAPgqAjgYQAkgXAtADIABAAQAAgVAIgXQAPgqAjgYQAkgXAtADQAQABANAEQAPgqAjgXQAkgXAtADQAtAEAgAdIAJAJQAOgTATgNQAkgXAtADQAtAEAgAdQANAMAKAPQAjgXAtADQAtAEAgAdQAOANAJARQAggQAlADQAtAEAgAdQAfAcAIAtQADANAAAMQAPgCAQABQAtAEAgAdQAfAcAIAtQAHAigLAfQAOgCAOABQAtAEAgAdQAfAcAIAtQAGAcgHAaQAMgBANABQAtAEAgAdQAfAcAIAtQAHAhgLAeIASAAQAtAEAgAdQAfAcAIAtQAHAigLAeIAIAAQAtAEAgAdQAfAcAIAtQAIAngQAjIACAAQAtAEAgAdQAfAcAIAtQAIAsgUAmQgTAmgqATQgpATgpgKQgggIgZgXQgagXgKgfQgOgoAPgrIADgJQgKgBgLgCQgggIgZgXQgagXgKgfQgOgnAPgrQgOAAgOgDQgggIgZgXQgagXgKgfQgOgoAPgqQgTABgTgEQgggIgZgXQgagXgKgfQgMgjAKglQgWADgXgFQgggIgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAFgYgGQgggIgZgXQgagXgKgfQgIgVABgXQgZAFgZgGQgggIgYgXQgQgOgKgRIgFADQgpATgpgKQgggIgZgXQgOgMgKgQIgRAKQgpATgpgKQgggIgZgXIgJgJQgTAaghAPQgpATgpgKIgJgDIgIARQgTAmgqATQggAPgggDQABAggQAdQgUAmgpATIgFACQAGANACAQQAIAsgUAmQgQAhgiASQAZAbAHAnQAIAsgUAmQgJASgOAOQAIAGAIAHQAfAcAIAtQAIAsgUAmQgFAKgGAIQAcADAWARQAbAUAKAjQAJAigMAfQgEALgHAJIAOgBQAkAAAbAVQAbAUAKAjQAJAigMAfQgNAggeASQgaAQgcAAIgLAAg");
	var mask_11_graphics_17 = new cjs.Graphics().p("AOFLuQgggHgZgXQgagXgKgfQgOgoAPgrIADgJQgPAAgQgEQgggHgZgXQgagXgKgfQgOgoAPgrIADgJQgKgBgLgDQgggHgZgXQgagXgKgfQgOgoAPgqQgOAAgOgEQgggHgZgXQgagXgKgfQgOgoAPgrQgTACgTgFQgggHgZgXQgagWgKgfQgMgkAKglQgWADgXgGQgggHgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgGQgggHgZgXQgagXgKgfQgIgWABgWQgZAEgYgGQgggHgZgXQgQgOgKgRIgFACQgpATgpgKQgggHgZgXQgOgNgKgPIgRAJQgpATgpgKQgggHgZgXIgJgJQgTAZghAPQgpATgpgKIgJgCIgIARQgTAlgqATQggAPgggDQABAhgQAdQgUAlgpATIgFADQAGANACAPQAIAtgUAmQgQAggiATQAZAbAHAnQAIAtgUAlQgJASgOAOQAIAFAIAHQAfAdAIAsQAIAtgUAmQgFAJgGAJQAcACAWARQAbAVAKAiQAJAjgMAfQgEAKgHAKIAOgBQAkAAAbAUQAbAVAKAiQAJAjgMAfQgNAfgeATQgfATgigEQgegDgZgVQgZgWgJgdQgIgeALgfQAEgNAHgLQgMACgNgCQgegDgZgVQgZgWgJgdQgIgeALgfQADgKAFgIQgPAAgPgEQgggHgZgXQgagXgKgfQgOgoAPgrQALgeAUgUIgQgNQgagXgKgfQgOgnAPgrQAPgrAjgXIAHgFQgTgUgJgaQgOgoAPgrQAPgrAjgXQALgHALgFIgDgJQgOgoAPgrQAPgrAjgXQAkgYAtAEIABAAQAAgWAIgWQAPgrAjgXQAkgYAtAEQAQABANAEQAPgqAjgXQAkgYAtAEQAtADAgAdIAJAKQAOgTATgNQAkgYAtAEQAtADAgAdQANAMAKAQQAjgYAtAEQAtADAgAdQAPAOAJARQAggQAkADQAtADAgAdQAfAdAIAsQADANAAANQAPgDAQACQAtADAgAdQAfAdAIAsQAHAjgLAeQAOgBAOABQAtADAgAdQAfAdAIAsQAGAdgHAaQAMgBANABQAtADAgAdQAfAdAIAsQAHAigLAfIASAAQAtADAgAdQAfAcAIAsQAHAigLAeIAIABQAtADAgAdQAfAdAIAsQAIAogQAjIACAAQAtADAgAdQAfAdAIAsQAIAogQAiIAMABQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_11_graphics_18 = new cjs.Graphics().p("APBNIQgggHgZgXQgagXgKgfQgOgoAPgrIADgJQgPAAgQgEQgggHgZgXQgagXgKgfQgOgoAPgrIADgJQgPAAgQgEQgggHgZgXQgagXgKgfQgOgoAPgrIADgJQgKgBgLgDQgggHgZgXQgagXgKgfQgOgoAPgqQgOAAgOgEQgggHgZgXQgagXgKgfQgOgoAPgqQgTACgTgFQgggHgZgXQgagXgKgfQgMgkAKglQgWADgXgGQgggHgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgGQgggHgZgXQgZgXgKgfQgIgWABgWQgZAEgZgGQgggHgZgXQgQgOgKgRIgFACQgpATgpgKQgggHgZgXQgOgNgKgPIgRAJQgpATgpgKQgggHgZgXIgJgJQgTAZghAPQgpATgpgKIgJgCIgIARQgTAlgqATQggAPgggDQABAhgQAdQgUAlgpATIgFADQAGANACAPQAIAtgUAmQgQAggiATQAZAbAHAnQAIAtgUAmQgJASgOAOQAIAFAIAHQAfAcAIAsQAIAtgUAmQgFAJgGAJQAcACAWARQAbAVAKAiQAJAjgMAfQgEAKgHAKIAOgBQAkAAAbAUQAbAVAKAiQAJAjgMAfQgNAfgeATQgfATgigEQgegDgZgVQgZgWgJgdQgIgeALgfQAEgNAHgLQgMACgNgCQgegDgZgVQgZgWgJgdQgIgeALgfQADgKAFgIQgPAAgPgEQgggHgZgXQgagXgKgfQgOgoAPgrQALgeAUgTIgQgNQgagXgKgfQgOgoAPgrQAPgrAjgXIAHgFQgTgUgJgaQgOgoAPgrQAPgrAjgXQALgHALgFIgDgJQgOgoAPgrQAPgrAjgXQAkgYAtAEIABAAQAAgWAIgWQAPgrAjgXQAkgYAtAEQAQABANAEQAPgqAjgXQAkgYAtAEQAtADAgAdIAJAKQAOgTATgNQAkgYAtAEQAtADAgAdQANAMAKAQQAjgYAtAEQAtADAgAdQAPAOAJARQAggQAlADQAsADAgAdQAfAdAIAsQADANAAANQAPgDAQACQAtADAgAdQAfAdAIAsQAHAjgLAeQAOgBAOABQAtADAgAdQAfAdAIAsQAGAdgHAaQAMgBANABQAtADAgAdQAfAdAIAsQAHAigLAfIASAAQAtADAgAdQAfAdAIAsQAHAhgLAeIAIABQAtADAgAdQAfAdAIAsQAIAogQAjIACAAQAtADAgAdQAfAdAIAsQAIAogQAiIAMABQAtADAgAdQAfAdAIAsQAIAogQAiIAMABQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgaANgbAAQgPAAgOgEg");
	var mask_11_graphics_19 = new cjs.Graphics().p("AQHOdQgggHgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgGQgggHgZgXQgagXgKgfQgOgoAPgrIADgJQgPAAgQgEQgggHgZgXQgagXgKgfQgOgoAPgrIADgJQgPAAgQgEQgggHgZgXQgagXgKgfQgOgoAPgrIADgJQgKgBgLgDQgggHgZgXQgagXgKgfQgOgoAPgqQgOAAgOgEQgggHgZgXQgagWgKgfQgOgoAPgrQgTACgTgFQgggHgZgXQgagXgKgfQgMgkAKglQgWADgXgGQgggHgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgGQgfgHgZgXQgagXgKgfQgIgWABgWQgZAEgZgGQgggHgZgXQgQgOgKgRIgFACQgpATgpgKQgggHgZgXQgOgNgKgPIgRAJQgpATgpgKQgggHgZgXIgJgJQgTAZghAPQgpATgpgKIgJgCIgIARQgTAlgqATQggAPgggDQABAhgQAdQgUAlgpATIgFADQAGANACAPQAIAtgUAmQgQAggiATQAZAbAHAnQAIAtgUAmQgJASgOAOQAIAFAIAHQAfAdAIAsQAIAsgUAmQgFAJgGAJQAcACAWARQAbAVAKAiQAJAjgMAfQgEAKgHAKIAOgBQAkAAAbAUQAbAVAKAiQAJAjgMAfQgNAfgeATQgfATgigEQgegDgZgVQgZgWgJgdQgIgeALgfQAEgNAHgLQgMACgNgCQgegDgZgVQgZgWgJgdQgIgeALgfQADgKAFgIQgPAAgPgEQgggHgZgXQgagXgKgfQgOgnAPgrQALgeAUgUIgQgNQgagXgKgfQgOgoAPgrQAPgrAjgXIAHgFQgTgUgJgaQgOgoAPgrQAPgrAjgXQALgHALgFIgDgJQgOgoAPgrQAPgrAjgXQAkgYAtAEIABAAQAAgWAIgWQAPgrAjgXQAkgYAtAEQAQABANAEQAPgqAjgXQAkgYAtAEQAtADAgAdIAJAKQAOgTATgNQAkgYAtAEQAtADAgAdQANAMAKAQQAjgYAtAEQAtADAgAdQAPAOAJARQAggQAlADQAtADAgAdQAeAdAIAsQADANAAANQAPgDAQACQAtADAgAdQAfAdAIAsQAHAjgLAeQAOgBAOABQAtADAgAdQAfAdAIAsQAGAdgHAaQAMgBANABQAtADAgAdQAfAdAIAsQAHAigLAfIASAAQAtADAgAdQAfAdAIAsQAHAigLAeIAIABQAtADAgAdQAfAcAIAsQAIAogQAjIACAAQAtADAgAdQAfAdAIAsQAIAogQAiIAMABQAtADAgAdQAfAdAIAsQAIAogQAiIAMABQAtADAgAdQAfAdAIAsQAHAjgLAeQAOgBAOABQAtADAgAdQAfAdAIAsQAIAtgUAmQgUAlgpATQgbANgbAAQgOAAgOgEg");
	var mask_11_graphics_20 = new cjs.Graphics().p("AQnPaQglgagNgnQgMglAKgmQgcAGgbgHQgggHgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgGQgggHgZgXQgagXgKgfQgOgoAPgrIADgJQgPAAgQgEQgggHgZgXQgagXgKgfQgOgoAPgrIADgJQgPAAgQgEQgggHgZgXQgagXgKgfQgOgoAPgrIADgJQgKgBgLgDQgggHgZgXQgagXgKgfQgOgoAPgpQgOAAgOgEQgggHgZgXQgagXgKgfQgOgoAPgrQgTACgTgFQgggHgZgXQgagXgKgfQgNgkALglQgXADgWgGQgggHgZgXQgZgXgKgfQgOgoAPgrIAAgBQgYAEgYgGQgggHgZgXQgagXgKgfQgIgWABgWQgZAEgZgGQgggHgZgXQgQgOgKgRIgFACQgpATgpgKQgggHgZgXQgOgNgKgPIgRAJQgpATgpgKQgggHgZgXIgJgJQgTAaghAOQgpATgpgKIgJgCIgIARQgTAlgqATQggAPgggDQABAhgQAdQgUAlgpATIgFADQAGANACAPQAIAtgUAmQgRAgghATQAZAbAHAnQAIAtgUAmQgJASgOAOQAIAFAIAHQAfAdAIAsQAIAtgUAmQgFAJgGAJQAcADAWAPQAbAVAKAiQAJAjgMAfQgEAKgHAKIAOgBQAkAAAbAUQAbAVAKAiQAJAjgMAfQgNAfgeATQgfATgigEQgegDgZgVQgZgWgJgdQgIgeALgfQAEgNAHgLQgMACgNgCQgegDgZgVQgZgWgJgdQgIgeALgfQADgKAFgIQgPAAgPgEQgggHgZgXQgagWgKgfQgOgoAPgrQAKgeAVgUIgQgNQgagXgKgfQgOgoAPgrQAPgrAjgXIAHgEQgTgVgJgaQgOgoAPgrQAPgrAjgXQALgHALgFIgDgJQgOgoAPgrQAPgrAjgXQAkgYAtAEIABAAQAAgWAIgWQAPgrAjgXQAkgYAtAEQAPABAOAEQAPgqAjgXQAkgYAtAEQAtADAgAdIAJAKQAOgTATgNQAkgYAtAEQAtADAgAdQANANAKAPQAjgYAtAEQAtADAgAdQAPAOAJARQAfgQAmADQAtADAgAdQAfAdAIAsQADANAAANQAPgCAQABQAsADAgAdQAfAdAIAsQAGAjgKAeQAOgBAOABQAtADAgAdQAfAdAIAsQAFAdgGAaQAMgBANABQAtADAgAdQAfAdAIAsQAGAigKAfIASAAQAtADAgAdQAfAdAIAsQAGAigKAeIAIABQAtADAgAdQAfAdAIAsQAHAngPAjIACAAQAtADAgAdQAfAdAIAsQAHAogPAiIAMABQAtADAgAdQAfAdAIAsQAHAogPAiIAMABQAtADAgAdQAfAdAIAsQAHAjgLAeQAOgBAOABQAtADAgAdQAfAdAIAsQAGAegHAbQAKgCALgBQArgBAhAXQAiAWAOAoQAPAogLAnQgLAnghAaQghAbgoACIgIABQglAAgigXg");
	var mask_11_graphics_21 = new cjs.Graphics().p("ASWQkQgagKgVgVQgUgWgJgbQgHgTABgTQgRAGgSABQgpACglgZQglgZgOgoQgMgkALgnQgcAGgcgGQgggIgZgXQgZgXgLgfQgOgoAPgrIAAgBQgYAEgYgFQgggIgZgXQgZgXgLgfQgOgoAPgrIAEgJQgQAAgQgDQgggIgZgXQgZgXgLgfQgOgoAPgrIAEgJQgQAAgQgDQgggIgZgXQgZgXgLgfQgOgoAPgrIAEgJQgLgBgLgCQgggIgZgXQgZgXgLgeQgOgoAPgqQgOAAgOgDQgggIgZgXQgZgXgLgfQgOgoAPgqQgTABgTgEQgggIgZgXQgZgXgLgfQgMgjAKgmQgWADgWgFQgggIgZgXQgZgXgLgfQgOgoAPgrIAAgBQgYAEgYgFQgggIgZgXQgZgXgLgfQgHgWAAgWQgZAFgZgGQgggIgZgXQgPgOgKgRIgFADQgpATgqgKQgggIgZgXQgOgNgJgPIgRAKQgpATgqgKQgggIgZgXIgJgJQgTAaggAPQgpATgqgKIgJgDIgHARQgUAmgpATQghAOgggCQABAggPAdQgUAmgpATIgGACQAGANADAQQAIAsgUAmQgRAhgiASQAaAbAHAoQAIAsgUAmQgKASgOAOQAIAFAIAIQAgAcAIAtQAIAsgUAmQgFAJgHAJQAcADAXARQAaAUAKAiQAKAigNAfQgEALgGAJIAOgBQAkAAAbAVQAaAUAKAjQAKAigNAfQgMAggfASQgeATgigDQgfgEgZgVQgZgVgIgeQgIgeAKgfQAFgNAGgLQgMACgMgBQgfgEgZgVQgZgVgIgeQgIgeAKgeQADgKAFgIQgPAAgPgDQgggIgZgXQgZgXgLgfQgOgoAPgrQALgeAUgUIgQgNQgZgXgLgfQgOgoAPgrQAPgqAkgYIAHgEQgUgVgJgaQgOgoAPgrQAPgqAkgYQAKgHAMgFIgEgJQgOgoAPgrQAPgqAkgYQAjgXAuADIAAAAQAAgVAIgXQAPgqAkgYQAjgXAuADQAPABANAEQAPgqAkgXQAjgXAuADQAtAEAfAdIAKAJQANgTAUgNQAjgXAuADQAtAEAfAdQAOAMAJAPQAjgXAuADQAtAEAfAdQAPANAKARQAfgQAmADQAtAEAfAdQAgAcAIAtQACANAAAMQAPgCARABQAtAEAfAdQAgAcAHAtQAGAigLAfQAOgCAPABQAtAEAfAdQAgAcAIAtQAFAcgHAaQANgBANABQAtAEAfAdQAgAcAIAtQAGAigKAeIASAAQAtAEAfAdQAgAcAIAtQAGAhgKAfIAIAAQAtAEAfAdQAgAcAIAtQAHAngPAiIACAAQAtAEAfAdQAgAcAIAtQAHAngPAjIAMAAQAtAEAfAdQAgAcAIAtQAHAngPAjIAMAAQAtAEAfAcQAgAdAIAtQAGAigLAfQAOgCAPABQAtAEAfAdQAgAcAIAtQAFAdgHAbQAKgCAMAAQAqgBAiAWQAhAXAPAoQAHAVABAUQAqgOAuASQAxATAVAsQAVArgQAzQgQAygqAYQgYAOgeACIgKAAQgYAAgWgIg");
	var mask_11_graphics_22 = new cjs.Graphics().p("AT8RqQgggHgZgYQgagWgKggQgIgXABgZQgOAFgRABQgeACgagKQgbgKgUgWQgVgVgJgbQgGgTAAgTQgQAGgSAAQgqADglgZQglgZgNgoQgMgkAKgnQgbAGgcgHQgggHgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgGQgggHgZgXQgagXgKgfQgOgoAPgrIADgJQgPAAgQgEQgggHgZgXQgagXgKgfQgOgoAPgrIADgJQgPAAgQgEQgggHgZgXQgagXgKgfQgOgoAPgrIADgJQgKgBgLgDQgggHgZgWQgagXgKgfQgOgoAPgqQgOAAgOgDQgggIgZgXQgagXgKgfQgOgoAPgqQgTABgTgEQgggIgYgXQgagXgKgfQgMgjAKgmQgWADgXgFQgggIgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgFQgggIgZgXQgagXgKgfQgIgWABgWQgZAFgZgGQgggIgZgXQgQgOgKgRIgFADQgpATgpgKQgggIgZgXQgOgNgKgPIgRAKQgpASgpgJQgggIgZgXIgJgJQgTAaghAPQgpASgpgJIgJgDIgIARQgTAmgqATQggAOgggCQABAggQAdQgUAmgpATIgFACQAGANACAPQAIAtgUAmQgQAhgiASQAZAbAHAoQAIAsgUAmQgJASgOAOQAIAFAIAIQAfAcAIAtQAIAsgUAmQgFAJgGAJQAcADAWARQAbAUAKAiQAJAjgMAeQgEALgHAJIAOgBQAkAAAbAVQAbAUAKAjQAJAigMAfQgNAggeASQgfATgigDQgegEgZgVQgZgVgJgeQgIgeALgfQAEgNAHgLQgMACgNgBQgegEgZgVQgZgVgJgdQgIgeALgfQADgKAFgIQgPAAgPgEQgggHgZgXQgagXgKgfQgOgoAPgrQALgeAUgUIgQgNQgagXgKgfQgOgoAPgrQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQALgHALgFIgDgJQgOgoAPgrQAPgqAjgYQAkgXAtADIABAAQAAgWAIgWQAPgqAjgYQAkgXAtADQAQABANAEQAPgqAjgXQAkgXAtADQAtAEAgAdIAJAJQAOgTATgNQAkgXAtADQAtAEAgAdQANAMAKAPQAjgXAtADQAtAEAgAcQAPAOAJARQAggQAlADQAtAEAgAdQAfAcAIAtQADANAAAMQAPgCAQABQAtAEAgAcQAfAdAIAtQAHAigLAfQAOgCAOABQAtADAfAdQAfAdAIAsQAGAdgHAaQAMgBANABQAtAEAgAdQAfAcAIAtQAHAhgLAfIASAAQAtAEAgAdQAfAcAIAtQAHAhgLAfIAIAAQAtAEAgAdQAfAcAIAtQAIAngQAjIACAAQAtAEAgAdQAfAcAIAsQAIAngQAjIAMAAQAtAEAgAdQAfAcAIAtQAIAngQAjIAMAAQAtAEAgAcQAfAdAIAtQAHAigLAfQAOgCAOABQAtAEAgAdQAfAcAIAtQAGAdgHAbQAKgCALAAQArgBAhAWQAiAWAOApQAIAVABAUQAqgOAtASQAxATAVAsQAPAegDAhQAYgIAcADQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgaAMgbAAQgPAAgOgDg");
	var mask_11_graphics_23 = new cjs.Graphics().p("AVWScQgggHgZgXQgagXgKgfQgEgMgCgMQgoASgpgKQgggHgZgYQgagWgKggQgIgXABgZQgOAFgRABQgeACgagKQgbgKgUgWQgVgVgJgbQgGgTAAgTQgQAGgSAAQgqADglgZQglgZgNgoQgMgkAKgnQgbAGgcgHQgggHgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgGQgggHgZgXQgagXgKgfQgOgoAPgrIADgJQgPAAgQgEQgggHgZgXQgagXgKgfQgOgoAPgrIADgJQgPAAgQgEQgggHgZgXQgagXgKgfQgOgoAPgqIADgJQgKgBgLgDQgggHgZgXQgagXgKgfQgOgoAPgqQgOAAgOgDQgggIgZgXQgagXgJgfQgOgoAPgqQgTABgTgEQgggIgZgXQgagXgKgfQgMgjAKgmQgWADgXgFQgggIgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgFQgggIgZgXQgagXgKgfQgIgWABgWQgZAFgZgGQgggIgZgXQgQgOgKgRIgFADQgpATgpgKQgggIgZgXQgOgNgKgPIgRAKQgpASgpgJQgggIgZgXIgJgJQgTAaghAPQgpASgpgJIgJgDIgIARQgTAmgqATQggAOgggCQABAggQAdQgUAmgpATIgFACQAGANACAPQAIAtgUAmQgQAhgiASQAZAbAHAoQAIAsgUAmQgJASgOAOQAIAFAIAIQAfAcAIAtQAIAsgUAmQgFAJgGAJQAcADAWARQAbAUAKAiQAJAjgMAfQgEALgHAJIAOgBQAkAAAbAVQAbATAKAjQAJAigMAfQgNAggeASQgfATgigDQgegEgZgVQgZgVgJgeQgIgeALgfQAEgNAHgLQgMACgNgBQgegEgZgUQgZgVgJgeQgIgeALgfQADgKAFgIQgPAAgPgEQgggHgZgXQgagXgKgfQgOgoAPgrQALgeAUgUIgQgNQgagXgKgfQgOgoAPgrQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQALgHALgFIgDgJQgOgoAPgrQAPgqAjgYQAkgXAtADIABAAQAAgWAIgWQAPgqAjgYQAkgXAtADQAQABANAEQAPgqAjgXQAkgXAtADQAtAEAgAdIAJAJQAOgTATgNQAkgXAtADQAtAEAgAdQANAMAKAPQAjgXAtADQAtAEAgAcQAPAOAJARQAggQAlADQAtAEAgAdQAfAcAIAtQADANAAAMQAPgCAQABQAtAEAgAcQAfAdAIAtQAHAigLAfQAOgCAOABQAtADAgAdQAfAdAIAsQAGAdgHAaQAMgBANABQAsAEAgAdQAfAcAIAtQAHAhgLAfIASAAQAtAEAgAdQAfAcAIAtQAHAhgLAfIAIAAQAtAEAgAdQAfAcAIAtQAIAngQAjIACAAQAtAEAgAdQAfAcAIAtQAIAmgQAjIAMAAQAtAEAgAdQAfAcAIAtQAIAngQAjIAMAAQAtAEAgAcQAfAdAIAtQAHAigLAfQAOgCAOABQAtAEAgAdQAfAcAIAtQAGAdgHAbQAKgCALAAQArgBAhAWQAiAWAOApQAIAVABAUQAqgOAtASQAxATAVAsQAPAegDAhQAYgIAcADQAtADAgAdQAfAdAIAsIABAFQAdgNAiADQAtADAgAdQAfAdAIAsQAIAtgUAmQgTAlgqATQgaAMgbAAQgPAAgOgDg");
	var mask_11_graphics_24 = new cjs.Graphics().p("AT8ScQgggHgZgXQgagXgKgfQgEgMgCgMQgoASgpgKQgggHgZgYQgagWgKggQgIgXABgZQgOAFgRABQgeACgagKQgbgKgUgWQgVgVgJgbQgGgTAAgTQgQAGgSAAQgqADglgZQglgZgNgoQgMgkAKgnQgbAGgcgHQgggHgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgGQgggHgZgXQgagXgKgfQgOgoAPgrIADgJQgPAAgQgEQgggHgZgXQgagXgKgfQgOgoAPgrIADgJQgPAAgQgEQgggHgZgXQgagXgKgfQgOgoAPgqIADgJQgKgBgLgDQgggHgZgXQgagXgKgfQgOgoAPgqQgOAAgNgDQgggIgZgXQgagXgKgfQgOgoAPgqQgTABgTgEQgggIgZgXQgagXgKgfQgMgjAKgmQgWADgXgFQgggIgZgXQgagXgKgfQgOgoAPgrIAAgBQgYAEgYgFQgggIgZgXQgagXgKgfQgIgWABgWQgZAFgZgGQgggIgZgXQgQgOgKgRIgFADQgpATgpgKQgggIgZgXQgOgNgKgPIgRAKQgpASgpgJQgggIgZgXIgJgJQgTAaghAPQgpASgpgJIgJgDIgIARQgTAmgqATQggAOgggCQABAggQAdQgUAmgpATIgFACQAGANACAPQAIAtgUAmQgQAhgiASQAZAbAHAoQAIAsgUAmQgJASgOAOQAIAFAIAIQAfAcAIAtQAIAsgUAmQgFAJgGAJQAcADAWARQAbAUAKAiQAJAjgMAfQgEALgHAJIAOgBQAkAAAbAVQAbATAKAjQAJAigMAfQgNAggeASQgfATgigDQgegEgZgVQgZgVgJgeQgIgeALgfQAEgNAHgLQgMACgNgBQgegEgZgUQgZgVgJgeQgIgeALgfQADgKAFgIQgPAAgPgEQgggHgZgXQgagXgKgfQgOgoAPgrQALgeAUgUIgQgNQgagXgKgfQgOgoAPgrQAPgqAjgYIAHgEQgTgVgJgaQgOgoAPgrQAPgqAjgYQALgHALgFIgDgJQgOgoAPgrQAPgqAjgYQAkgXAtADIABAAQAAgWAIgWQAPgqAjgYQAkgXAtADQAQABANAEQAPgqAjgXQAkgXAtADQAtAEAgAdIAJAJQAOgTATgNQAkgXAtADQAtAEAgAdQANAMAKAPQAjgXAtADQAtAEAgAcQAPAOAJARQAggQAlADQAtAEAgAdQAfAcAIAtQADANAAAMQAPgCAQABQAtAEAgAcQAfAdAIAtQAHAigLAfQAOgCAOABQAtADAgAdQAfAdAIAsQAGAdgHAaQAMgBANABQAtAEAgAdQAeAcAIAtQAHAhgLAfIASAAQAtAEAgAdQAfAcAIAtQAHAhgLAfIAIAAQAtAEAgAdQAfAcAIAtQAIAngQAjIACAAQAtAEAgAdQAfAcAIAtQAIAmgQAjIAMAAQAtAEAgAdQAfAcAIAtQAIAngQAjIAMAAQAtAEAgAcQAfAdAIAtQAHAigLAfQAOgCAOABQAtAEAgAdQAfAcAIAtQAGAdgHAbQAKgCALAAQArgBAhAWQAiAWAOApQAIAVABAUQAqgOAtASQAxATAVAsQAPAegDAhQAYgIAcADQAtADAgAdQAfAdAIAsIABAFQAdgNAiADQAmACAbAVQAOgUAUgNQAkgYAtADQAtAEAgAdQAfAdAIAsQAIAtgUAlQgTAmgqATQgpATgpgKQgZgGgVgPQgSAbgiAPQgaAMgbAAQgPAAgOgDg");
	var mask_11_graphics_25 = new cjs.Graphics().p("ATFScQgggHgZgXQgZgXgLgfQgEgMgBgMQgpASgpgKQgggHgZgYQgZgWgLggQgIgXACgZQgPAFgRABQgdACgbgKQgagKgVgWQgUgVgJgbQgGgTAAgTQgRAGgSAAQgpADglgZQglgZgOgoQgMgkALgnQgcAGgcgHQgggHgZgXQgZgXgLgfQgOgoAPgrIABgBQgYAEgZgGQgggHgZgXQgZgXgLgfQgOgoAPgrIAEgJQgQAAgQgEQgggHgZgXQgZgXgLgfQgOgoAPgrIAEgJQgQAAgQgEQgggHgZgXQgZgXgLgfQgOgoAPgqIAEgJQgLgBgLgDQgggHgZgXQgYgXgLgfQgNgoAOgqQgOAAgOgDQgggIgZgXQgZgXgLgfQgNgoAOgqQgTABgTgEQgggIgZgXQgZgXgLgfQgMgjAKgmQgWADgXgFQgggIgZgXQgZgXgLgfQgOgoAPgrIABgBQgYAEgZgFQgggIgZgXQgZgXgLgfQgHgWABgWQgZAFgagGQgggIgZgXQgPgOgKgRIgFADQgpATgqgKQgggIgZgXQgOgNgJgPIgRAKQgpASgqgJQgggIgZgXIgJgJQgTAaggAPQgpASgqgJIgJgDIgHARQgUAmgpATQggAOghgCQABAggPAdQgUAmgpATIgFACQAFANADAPQAIAtgUAmQgRAhghASQAZAbAHAoQAIAsgUAmQgJASgPAOQAJAFAHAIQAgAcAIAtQAIAsgUAmQgFAJgGAJQAcADAWARQAaAUAKAiQAKAjgNAfQgEALgGAJIAOgBQAkAAAbAVQAaATAKAjQAKAigNAfQgMAggfASQgeATgigDQgfgEgZgVQgZgVgIgeQgIgeAKgfQAFgNAHgLQgMACgNgBQgfgEgZgUQgZgVgIgeQgIgeAKgfQAEgKAEgIQgPAAgPgEQgggHgZgXQgZgXgLgfQgOgoAPgrQALgeAUgUIgQgNQgZgXgLgfQgOgoAPgrQAPgqAkgYIAHgEQgUgVgJgaQgOgoAPgrQAPgqAkgYQALgHALgFIgEgJQgOgoAPgrQAPgqAkgYQAjgXAuADIABAAQAAgWAHgWQAPgqAkgYQAjgXAuADQAPABAOAEQAPgqAjgXQAjgXAuADQAtAEAfAdIAKAJQANgTAUgNQAjgXAuADQAtAEAfAdQAOAMAJAPQAkgXAtADQAtAEAfAcQAPAOAKARQAfgQAmADQAtAEAfAdQAgAcAIAtQACANAAAMQAPgCARABQAtAEAfAcQAgAdAIAtQAGAigLAfQAOgCAPABQAtADAfAdQAgAdAIAsQAFAdgGAaQAMgBANABQAtAEAfAdQAgAcAIAtQAGAhgKAfIASAAQAsAEAfAdQAgAcAIAtQAGAhgKAfIAIAAQAtAEAfAdQAgAcAIAtQAHAngPAjIACAAQAtAEAfAdQAgAcAIAtQAHAmgPAjIAMAAQAtAEAfAdQAgAcAIAtQAHAngPAjIAMAAQAtAEAfAcQAgAdAIAtQAGAigLAfQAOgCAPABQAtAEAfAdQAgAcAIAtQAFAdgHAbQALgCALAAQAqgBAiAWQAhAWAPApQAIAVAAAUQAqgOAuASQAxATAVAsQAPAegEAhQAZgIAcADQAtADAfAdQAgAdAIAsIABAFQAcgNAjADQAlACAcAVQAOgUAUgNQAegVAmAAQgHgNgEgOQgNgpASgrQARgrAmgVQAmgWAuAHQAuAIAdAgQAdAgADAuQADAugZAkQgbAngtAMQgPAEgQABQAKASAEAWQAIAtgUAlQgUAmgpATQgpATgqgKQgYgGgVgPQgTAbghAPQgbAMgbAAQgOAAgPgDg");
	var mask_11_graphics_26 = new cjs.Graphics().p("ATFScQgggHgZgXQgZgXgLgfQgEgMgBgMQgpASgpgKQgggHgZgYQgZgWgLggQgIgXACgZQgPAFgRABQgdACgbgKQgagKgVgWQgUgVgJgbQgGgTAAgTQgRAGgSAAQgpADglgZQglgZgOgoQgMgkALgnQgcAGgcgHQgggHgZgXQgZgXgLgfQgOgoAPgrIABgBQgYAEgZgGQgggHgZgXQgZgXgLgfQgOgoAPgrIAEgJQgQAAgQgEQgggHgZgXQgZgXgLgfQgOgoAPgrIAEgJQgQAAgQgEQgggHgZgXQgZgXgLgfQgOgoAPgqIAEgJQgLgBgLgDQgggHgZgXQgYgXgLgfQgNgoAOgqQgOAAgOgDQgggIgZgXQgZgXgLgfQgNgoAOgqQgTABgTgEQgggIgZgXQgZgXgLgfQgMgjAKgmQgWADgXgFQgggIgZgXQgZgXgLgfQgOgoAPgrIABgBQgYAEgZgFQgggIgZgXQgZgXgLgfQgHgWABgWQgZAFgagGQgggIgZgXQgPgOgKgRIgFADQgpATgqgKQgggIgZgXQgOgNgJgPIgRAKQgpASgqgJQgggIgZgXIgJgJQgTAaggAPQgpASgqgJIgJgDIgHARQgUAmgpATQggAOghgCQABAggPAdQgUAmgpATIgFACQAFANADAPQAIAtgUAmQgRAhghASQAZAbAHAoQAIAsgUAmQgJASgPAOQAJAFAHAIQAgAcAIAtQAIAsgUAmQgFAJgGAJQAcADAWARQAaAUAKAiQAKAjgNAfQgEALgGAJIAOgBQAkAAAbAVQAaATAKAjQAKAigNAfQgMAggfASQgeATgigDQgfgEgZgVQgZgVgIgeQgIgeAKgfQAFgNAHgLQgMACgNgBQgfgEgZgUQgZgVgIgeQgIgeAKgfQAEgKAEgIQgPAAgPgEQgggHgZgXQgZgXgLgfQgOgoAPgrQALgeAUgUIgQgNQgZgXgLgfQgOgoAPgrQAPgqAkgYIAHgEQgUgVgJgaQgOgoAPgrQAPgqAkgYQALgHALgFIgEgJQgOgoAPgrQAPgqAkgYQAjgXAuADIABAAQAAgWAHgWQAPgqAkgYQAjgXAuADQAPABAOAEQAPgqAjgXQAjgXAuADQAtAEAfAdIAKAJQANgTAUgNQAjgXAuADQAtAEAfAdQAOAMAJAPQAkgXAtADQAtAEAfAcQAPAOAKARQAfgQAmADQAtAEAfAdQAgAcAIAtQACANAAAMQAPgCARABQAtAEAfAcQAgAdAIAtQAGAigLAfQAOgCAPABQAtADAfAdQAgAdAIAsQAFAdgGAaQAMgBANABQAtAEAfAdQAgAcAIAtQAGAhgKAfIASAAQAsAEAfAdQAgAcAIAtQAGAhgKAfIAIAAQAtAEAfAdQAgAcAIAtQAHAngPAjIACAAQAtAEAfAdQAgAcAIAtQAHAmgPAjIAMAAQAtAEAfAdQAgAcAIAtQAHAngPAjIAMAAQAtAEAfAcQAgAdAIAtQAGAigLAfQAOgCAPABQAtAEAfAdQAgAcAIAtQAFAdgHAbQALgCALAAQAqgBAiAWQAhAWAPApQAIAVAAAUQAqgOAuASQAxATAVAsQAPAegEAhQAZgIAcADQAtADAfAdQAgAdAIAsIABAFQAcgNAjADQAlACAcAVQAOgUAUgNQAegVAmAAQgHgNgEgOQgNgpASgrQAKgZARgSQgYAEgXgFQgqgKgcgiQgdgjgBgrQgCgqAbglQAagkAogNQApgMAqAQQArAQAWAlQAWAjgFAuQgFAsgeAfIgBACQATgDAUADQAuAIAdAgQAdAgADAuQADAugZAkQgbAngtAMQgPAEgQABQAKASAEAWQAIAtgUAlQgUAmgpATQgpATgqgKQgYgGgVgPQgTAbghAPQgbAMgbAAQgOAAgPgDg");
	var mask_11_graphics_27 = new cjs.Graphics().p("ATFScQgggHgZgXQgZgXgLgfQgEgMgBgMQgpASgpgKQgggHgZgYQgZgWgLggQgIgXACgZQgPAFgRABQgdACgbgKQgagKgVgWQgUgVgJgbQgGgTAAgTQgRAGgSAAQgpADglgZQglgZgOgoQgMgkALgnQgcAGgcgHQgggHgZgXQgZgXgLgfQgOgoAPgrIABgBQgYAEgZgGQgggHgZgXQgZgXgLgfQgOgoAPgrIAEgJQgQAAgQgEQgggHgZgXQgZgXgLgfQgOgoAPgrIAEgJQgQAAgQgEQgggHgZgXQgZgXgLgfQgOgoAPgqIAEgJQgLgBgLgDQgggHgZgXQgYgXgLgfQgNgoAOgqQgOAAgOgDQgggIgZgXQgZgXgLgfQgNgoAOgqQgTABgTgEQgggIgZgXQgZgXgLgfQgMgjAKgmQgWADgXgFQgggIgZgXQgZgXgLgfQgOgoAPgrIABgBQgYAEgZgFQgggIgZgXQgZgXgLgfQgHgWABgWQgZAFgagGQgggIgZgXQgPgOgKgRIgFADQgpATgqgKQgggIgZgXQgOgNgJgPIgRAKQgpASgqgJQgggIgZgXIgJgJQgTAaggAPQgpASgqgJIgJgDIgHARQgUAmgpATQggAOghgCQABAggPAdQgUAmgpATIgFACQAFANADAPQAIAtgUAmQgRAhghASQAZAbAHAoQAIAsgUAmQgJASgPAOQAJAFAHAIQAgAcAIAtQAIAsgUAmQgFAJgGAJQAcADAWARQAaAUAKAiQAKAjgNAfQgEALgGAJIAOgBQAkAAAbAVQAaATAKAjQAKAigNAfQgMAggfASQgeATgigDQgfgEgZgVQgZgVgIgeQgIgeAKgfQAFgNAHgLQgMACgNgBQgfgEgZgUQgZgVgIgeQgIgeAKgfQAEgKAEgIQgPAAgPgEQgggHgZgXQgZgXgLgfQgOgoAPgrQALgeAUgUIgQgNQgZgXgLgfQgOgoAPgrQAPgqAkgYIAHgEQgUgVgJgaQgOgoAPgrQAPgqAkgYQALgHALgFIgEgJQgOgoAPgrQAPgqAkgYQAjgXAuADIABAAQAAgWAHgWQAPgqAkgYQAjgXAuADQAPABAOAEQAPgqAjgXQAjgXAuADQAtAEAfAdIAKAJQANgTAUgNQAjgXAuADQAtAEAfAdQAOAMAJAPQAkgXAtADQAtAEAfAcQAPAOAKARQAfgQAmADQAtAEAfAdQAgAcAIAtQACANAAAMQAPgCARABQAtAEAfAcQAgAdAIAtQAGAigLAfQAOgCAPABQAtADAfAdQAgAdAIAsQAFAdgGAaQAMgBANABQAtAEAfAdQAgAcAIAtQAGAhgKAfIASAAQAsAEAfAdQAgAcAIAtQAGAhgKAfIAIAAQAtAEAfAdQAgAcAIAtQAHAngPAjIACAAQAtAEAfAdQAgAcAIAtQAHAmgPAjIAMAAQAtAEAfAdQAgAcAIAtQAHAngPAjIAMAAQAtAEAfAcQAgAdAIAtQAGAigLAfQAOgCAPABQAtAEAfAdQAgAcAIAtQAFAdgHAbQALgCALAAQAqgBAiAWQAhAWAPApQAIAVAAAUQAqgOAuASQAxATAVAsQAPAegEAhQAZgIAcADQAtADAfAdQAgAdAIAsIABAFQAcgNAjADQAlACAcAVQAOgUAUgNQAegVAmAAQgHgNgEgOQgNgpASgrQAKgZARgSQgYAEgXgFQgqgKgcgiQgdgjgBgrQgBglATggQgdAIgegHQgggIgZgXQgZgXgLgfQgOgoAPgrQAPgqAkgYQAjgXAuADQAtAEAfAcQAgAdAIAtQAIAsgUAmIgCAEQAkgIAlAOQArAQAWAlQAWAjgFAuQgFAsgeAfIgBACQATgDAUADQAuAIAdAgQAdAgADAuQADAugZAkQgbAngtAMQgPAEgQABQAKASAEAWQAIAtgUAlQgUAmgpATQgpATgqgKQgYgGgVgPQgTAbghAPQgbAMgbAAQgOAAgPgDg");
	var mask_11_graphics_28 = new cjs.Graphics().p("ATFScQgggHgZgXQgZgXgLgfQgEgMgBgMQgpASgpgKQgggHgZgYQgZgWgLggQgIgXACgZQgPAFgRABQgdACgbgKQgagKgVgWQgUgVgJgbQgGgTAAgTQgRAGgSAAQgpADglgZQglgZgOgoQgMgkALgnQgcAGgcgHQgggHgZgXQgZgXgLgfQgOgoAPgrIABgBQgYAEgZgGQgggHgZgXQgZgXgLgfQgOgoAPgrIAEgJQgQAAgQgEQgggHgZgXQgZgXgLgfQgOgoAPgrIAEgJQgQAAgQgEQgggHgZgXQgZgXgLgfQgOgoAPgqIAEgJQgLgBgLgDQgggHgZgXQgYgXgLgfQgNgoAOgqQgOAAgOgDQgggIgZgXQgZgXgLgfQgNgoAOgqQgTABgTgEQgggIgZgXQgZgXgLgfQgMgjAKgmQgWADgXgFQgggIgZgXQgZgXgLgfQgOgoAPgrIABgBQgYAEgZgFQgggIgZgXQgZgXgLgfQgHgWABgWQgZAFgagGQgggIgZgXQgPgOgKgRIgFADQgpATgqgKQgggIgZgXQgOgNgJgPIgRAKQgpASgqgJQgggIgZgXIgJgJQgTAaggAPQgpASgqgJIgJgDIgHARQgUAmgpATQggAOghgCQABAggPAdQgUAmgpATIgFACQAFANADAPQAIAtgUAmQgRAhghASQAZAbAHAoQAIAsgUAmQgJASgPAOQAJAFAHAIQAgAcAIAtQAIAsgUAmQgFAJgGAJQAcADAWARQAaAUAKAiQAKAjgNAfQgEALgGAJIAOgBQAkAAAbAVQAaATAKAjQAKAigNAfQgMAggfASQgeATgigDQgfgEgZgVQgZgVgIgeQgIgeAKgfQAFgNAHgLQgMACgNgBQgfgEgZgUQgZgVgIgeQgIgeAKgfQAEgKAEgIQgPAAgPgEQgggHgZgXQgZgXgLgfQgOgoAPgrQALgeAUgUIgQgNQgZgXgLgfQgOgoAPgrQAPgqAkgYIAHgEQgUgVgJgaQgOgoAPgrQAPgqAkgYQALgHALgFIgEgJQgOgoAPgrQAPgqAkgYQAjgXAuADIABAAQAAgWAHgWQAPgqAkgYQAjgXAuADQAPABAOAEQAPgqAjgXQAjgXAuADQAtAEAfAdIAKAJQANgTAUgNQAjgXAuADQAtAEAfAdQAOAMAJAPQAkgXAtADQAtAEAfAcQAPAOAKARQAfgQAmADQAtAEAfAdQAgAcAIAtQACANAAAMQAPgCARABQAtAEAfAcQAgAdAIAtQAGAigLAfQAOgCAPABQAtADAfAdQAgAdAIAsQAFAdgGAaQAMgBANABQAtAEAfAdQAgAcAIAtQAGAhgKAfIASAAQAsAEAfAdQAgAcAIAtQAGAhgKAfIAIAAQAtAEAfAdQAgAcAIAtQAHAngPAjIACAAQAtAEAfAdQAgAcAIAtQAHAmgPAjIAMAAQAtAEAfAdQAgAcAIAtQAHAngPAjIAMAAQAtAEAfAcQAgAdAIAtQAGAigLAfQAOgCAPABQAtAEAfAdQAgAcAIAtQAFAdgHAbQALgCALAAQAqgBAiAWQAhAWAPApQAIAVAAAUQAqgOAuASQAxATAVAsQAPAegEAhQAZgIAcADQAtADAfAdQAgAdAIAsIABAFQAcgNAjADQAlACAcAVQAOgUAUgNQAegVAmAAQgHgNgEgOQgNgpASgrQAKgZARgSQgYAEgXgFQgqgKgcgiQgdgjgBgrQgBglATggQgdAIgegHQgggIgZgXQgZgXgLgfQgOgoAPgrIABgDQgdAIgegHQgggIgZgXQgZgXgLgfQgOgoAPgrQAPgqAkgYQAjgXAuADQAtAEAfAcQAgAdAIAtQAGAjgLAfQASgEAVACQAtAEAfAcQAgAdAIAtQAIAsgUAmIgCAEQAkgIAlAOQArAQAWAlQAWAjgFAuQgFAsgeAfIgBACQATgDAUADQAuAIAdAgQAdAgADAuQADAugZAkQgbAngtAMQgPAEgQABQAKASAEAWQAIAtgUAlQgUAmgpATQgpATgqgKQgYgGgVgPQgTAbghAPQgbAMgbAAQgOAAgPgDg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:93.9571,y:208.1016}).wait(1).to({graphics:mask_11_graphics_1,x:88.9571,y:200.1016}).wait(1).to({graphics:mask_11_graphics_2,x:83.1672,y:189.8295}).wait(1).to({graphics:mask_11_graphics_3,x:82.1672,y:179.8295}).wait(1).to({graphics:mask_11_graphics_4,x:82.1672,y:169.8295}).wait(1).to({graphics:mask_11_graphics_5,x:82.1672,y:161.3295}).wait(1).to({graphics:mask_11_graphics_6,x:84.9014,y:154.8295}).wait(1).to({graphics:mask_11_graphics_7,x:92.9014,y:150.8295}).wait(1).to({graphics:mask_11_graphics_8,x:102.9014,y:150.3295}).wait(1).to({graphics:mask_11_graphics_9,x:111.9014,y:150.3295}).wait(1).to({graphics:mask_11_graphics_10,x:120.4014,y:150.3295}).wait(1).to({graphics:mask_11_graphics_11,x:127.9014,y:150.3295}).wait(1).to({graphics:mask_11_graphics_12,x:134.9014,y:150.3295}).wait(1).to({graphics:mask_11_graphics_13,x:141.9014,y:150.3295}).wait(1).to({graphics:mask_11_graphics_14,x:148.4014,y:150.3295}).wait(1).to({graphics:mask_11_graphics_15,x:154.4014,y:150.3295}).wait(1).to({graphics:mask_11_graphics_16,x:159.9014,y:150.3295}).wait(1).to({graphics:mask_11_graphics_17,x:165.9014,y:157.5747}).wait(1).to({graphics:mask_11_graphics_18,x:171.9014,y:166.5747}).wait(1).to({graphics:mask_11_graphics_19,x:178.9014,y:175.0747}).wait(1).to({graphics:mask_11_graphics_20,x:186.4198,y:183.0637}).wait(1).to({graphics:mask_11_graphics_21,x:194.8912,y:189.044}).wait(1).to({graphics:mask_11_graphics_22,x:203.4014,y:195.5497}).wait(1).to({graphics:mask_11_graphics_23,x:212.4014,y:200.5497}).wait(1).to({graphics:mask_11_graphics_24,x:221.4014,y:200.5497}).wait(1).to({graphics:mask_11_graphics_25,x:226.8534,y:200.5497}).wait(1).to({graphics:mask_11_graphics_26,x:226.8534,y:200.5497}).wait(1).to({graphics:mask_11_graphics_27,x:226.8534,y:200.5497}).wait(1).to({graphics:mask_11_graphics_28,x:226.8534,y:200.5497}).wait(152));

	// lady01
	this.instance_20 = new lib.CachedBmp_9();
	this.instance_20.setTransform(69.35,88.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(180));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(135.3,224.3,681.8,501.99999999999994);
// library properties:
lib.properties = {
	id: '37076E0B60AC7F4680B38BAA32FCA110',
	width: 474,
	height: 506,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png?1640180887923", id:"Image"},
		{src:"images/手繪女人_atlas_1.png?1640180887827", id:"手繪女人_atlas_1"}
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
an.compositions['37076E0B60AC7F4680B38BAA32FCA110'] = {
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