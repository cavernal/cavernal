function initStateDead() {
	if (d.portrait == 'portraitplayer') {
		d.portrait = 'portraitdead';
	}
	showPlayerStats();
	showInventory();
    var x = document.getElementsByClassName('restartline')[0] as HTMLElement;
	x.style.display = 'none';
}

function keyPressDead(key, ctrlKey, shiftKey, altKey): boolean {
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

function updateScreenDead() {
	updateInfo();
}

function showActionsDead() {
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
	var diedLine = '';
	if (d.timestamp) {
		diedLine = line('Died on ' + d.timestamp);
	}
	outputActions(
		line(buttonEvent('simpleKeyPress(\'ENTER\')', buttonImage('Return to menu'))) +
		line('') +
		diedLine +
		line('Reached depth ' + d.depth + ' step ' + d.step) +
		playerLine +
		commentLine +
		exportLine)
}