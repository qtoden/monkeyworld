// To prevent SoundJS producing error message. Bug in SoundJS compilation?
SoundJS.testAudioStall = function(event) {};

window.onload = function() {
	new Game();
};


/**
 * @constructor
 */
function Game() {
	
	//var monkeyPlayer = new GamerPlayer(eventManager);
	//var guardianPlayer = new GamerPlayer(eventManager);
	//var fishingGame = new FishingGame();
	
	//fishingGame.play(monkeyPlayer, eventManager);
	
	/** @const */ var WIN_WIDTH = 1024;
	/** @const */ var WIN_HEIGHT = 768;
	var stage = new Kinetic.Stage({
        container: 'container',
        width: WIN_WIDTH,
        height: WIN_HEIGHT
    });
	
	var subtitleLayer = new Kinetic.Layer({
        width: WIN_WIDTH,
        height: WIN_HEIGHT
	});

	stage.add(subtitleLayer);
	stage._subtitleLayer = subtitleLayer;


	var eventManager = new EventManager(subtitleLayer);
	var player = new GamerPlayer(eventManager);

	stage.onFrame(function(frame) {
		eventManager.tell("frame", {frame:frame});
	});
	stage.start();
	
	var currentView = null;
	var currentModel = null;
	var started = false;
	/**
	 * @param iView
	 * @param iModel
	 * @param config
	 * @param {Function=} callback
	 */
	function kickInModule(iView, iModel, player, config, callback) {
		if (currentView != null)
			currentView.tearDown();
		eventManager.tell("Game.tearDown");
		//eventManager.forgetAll("game");

		
		var view = new iView(eventManager, stage, this, callback);
		var model = new Model(eventManager, view, view.init, view.start, iModel, config, player);
		currentView = view;
		currentModel = model;
		view.prepare(model, model.init);
		eventManager.who("catched");
	};
	
	SoundJS.addBatch(soundSources);
	Log.debug("Loading sounds...", "sound");
	SoundJS.onLoadQueueComplete = function() {
	
		/*
		 * ONLY_FISHING = true will start the fishing game immediately. If it
		 * is set to false, the game will start from the beginning (i.e. like
		 * it is supposed to do in a live setting.
		 */
		/** @const */ var ONLY_FISHING = true;
		
		
		
		if (ONLY_FISHING) {
			kickInModule(ReadyToTeachView, ReadyToTeach, null, {});

			//kickInModule(FishingView, FishingGame, player, {maxNumber: 9, numberFishes: 5});
			
			
		} else {
			kickInModule(StartView, Start, {}, function(config) {
				if (config == "login") {
					kickInModule(LoginView, Intro, {}, function() {
						kickInModule(FishingView, FishingGame, player, {maxNumber: 9, numberFishes: 5});
					});	
				} else {
					kickInModule(NewPlayerView, NewPlayer, {}, function() {
						kickInModule(IntroView, Intro, {}, function() {
							kickInModule(FishingView, FishingGame, player, {maxNumber: 9, numberFishes: 5});	
						});
					});	
				}
			});
		}

		

	};
	
	eventManager.on("FishingGame.roundDone", function(msg) {
		Log.debug("Are you ready to teach monkey?");
		kickInModule(ReadyToTeachView, ReadyToTeach, null, {});
		eventManager.print();
	}, "GAME");
	eventManager.on("Game.startGame", function(msg) {
		_uid = 0;
		//kickInModule(msg.view, msg.game, player, {maxNumber: 9, numberFishes: 5});
		kickInModule(FishingView, FishingGame, player, {maxNumber: 9, numberFishes: 5});
		console.log("Will start some game");
	}, "GAME");
}

