/**
 * AgentPlayer
 * @extends {MW.Player}
 * @constructor
 */
MW.AgentPlayer = function() {
	Log.debug("Creating AgentPlayer", "player");
	MW.Player.call(this, "AgentPlayer");
	var agent = this;
	this.strategies = function() {};
	
	/**
	 * @param {MW.LadderMinigame} game
	 * @param {Array=} result
	 */
	this.strategies["Ladder"] = function(game, result) {
		Log.debug("Applying AgentPlayer's strategy to the Ladder", "player");
		
		var resultPosition = 0;
		var interrupted = false;
		var intentionalMistakePosition = Utils.getRandomInt(0, result.length - 1);
		Log.debug("Will make mistake on try number " + intentionalMistakePosition + 1, "agent");
		var tries = 0;
		
		agent.on(MW.Event.MG_LADDER_READY_TO_PICK, function(msg) {
			play(resultPosition++);
		});
		
		agent.on("Ladder.incorrect", function(msg) {
			if (game.agentIsInterrupted()) return;
			/** @const @type {number} */ var MAX_AGENT_TRIES = 4;
			if (tries < MAX_AGENT_TRIES) {
				play(resultPosition++);
			} else if (tries === MAX_AGENT_TRIES) {
				if (!game.agentIsBeingHelped()) {
					MW.Sound.play(MW.Sounds.LADDER_PLEASE_HELP_ME);
					game.helpAgent();
				}
			}
		});
		
		agent.on("Ladder.correct", function(msg) {
			tries = 0;
		});
		
		this.interrupt = function() {
			Log.debug("Interrupting agent", "agent");
			interrupted = true;
			tries = 0;
		};
		
		this.resume = function() {
			Log.debug("Resuming agent", "agent");
			interrupted = false;
		};
		
		var play = function(resultPosition) {
			if (interrupted) return;
			tries++;
			setTimeout(function() {
				Log.debug("Picking a number", "agent");
				if (resultPosition === intentionalMistakePosition || result[resultPosition] === "incorrect") {
					game.pick(game.getIncorrectNumber());
				} else {
					game.pick(game.getTargetNumber());
				}
				
			}, 2000);
		};
		
		agent.on(MW.Event.MG_LADDER_HAS_TARGET, function(msg) {
			setTimeout(function() {
				game.openTreat();	
			}, 1500);
		});
		
		agent.on("Game.stopMiniGame", function(msg) {
			agent.forget();
		});
	};
};
