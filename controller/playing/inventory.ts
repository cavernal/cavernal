var inventorySelected: number = -1;
var inventoryColumns: number = 6;
var inventorySelectedWithKeyboard: boolean = false;

function inventoryKeys(key, ctrlKey, shiftKey, altKey): boolean {
	if (ctrlKey || shiftKey || altKey) {
		return false;
	}
	if (key == 'ESCAPE') {
		inventorySelected = -1;
		showInventory();
		return false;
	}
	if (key == 'UP' || key == 'DOWN' || key == 'LEFT' || key == 'RIGHT') {
		var newSelected = inventorySelected;
		if (key == 'LEFT' && inventorySelected % inventoryColumns != 0) {
			newSelected--;
		}
		else if (key == 'UP') {
			newSelected -= inventoryColumns;
		}
		else if (key == 'RIGHT' && inventorySelected%inventoryColumns != inventoryColumns-1) {
			newSelected++;
		}
		else if (key == 'DOWN') {
			newSelected += inventoryColumns;
		}
		if (inventorySelected == -1) {
			inventorySelect(0);
			inventorySelectedWithKeyboard = true;
			showInventory();
			return false;
		} else {
			if (newSelected >= 0 && newSelected < d.inventory.length) {
				inventorySelect(newSelected);
				inventorySelectedWithKeyboard = true;
				showInventory();
				return false;
			}
		}
	}
	if (key == 'ENTER' && inventorySelected != -1) {
		inventoryUse();
		return true;
	}
	for (let k in itemShortcuts) {
		let name = itemShortcuts[k];
		if (key == k) {
			return inventoryUseByName(name);
		}
	}
}

function selectedItem() {
	if (inventorySelected == -1) {
		return;
	}
	return d.inventory[inventorySelected];
}

function inventorySelect(n) {
	if (inventorySelected == n) {
		return;
	}
	inventorySelectedWithKeyboard = false;
	inventorySelected = n;
	showAttribute = '';
	if (n != -1) {
		infoItem(n);
		document.getElementById("inventory" + n).scrollIntoView({behavior: "auto", block: "nearest", inline: "nearest"});
	}
	update();
}

function selectedUse(n) {
	if (inventorySelected != n) {
		inventorySelect(n);
		return;
	}
	simpleKeyPress('ENTER');
}

function bestOfItems() {
	var bestOf = {};
	for (let i = 0; i < d.inventory.length; i++) {
		var entry = d.inventory[i];
		var item = entry.item;
	 	if (d.state == State.Playing &&
		   (!bestOf[items[item].type] || bestOf[items[item].type] < items[item].attribute) &&
		   (!items[item].consumableOnCombat) &&
		   (!items[item].minimumStrength || items[item].minimumStrength <= d.strength) &&
		   (!items[item].minimumIntelligence || items[item].minimumIntelligence <= d.intelligence)) {
	 		bestOf[items[item].type] = items[item].attribute;
	 	}
    }
    return bestOf;
}

function wearableIsBetter(item, bestOf) {
	var equipped = d.equip[items[item].type];
	return (!equipped || items[equipped].attribute < items[item].attribute) &&
	       (!bestOf[items[item].type] || (bestOf[items[item].type] <= items[item].attribute && !items[item].consumableOnCombat) || bestOf[items[item].type] < items[item].attribute) &&
		   (!items[item].minimumStrength || items[item].minimumStrength <= d.strength) &&
		   (!items[item].minimumIntelligence || items[item].minimumIntelligence <= d.intelligence);
}

function showInventory() {
	var equipReverse = {};
	for (let k in showOrder) {
		if (d.equip[showOrder[k]]) {
			equipReverse[d.equip[showOrder[k]]] = k;
		}
	}
	var buffer = '';
	var bestOf = bestOfItems();
	if (d.inventory.length) {
		for (let i = 0; i < d.inventory.length; i++) {
			var entry = d.inventory[i];
			var item = entry.item;
			var typeLogics = itemTypeLogics[items[item].type];

	 		var hoverFunction = 'inventorySelect(' + i + ')';
	 		var hoverOutFunction = 'inventorySelect(-1)';

		 	var isSelected = (i == inventorySelected);
		 	var isEquipped = false;
		 	if (equipReverse[item]) {
		 		isEquipped = true;
		 	}
		 	var isActionable = false;
		 	if (wearables[items[item].type] && d.state == State.Playing && wearableIsBetter(item, bestOf)) {
		 		isActionable = true;
		 	}
		 	if (d.food < MINTOHEAL && item == autoFood()) {
		 		isActionable = true;
		 	}
		 	if (d.drink < MINTOHEAL && item == autoDrink()) {
		 		isActionable = true;
		 	}

		 	var isEquipped = false;
		 	if (equipReverse[item]) {
		 		isEquipped = true;
		 	}
		 	var buttonInside = itemTile(entry.item, entry.amount, isSelected, isEquipped, isActionable, true /* showConsumable */);

			var buttonText = buttonEvent('return', buttonInside);
		 	if (d.state == State.Playing) {
				buttonText = buttonEvent('selectedUse(' + i + ')', buttonInside);
			}

		 	buffer += scrollMarker("inventory" + i, hoverInfo('infoItem(\'' + i + '\')', hover(hoverFunction, hoverOutFunction, buttonText)));
		} 
		outputInventory(buffer);
	}
}

function sortInventory() {
	var selected = selectedItem();
	d.inventory = d.inventory.sort(compareItems);
	if (selected && inventorySelectedWithKeyboard) {
		inventorySelected = d.inventory.indexOf(selected);
	}
}

function addAllToInventory(loot: ItemAmount[]) {
	for (let i = 0; i < loot.length; i++) {
		var amount = loot[i].amount;
		var item = items[loot[i].item];
		var amountText = '';
		if (amount > 1) {
			amountText = ' ' + amount + 'x';
		}
		if ((wearables[item.type] || item.uniqueOnLoot) && !item.consumableOnCombat && !item.consumable && !itemTypeLogics[item.type].consumable) {
			amountText = '';
		}
		if (!wearables[item.type] || item.consumableOnCombat || itemTypeLogics[item.type].consumable || inventoryFindByName(loot[i].item) == -1) {
			outLine(itemTile(loot[i].item, amount, false, false, false, false, false) + amountText + ' ' + loot[i].item);
		}
		addToInventory(loot[i].item, loot[i].amount);
	}
}

function addToInventory(o: string, amount: number) {
	if (!items[o]) {
		throw Error('Trying to add to inventory non-existing object ' + o);
		return;
	}
	if (amount < 1) {
		return;
	}
	if (items[o].getAchievement) {
		getAchievement(items[o].getAchievement);
	}
	if (items[o].uniqueOnLoot) {
		d.generatedUniqueOnLootItems[o] = true;
	}
	var cell = inventoryFindByName(o);
	if (cell == -1) {
		d.inventory.push(<ItemAmount>{item: o, amount: amount});
		sortInventory();
	} else {
		d.inventory[cell].amount += amount;
	}
}

function inventoryUseByName(name) {
	var selected = selectedItem();
	var newSelected = inventoryFindByName(name);
	if (newSelected == -1) {
		return false;
	}
	inventorySelected = newSelected;
	inventoryUse();
	if (selected) {
		inventorySelected = d.inventory.indexOf(selected);
	} else {
		inventorySelected = -1;
	}
	return true;
}

function inventoryFindByName(name) {
	for (let i = 0; i < d.inventory.length; i++) {
		if (d.inventory[i].item == name) {
			return i;
		}
	}
	return -1;
}

function inventoryConsumeByName(name) {
	var index = inventoryFindByName(name);
	d.inventory[index].amount--;
	var consumedAnything = false;
	if (d.inventory[index].amount < 1) {
		d.inventory.splice(index, 1);
		if (index >= d.inventory.length) {
			index = d.inventory.length-1;
		}
		for (let k in d.equip) {
			if (!d.equip[k]) {
				continue;
			}
			if (d.equip[k] == name) {
				if (d.lastequip[k] && inventoryFindByName(d.lastequip[k]) != -1) {
					d.equip[k] = d.lastequip[k];
				}
				else {
					d.equip[k] = null;
				}
				consumedAnything = true;
			}
		}
	}
	if (consumedAnything) {
		updatePlayerStats();
		updatePlayerValues();
	}
}

function inventoryUse() {
	outLine('');
	outLine('');
	outLine('');
	if (items[selectedItem().item].doFade) {
		fadeWrapper(function() { inventoryUseLogic(); } );
	} else {
		inventoryUseLogic();
	}
	if (d.hp <= 0) {
		die();
	}
}

function inventoryUseLogic() {
	var selected = items[selectedItem().item];
	if (!selected) {
		return;
	}
	if (selected.minimumStrength && d.strength < selected.minimumStrength && selected.minimumIntelligence && d.intelligence < selected.minimumIntelligence) {
		outLine('You need at least ' + selected.minimumStrength + ' strength and ' + selected.minimumIntelligence + ' intelligence to use this object');
		return;
	} else if (selected.minimumStrength && d.strength < selected.minimumStrength) {
		outLine('You need at least ' + selected.minimumStrength + ' strength to use this object');
		return;
	} else if (selected.minimumIntelligence && d.intelligence < selected.minimumIntelligence) {
		outLine('You need at least ' + selected.minimumIntelligence + ' intelligence to use this object');
		return;
	}

	var typeLogics = itemTypeLogics[selected.type];
	if (!selected.useFunction && !typeLogics.useItem) {
		outLine('You just examined ' + selected.name);
		return;
	}
	if (selected.useFunction) {
		if (!selected.useFunction()) {
			return;
		}
	} else if (typeLogics.useItem) {
		if (!typeLogics.useItem(selected)) {
			return;
		}
	}
	if (typeLogics.consumable || items[selectedItem().item].consumable) {
		outSpace();
		inventoryConsumeByName(selected.name);
	}
	updatePlayerStats();
	updatePlayerValues();
	var keepSelected = inventorySelected;
	sortInventory();
	inventorySelected = keepSelected;
	if (inventorySelected >= d.inventory.length || isTouchDevice()) {
		inventorySelected = -1;
		infoNothing();
		updateInfo();
		stopPropagation();
	}
	saveData();
	generateMobWinCounts();
}

function consumeItemsCombat() {
	var consume = [];
	for (let k in d.equip) {
		if (!d.equip[k]) {
			continue;
		}
		if (items[d.equip[k]].consumableOnCombat) {
			consume.push(d.equip[k]);
		}
	}
	for (let k in consume) {
		outSpace();
		outLine('You consumed ' + consume[k]);
		inventoryConsumeByName(consume[k]);
	}
}