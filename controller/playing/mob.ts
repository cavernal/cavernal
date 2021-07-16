var mobs = {};
var mobWinCounts = {};

function registerMob(o: Mob) {
	if (isDebugOn() && mobs[o.name]) {
		throw Error('Mob ' + o.name + ' is registered twice');
	}
	mobs[o.name] = o;
}

class Mob {
	name: string;
	image: string;
	description?: string;
	experience: number;
	hp: number;
	attack: number;
	speed: number;
	defense: number;
	armor: number;
	loot: Loot[];
}

function generateMobWinCounts(all=false) {
	var targetMobs = [];
	if (all) {
		for (let i in mobs) {
			targetMobs.push(i);
		}
	} else {
		var mobsInDoors = {};
		for (let i = 0; i < d.doors.length; i++) {
			if (d.doors[i].type == DoorType.Mob) {
				mobsInDoors[d.doors[i].mob] = true;
			}
		}
		for (let i in mobsInDoors) {
			targetMobs.push(i);
		}
	}

	for (let i in targetMobs) {
		var mob = targetMobs[i];
		var before = {...d};
		var count = 0;
		for (let j = 0; j < GENERATEMOBWINCOUNTACCURACY; j++) {
			if (combat(mob, true)) {
				count++;
			}
			d = {...before};
		}
		mobWinCounts[mob] = count*100/GENERATEMOBWINCOUNTACCURACY;
	}
}

function combat(mobName, quiet=false) {
	if (!attack || !speed) {
		return false;
	}
	if (!mobs[mobName]) {
		throw Error('Trying to combat undefined mob: ' + mobName);
		return true;
	}
	if (!mobs[mobName].attack || !mobs[mobName].speed) {
		return true;
	}
	var starthp = d.hp;
	var mob = mobs[mobName];
	if (!quiet) outLine('You fought ' + mob.name);
	var mobDamage = 0;
	while (mobDamage < mob.hp) {
		var mobSpeed = randomInteger(0, mob.speed);
		var playerSpeed = randomInteger(0, speed);
		if (mobSpeed > playerSpeed) {
			var at = randomInteger(0, mob.attack);
			var df = randomInteger(0, defense);		
			var ar = randomInteger(0, armor);	
			if (at > 0) {
				if (!quiet) outSpace();	
				if (!quiet) outLine(mob.name + ' tried to hit you');
				if (df > 0) {
					if (!quiet) outLine('You tried to parry the attack');
				}
				if (at >= df) {
					if (!quiet) outLine(mob.name + ' managed to hit you');
					if (at < ar) {
						if (!quiet) outLine('You were not hurt')
					} else {
						var hitPlayer = Math.min(at - ar, d.hp);
						if (hitPlayer < 1) {
							if (!quiet) outLine(mob.name + ' did not hurt you');
						} else {
							if (!quiet) outLine(mob.name + ' caused you damage for ' + hitPlayer + ' hit point' + s(hitPlayer));
							playerGetsDamage(hitPlayer);
						}
					}
				} else {
					if (!quiet) outLine(mob.name + ' could not hit you');
				}
			}
			if (d.hp <= 0) {
				d.hp = 0;
				return false;
			}
		} else {
			var at = randomInteger(0, attack);
			var df = randomInteger(0, mob.defense);		
			var ar = randomInteger(0, mob.armor);		
			if (at > 0) {
				if (!quiet) outSpace();	
				if (!quiet) outLine('You tried to hit ' + mob.name);
				if (df > 0) {
					if (!quiet) outLine(mob.name + ' tried to parry the attack');
				}
				if (at >= df) {
					if (!quiet) outLine('You managed to hit ' + mob.name);
					if (at < ar) {
						if (!quiet) outLine(mob.name + ' was not hurt')
					} else {
						var hitMob = Math.min(at - ar, mob.hp - mobDamage);
						if (hitMob < 1) {
							if (!quiet) outLine('You did not hurt ' + mob.name);
						} else {
							mobDamage += hitMob;
							if (!quiet) outLine('You caused ' + mob.name + ' damage for ' + hitMob + ' hit point' + s(hitMob));
						}
					}
				} else {
					if (!quiet) outLine('You could not hit ' + mob.name);
				}
			}
		}
	}
	if (!quiet) outSpace();	
	if (!quiet) outLine('You killed ' + mob.name);
	if (!quiet) outSpace();
	var diff = mob.attack - attack + mob.defense - defense + mob.armor - armor;
	var extradamage;
	if (diff < -80) {
		extradamage = 0;
	} else if (diff < -60) {
		extradamage = 2;
	} else if (diff < -40) {
		extradamage = 6;
	} else if (diff < -30) {
		extradamage = 8;
	} else if (diff < -20) {
		extradamage = 10;
	} else if (diff < -10) {
		extradamage = 14;
	} else if (diff < 0) {
		extradamage = 16;
	} else if (diff < 10) {
		extradamage = 20;
	} else if (diff < 20) {
		extradamage = 28;
	} else if (diff < 30) {
		extradamage = 34;
	} else if (diff < 40) {
		extradamage = 40;
	} else {
		extradamage = diff;
	} 
	extradamage = randomInteger(0, Math.max(0, Math.min(d.hp - 1, Math.floor(extradamage * DIFFICULTYMULTIPLIEREXTRA) - (starthp - d.hp))));
	if (extradamage) {
		if (!quiet) outLine('In a final hit, ' + mob.name + ' caused you damage for ' + extradamage + ' hit point' + s(extradamage));
		playerGetsDamage(extradamage);
	}
	return true;
}