function initStatePlaying() {
  var x = document.getElementsByClassName('restartline')[0] as HTMLElement;
  x.style.display = 'inline-block';
}

function resetGame() {
	clear();

	generateWorld();

	d.portrait = 'portraitplayer';

	d.level = 1;
	d.experience = 0;
	d.strength = 5;
	d.dexterity = 5;
	d.agility = 5;
	d.constitution = 5;
	d.vitality = 5;
	d.intelligence = 5;
	d.strengthWithPoints = 0;
	d.dexterityWithPoints = 0;
	d.agilityWithPoints = 0;
	d.constitutionWithPoints = 0;
	d.vitalityWithPoints = 0;
	d.intelligenceWithPoints = 0;
	d.attributePoints = 0;

	d.maxHpEffect = 0;
	d.maxFoodEffect = 0;
	d.maxDrinkEffect = 0;

	d.inventory = [];
	addToInventory('Butter knife', 1);
	addToInventory('Leather hat', 1);
	addToInventory('Leather armor', 1);
	addToInventory('Leather pants', 1);
	addToInventory('Leather boots', 1);

	addToInventory('Bread', 5);
	addToInventory('Egg', 2);
	addToInventory('Meat', 1);
	addToInventory('Water', 10);
	
	d.equip = {
		[ItemType.Weapon]: 'Butter knife',
		[ItemType.Helmet]: 'Leather hat',
		[ItemType.Armor]: 'Leather armor',
		[ItemType.Pants]: 'Leather pants',
		[ItemType.Boots]: 'Leather boots',
	};

	d.lastequip = {
	};

	inventorySelected = -1;

	updatePlayerStats();
	updatePlayerValues();
	d.hp = maxHp;
	d.food = maxFood;
	d.drink = maxDrink;

	d.depth = 1;
	d.step = 0;
	d.generatedUniqueRooms = {};
	d.generatedUniqueOnLootItems = {};

	d.playerName = '';
	d.comment = '';
	d.loaded = false;
	d.timestamp = '';

	if (isDebugOn()) {
		runTests();
	}
	
	for (let i = 0; i < achievements.length; i++) {
		var achievement = achievements[i];
		if (d.achievements[achievement.name] && achievement.startingObject) {
			addToInventory(achievement.startingObject, 1);
		}
	}

	generateDoors();
	generateMobWinCounts();
  outLine('You entered the cave...');
}

function keyPressPlaying(key, ctrlKey, shiftKey, altKey): boolean {
	if (key == 'F12' && shiftKey && !ctrlKey && !altKey) {
		if (confirm('Stop game and return to main menu?')) {
			setState(State.Menu);
		}
		return false;
	}
	if (inventoryKeys(key, ctrlKey, shiftKey, altKey)) {
		return true;
	}
	if (attributeKeys(key, ctrlKey, shiftKey, altKey)) {
		return true;
	}
	if (ctrlKey || shiftKey || altKey) {
		return false;
	}
	for (var i = 1; i <= 9; i++) {
		if (d.doors.length <= i-1) {
			break;
		}
		if (key == i.toString()) {
			infoDoor(i-1);
			fadeWrapper(function () { openDoor(i-1) });
			return true;
		}
	}
	if (key == 'W') {
		tryToWait();
		return true;
	}
	return false;
}

function updateScreenPlaying() {
	updatePlayerStats();
	updatePlayerValues();
	showPlayerStats();
	showInventory();
	if (isTouchDevice()) {
		updateInfoNoDoor();
	} else {
		updateInfo();
	}
}

function autoFood() {
	if (d.food == maxFood) {
		return '';
	}
	var topValueFood = '';
	var minValueFood = '';
	for (let i in d.inventory) {
		var item = d.inventory[i].item;
		if (items[item].type == ItemType.Food) {
			if ((!topValueFood || items[item].attribute > items[topValueFood].attribute) && items[item].attribute <= maxFood-d.food) {
				topValueFood = item;
			}
			if (!minValueFood || items[item].attribute < items[minValueFood].attribute) {
				minValueFood = item;
			}
		}
	}
	if (topValueFood) {
		return topValueFood;
	}
	return minValueFood;
}

function autoDrink() {
	if (d.drink == maxDrink) {
		return '';
	}
	var topValueDrink = '';
	var minValueDrink = '';
	for (let i in d.inventory) {
		var item = d.inventory[i].item;
		if (items[item].type == ItemType.Drink) {
			if ((!topValueDrink || items[item].attribute > items[topValueDrink].attribute) && items[item].attribute <= maxDrink-d.drink) {
				topValueDrink = item;
			}
			if (!minValueDrink || items[item].attribute < items[minValueDrink].attribute) {
				minValueDrink = item;
			}
		}
	}
	if (topValueDrink) {
		return topValueDrink;
	}
	return minValueDrink;
}

function tryToWait() {
	var targetHp = maxHp;
	if (d.hp < maxHp-healing) {
		targetHp = maxHp-healing;
	} else {
		targetHp = maxHp;
	}
	if (d.hp == targetHp && d.food >= MINTOHEAL && d.drink >= MINTOHEAL) {
		outLine('You are not wounded, hungry, nor thirsty');
		return;
	}
	var foodToEat = autoFood();
	var drinkToDrink = autoDrink();
	if (d.food < MINTOHEAL && !foodToEat && d.drink < MINTOHEAL && !drinkToDrink) {
		outLine('You are hungry and thirsty but have no food nor drink');
		return;
	}
	if (d.food < MINTOHEAL && !foodToEat) {
		outLine('You are hungry but have no food');
		return;
	}
	if (d.drink < MINTOHEAL && !drinkToDrink) {
		outLine('You are thirsty but have no drink');
		return;
	}
	fadeWrapper(wait);
}

function wait() {
  clear();
	var targetHp = maxHp;
	if (d.hp < maxHp-healing) {
		targetHp = maxHp-healing;
	} else {
		targetHp = maxHp;
	}
	var foodToEat = autoFood();
	var drinkToDrink = autoDrink();

	outLine('You sat to recover');
	if (d.food < MINTOHEAL && foodToEat) {
		inventoryUseByName(foodToEat);
	}
	if (d.drink < MINTOHEAL && drinkToDrink) {
		inventoryUseByName(drinkToDrink);
	}

	var beforeHp = d.hp;
	foodToEat = autoFood();
	drinkToDrink = autoDrink();
	while (d.hp < targetHp && (d.food >= MINTOHEAL || foodToEat) && (d.drink >= MINTOHEAL || drinkToDrink)) {
		if (d.food < MINTOHEAL && foodToEat) {
			inventoryUseByName(foodToEat);
		}
		if (d.drink < MINTOHEAL && drinkToDrink) {
			inventoryUseByName(drinkToDrink);
		}
		useTurn();
		foodToEat = autoFood();
		drinkToDrink = autoDrink();
	}
	var healed = (d.hp-beforeHp);
	if (beforeHp != d.hp) {
		outSpace();
		outLine('You healed a total of ' + healed + ' hit point' + s(healed));
	}
	outSpace();
	var anymore = 'at all';
	if (beforeHp != d.hp) {
		anymore = 'any more';
	}
	if (d.hp < targetHp && d.food < MINTOHEAL && d.drink < MINTOHEAL) {
		outLine('You ran out of food and drink');
	} else if (d.hp < targetHp && d.food < MINTOHEAL) {
		outLine('You ran out of food');
	} else if (d.hp < targetHp && d.drink < MINTOHEAL) {
		outLine('You ran out of drink');
	}
	generateMobWinCounts();
}

function useTurn() {
	playerDigests();
	playerHeals();
	saveData();
}