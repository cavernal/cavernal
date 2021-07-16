var infoDoorN = -1;
var infoItemN = -1;
var infoEquippedN = -1;
var infoAttributeKey = '';

function infoNothing() {
	outputInfo('');
	infoDoorN = -1;
	infoItemN = -1;
	infoEquippedN = -1;
	infoAttributeKey = '';
}

function infoPortrait() {
	outputInfo('This is you');
}

function infoLevel() {
	outputInfo(line(img('classexplorer', '', 'badge') + ' Explorer') + line('') + 'You are an explorer' + line('') + line('You are level ' + d.level) + line('') + line('The bar below the level shows the experience you need to level up') + line('') + line('When you level up, you gain attribute points that you can spend to increase your attributes'));
}

function infoAttrPoints() {
	outputInfo(line(img('charattrpoints') + ' Attribute points') + line('') + line('You gain attribute points when you level up') + line('') + line('You can spend attribute points to increase your attributes'));
}

function infoItem(n) {
	infoItemN = n;
	updateInfo();
}

function infoHp() {
	outputInfo(line(img('stathitpoints') + ' Hit points') + line('') + line('Hit points represent your health') + line('') + line('If you run out of hitpoints, you die') + line('') + line('You can increase your maximum hit points by increasing your constitution attribute'));
}

function infoFood() {
	outputInfo(line(img('statfood') + ' Food points') + line('') + line('Food points represent how full you are of food') + line('') + line('When you are low on food you cannot heal, and if you run out of food, you start to starve') + line('') + line('You can increase your maximum food points by increasing your constitution attribute'));
}

function infoDrink() {
	outputInfo(line(img('statdrink') + ' Drink points') + line('') + line('Drink points represent how full you are of drink') + line('') + line('When you are low on drink you cannot heal, and if you run out of drink, you start to die of thirst') + line('') + line('You can increase your maximum drink points by increasing your constitution attribute'));
}

function infoAttribute(key) {
	infoAttributeKey = key;
}

function infoDoor(n) {
	infoDoorN = n;
	updateInfo();
}

function infoDoorWait() {
	outputInfo('Instead of opening a door, you can sit a bit here to eat, drink, and wait until fully recovered');
}

function updateInfoNoDoor() {
	if (infoEquippedN != -1) {
		var itemEq = d.equip[showOrder[infoEquippedN]];
		var textEq = '';
		if (itemEq) {
			infoItemShow(itemEq);
			return;
		}
		var common = line('') + line('') + 'Equip some by selecting them in the inventory';
		if (showOrder[infoEquippedN] == ItemType.Weapon) {
			outputInfo('You do not have a weapon equipped yet' + line('') + line('') + 'Weapons define your attack stat, which increases the strength of your hits' + common);
			return;
		} else if (showOrder[infoEquippedN] == ItemType.Shield) {
			outputInfo('You do not have a shield equipped yet' + line('') + line('') + 'Shields define your defense stat, that is, your chances of parrying an attack' + common);
			return;
		} else if (showOrder[infoEquippedN] == ItemType.Helmet) {
			outputInfo('You do not have a helmet equipped yet' + line('') + line('') + 'Helmets increase your armor stat, which decreases the damage of the hits you receive' + common);
			return;
		} else if (showOrder[infoEquippedN] == ItemType.Armor) {
			outputInfo('You do not have armor equipped yet' + line('') + line('') + 'Armor increases your armor stat, which decreases the damage of the hits you receive' + common);
			return;
		} else if (showOrder[infoEquippedN] == ItemType.Pants) {
			outputInfo('You do not have pants equipped yet' + line('') + line('') + 'Pants increase your armor stat, which decreases the damage of the hits you receive' + common);
			return;
		} else if (showOrder[infoEquippedN] == ItemType.Boots) {
			outputInfo('You do not have boots equipped yet' + line('') + line('') + 'Boots increase your armor stat, which decreases the damage of the hits you receive' + common);
			return;
		}
	}
	if (infoItemN >= d.inventory.length) {
		infoNothing();
	}
	if (infoItemN != -1) {
		infoItemShow(d.inventory[infoItemN].item);
	}
}

function updateInfo() {
	if (infoDoorN >= d.doors.length) {
		infoNothing();
	}
	if (infoAttributeKey) {
		infoAttributeShow(infoAttributeKey);
	}
	if (infoDoorN != -1) {
		var dr = d.doors[infoDoorN];
		if (dr.type == DoorType.Mob) {
			infoMobShow(dr.mob);
		} else if (dr.type == DoorType.Item) {
			infoItemShow(dr.item);
		} else if (dr.type == DoorType.NextDepth) {
			outputInfo(line('This door takes you to the next depth of the cave') + line('') + 'The walls and floors look different through it');
		} else if (dr.type == DoorType.Transcend) {
			outputInfo(line('There is a floating altar past this door') + line('') + 'It makes you feel that touching it would take you out of the cave');
		}
	}
	updateInfoNoDoor();
}

function infoAttributeShow(key) {
	if (key == keyStrength) {
		outputInfo(line(img('attrstrength') + ' Strength') + line('') + 'Strength is the attribute that enables you to wear and wield heavy equipment' + 
			line('') + line('') + 'You can increase it by spending ' + (d.strengthWithPoints+1) + ' attribute point' + s(d.strengthWithPoints+1) + ' (' + img('charattrpoints') + '), which you get when you level up');
	} else if (key == keyDexterity) {
		outputInfo(line(img('attrdexterity') + ' Dexterity') + line('') + 'Dexterity is the attribute that makes you defend better with your shield' +
			line('') + line('') + 'You can increase it by spending ' + (d.dexterityWithPoints+1) + ' attribute point' + s(d.dexterityWithPoints+1) + ' (' + img('charattrpoints') + '), which you get when you level up');
	} else if (key == keyAgility) {
		outputInfo(line(img('attragility') + ' Agility') + line('') + 'Agility is the attribute that makes you attack and defend faster' +
			line('') + line('') + 'You can increase it by spending ' + (d.agilityWithPoints+1) + ' attribute point' + s(d.agilityWithPoints+1) + ' (' + img('charattrpoints') + '), which you get when you level up');
	} else if (key == keyConstitution) {
		outputInfo(line(img('attrconstitution') + ' Constitution') + line('') + 'Constitution is the attribute that increases your hit points, food points, and drink points' +
			line('') + line('') + 'You can increase it by spending ' + (d.constitutionWithPoints+1) + ' attribute point' + s(d.constitutionWithPoints+1) + ' (' + img('charattrpoints') + '), which you get when you level up');
	} else if (key == keyVitality) {
		outputInfo(line(img('attrvitality') + ' Vitality') + line('') + 'Vitality is the attribute that makes you heal faster' + 
			line('') + line('') + 'You can increase it by spending ' + (d.vitalityWithPoints+1) + ' attribute point' + s(d.vitalityWithPoints+1) + ' (' + img('charattrpoints') + '), which you get when you level up');
	} else if (key == keyIntelligence) {
		outputInfo(line(img('attrintelligence') + ' Intelligence') + line('') + 'Intelligence is the attribute that enables you to use more complex magic equipment' + 
			line('') + line('') + 'You can increase it by spending ' + (d.intelligenceWithPoints+1) + ' attribute point' + s(d.intelligenceWithPoints+1) + ' (' + img('charattrpoints') + '), which you get when you level up');
	} 
}

function infoMobShow(mob) {
	var descriptionText = '';
	if (mobs[mob].description) {
		descriptionText = line(mobs[mob].description);
	}
	var statsText = line(img('stathitpoints') + ' Hit points: ' + mobs[mob].hp) +
		line(img('statattack') + ' Attack: ' + mobs[mob].attack) +
		line(img('statdefense') + ' Defense: ' + mobs[mob].defense) +
		line(img('statspeed') + ' Speed: ' + mobs[mob].speed);

	outputInfo(line(div('minipiccrop', img(mobs[mob].image, '', 'minipic')) + ' ' + mob) + line('') + descriptionText + line('') + statsText);
}

function infoItemShow(item) {
	var it = items[item];
	var descriptionImageText = '';
	if (it.descriptionImage) {
		descriptionImageText = line('') + line(it.descriptionImage());
	}
	var descriptionText = '';
	if (it.description) {
		descriptionText = line('') + line(it.description);
	}

	var equipped = d.equip[items[item].type];
	var equippedDelta = 0;
	if (equipped) {
		equippedDelta = it.attribute - items[equipped].attribute;
	} else {
		equippedDelta = it.attribute;
	}

	var attrText = '';
	if (it.type == ItemType.Weapon) {
		attrText = line('') + line(img('statattack') + ' Attack: ' + it.attribute + numDeltaOnly(equippedDelta));
	} else if (it.type == ItemType.Shield) {
		attrText = line('') + line(img('statdefense') + ' Defense: ' + it.attribute + numDeltaOnly(equippedDelta));
	} else if (it.type == ItemType.Helmet || it.type == ItemType.Armor || it.type == ItemType.Pants || it.type == ItemType.Boots) {
		attrText = line('') + line(img('statarmor') + ' Armor: ' + it.attribute + numDeltaOnly(equippedDelta));
	} else if (it.type == ItemType.Healing) {
		attrText = line('') + line(img('stathitpoints') + ' Hit points +' + it.attribute);
	} else if (it.type == ItemType.Food) {
		attrText = line('') + line(img('statfood') + ' Food points +' + it.attribute);
	} else if (it.type == ItemType.Drink) {
		attrText = line('') + line(img('statdrink') + ' Drink points +' + it.attribute);
	}
	var reqText = '';
	if (it.minimumStrength && it.minimumIntelligence) {
		reqText = line('') + line('It requires ' + it.minimumStrength + ' strength and ' + it.minimumIntelligence + ' intelligence to use');
	} else if (it.minimumStrength) {
		reqText = line('') + line('It requires ' + it.minimumStrength + ' strength to use');
	} else if (it.minimumIntelligence) {
		reqText = line('') + line('It requires ' + it.minimumIntelligence + ' intelligence to use');
	}

	var consumableText = '';
	if (it.consumableOnCombat) {
		consumableText = line('') + line('It will be consumed on combat');
	}
	if (it.consumable || itemTypeLogics[it.type].consumable) {
		consumableText = line('') + line('It will be consumed on use');
	}
	outputInfo(line(itemTile(item, 1, false, false, false, false, false) + ' ' + item) + attrText + descriptionImageText + descriptionText + reqText + consumableText);
}

function infoEquipped(n) {
	infoEquippedN = n;
	updateInfo();
}

