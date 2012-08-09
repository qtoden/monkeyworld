/**
 * Definition of all the images that the application will use. They can be
 * loaded before the game starts.
 * 
 * @enum {string}
 */
MW.ImageSources = {
/** @const */ MONKEY: "monkey.png",
/** @const */ BALLOONS: "balloons.png",
/** @const */ SYMBOL_STOP: "Symbol-Stop.png",
/** @const */ SYMBOL_CHECK: "Symbol-Check.png",
/** @const */ JUNGLEBG: "Jungle_Bkg.png",
/** @const */ ELEPHANT: "elephant.png",
/** @const */ LION: "lion.png",
/** @const */ GIRAFF: "giraff.png",
/** @const */ TREEGAME_BACKGROUND:   "minigames/treegame/background.png",
/** @const */ TREEGAME_COVER:        "minigames/treegame/lizard_cover.png",
/** @const */ TREEGAME_LIZARD:       "minigames/treegame/lizard.png",
/** @const */ BUTTON_WOOD: "buttons/wood.png",
/** @const */ BUTTON_WOOD_SELECTED: "buttons/wood-selected.png",
/** @const */ DOTS_1: "numbers/dots/prick-1.png",
/** @const */ DOTS_2: "numbers/dots/prick-2.png",
/** @const */ DOTS_3: "numbers/dots/prick-3.png",
/** @const */ DOTS_4: "numbers/dots/prick-4.png",
/** @const */ DOTS_5: "numbers/dots/prick-5.png",
/** @const */ DOTS_6: "numbers/dots/prick-6.png",
/** @const */ CLOUD: "cloud.png",
/** @const */ WATERDROP: "waterdrop.png"
};

MW.Images = {};

MW.ImageHandler = (function() {
	var imageHandler = {};
	
	var images = {};

	var _img_total = 0;
	var _img_progress = 0;
	for (var src in MW.Images) {
	    _img_total++;
	}
	
	imageHandler.getProgress = function() { return _img_progress; };
	
	imageHandler.loadImages = function(callback) {
		Log.debug("Loading images...", "images");
		var loadedImages = 0;
		var numImages = Object.size(MW.ImageSources);
		for (var src in MW.ImageSources) {
			var str = MW.ImageSources[src];
			MW.Images[src] = new Image();
	        MW.Images[src].onload = function(){
	            if (++loadedImages >= numImages) {
	            	callback();
	            }
	            _img_progress = loadedImages / _img_total;
	        };
	        MW.Images[src].src = "../res/img/" + str;
	    }
	};
	return imageHandler;
})();

