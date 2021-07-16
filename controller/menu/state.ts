function initStateMenu() {
	outputInfo('');
  var x = document.getElementsByClassName('restartline')[0] as HTMLElement;
	x.style.display = 'none';
	updateQuickstartGuide();
}

function keyPressMenu(key, ctrlKey, shiftKey, altKey): boolean {
	if (key == 'E' && shiftKey && !ctrlKey && !altKey) {
		var inputData = prompt('Paste the saved gamedata');
		if (!inputData) {
			return false;
		} else {
			var result = importDataFromBase64(inputData);
			if (!result) {
		    outLine('Invalid gamedata, try again');
			}
			return true;
		}
	}
	if (ctrlKey || shiftKey || altKey) {
		return false;
	}
	if (key == 'ENTER') {
		resetGame();
		setStateQuiet(State.Playing);
		return true;
	}
	return false;
}

function updateScreenMenu() {
	updateLogo();
	updateTrophy();
}

function updateQuickstartGuide() {
	clear();
	out(`
		<br/>
		<br/>
		Quickstart guide<br/>
		================<br/>
		<br/>
		Cavernal is a roleplaying videogame with rogue-like components but very easy gameplay<br/>
		<br/>
		Death is permanent<br/>
		<br/>
		There are only a few allowed actions at any point in time:
		<br/>
		- Opening doors to attack enemies or pick up items<br/>
		- Waiting, to consume food and drink as needed, and also to heal<br/>
		- Using objects<br/>
		- Equipping objects<br/>
		- Increasing character attributes<br/>
		<br/>
		Yellow dots mark recommended actions such as equipping an object or increasing an attribute<br/>
		<br/>
		The color and shape of the doors shows the difficulty of the enemy<br/>
		<br/>
		A game run lasts 5-30 minutes and is stored, so reopening the game resumes the ongoing game run<br/>
		<br/>
		Cavernal is better played in a computer with the Google Chrome browser<br/>
    <br/>
    <br/>`);
	update();
}

function showActionsMenu() {
	outputActions(
		line('Legends say that there are powerful artifacts in this cave, guarded by terrible creatures') +
		line('') +
		line('Do you want to walk in?') +
		line('') +
		line(buttonEvent('simpleKeyPress(\'ENTER\')', buttonImage('Start new game'))) +
		line(div('totheright', buttonEvent('shiftKeyPress(\'E\')', smallButtonImage('Import gamedata')))))
}

function updateLogo() {
	outputCharacter(div('asciilogo',
	`



       ▄████▄   ▄▄▄    ██▒   █▓▓█████  ██▀███   ███▄    █  ▄▄▄       ██▓    
      ▒██▀ ▀█  ▒████▄ ▓██░   █▒▓█   ▀ ▓██ ▒ ██▒ ██ ▀█   █ ▒████▄    ▓██▒    
     ░▒▓█    ▄ ▒██  ▀█▄▓██  █▒░▒███   ▓██ ░▄█ ▒▓██  ▀█ ██▒▒██  ▀█▄  ▒██░    
      ▒▓▓▄ ▄██▒░██▄▄▄▄██▒██ █░░▒▓█  ▄ ▒██▀▀█▄  ▓██▒  ▐▌██▒░██▄▄▄▄██ ▒██░    
     ░▒ ▓███▀ ░ ▓█   ▓██▒▒▀█░  ░▒████▒░██▓ ▒██▒▒██░   ▓██░ ▓█   ▓██▒░██████▒   
      ░ ░▒ ▒  ░ ▒▒   ▓▒█░░ ▐░  ░░ ▒░ ░░ ▒▓ ░▒▓░░ ▒░   ▒ ▒  ▒▒   ▓▒█░░ ▒░▓  ░░
        ░  ▒     ▒   ▒▒ ░░ ░░   ░ ░  ░  ░▒ ░ ▒░░ ░░   ░ ▒░  ▒   ▒▒ ░░ ░ ▒  ░
      ░          ░   ▒     ░░     ░     ░░   ░    ░   ░ ░   ░   ▒     ░ ░   
      ░ ░            ░  ░   ░     ░  ░   ░              ░       ░  ░    ░  ░
      ░                    ░                                                `) +
	div('logotext',`
                    Cavernal (<a href="https://www.cavernal.com">www.cavernal.com</a>)
       
     Copyright © 2021 Luis Quesada Torres (<a href="https://www.luisquesada.com">www.luisquesada.com</a>)`));

}

function updateTrophy() {
	var anyAchievement = false;
	for (let i = 0; i < achievements.length; i++) {
		var achievement = achievements[i];
		if (d.achievements[achievement.name]) {
			anyAchievement = true;
		}
	}
	if (!anyAchievement) {
		outputInventory('');
		return;
	}
	var output = line('') + line('Achievements:') + line('');
	for (let i = 0; i < achievements.length; i++) {
		var achievement = achievements[i];
		if (d.achievements[achievement.name]) {
			output += line(img(achievement.image) + ' ' + achievement.name) + line('');
		} else {
			output += line(img('emptyitem') + ' ?????') + line('');
		}
	}
	outputInventory(output);
}