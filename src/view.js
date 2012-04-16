/**
 * @constructor
 */
function GameView() {
	
	/** @type {EventManager} */ var evm = new NoEventManager(); 
	/** @type {Kinetic.Layer} */ var staticLayer = new Kinetic.Layer();
	/** @type {Kinetic.Layer} */ var dynamicLayer = new Kinetic.Layer();

	/** @type {Kinetic.Node} */ var mainFrame = null;
	/** @type {Kinetic.Node} */ var monkeyFrame = null;
	/** @type {Kinetic.Node} */ var gamerFrame = null;
	/** @type {Kinetic.Node} */ var avatar = null;
	/** @type {Kinetic.Node} */ var monkey = null;
	
	var ACTIVE_FRAME_ALPHA = 0.8;
	var INACTIVE_FRAME_ALPHA = 0.2;
	var ACTIVE_FRAME_WIDTH = 740;
	var INACTIVE_FRAME_WIDTH = 220;
	
	var MONKEY_FRAME_CONFIG_INACTIVE = {
		x: 20, y: 20, width: INACTIVE_FRAME_WIDTH, height: 730,
		fill: "white", alpha: INACTIVE_FRAME_ALPHA
	};
	
	var GAMER_FRAME_CONFIG_ACTIVE = {
		x: 260, y: 20, width: ACTIVE_FRAME_WIDTH, height: 730,
		fill: "white", alpha: ACTIVE_FRAME_ALPHA
	};
	var GAMER_FRAME_CONFIG_INACTIVE = {
		y: GAMER_FRAME_CONFIG_ACTIVE.y,
		alpha: INACTIVE_FRAME_ALPHA,
		x: GAMER_FRAME_CONFIG_ACTIVE.x + (ACTIVE_FRAME_WIDTH - INACTIVE_FRAME_WIDTH),
		width: INACTIVE_FRAME_WIDTH,
		height: GAMER_FRAME_CONFIG_ACTIVE.height,
		fill: GAMER_FRAME_CONFIG_ACTIVE.fill
	}
	var MONKEY_FRAME_CONFIG_ACTIVE = {
		alpha: ACTIVE_FRAME_ALPHA,
		width: ACTIVE_FRAME_WIDTH,
		y: MONKEY_FRAME_CONFIG_INACTIVE.y,
		x: MONKEY_FRAME_CONFIG_INACTIVE.x,
		height: MONKEY_FRAME_CONFIG_INACTIVE.height,
		fill: MONKEY_FRAME_CONFIG_INACTIVE.fill
	};
	var MONKEY_CONFIG_ACTIVE = {x:ACTIVE_FRAME_WIDTH + MONKEY_FRAME_CONFIG_INACTIVE.x - 175, y: 540};
	var MONKEY_CONFIG_INACTIVE = {x: 60, y: 540};
	
	/**
	 * @param {GameState} gameState
	 */
	function setupMainFrame(gameState) {
		var mode = gameState.getMode();
		console.log("setup mainframe");
		var stage = staticLayer.getStage();
		mainFrame = new Kinetic.Rect({
			x: 0,
			y: 0,
			width: stage.getWidth(),
			height: stage.getHeight(),
			stroke: "white",
			strokeWidth: 4
		});
		staticLayer.add(mainFrame);
	};
	
	/**
	 * @param {GameState} gameState
	 */
	function setupMonkey(gameState) {
		var mode = gameState.getMode();
		console.log("setup monkey");
		var config = (mode == GameMode.MONKEY_DO && gameState.getMonkeyDoRounds() > 1) ?
				MONKEY_FRAME_CONFIG_ACTIVE : MONKEY_FRAME_CONFIG_INACTIVE;
		var monkeyConfig = (mode == GameMode.MONKEY_DO && gameState.getMonkeyDoRounds() > 1) ?
				MONKEY_CONFIG_ACTIVE : MONKEY_CONFIG_INACTIVE;
		var stage = staticLayer.getStage();
		//MONKEY_FRAME_CONFIG.height = staticLayer.getStage().getHeight()-40;
		monkeyFrame = new Kinetic.Rect(config);
		monkey = new Kinetic.Image({x:monkeyConfig.x, y:monkeyConfig.y, image: images["monkey"] });
		staticLayer.add(monkeyFrame);
		staticLayer.add(monkey);
	};
	
	/**
	 * @param {GameState} gameState
	 */
	function setupAvatar(gameState) {
		var mode = gameState.getMode();
		var config = (mode == GameMode.MONKEY_DO && gameState.getMonkeyDoRounds() > 1) ?
				GAMER_FRAME_CONFIG_INACTIVE : GAMER_FRAME_CONFIG_ACTIVE;
		console.log("setup avatar");
		//GAMER_FRAME_CONFIG_ACTIVE.height = staticLayer.getStage().getHeight()-40;
		//GAMER_FRAME_CONFIG.width = staticLayer.getStage().getWidth() - GAMER_FRAME_CONFIG.x - 20;
		gamerFrame = new Kinetic.Rect(config);
		avatar = new Kinetic.Image({ x: GAMER_FRAME_CONFIG_ACTIVE.x + GAMER_FRAME_CONFIG_ACTIVE.width - 210, y: GAMER_FRAME_CONFIG_ACTIVE.y + GAMER_FRAME_CONFIG_ACTIVE.height - 220, scale:{x:0.8,y:0.8}, image: images["avatar"] });
		staticLayer.add(gamerFrame);
		staticLayer.add(avatar);
	};
	
	var moved = 0;
	var moveDone = function() {
		moved++;
		if (moved == 3) {
			//staticLayer.getStage().pleaseStopDrawBackgroundLayer();
			staticLayer.draw();
			evm.forget("GameView");
		}
	};
	function moveToMonkey(done) {
		//var monkeyConfig = MONKEY_FRAME_CONFIG_INACTIVE;
		console.log("switch to monkey");
		var stage = staticLayer.getStage();
		//monkey.transitionTo({ x:ACTIVE_FRAME_WIDTH + MONKEY_FRAME_CONFIG.x - 175, duration: 2});
		evm.on("frame", function() {
			staticLayer.draw();
		}, "GameView");
		//stage.pleaseDrawBackgroundLayerUntilStop();
		Tween.get(monkey.attrs).to(MONKEY_CONFIG_ACTIVE, 2000).call(moveDone);
		Tween.get(monkeyFrame.attrs).to(MONKEY_FRAME_CONFIG_ACTIVE, 2000).call(moveDone);
		Tween.get(gamerFrame.attrs).to(GAMER_FRAME_CONFIG_INACTIVE, 2000).call(moveDone);
		//monkeyFrame.transitionTo({alpha: ACTIVE_FRAME_ALPHA, width: ACTIVE_FRAME_WIDTH, duration: 2});
		//gamerFrame.transitionTo({alpha: INACTIVE_FRAME_ALPHA, x: GAMER_FRAME_CONFIG.x + (ACTIVE_FRAME_WIDTH - INACTIVE_FRAME_WIDTH), width: INACTIVE_FRAME_WIDTH, duration: 2});
		setTimeout(function() {
			done();
		}, 2000);
	};
	
	var test = function() {console.log("test");};
	
	/**
	 * Initiate the view
	 * @param {GameState} gameState
	 */
	function init(gameState) {
		setupMainFrame(gameState);
		if (gameState.getMode() == GameMode.MONKEY_SEE || gameState.getMode() == GameMode.MONKEY_DO) {
			setupMonkey(gameState);
		}
		setupAvatar(gameState);
	};
	
/*----------------------------------------------------------------------------*/
	
	/**
	 * @param {EventManager} eventManager
	 */
	this.setEventManager = function(eventManager) {
		evm = eventManager;
	};
	
	/**
	 * @param {Kinetic.Layer} layer
	 */
	this.setStaticLayer = function(layer) {
		staticLayer = layer;
	};
		
	/**
	 * @param {Kinetic.Layer} layer
	 */
	this.setDynamicLayer = function(layer) {
		dynamicLayer = layer;
	};
	
	/**
	 * @param {Function} done
	 */
	this.moveToMonkey = function(done) {
		moveToMonkey(done);
	};
	
	/**
	 * @param {GameState} gameState
	 */
	this.basicInit = function(gameState) {
		init(gameState);
	};

}
