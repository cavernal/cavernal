function runTests() {
	testItems();
	testMobs();
}

function testMobs() {
	var mobsUsed = {};
	for (let i = 0; i < rooms.length; i++) {
		var room = rooms[i];
		for (let j = 0; j < room.doors.length; j++) {
			var door = room.doors[j].door;
			if (door.type == DoorType.Mob) {
				mobsUsed[door.mob] = true;
			}
		}
	}
	for (let mobDefined in mobs) {
		if (!mobsUsed[mobDefined]) {
			outLine('Warning: mob ' + mobDefined + ' defined but not used');
		}
	}
	for (let mobUsed in mobsUsed) {
		if (!mobs[mobUsed]) {
			outLine('Warning: mob ' + mobUsed + ' used but not defined');
		}
	}
	for (let mob in mobs) {
		if (mob.length > 22) {
			outLine('Warning: mob ' + mob + ' has a name ' + mob.length + ' long, limit is 22');
		}
	}
	var images = {};
	for (let mob in mobs) {
		var image = mobs[mob].image; 
		if (images[image]) {
			outLine('Warning: mob image ' + image + ' used more than once');
		}
		images[image] = true;
	}
}

function testItems() {
	var itemsUsed = {};
	for (let i = 0; i < rooms.length; i++) {
		var room = rooms[i];
		for (let j = 0; j < room.doors.length; j++) {
			var door = room.doors[j].door;
			if (door.type == DoorType.Item) {
				itemsUsed[door.item] = true;
			}
		}
	}
	for (let k in items) {
		var item = items[k];
		if (!item.loot) {
			continue;
		}
		for (let it in allItemsInLoot(item.loot)) {
			itemsUsed[it] = true;
		}
	}
	for (let k in mobs) {
		var mob = mobs[k];
		for (let it in allItemsInLoot(mob.loot)) {
			itemsUsed[it] = true;
		}
	}
	for (let k in d.inventory) {
		itemsUsed[d.inventory[k].item] = true;
	}
	for (let k in achievements) {
		var achievement = achievements[k]
		if (achievement.startingObject)
		itemsUsed[achievement.startingObject] = true;
	}
	for (let itemDefined in items) {
		if (!itemsUsed[itemDefined]) {
			outLine('Warning: item ' + itemDefined + ' defined but not used');
		}
	}
	for (let itemUsed in itemsUsed) {
		if (!items[itemUsed]) {
			outLine('Warning: item ' + itemUsed + ' used but not defined');
		}
	}

	for (let item in items) {
		if (item.length > 19) {
			outLine('Warning: item ' + item + ' has a name ' + item.length + ' long, limit is 19');
		}
	}

	var images = {};
	for (let item in items) {
		var image = items[item].image; 
		if (images[image]) {
			outLine('Warning: item image ' + image + ' used more than once');
		}
		images[image] = true;
	}
}

function allItemsInLoot(l: Loot[]): {} {
	var ret = {};
	for (let i = 0; i < l.length; i++) {
		var loot = l[i];
		if (loot.item) {
			ret[loot.item] = true;
		}
		if (loot.lootSelectors) {
			for (let j = 0; j < loot.lootSelectors.length; j++) {
				var sel = loot.lootSelectors[j];
				ret[sel.item] = true;
			}
		}
	}
	return ret;
}
