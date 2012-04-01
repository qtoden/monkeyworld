/**
 * @constructor
 */
function Kinetic(){};

function KineticFrame() {};
KineticFrame.time = function(){};
/**
 * @param {*} frame
 */
function KineticFrameConfig(frame) {};
KineticFrame.timeDiff = function() {};

/**
* @param {*} frameconfig
*/
Kinetic.Stage.prototype.onFrame = function(frameconfig){};
Kinetic.Stage.prototype.start = function(){};

/**
 * Container
 * v3.8.2
 * @constructor
 * @extends {Kinetic.Node}
 * It actually does not extend Node, this is a lazy solution to the multiple
 * inheritance (some objects extends both Node and Container).
 */
Kinetic.Container = function() {};
	Kinetic.Container.prototype.getChildren = function() {};
	/**
	 * @param {string} name
	 */
	Kinetic.Container.prototype.getChild = function(name) {};
	/**
	 * @param {Kinetic.Node} node
	 */
	Kinetic.Container.prototype.add = function(node) {};
	/**
	 * @param {Kinetic.Node} node
	 */
	Kinetic.Container.prototype.remove = function(node) {};
	Kinetic.Container.prototype.removeChildren = function() {};

	/**
	 * Node
	 * v3.8.2
	 * @constructor
	 */
	Kinetic.Node = function(){};
		/**
		 * @param {string} eventTypeString
		 * @param {function(Object)} handler
		 */
		Kinetic.Node.prototype.on = function(eventTypeString, handler) {};
		Kinetic.Node.prototype.off = function( eventTypeString ) {};
		Kinetic.Node.prototype.show = function() {};
		Kinetic.Node.prototype.hide = function() {};
		Kinetic.Node.prototype.getZIndex = function() {};
		Kinetic.Node.prototype.setAlpha = function( alpha ) {};
		Kinetic.Node.prototype.getAlpha = function() {};
		/**
		 * @param {number} scale
		 * @param {number=} scaleY
		 */
		Kinetic.Node.prototype.setScale = function(scale, scaleY) {};
		Kinetic.Node.prototype.getScale = function() {};
		Kinetic.Node.prototype.scale = function() {};
		Kinetic.Node.prototype.setPosition = function( x, y ) {};
		Kinetic.Node.prototype.getPosition = function() {};
		Kinetic.Node.prototype.getAbsolutePosition = function() {};
		Kinetic.Node.prototype.move = function( x, y ) {};
		Kinetic.Node.prototype.setRotation = function( theta ) {};
		Kinetic.Node.prototype.setRotationDeg = function( theta ) {};
		Kinetic.Node.prototype.setCenterOffset = function(x,y) {};
		Kinetic.Node.prototype.getCenterOffset = function() {};
		Kinetic.Node.prototype.centerOffset = function() {};
		Kinetic.Node.prototype.getRotation = function() {};
		Kinetic.Node.prototype.getRotationDeg = function() {};
		Kinetic.Node.prototype.rotate = function( theta ) {};
		Kinetic.Node.prototype.rotateDeg = function( theta ) {};
		Kinetic.Node.prototype.listen = function( bool ) {};
		Kinetic.Node.prototype.moveToTop = function() {};
		Kinetic.Node.prototype.moveToBottom = function() {};
		Kinetic.Node.prototype.moveUp = function() {};
		Kinetic.Node.prototype.moveDown = function() {};
		Kinetic.Node.prototype.setZIndex = function( zIndex ) {};
		Kinetic.Node.prototype.draggable = function( bool ) {};
		Kinetic.Node.prototype.draggableX = function( bool ) {};
		Kinetic.Node.prototype.draggableY = function( bool ) {};
		Kinetic.Node.prototype.isDragging = function() {};
		Kinetic.Node.prototype.moveTo = function( container ) {};
		Kinetic.Node.prototype.getParent = function() {};
		Kinetic.Node.prototype.getLayer = function() {};
		Kinetic.Node.prototype.getStage = function() {};
		Kinetic.Node.prototype.getName = function() {};

		Kinetic.Node.prototype.callback = function() {};
		Kinetic.Node.prototype.duration = function() {};
		Kinetic.Node.prototype.easing = function() {};
		/**
		 * @param {Object} config
		 */
		Kinetic.Node.prototype.transitionTo = function(config) {};
	
/**
 * Stage
 * v3.8.2
 * Instantiates a new Stage object. Parameter container can be a DOM id or a
 * DOM element.
 * @constructor
 * @extends {Kinetic.Node}
 * @param {Object} config
 */
Kinetic.Stage = function(config){};
Kinetic.Stage.prototype.width = function() {};
Kinetic.Stage.prototype.height = function() {};
Kinetic.Stage.prototype.container = function() {};
	Kinetic.Stage.prototype.onFrame = function( handler ) {};
	Kinetic.Stage.prototype.start = function() {};
	Kinetic.Stage.prototype.stop = function() {};
	Kinetic.Stage.prototype.draw = function() {};
	Kinetic.Stage.prototype.clear = function() {};
	Kinetic.Stage.prototype.on = function( eventTypeString, handler ) {};
	/**
	 * @param {Kinetic.Layer} layer
	 */
	Kinetic.Stage.prototype.add = function(layer) {};
	Kinetic.Stage.prototype.setSize = function( width, height ) {};
	/**
	 * @param {number} scale
	 * @param {number=} scaleY
	 */
	Kinetic.Stage.prototype.setScale = function( scale, scaleY ) {};
	Kinetic.Stage.prototype.getScale = function() {};
	Kinetic.Stage.prototype.toDataURL = function( callback ) {};
	Kinetic.Stage.prototype.getMousePosition = function() {};
	Kinetic.Stage.prototype.getTouchPosition = function() {};
	Kinetic.Stage.prototype.getUserPosition = function() {};
	Kinetic.Stage.prototype.getContainer = function() {};

/**
 * Layer
 * v3.8.2
 * @constructor
 * @param {(string|Object)=} config
 * @extends {Kinetic.Container}
 */
Kinetic.Layer = function(config){};
	Kinetic.Layer.prototype.draw = function(){};
	Kinetic.Layer.prototype.clear = function(){};
	Kinetic.Layer.prototype.getCanvas = function() {};
	Kinetic.Layer.prototype.getContext = function() {};
	
	Kinetic.Layer.prototype.getChildren = function() {};
	/**
	 * @param {string} name
	 */
	Kinetic.Layer.prototype.getChild = function(name) {};
	/**
	 * @param {Kinetic.Node} node
	 */
	Kinetic.Layer.prototype.add = function(node) {};
	/**
	 * @param {Kinetic.Node} node
	 */
	Kinetic.Layer.prototype.remove = function(node) {};
	Kinetic.Layer.prototype.removeChildren = function() {};

/**
 * Group
 * v3.8.2
 * @constructor
 * @extends {Kinetic.Container}
 */
Kinetic.Group = function(config){};
	Kinetic.Group.prototype.getChildren = function() {};
	/**
	 * @param {string} name
	 */
	Kinetic.Group.prototype.getChild = function(name) {};
	/**
	 * @param {Kinetic.Node} node
	 */
	Kinetic.Group.prototype.add = function(node) {};
	/**
	 * @param {Kinetic.Node} node
	 */
	Kinetic.Group.prototype.remove = function(node) {};
	Kinetic.Group.prototype.removeChildren = function() {};

/**
 * Shape
 * v3.8.2
 * @constructor
 * @param {Object=} config
 * @extends {Kinetic.Node}
 */
Kinetic.Shape = function(config){};
	Kinetic.Shape.prototype.fillStroke = function() {};
	Kinetic.Shape.prototype.getContext = function() {};
	Kinetic.Shape.prototype.getCanvas = function() {};
	/**
	 * @param {String|CanvasGradient|CanvasPattern} fill
	 */
	Kinetic.Shape.prototype.setFill = function(fill) {};
	Kinetic.Shape.prototype.getFill = function() {};
	/**
	 * set stroke color
	 * @param {String} stroke
	 */
	Kinetic.Shape.prototype.setStroke = function(stroke) {};
	Kinetic.Shape.prototype.getStroke = function() {};
	/**
	 * set stroke width
	 * @param {Number} strokeWidth
	 */
	Kinetic.Shape.prototype.setStrokeWidth = function(strokeWidth) {};
	Kinetic.Shape.prototype.getStrokeWidth = function() {};
	Kinetic.Shape.prototype.fillStroke = function() {};
	
	Kinetic.Shape.prototype.transitionTo = function(state) {};

/**
 * @constructor
 * @extends {Kinetic.Shape}
 */
Kinetic.Rect = function(obj){};

/**
 * @constructor
 * @extends {Kinetic.Shape}
 */
Kinetic.Polygon = function(){};

/**
 * @constructor
 * @extends {Kinetic.Shape}
 * @param {Object=} obj
 */
Kinetic.Circle = function(obj){};
Kinetic.Circle.prototype.radius = function() {};
Kinetic.Circle.prototype.fill = function() {};
Kinetic.Circle.prototype.stroke = function() {};
Kinetic.Circle.prototype.strokeWidth = function() {};
Kinetic.Circle.prototype.setRadius = function(radius) {};
Kinetic.Circle.prototype.getRadius = function() {};

/**
 * Text
 * @constructor
 * @extends {Kinetic.Shape}
 */
Kinetic.Text = function(config){};
/** @type {number} */ Kinetic.Text.prototype.x;
/** @type {number} */ Kinetic.Text.prototype.y;
Kinetic.Text.prototype.text = function(){};
Kinetic.Text.prototype.fontSize = function(){};
Kinetic.Text.prototype.fontFamily = function(){};
Kinetic.Text.prototype.textFill = function(){};
Kinetic.Text.prototype.align = function(){};
Kinetic.Text.prototype.verticalAlign = function(){};
Kinetic.Text.prototype.textStroke = function(){};
Kinetic.Text.prototype.textStrokeWidth = function(){};
Kinetic.Text.prototype.strokeWidth = function(){};

/**
 * @constructor
 * @param {Object=} config
 * @extends {Kinetic.Shape}
 */
Kinetic.Image = function(config){};

/*============================================================================*/
/**
 * @constructor
 */
function Context(){};
Context.prototype.beginPath = function(){};
Context.prototype.moveTo = function(x,y){};
Context.prototype.lineTo = function(x,y){};
Context.prototype.quadraticCurveTo = function(a,b,c,d){};
Context.prototype.closePath = function(){};
Context.prototype.font = function(){};
Context.prototype.fillStyle = function(){};
Context.prototype.strokeWidth = function(){};
Context.prototype.drawFunc = function(){};
Context.prototype.fillText = function(fillText, x, y){};
Context.prototype.image = function(){};
Context.prototype.centerOffset = function(){};

/*============================================================================*/
/**
 * @constructor
 */
function soundManager() {};
soundManager.prototype.play = function() {};

/**
 * @param {Function} func
 */
soundManager.onready = function(func) {};

/**
 * @param {Object} obj
 * @returns {SoundObject}
 */
soundManager.createSound = function(obj) {};

/**
 * @constructor
 */
function SoundObject() {};
SoundObject.prototype.play = function() {};
SoundObject.prototype.stop = function() {};
SoundObject.prototype.onload = function() {};
SoundObject.prototype.id = function() {};
SoundObject.prototype.url = function() {};
SoundObject.prototype.autoLoad = function() {};
SoundObject.prototype.autoPlay = function() {};


function console() {};
console.log = function(msg) {};

/*============================================================================*/
function SoundJS() {};

/**
 * @param {Array} list
 */
SoundJS.addBatch = function(list) {};
/**
 * @param {string=} name
 * @param {string=} instance
 */
SoundJS.stop = function(name, instance) {};
/**
 * @param {string=} name
 * @param {Number=} interrupt
 * @param {Number=} volume
 * @param {boolean=} loop
 * @param {Number=} delay
 */
SoundJS.play = function(name ,interrupt ,volume ,loop ,delay ) {};
SoundJS.onLoadQueueComplete = function() {};

/*============================================================================*/
/**
 * @constructor
 * @static
 */
function Ease() {};


Ease.sineIn = function(){};

/**
 * @constructor
 */
function Tween() {};

/**
 * @static
 * @param {Object} target
 * @param {Object=} props
 * @return {Tween}
 */
Tween.get = function(target, props) {};

/**
 * @static
 * @param {Number} delta The change in time in milliseconds since the last tick. Required unless all tweens have useTicks set to true.
 * @param {boolean} paused Indicates whether a global pause is in effect. Tweens with ignoreGlobalPause will ignore this, but all others will pause if this is true.
 */
Tween.tick = function(delta, paused) {};

/** 
 * Queues a tween from the current values to the target properties. Set duration to 0 to jump to these value.
 * Numeric properties will be tweened from their current value in the tween to the target value. Non-numeric
 * properties will be set at the end of the specified duration.
 * @param {Object} props An object specifying property target values for this tween (Ex. {x:300} would tween the x property of the target to 300).
 * @param {Number} duration The duration of the wait in milliseconds (or in ticks if useTicks is true).
 * @param {Ease} ease The easing function to use for this tween.
 * @return {Tween} This tween instance (for chaining calls).
 **/
Tween.to = function(props, duration, ease) {};

/**
 * @param {Number} duration The duration of the wait in milliseconds (or in ticks if useTicks is true).
 */
Tween.wait = function(duration) {};