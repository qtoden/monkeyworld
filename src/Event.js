/**
 * @enum {string}
 */
MW.Event = {
	FRAME: "frame",
	
	TRIGGER_SUBTITLES: "TRIGGER_SUBTITLES",
	TRIGGER_SCORE:     "TRIGGER_SCORE",
	TRIGGER_FPS:       "TRIGGER_FPS",
	
	MINIGAME_INITIATED: "miniGameInitiated",
	MINIGAME_STARTED: "miniGameStarted",
	MINIGAME_ENDED: "miniGameDone",
	LEARNING_TRACK_UPDATE: "learningTrackUpdate",
	BACKEND_SCORE_UPDATE_MODE: "backendScoreUpdateMode",
	BACKEND_SCORE_UPDATE_MINIGAME: "backendScoreGameUpdateMiniGame",
	PITCHER_LEVEL_ADD_BEFORE: "setPitcherLevelBefore",
	PITCHER_LEVEL_ADD: "setPitcherLevel",
	PITCHER_LEVEL_SET_DROP_ORIGIN: "setPitcherLevelSetDropOrigin",
	PITCHER_LEVEL_RESET: "resetPitcherLevel",
	
//	MG_TREE_GAME_SET_PARCELS: "treeGameSetParcels",
	MG_LADDER_PLACE_TARGET:           "MG_LADDER_PLACE_TARGET",
	MG_LADDER_HELPER_APPROACH_TARGET: "MG_LADDER_HELPER_APPROACH_TARGET",
	MG_LADDER_PICKED:                 "MG_LADDER_PICKED",
	MG_LADDER_ALLOW_INTERRUPT:        "MG_LADDER_ALLOW_INTERRUPT",
	MG_LADDER_FORBID_INTERRUPT:       "MG_LADDER_FORBID_INTERRUPT",
	MG_LADDER_READY_TO_PICK:          "MG_LADDER_READY_TO_PICK",
	MG_LADDER_RESET_SCENE:            "MG_LADDER_RESET_SCENE",
	MG_LADDER_GET_TARGET:             "MG_LADDER_GET_TARGET",
	MG_LADDER_HAS_TARGET:             "MG_LADDER_HAS_TARGET",
	MG_LADDER_CONFIRM_TARGET:         "MG_LADDER_CONFIRM_TARGET",
	MG_LADDER_CHEER:                  "MG_LADDER_CHEER",
	MG_LADDER_IGNORE_INPUT:           "MG_LADDER_IGNORE_INPUT",
	MG_LADDER_ACKNOWLEDGE_INPUT:      "MG_LADDER_ACKNOWLEDGE_INPUT",
	MG_LADDER_FORBID_GAMER_INPUT:     "MG_LADDER_FORBID_GAMER_INPUT",
	MG_LADDER_ALLOW_GAMER_INPUT:      "MG_LADDER_ALLOW_GAMER_INPUT",
	MG_LADDER_GET_TREAT:              "MG_LADDER_GET_TREAT",
	MG_LADDER_INTERRUPT:              "MG_LADDER_INTERRUPT",
	MG_LADDER_INTRODUCE_AGENT:        "MG_LADDER_INTRODUCE_AGENT",
	MG_LADDER_START_AGENT:            "MG_LADDER_START_AGENT",
	
	WATER_GARDEN: "Game.waterGarden",
	GARDEN_WATERED: "Game.gardenWatered"
};
