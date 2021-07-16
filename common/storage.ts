class Data {
	state: State;

	level: number;
	experience: number;
	strength: number;
	dexterity: number;
	agility: number;
	constitution: number;
	vitality: number;
	intelligence: number;
	strengthWithPoints: number;
	dexterityWithPoints: number;
	agilityWithPoints: number;
	constitutionWithPoints: number;
	vitalityWithPoints: number;
	intelligenceWithPoints: number;
	attributePoints: number;
	
	maxHpEffect: number;
	maxFoodEffect: number;
	maxDrinkEffect: number;

	hp: number;
	food: number;
	drink: number;

	inventory: ItemAmount[];
	equip: {};
	lastequip: {};

	generatedUniqueRooms: {};
	generatedUniqueOnLootItems: {};
	depth: number;
	step: number;
	doors: Door[];

	playerName: string;
	comment: string;
	timestamp: string;
	loaded: boolean;

	portrait: string;
	achievements: {};
}

var d: Data;

function loadData() {
	var gamedata = localStorage.getItem('gamedata');
	if (!gamedata) {
		return;
	}
    try {
 	   var parsedGamedata = JSON.parse(gamedata);
	} catch (e) {
		outLine('Cannot parse gamedata' + e);
        return;
	}
	d = parsedGamedata;
	processLoadedData();
}

function processLoadedData() {
	if (d.state != State.Menu) {
		generateWorld();
		if (isDebugOn()) {
			runTests();
		}
		updatePlayerStats();
		updatePlayerValues();
		sortInventory();
		generateMobWinCounts();
		showActionsPlaying();
	}
	setState(d.state);
	if (d.state == State.Playing) {
		outLine('Continuing saved game... (press <div class="buttonrestart" onclick="shiftKeyPress(\'F12\');">[SHIFT+12]</div> to restart the game)');
	}
	saveData();
}

function saveData() {
	localStorage.setItem('gamedata', JSON.stringify(d));
}

function removeData() {
	localStorage.removeItem('gamedata');
}