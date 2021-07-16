var initState;
var keyPress;
var updateScreen;
var showActions;

const enum State {
	Menu = 1,
	Playing,
	Dead,
	Transcended,
	Ritual,
};

const enum StateFunction {
	InitState = 1,
	KeyPress,
	UpdateScreen,
	ShowActions,
};

var states = {
	[State.Menu]: {
		[StateFunction.InitState]: initStateMenu,
		[StateFunction.KeyPress]: keyPressMenu,
		[StateFunction.UpdateScreen]: updateScreenMenu,
		[StateFunction.ShowActions]: showActionsMenu,
	},
	[State.Playing]: {
		[StateFunction.InitState]: initStatePlaying,
		[StateFunction.KeyPress]: keyPressPlaying,
		[StateFunction.UpdateScreen]: updateScreenPlaying,
		[StateFunction.ShowActions]: showActionsPlaying,
	},
	[State.Dead]: {
		[StateFunction.InitState]: initStateDead,
		[StateFunction.KeyPress]: keyPressDead,
		[StateFunction.UpdateScreen]: updateScreenDead,
		[StateFunction.ShowActions]: showActionsDead,
	},
	[State.Transcended]: {
		[StateFunction.InitState]: initStateTranscended,
		[StateFunction.KeyPress]: keyPressTranscended,
		[StateFunction.UpdateScreen]: updateScreenTranscended,
		[StateFunction.ShowActions]: showActionsTranscended,
	},
	[State.Ritual]: {
		[StateFunction.InitState]: initStateRitual,
		[StateFunction.KeyPress]: keyPressRitual,
		[StateFunction.UpdateScreen]: updateScreenRitual,
		[StateFunction.ShowActions]: showActionsRitual,
	},
};

function init() {
	clear();
	document.onkeydown = keyDownEvent;
	document.onclick = onClickEvent;
	loadData();
	if (!d.state) {
		setState(State.Menu);
	}
	loadStateFunctions();
	update();
}

var update = updateImpl;
function updateImpl() {
	updateScreen();
	outputConsole();
	showActions();
}

function setState(newState: State) {
	clear();
	setStateQuiet(newState);
	update();
}

function loadStateFunctions() {
	initState = states[d.state][StateFunction.InitState];
	keyPress = states[d.state][StateFunction.KeyPress];
	updateScreen = states[d.state][StateFunction.UpdateScreen];
	showActions = states[d.state][StateFunction.ShowActions];
}

function setStateQuiet(newState: State) {
	d.state = newState;
	loadStateFunctions();
	initState();
	saveData();
}