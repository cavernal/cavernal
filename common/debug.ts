function isDebugOn() {
	return window.location.href.substring(0,21) == "file:///home/elezeta/";
}

function debugKeyPress(key, ctrlKey, shiftKey, altKey) {
	if (!isDebugOn()) {
		return;
	}
	if (key == "INSERT") {
		debugGetAllItemsAndAttributePoints();
	}
	if (key == "DELETE" && !shiftKey) {
		debugRemoveData();
	}
	if (key == "DELETE" && shiftKey) {
		items["undefined item"].rarity = 42;
	}
	if (key == "HOME" && !shiftKey) {
		debugResurrect();
	}
	if (key == "HOME" && shiftKey) {
		debugRegenerateDoors();
	}
	if (key == "END" && shiftKey) {
		debugAllAchievements();
	}	
	if (key == "END" && !shiftKey) {
		debugJumpTo();
	}	
	if (key == "PAGE_UP" && shiftKey) {
		debugAIRunUntil();
	}	
	if (key == "PAGE_UP" && !shiftKey) {
		debugPowerSwitch();
	}
	if (key == "PAGE_DOWN" && !shiftKey) {
		debugAllMobs();
	}
	if (key == "PAGE_DOWN" && shiftKey) {
		debugAIRun();
	}
	if (key == "1" && shiftKey && ctrlKey) {
		debugScenario(1);
	}
	if (key == "2" && shiftKey && ctrlKey) {
		debugScenario(2);
	}
	if (key == "3" && shiftKey && ctrlKey) {
		debugScenario(3);
	}
	if (key == "4" && shiftKey && ctrlKey) {
		debugScenario(4);
	}
	if (key == "5" && shiftKey && ctrlKey) {
		debugScenario(5);
	}
	if (key == "6" && shiftKey && ctrlKey) {
		debugScenario(6);
	}
	if (key == "7" && shiftKey && ctrlKey) {
		debugScenario(7);
	}
	if (key == "8" && shiftKey && ctrlKey) {
		debugScenario(8);
	}
	if (key == "9" && shiftKey && ctrlKey) {
		debugScenario(9);
	}
}

function debugGetAllItemsAndAttributePoints() {
	for (let i in items) {
		addToInventory(i, 1);
	}
	d.attributePoints = 9999;
	update();
}

function debugPowerSwitch() {
	if (d.constitution < 1000 && d.constitution > 1) { 
		d.constitution = 1000;
		d.vitality = 1000;
		d.strength = 1000;
		d.intelligence = 1000;
	} else if (d.constitution >= 1000) {
		d.constitution = 1;
		d.vitality = 1;
		d.strength = 1;
		d.intelligence = 1;
	} else {
		d.constitution = 5;
		d.vitality = 5;
		d.strength = 5;
		d.intelligence = 5;
	}
	updatePlayerStats();
	updatePlayerValues();
	d.hp = maxHp;
	d.food = maxFood;
	d.drink = maxDrink;
	generateMobWinCounts();
	update();
}

function debugJumpTo() {
	d.depth = parseInt(prompt("Depth?", "1"));
	d.step = parseInt(prompt("Step?", "1"));
	generateDoors();
	generateMobWinCounts();
	update();
}

function debugResurrect() {
	if (d.state != State.Dead) {
		return;
	}
	d.hp = maxHp;
	d.food = maxFood;
	d.drink = maxDrink;
	setStateQuiet(State.Playing);
	debugRegenerateDoors();
}

function debugRemoveData() {
	removeData();
}

function debugAllMobs() {
	clear();
	generateMobWinCounts(true);
	for (let i in mobs) {
		out(buttonEvent('debugAttackMob(\'' + i + '\')', hoverInfo('infoMobShow(\'' + i + '\')', doorActionMob(i, ''))));
		outputConsole();
	}
	update();
}

function debugAttackMob(mobName) {
	openDoorMob(mobName);
	update();
}

function debugAIRun() {
	fadeEnabled = false;
	var oldAccuracy = GENERATEMOBWINCOUNTACCURACY;
	GENERATEMOBWINCOUNTACCURACY = 20;
	update = function() { };
	var times = parseInt(prompt("Times?", "1"));
	var died = 0;
	var transcended = 0;
	while (d.state != State.Menu) {
		simpleKeyPress('1');
		simpleKeyPress('ENTER');
	}
	for (let i = 0; i < times; i++) {
		if (d.state == State.Menu) {
			simpleKeyPress('ENTER');
		}
		var tier = -1;
		// @ts-ignore because TS2367 is a bug in the compiler (error TS2367: This condition will always return 'false' since the types 'State.Menu' and 'State.Playing' have no overlap), but d.state is changing
		while (d.state == State.Playing) {
			tier = debugAIStep();
		}
		var info = 'depth ' + d.depth + ' step ' + d.step + ' level ' + d.level + ' tier ' + tier + ' food ' + d.food + ' drink ' + d.drink;
		// @ts-ignore 
		if (d.state == State.Dead) {
			died++;
			var cause = "";
			if (d.drink < 10) {
				cause = '(lack of drink) ';
			} else if (d.food < 10) {
				cause = '(lack of food) ';
			} else if (tier < 70) {
				cause = '(too hard - bad equipment/bad room) ';
			} else {
				cause = '(unlucky - high tier, still died) ';
			}
			console.log('Died ' + cause + info);
			simpleKeyPress('ENTER');
		// @ts-ignore 
		} else if (d.state == State.Transcended) {
			transcended++;
			console.log('Transcended ' + info);
			simpleKeyPress('ENTER');
		}
	}
	console.log('Played ' + times + ' times, won ' + transcended + ' and died ' + died);
	update = updateImpl;
	update();
	fadeEnabled = true;
	GENERATEMOBWINCOUNTACCURACY = oldAccuracy;
}

function debugAIRunUntil() {
	fadeEnabled = false;
	var tier = -1;
	var oldAccuracy = GENERATEMOBWINCOUNTACCURACY;
	GENERATEMOBWINCOUNTACCURACY = 20;
	update = function() { };
	var targetDepth = parseInt(prompt("Depth?", "5"));
	var targetStep = parseInt(prompt("Step?", "0"));
	while (d.depth != targetDepth || d.step != targetStep || d.state != State.Playing) {
		if (d.state == State.Menu) {
			simpleKeyPress('ENTER');
		}
		// @ts-ignore
		if (d.state == State.Playing) {
			tier = debugAIStep();
		}
		var info = 'depth ' + d.depth + ' step ' + d.step + ' level ' + d.level + ' tier ' + tier + ' food ' + d.food + ' drink ' + d.drink;
		// @ts-ignore 
		if (d.state == State.Dead) {
			var cause = "";
			if (d.drink < 10) {
				cause = '(lack of drink) ';
			} else if (d.food < 10) {
				cause = '(lack of food) ';
			} else if (tier < 70) {
				cause = '(too hard - bad equipment/bad room) ';
			} else {
				cause = '(unlucky - high tier, still died) ';
			}
			console.log('Died ' + cause + info);
			simpleKeyPress('ENTER');
		// @ts-ignore 
		} else if (d.state == State.Transcended) {
			console.log('Transcended ' + info);
			simpleKeyPress('ENTER');
		}
	}
	update = updateImpl;
	fadeEnabled = true;
	GENERATEMOBWINCOUNTACCURACY = oldAccuracy;
	generateMobWinCounts();
	update();
}

function debugAIStep() {
	if (d.state != State.Playing) {
		return;
	}
	// Buy attributes
	if (d.constitution < 6) {
		simpleKeyPress('B');
	}
	simpleKeyPress('X');
	simpleKeyPress('V');
	simpleKeyPress('C');

	// Heal
	simpleKeyPress('W');

	// Equip items
	var wearables = {};
	for (let i = 0; i < showOrder.length; i++) {
		wearables[showOrder[i]] = true;
	}
	var bestOf = bestOfItems();
	for (let i in d.inventory) {
		var item = d.inventory[i].item;
		if (wearables[items[item].type] && wearableIsBetter(item, bestOf) && !items[item].consumableOnCombat) {
			inventoryUseByName(item);
		}
	}

	// Use all potions, scrolls, and artifacts
	for (let i in d.inventory) {
		var item = d.inventory[i].item;
		if ((items[item].type == ItemType.IncreaseMaxHitPoints ||
			items[item].type == ItemType.IncreaseStrength ||
			items[item].type == ItemType.IncreaseDexterity ||
			items[item].type == ItemType.IncreaseAgility ||
			items[item].type == ItemType.IncreaseConstitution ||
			items[item].type == ItemType.IncreaseVitality ||
			items[item].type == ItemType.IncreaseIntelligence ||
			items[item].type == ItemType.Scroll ||
			items[item].type == ItemType.Artifact) && (items[item].consumable || itemTypeLogics[items[item].type].consumable)) {
			console.log('Used ' + item)
			inventoryUseByName(item);
		}
	}

	// Choose and open door	
	var chosen = -1;
	var tiers = [100, 99, 98, 97, 95, 90, 85, 80, 75, 70, 60, 50, 40, 30, 20, 0];
	var tier = 100;
	for (let j in tiers) {
		tier = tiers[j];
		var maxPower = 0;
		for (let i = 0; i < d.doors.length; i++) {
			var door = d.doors[i];
			if (door.type == DoorType.Mob) {
				var mobPower = mobs[door.mob].attack + mobs[door.mob].speed + mobs[door.mob].defense + mobs[door.mob].hp; 
			 	if (mobWinCounts[door.mob] > tier && mobPower > maxPower) {
					maxPower = mobPower;
					chosen = i;
				}
			}
		}
		if (chosen != -1) {
			break;
		}
	}
	if (tier <= 90) {
		for (let i = 0; i < d.doors.length; i++) {
			var door = d.doors[i];
			if (door.type == DoorType.Item) {
				chosen = i;
			}
		}
	}
	var change = true;
	while (tier <= 60 && change) {
		change = false;
		var bestOf = bestOfItems();
		for (let i in d.inventory) {
			var item = d.inventory[i].item;
			if (wearables[items[item].type] && wearableIsBetter(item, bestOf)) {
				inventoryUseByName(item);
				change = true;
				break;
			}
		}
	}
	// Override if water
	for (let i = 0; i < d.doors.length; i++) {
		if (d.doors[i].type == DoorType.Item && items[d.doors[i].item].type == ItemType.Drink) {
			chosen = i;
		}
	}
	if (chosen == -1) {
		chosen = 0;
	}
	simpleKeyPress((chosen+1).toString());

	return tier;
}

function debugRegenerateDoors() {
	generateDoors();
	generateMobWinCounts();
	update();
}

function buttonEvent(script, text): string {
	return '<div class="button" onclick="' + script + ';">' + text + '</div>';
}

function debugScenario(n) {
	setState(State.Playing);
	d.hp = 100;
	debugGetAllItemsAndAttributePoints();
	d.depth = 999;
	d.step = 999;
	d.strength = 1000;
	d.equip[ItemType.Weapon] = 'The beheader';
	d.equip[ItemType.Shield] = 'Shield of power';
	d.equip[ItemType.Helmet] = 'Mask of redemption';
	d.equip[ItemType.Armor] = 'Armor of fate';
	d.equip[ItemType.Pants] = 'Pants of truth';
	d.equip[ItemType.Boots] = 'Boots of angels';
	d.level = 50;
	d.experience = 0;
	if (n == 1) {
		outLine('Knife of the ritual success');
	}
	if (n == 2) {
		outLine('Knife of the ritual failure due to lack of level');
		d.level = 49;
	}
	if (n == 3) {
		outLine('Knife of the ritual failure due to lack of the weapon');
		d.equip[ItemType.Weapon] = null;
	}
	if (n == 4) {
		outLine('Knife of the ritual failure due to lack of the shield');
		d.equip[ItemType.Shield] = null;
	}
	if (n == 5) {
		outLine('Knife of the ritual failure due to lack of the helmet');
		d.equip[ItemType.Helmet] = null;
	}
	if (n == 6) {
		outLine('Knife of the ritual failure due to lack of the armor');
		d.equip[ItemType.Armor] = null;
	}
	if (n == 7) {
		outLine('Knife of the ritual failure due to lack of the pants');
		d.equip[ItemType.Pants] = null;
	}
	if (n == 8) {
		outLine('Knife of the ritual failure due to lack of the boots');
		d.equip[ItemType.Boots] = null;
	}
	if (n == 9) {
		outLine('Knife of the ritual failure due to wrong place');
		d.depth = 1;
		d.step = 1;
	}
	generateDoors();
	inventoryUseByName('Knife of the ritual');
	update();
}

function debugAllAchievements() {
	for (let i = 0; i < achievements.length; i++) {
		var achievement = achievements[i];
		d.achievements[achievement.name] = true;
		update();
	}
}	