var rooms: Room[] = [];

class Door {
	type: DoorType;
	mob?: string;
	item?: string;
	itemAmount?: number;
	itemImage?: string;
}

enum DoorType {
	Mob = 1,
	Item,
	NextDepth,
	Transcend,
};

class DoorChance {
	door: Door;
	chance?: number;
	mustOnce?: boolean;
	unique?: boolean;
}

class Room {
	depth: number;
	fromStep: number;
	toStep: number;
	chance: number;
	minDoors: number;
	maxDoors: number;
	uniqueKey: string;
	doors: DoorChance[];
}

function generateDoors() {
	var validRooms = [];
	for (let k in rooms) {
		var r = rooms[k];
		if (r.depth == d.depth && d.step >= r.fromStep && d.step <= r.toStep && (!r.uniqueKey || !d.generatedUniqueRooms[r.uniqueKey])) {
			validRooms.push(r);
		}
	}
	if (validRooms.length == 0) {
		d.doors = [<Door>{type: DoorType.Transcend}];
		return;
	}

	// sum chance
	let totalChance = 0;
	for (let i = 0; i < validRooms.length; i++) {
		totalChance += validRooms[i].chance;
	}
	let chosenChance = Math.random() * totalChance;

	let chosen = 0;
	let chance = 0;
	for (let i = 0; i < validRooms.length; i++) {
		chance += validRooms[i].chance;
		if (chance >= chosenChance) {
			chosen = i;
			break;
		}
	}

	var room: Room = validRooms[chosen];
	if (room.uniqueKey) {
		d.generatedUniqueRooms[room.uniqueKey] = true;
	}

	var nDoors = randomInteger(room.minDoors, room.maxDoors);
	d.doors = [];
	var doorsAlreadyGenerated = {};

	for (let i = 0; i < room.doors.length; i++) {
		var doorChance = room.doors[i];
		if (doorChance.mustOnce) {
			d.doors.push(doorChance.door);
			if (doorChance.unique) {
				doorsAlreadyGenerated[i] = true;
			}
		}
	}

	while (d.doors.length < nDoors) {
		var validDoors = [];
		for (let i = 0; i < room.doors.length; i++) {
			if (room.doors[i].chance && !doorsAlreadyGenerated[i]) {
				validDoors.push(i);
			}
		}
		let totalDoorChance = 0;
		for (let i = 0; i < validDoors.length; i++) {
			totalDoorChance += room.doors[validDoors[i]].chance;
		}
		let chosenDoorChance = Math.random() * totalDoorChance;

		let chosenDoor = 0;
		let chanceDoor = 0;
		for (let i = 0; i < validDoors.length; i++) {
			chanceDoor += room.doors[validDoors[i]].chance;
			if (chanceDoor >= chosenDoorChance) {
				chosenDoor = validDoors[i];
				break;
			}
		}
		d.doors.push(room.doors[chosenDoor].door);
		if (room.doors[chosenDoor].unique) {
			doorsAlreadyGenerated[chosenDoor] = true;
		}
	}
	shuffleArray(d.doors);
	saveData();
}

function showActionsPlaying() {
	var buffer = '';
	buffer += line('You are at depth ' + d.depth + ', where you have taken  ' + d.step + ' step' + s(d.step) + ' so far. Which door do you want to open?');
	buffer += line('');

	for (var i = 0; i < d.doors.length; i++) {
		var content = ''
		var key = (i+1).toString();
		if (d.doors[i].type == DoorType.Mob) {
			content = doorActionMob(d.doors[i].mob, key);
		}
		if (d.doors[i].type == DoorType.Item) {
			content = doorAction(d.doors[i].itemImage, key, 'doorframe', 'action', div('lootdoor', itemTile(d.doors[i].item, d.doors[i].itemAmount, false, false, false, false)));
		}
		if (d.doors[i].type == DoorType.NextDepth) {
			content = doorAction('deeper', key, 'doorframepurple');
		}
		if (d.doors[i].type == DoorType.Transcend) {
			content = doorAction('altar', key, 'doorframepurple');
		}
		buffer += hoverInfo('infoDoor(\'' +  i + '\')', content);
	}
	buffer += hoverInfo('infoDoorWait()', doorAction('wait', 'W', 'doorframe', 'actionright'));
	outputActions(buffer);
}

function openDoor(n) {
    if (!isDoorValid(n)) {
    	return;
    }
    clear();
	outLine('You opened door ' + (n+1));

	outSpace();
	if (d.doors[n].type == DoorType.Mob) {
		openDoorMob(d.doors[n].mob);
		if (d.state == State.Playing) {
			d.step++;
		}
	} else if (d.doors[n].type == DoorType.Item) {
		var item: Item = items[d.doors[n].item];
		outSpace();
		outLine('You picked up:');
		outLine('');
		addAllToInventory([<ItemAmount>{
			item: d.doors[n].item,
			amount: d.doors[n].itemAmount,
			}]);
		outLine('');
		d.step++;
	} else if (d.doors[n].type == DoorType.NextDepth) {
		d.depth++;
		d.step = 0;
		outLine('You go down the stairs to the next depth level');
	} else if (d.doors[n].type == DoorType.Transcend) {
		outLine('You stepped on the altar and transcended');
		d.timestamp = new Date().toString();
		getAchievement('Transcended');
		setStateQuiet(State.Transcended);
		return;
	}
	generateDoors();
	useTurn();
	generateMobWinCounts();
}

function openDoorMob(mobName) {
	var result = combat(mobName);
	consumeItemsCombat();
	if (!result) {
		die();
	} else {
		var mob: Mob = mobs[mobName];
		playerGetsExperience(mob.experience);
		var loot = generateLoot(mob.loot);
		if (loot.length >= 1) {
			outSpace();
			outLine('It dropped:');
			outLine('');
			addAllToInventory(loot);
		}
		outSpace();
	}
}

function isDoorValid(n: number) {
	return (n >= 0 && n < d.doors.length);
}