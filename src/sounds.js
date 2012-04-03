/**
 * @constructor
 * @param {null|string} soundFile
 * @param {null|string} subtitle
 */
function SoundEntry(soundFile, subtitle) {
	this.soundFile = soundFile;
	this.subtitle = subtitle;
}

/**
 * @enum {SoundEntry}
 */
var Sounds = {
	YAY:
		new SoundEntry("19446__totya__yeah.wav", Strings.get("YAY")),
	
	ARE_YOU_READY_TO_TEACH:
		new SoundEntry(null, Strings.get("ARE_YOU_READY_TO_TEACH")),
		
	GET_BANANA:
		new SoundEntry("60443__jobro__tada1.wav", null),

	FISHING_FREE_WRONG_ONES:
		new SoundEntry(null, Strings.get("FISHING_FREE_WRONG_ONES")),
		
	FISHING_CATCH:
		new SoundEntry(null, Strings.get("FISHING_CATCH")),
		
	FISHING_NOT_THIS_ONE:
		new SoundEntry(null, Strings.get("FISHING_NOT_THIS_ONE")),
	
	FISHING_THERE_ARE_MORE:
		new SoundEntry(null, Strings.get("FISHING_THERE_ARE_MORE")),
		
	FISHING_ARE_YOU_SURE:
		new SoundEntry(null, Strings.get("FISHING_ARE_YOU_SURE")),
		
	FISHING_COUNT_FISH:
		new SoundEntry(null, Strings.get("FISHING_COUNT_FISH")),

	FISHING_WINDING:
		new SoundEntry("34968__mike-campbell__f-s-1-fishing-reel.wav", null), 

	FISHING_SPLASH:
		new SoundEntry("water_movement_fast_002.wav", null),

	FISHING_SWOSH:
		new SoundEntry("60009__qubodup__swosh-22.wav", null),
}

var soundSources = new Array();

for (var key in Sounds) {
	var entry = Sounds[key];
	Sounds[key]._key = key;
	if (entry.soundFile != null) {
		soundSources.push({
			name: key,
			src: "../res/sound/" + entry.soundFile 
		});
	}
}
