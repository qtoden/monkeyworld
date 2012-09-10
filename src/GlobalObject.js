/**
 * @constructor
 * @param {string} tag
 */
MW.GlobalObject = function(tag) {
	this._tag = tag;
	var that = this;
	
	/**
	 * Register a listener to the event manager.
	 * @param {string} type
	 * @param {Function} fnc
	 * @param {string=} tag
	 */
	this.on = function(type, fnc, tag) {
		this.evm.on(type, fnc, tag === undefined ? this._tag : tag);
	};
	
	/**
	 * @param {string} type
	 * @param {string=} tag
	 */
	this.off = function(type, tag) {
		this.evm.off(type, tag === undefined ? this._tag : tag);
	};
	
	/**
	 * Forget all listeners registered on the event manager.
	 * @param {string=} tag
	 */
	this.forget = function(tag) {
		this.evm.forget(tag === undefined ? this._tag : tag);
	};
	
	/**
	 * Tell the event manager that an event happened. It will be propagated to
	 * all listeners.
	 * @param {string} type
	 * @param {Object=} msg
	 * @param {boolean=} debug
	 */
	this.tell = function(type, msg, debug) {
		if (debug != undefined && debug)
			console.log(that._tag + ": " + type);
		this.evm.tell(type, msg, debug);
	};
	
	this.tellWait = function (type, callback, msg) {
		console.log(that._tag + ": " + type);
		this.evm.tellWait(type, callback, msg);
	};

	this.sendable_ = function (waitable, event, var_args) {
		return function (callback) {
			console.log(that._tag + ": " + event);
			that.evm.tellArguments(callback, waitable, event, var_args);
		};
	};
	
	this.sendable = function (event, var_args) {
		return that.sendable_(false, event, var_args);
	};
	
	this.waitable = function (event, var_args) {
		return that.sendable_(true, event, var_args);
	};
	
	this.wevm = function() {
		console.log(this.evm.wevm());
	};
	
	/**
	 * @param {string} tag
	 */
	this.tag = function(tag) {
		this._tag = tag;
	};

};

MW.GlobalObject.prototype.evm  = null;
MW.GlobalObject.prototype.stage = null;
MW.GlobalObject.prototype.game = null;

/**
 * @constructor
 */
MW.MiniGameResult = function() {
	
	/**
	 * @type {Array.<MW.MiniGameRoundResult>}
	 */
	var results = new Array();
	
	/**
	 * @param {MW.MiniGameRoundResult} roundResult
	 */
	this.pushResult = function(roundResult) {
		results.push(roundResult);
	};
	
	/**
	 * Get the results of specified round 
	 * @param {number} round
	 */
	this.getResult = function(round) {
		var index = round - 1;
		if (index < 0 || index >= results.length) {
			throw "MonkeyWorld.NoSuchRoundException ("+round+")";
		}
		return results[index];
	};
};

/**
 * @constructor
 */
MW.MiniGameRoundResult = function() {
	/**
	 * @type {boolean}
	 */
	var madeMistake = false;
	
	/**
	 * @type {Array.<*>}
	 */
	var actions = new Array();
	
	/**
	 * Report that a mistake has been made.
	 */ 
	this.reportMistake = function() {
		console.log("Mistake reported");
		madeMistake = true;
	};
	
	/**
	 * Returns true if a mistake has been made.
	 * @returns {boolean}
	 */
	this.madeMistake = function() { return madeMistake; };
	
	/**
	 * @param {*} action
	 */
	this.pushAction = function(action) {
		actions.push(action);
	};
	
	this.popAction = function() {
		actions.splice(actions.length - 1);
	};
	
	/**
	 * @return {Array.<*>}
	 */
	this.getActions = function() {
		return actions;
	};
};

/**
 * @extends {MW.MiniGameResult}
 * @constructor
 */
MW.NoMiniGameResult = function() {
	this.pushResult = function() {
		throw "MonkeyWorld.NoMiniGameResultException";
	};
	this.getResult = function() {
		throw "MonkeyWorld.NoMiniGameResultException";
	};
};
