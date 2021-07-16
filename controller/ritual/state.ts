function initStateRitual() {
	if (d.portrait == 'portraitplayer') {
		d.portrait = 'portraitcurse';
	}
	showPlayerStats();
	showInventory();
    var x = document.getElementsByClassName('restartline')[0] as HTMLElement;
	x.style.display = 'none';
}

function keyPressRitual(key, ctrlKey, shiftKey, altKey): boolean {
	if (key == 'Q' && shiftKey && !d.loaded && !ctrlKey && !altKey) {
		exportDataToBase64();
		return true;
	}
	if (ctrlKey || shiftKey || altKey) {
		return false;
	}
	if (key == 'ENTER') {
		setState(State.Menu);
		return true;
	}
	return false;
}

function updateScreenRitual() {
	updateInfo();
}

function showActionsRitual() {
	var exportLine = '';
	if (!d.loaded) {
		exportLine = line(div('totheright', buttonEvent('shiftKeyPress(\'Q\')', smallButtonImage('Export gamedata'))));
	}
	var playerLine = '';
	if (d.playerName) {
		playerLine =  line('') + line('Player: ' + d.playerName);
	}
	var commentLine = '';
	if (d.comment) {
		commentLine = line('') + line('Player comment: ' + d.comment);
	}
	outputActions(
		line(buttonEvent('simpleKeyPress(\'ENTER\')', buttonImage('Return to menu'))) +
		line('') + line('Performed the ritual on ' + d.timestamp) +
		line('Reached depth ' + d.depth + ' step ' + d.step) +
		playerLine +
		commentLine +
		exportLine)
}