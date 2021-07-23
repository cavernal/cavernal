var maxHp: number;
var maxFood: number;
var maxDrink: number;
var speed: number;
var attack: number;
var defense: number;
var armor: number;
var healing: number;

var showAttribute: string = '';

var keyStrength = 'X';
var keyDexterity = 'C';
var keyAgility = 'V';
var keyConstitution = 'B';
var keyVitality = 'N';
var keyIntelligence = 'M';

function attributeKeys(key, ctrlKey, shiftKey, altKey): boolean {
	if (ctrlKey || shiftKey || altKey) {
		return false;
	}
	if (key == 'ESCAPE') {
		showAttributeDiff('');
		showPlayerStats();
		return false;
	}
	if (key == keyStrength || key == keyDexterity || key == keyAgility || key == keyConstitution || key == keyVitality || key == keyIntelligence) {
		buyAttribute(key);
		return true;
	}
	return false;
}

function showPlayerStats() {
	var maxHpDelta = 0;
	var maxFoodDelta = 0;
	var maxDrinkDelta = 0;
	var oldMaxHp = maxHp;
	var oldMaxFood = maxFood;
	var oldMaxDrink = maxDrink;
	if (inventorySelected != -1) {
		var type = items[selectedItem().item].type;
		var logics = itemTypeLogics[type]
		if (logics.equipable) {
			var equippedItem = d.equip[type];
			d.equip[type] = selectedItem().item;
			updatePlayerStats();
			d.equip[type] = equippedItem;
			updatePlayerStats();
		}
	}
	if (showAttribute != '') {
		if (showAttribute == keyStrength && d.strengthWithPoints+1 <= d.attributePoints) {
			d.strength++;
			updatePlayerStats();
			d.strength--;
		} else if (showAttribute == keyDexterity && d.dexterityWithPoints+1 <= d.attributePoints) {
			d.dexterity++;
			updatePlayerStats();
			d.dexterity--;
		} else if (showAttribute == keyAgility && d.agilityWithPoints+1 <= d.attributePoints) {
			d.agility++;
			updatePlayerStats();
			d.agility--;
		} else if (showAttribute == keyConstitution && d.constitutionWithPoints+1 <= d.attributePoints) {
			d.constitution++;
			updatePlayerStats();
			d.constitution--;
		} else if (showAttribute == keyVitality && d.vitalityWithPoints+1 <= d.attributePoints) {
			d.vitality++;
			updatePlayerStats();
			d.vitality--;
		} else if (showAttribute == keyIntelligence && d.intelligenceWithPoints+1 <= d.attributePoints) {
			d.intelligence++;
			updatePlayerStats();
			d.intelligence--;
		}
		maxHpDelta = maxHp-oldMaxHp;
		maxFoodDelta = maxFood-oldMaxFood;
		maxDrinkDelta = maxDrink-oldMaxDrink;
	}
 	if (selectedItem()) {
		var item = items[selectedItem().item];
		if ((item.minimumIntelligence && item.minimumIntelligence > d.intelligence) || (item.minimumStrength && item.minimumStrength > d.strength)) {
		} else if (item.type == ItemType.IncreaseStrength) {
			d.strength++;
			updatePlayerStats();
			d.strength--;
		} else if (item.type == ItemType.IncreaseDexterity) {
			d.dexterity++;
			updatePlayerStats();
			d.dexterity--;
		} else if (item.type == ItemType.IncreaseAgility) {
			d.agility++;
			updatePlayerStats();
			d.agility--;
		} else if (item.type == ItemType.IncreaseConstitution) {
			d.constitution++;
			updatePlayerStats();
			d.constitution--;
		} else if (item.type == ItemType.IncreaseVitality) {
			d.vitality++;
			updatePlayerStats();
			d.vitality--;
		} else if (item.type == ItemType.IncreaseIntelligence) {
			d.intelligence++;
			updatePlayerStats();
			d.intelligence--;
		}
		maxHpDelta = maxHp-oldMaxHp;
		maxFoodDelta = maxFood-oldMaxFood;
		maxDrinkDelta = maxDrink-oldMaxDrink;
	}	
	updatePlayerStats();

	var attributePointDiff = 0;
	if (showAttribute == keyStrength && d.attributePoints >= d.strengthWithPoints+1) {
		attributePointDiff = -(d.strengthWithPoints+1);
	} else if (showAttribute == keyDexterity && d.attributePoints >= d.dexterityWithPoints+1) {
		attributePointDiff = -(d.dexterityWithPoints+1);
	} else if (showAttribute == keyAgility && d.attributePoints >= d.agilityWithPoints+1) {
		attributePointDiff = -(d.agilityWithPoints+1);
	} else if (showAttribute == keyConstitution && d.attributePoints >= d.constitutionWithPoints+1) {
		attributePointDiff = -(d.constitutionWithPoints+1);
	} else if (showAttribute == keyVitality && d.attributePoints >= d.vitalityWithPoints+1) {
		attributePointDiff = -(d.vitalityWithPoints+1);
	} else if (showAttribute == keyIntelligence && d.attributePoints >= d.intelligenceWithPoints+1) {
		attributePointDiff = -(d.intelligenceWithPoints+1);
	}

	var equippedItems = '';
	for (let k in showOrder) {
		var it = d.equip[showOrder[k]];
		if (it) {
			equippedItems += hoverInfo('infoEquipped(' + k + ')', itemTile(it, d.inventory[inventoryFindByName(it)].amount, false, false));
		} else {
			equippedItems += hoverInfo('infoEquipped(' + k + ')', emptyItemTile());
		}
	}

	var increaseHp = 0;
	var increaseFood = 0;
	var increaseDrink = 0;
	if (selectedItem()) {
		var item = items[selectedItem().item];
		if ((item.minimumIntelligence && item.minimumIntelligence > d.intelligence) || (item.minimumStrength && item.minimumStrength > d.strength)) {
		} else if (item.type == ItemType.IncreaseMaxHitPoints) {
			maxHpDelta = item.attribute;
		} else if (item.type == ItemType.Healing) {
			increaseHp = Math.min(item.attribute, maxHp - d.hp);
		} else if (item.type == ItemType.Food) {
			increaseFood = Math.min(item.attribute, maxFood - d.food);
		} else if (item.type == ItemType.Drink) {
			increaseDrink = Math.min(item.attribute, maxDrink - d.drink);
		}
	}
	var buffer = '';
	buffer += div('portraitblock',
		div('portrait', hoverInfo('infoPortrait()', img(d.portrait, '', 'blackbg'))) +
		div('portraitstats',
			div('levelstats', div('level', hoverInfo('infoLevel()', img('classexplorer', div('experience', minibar('#EEEEEE', currentExperience(), experienceToNextLevel())) + div('levelnum', d.level), 'badge'))) + hoverInfo('infoAttrPoints()', div('attrpoints', img('charattrpoints') + numDeltaFix(d.attributePoints, attributePointDiff)))) + 
			div('bars',
				div('hp', hoverInfo('infoHp()', img('stathitpoints') + bar('#990000', d.hp, maxHp, maxHpDelta, 1, increaseHp))) +
				div('food', hoverInfo('infoFood()', img('statfood') + bar('#AA7733', d.food, maxFood, maxFoodDelta, MINTOHEAL, increaseFood))) +
				div('drink', hoverInfo('infoDrink()', img('statdrink') + bar('#5555FF', d.drink, maxDrink, maxDrinkDelta, MINTOHEAL, increaseDrink)))) +
			div('equipped', equippedItems)
		) 
	);


	buffer += div('attributes',
		attributePlusButton('attrstrength', 'Strength', keyStrength, d.strength, d.strengthWithPoints+1) +
		attributePlusButton('attrdexterity', 'Dexterity', keyDexterity, d.dexterity, d.dexterityWithPoints+1) +
		attributePlusButton('attragility', 'Agility', keyAgility, d.agility, d.agilityWithPoints+1) +
		attributePlusButton('attrconstitution', 'Constitution', keyConstitution, d.constitution, d.constitutionWithPoints+1) +
		attributePlusButton('attrvitality', 'Vitality', keyVitality, d.vitality, d.vitalityWithPoints+1) +
		attributePlusButton('attrintelligence', 'Intelligence', keyIntelligence, d.intelligence, d.intelligenceWithPoints+1)
	);

	outputCharacter(buffer);
}

function attributePlusButton(imgId, text, key, value, cost) {
	var upgradeable = true;
	if (d.state != State.Playing) {
		upgradeable = false;
	}
	if (cost > d.attributePoints) {
		upgradeable = false;
	}

	var hoverFunction = 'infoAttribute(\'' + key + '\');showAttributeDiff(\'' + key + '\')';
	var hoverOutFunction = 'showAttributeDiff(\'\');infoNothing()';

	var imgText = img('transparenttile', div('tileinner', img(imgId, '', 'tileimg'))) + numDeltaFix(value, 0);
	var selectedText = '';
	var plus = '';
	var shortcut = '';
	var delta = 0;
	var button = false;
	if (upgradeable) {
		if (showAttribute == key) {
			delta = 1;
			selectedText = img('selected', '', 'imgtransparent');
		}
		plus = img('actionable', '', 'imgtransparent');
		shortcut = shortcutDiv(key);
		button = true;
	}
 	if (selectedItem()) {
		var item = items[selectedItem().item];
		if ((item.minimumIntelligence && item.minimumIntelligence > d.intelligence) || (item.minimumStrength && item.minimumStrength > d.strength)) {
		} else if (key == keyStrength && item.type == ItemType.IncreaseStrength) {
			delta = 1;
		} else if (key == keyDexterity && item.type == ItemType.IncreaseDexterity) {
			delta = 1;
		} else if (key == keyAgility && item.type == ItemType.IncreaseAgility) {
			delta = 1;
		} else if (key == keyConstitution && item.type == ItemType.IncreaseConstitution) {
			delta = 1;
		} else if (key == keyVitality && item.type == ItemType.IncreaseVitality) {
			delta = 1;
		} else if (key == keyIntelligence && item.type == ItemType.IncreaseIntelligence) {
			delta = 1;
		}
	}
	var contents = img('transparenttile', div('tileinnershift', img(imgId, shortcut)) + selectedText + plus, 'tile');
	var buttonContents = contents;
	if (button) {
		buttonContents = buttonEvent('attributeTap(\'' + key + '\')', contents);
	}
	imgText = hover(hoverFunction, hoverOutFunction, buttonContents) + numDeltaFix(value, delta);
	return imgText;
}

function attributeTap(key) {
	if (showAttribute != key) {
		showAttributeDiff(key);
		return;
	}
	simpleKeyPress(key);
}

function buyAttribute(key) {
	if (key == keyStrength && d.strengthWithPoints+1 <= d.attributePoints) {
		d.strength++;
		d.attributePoints -= d.strengthWithPoints+1;
		d.strengthWithPoints++;
		outLine('');
		outLine('');
		outLine('');
		outLine('You increased your strength to ' + d.strength + '!');
		outLine('It will now cost ' + (d.strengthWithPoints+1) + ' attribute points to increase further');
		updatePlayerStats();
		updatePlayerValues();
		if (d.strengthWithPoints+1 > d.attributePoints || isTouchDevice()) {
			showAttributeDiff('');
			if (isTouchDevice()) {
				infoNothing();
				updateInfo();
				stopPropagation();
			}
		}
		saveData();
		generateMobWinCounts();
		return true;
	} else if (key == keyDexterity && d.dexterityWithPoints+1 <= d.attributePoints) {
		d.dexterity++;
		d.attributePoints -= d.dexterityWithPoints+1;
		d.dexterityWithPoints++;
		outLine('');
		outLine('');
		outLine('');
		outLine('You increased your dexterity to ' + d.dexterity + '!');
		outLine('It will now cost ' + (d.dexterityWithPoints+1) + ' attribute points to increase further');
		updatePlayerStats();
		updatePlayerValues();
		if (d.dexterityWithPoints+1 > d.attributePoints || isTouchDevice()) {
			showAttributeDiff('');
			if (isTouchDevice()) {
				infoNothing();
				updateInfo();
				stopPropagation();
			}
		}
		saveData();
		generateMobWinCounts();
		return true;
	} else if (key == keyAgility && d.agilityWithPoints+1 <= d.attributePoints) {
		d.agility++;
		d.attributePoints -= d.agilityWithPoints+1;
		d.agilityWithPoints++;
		outLine('');
		outLine('');
		outLine('');
		outLine('You increased your agility to ' + d.agility + '!');
		outLine('It will now cost ' + (d.agilityWithPoints+1) + ' attribute points to increase further');
		updatePlayerStats();
		updatePlayerValues();
		if (d.agilityWithPoints+1 > d.attributePoints || isTouchDevice()) {
			showAttributeDiff('');
			if (isTouchDevice()) {
				infoNothing();
				updateInfo();
				stopPropagation();
			}
		}
		saveData();
		generateMobWinCounts();
		return true;
	}
	else if (key == keyConstitution && d.constitutionWithPoints+1 <= d.attributePoints) {
		d.constitution++;
		d.attributePoints -= d.constitutionWithPoints+1;
		d.constitutionWithPoints++;
		outLine('');
		outLine('');
		outLine('');
		outLine('You increased your constitution to ' + d.constitution + '!');
		outLine('It will now cost ' + (d.constitutionWithPoints+1) + ' attribute points to increase further');
		updatePlayerStats();
		updatePlayerValues();
		if (d.constitutionWithPoints+1 > d.attributePoints || isTouchDevice()) {
			showAttributeDiff('');
			if (isTouchDevice()) {
				infoNothing();
				updateInfo();
				stopPropagation();
			}
		}
		saveData();
		generateMobWinCounts();
		return true;
	}
	else if (key == keyVitality && d.vitalityWithPoints+1 <= d.attributePoints) {
		d.vitality++;
		d.attributePoints -= d.vitalityWithPoints+1;
		d.vitalityWithPoints++;
		outLine('');
		outLine('');
		outLine('');
		outLine('You increased your vitality to ' + d.vitality + '!');
		outLine('It will now cost ' + (d.vitalityWithPoints+1) + ' attribute points to increase further');
		updatePlayerStats();
		updatePlayerValues();
		if (d.vitalityWithPoints+1 > d.attributePoints || isTouchDevice()) {
			showAttributeDiff('');
			if (isTouchDevice()) {
				infoNothing();
				updateInfo();
				stopPropagation();
			}
		}
		saveData();
		generateMobWinCounts();
		return true;
	}
	else if (key == keyIntelligence && d.intelligenceWithPoints+1 <= d.attributePoints) {
		d.intelligence++;
		d.attributePoints -= d.intelligenceWithPoints+1;
		d.intelligenceWithPoints++;
		outLine('');
		outLine('');
		outLine('');
		outLine('You increased your intelligence to ' + d.intelligence + '!');
		outLine('It will now cost ' + (d.intelligenceWithPoints+1) + ' attribute points to increase further');
		updatePlayerStats();
		updatePlayerValues();
		if (d.intelligenceWithPoints+1 > d.attributePoints || isTouchDevice()) {
			showAttributeDiff('');
			if (isTouchDevice()) {
				infoNothing();
				updateInfo();
				stopPropagation();
			}
		}
		saveData();
		generateMobWinCounts();
		return true;
	}
}

function showAttributeDiff(key) {
	if (showAttribute == key) {
		return;
	}
	inventorySelected = -1;
	showAttribute = key;
	update();
}

function updatePlayerValues() {
	if (d.hp > maxHp) {
		d.hp = maxHp;
	}

	if (d.food > maxFood) {
		d.food = maxFood;
	}

	if (d.drink > maxDrink) {
		d.drink = maxDrink;
	}
	for (let k in d.equip) {
		if (!d.equip[k]) {
			continue;
		}
		var item = items[d.equip[k]];
		if (item.minimumStrength && d.strength < item.minimumStrength && item.minimumIntelligence && d.intelligence < item.minimumIntelligence) {
			outLine('You unequiped ' + d.equip[k] + ' because your strength and intelligence were insufficient');
			d.equip[k] = null;
		} else if (item.minimumStrength && d.strength < item.minimumStrength) {
			outLine('You unequiped ' + d.equip[k] + ' because your strength was insufficient');
			d.equip[k] = null;
		} else if (item.minimumIntelligence && d.intelligence < item.minimumIntelligence) {
			outLine('You unequiped ' + d.equip[k] + ' because your intelligence was insufficient');
			d.equip[k] = null;
		}
	}
}

function updatePlayerStats() {
	maxHp = 50 + d.constitution * 10 + d.maxHpEffect;
	maxFood = 50 + d.constitution * 10 + d.maxFoodEffect;
	maxDrink = 50 + d.constitution * 10 +  + d.maxDrinkEffect;

	// Speed
	speed = 5 + d.agility;

	// Attack
	attack = 1;

	// Armor
	armor = 0;

	// Defense
	defense = 0;

	for (let k in d.equip) {
		if (!d.equip[k]) {
			continue;
		}
		var logics = itemTypeLogics[k];
		if (!logics.equipable) {
			continue;
		}
		if (!logics.attributeAdd) {
			continue;
		}
		var item = items[d.equip[k]]
		var value = item.attribute;
		if (logics.attributeAdd == AttributeAdd.Attack) {
			attack += value;
		}
		if (logics.attributeAdd == AttributeAdd.Defense) {
			defense += value;
		}
		if (logics.attributeAdd == AttributeAdd.Armor) {
			armor += value;
		}

	}
	// Healing
	healing = 1
	healing += Math.floor(d.vitality/3);

	// Attribute modifiers
	defense = Math.floor((1 + defense) * d.dexterity/10);
	attack = Math.floor((1 + attack) * d.strength/5);
}

function playerGetsDamage(n: number) {
	if (d.state != State.Playing) {
		return;
	}
	n = Math.floor(n);
	if (n > d.hp) {
		n = d.hp;
	}
	if (n < 1) {
		return;
	}
	d.hp -= n;
	if (d.hp < 1) {
		d.hp = 0;
	}
}

function experiencePerLevel(n) {
	if (n < 2) {
		return 0;
	}
	var	factor = EXPERIENCEPERLEVELFACTOR;
	if (n > 50) {
		factor = 100;
	}
	// Test with for (var i = 1; i < 20; i++) { console.log(i + ' ' + experiencePerLevel(i) + ' DIFF' + (experiencePerLevel(i)-experiencePerLevel(i-1))); }
	var fix = 50;
	var test = Math.floor(100 * Math.pow(factor, 2 - 1) - 100);
	return Math.floor((100 * Math.pow(factor, n - 1) - 100)*fix/test);
}

function experienceToNextLevel() {
	return experiencePerLevel(d.level+1) - experiencePerLevel(d.level);
}

function currentExperience() {
	return d.experience - experiencePerLevel(d.level);
}

function playerGetsExperience(n: number) {
	if (d.state != State.Playing) {
		return;
	}
	if (n < 1) {
		return;
	}
	outSpace();
	outLine('You gained ' + n + ' experience');
	d.experience += n;
	while (currentExperience() >= experienceToNextLevel()) {
		levelUp();
	}
}

function levelUp() {
	if (d.state != State.Playing) {
		return;
	}
	d.level++;
	outSpace();
	outLine('You level up to level ' + d.level + '!');
	var newPoints = Math.floor(d.level/10)+1;
	d.attributePoints += newPoints;
	outLine('You gained ' + newPoints + ' attribute points');
}

function diggestChanceBase() {
	var chance = 5
	if (d.hp < maxHp) {
		chance = 10;
	}
	if (d.hp < maxHp/4) {
		chance = 20;
	}
	if (d.hp < maxHp/10) {
		chance = 40;
	}
	return chance*1.5;
}

function playerDigests() {
	if (d.state != State.Playing) {
		return;
	}
	var consumeFood = 0;
	if (d.food >= 1 && random(0, 100) < diggestChanceBase()) {
  		consumeFood = 1
  		if (d.hp < maxHp/2) {
  			consumeFood = 2
  		}
  		var newFood = d.food - consumeFood;
	  	if (newFood < 1) {
	  		d.food = 0;
	  	}
	  	consumeFood = d.food - newFood;
	  	d.food -= consumeFood;
	  	if (d.food < 1) {
	  		d.food = 0;
	  	}
	}
	var consumeDrink = 0;
	if (d.drink >= 1 && random(0, 100) < diggestChanceBase()*2) {
		consumeDrink = 1;
  		if (d.hp < maxHp/2) {
  			consumeDrink = 2
  		}
  		var newDrink = d.drink - consumeDrink;
	  	if (newDrink < 1) {
	  		d.drink = 0;
	  	}
	  	consumeDrink = d.drink - newDrink;
		outSpace();
	  	d.drink -= consumeDrink;
	  	if (d.drink < 1) {
	  		d.drink = 0;
	  	}
	}
	if (consumeFood && consumeDrink) {
		outSpace();
  		outLine('You consumed '+ consumeFood + ' food point' + s(consumeFood) + ' and ' + consumeDrink + ' drink point' + s(consumeDrink));
	} else if (consumeFood) {
		outSpace();
	  	outLine('You consumed ' + consumeFood + ' food point' + s(consumeFood));
	} else if (consumeDrink) {
		outSpace();
  		outLine('You consumed ' + consumeDrink + ' drink point' + s(consumeDrink));
	}
	var lostHpFood = 0
	if (d.food == 0) {
		lostHpFood = 1;
	}
	var lostHpDrink = 0;
	if (d.drink == 0) {
		lostHpDrink = 3;
	}
	if (lostHpFood && lostHpDrink) {
		var lostHpTotal = lostHpFood + lostHpDrink;
		if (lostHpTotal > d.hp) {
			lostHpTotal = d.hp;
		}
		outSpace();
		outLine('You are starving and dying of thirst and lost ' + lostHpTotal + ' hit point' + s(lostHpTotal));
		playerGetsDamage(lostHpTotal);
	} else if (lostHpFood) {
		if (lostHpFood > d.hp) {
			lostHpFood = d.hp;
		}
		outSpace();
		outLine('You are starving and lost ' + lostHpFood + ' hit point' + s(lostHpFood));
		playerGetsDamage(lostHpFood);
	} else if (lostHpDrink) {
		if (lostHpDrink > d.hp) {
			lostHpDrink = d.hp;
		}
		outSpace();
		outLine('You are dying of thirst and lost ' + lostHpDrink + ' hit point' + s(lostHpDrink));
		playerGetsDamage(lostHpDrink);
	}
	if (d.hp <= 0) {
		d.hp = 0;
		die();
	}
}

function playerHeals() {
	if (d.state != State.Playing) {
		return;
	}
	if (d.hp >= maxHp) {
		return;
	}
	if (d.food < MINTOHEAL && d.drink < MINTOHEAL) {
		outSpace();
		outLine('You are too hungry and thirsty to heal');
		return;
	} else if (d.food < MINTOHEAL) {
		outSpace();
		outLine('You are too hungry to heal');
		return;
	} else if (d.drink < MINTOHEAL) {
		outSpace();
		outLine('You are too thirsty to heal');
		return;
	}
	var heal = 0;
	if (random(0, 100) > 66) {
		heal = randomInteger(1, healing);
	  	var newHp = d.hp + heal;
	  	if (newHp > maxHp) {
	  		heal = newHp - maxHp;
	  	}
	}
  	if (heal >= 1) {
		outSpace();
  		outLine('You healed ' + heal + ' hit point' + s(heal));
  		d.hp += heal;
  	}
}

function die() {
	// Died.
	outSpace();
	outLine('You died');
	d.doors = [];
	setStateQuiet(State.Dead);
	updateInfo();
	d.timestamp = new Date().toString();
	return;
}