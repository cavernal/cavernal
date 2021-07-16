function generateWorld() {

generateItems();
generateMobs();

rooms = [];

/**********************************************************/
/** DEPTH 1 ***********************************************/
/**********************************************************/
rooms.push(<Room>{
	depth: 1, fromStep: 0, toStep: 7, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(2, 'Lizard'),
		mobChance(1, 'Bug', true),
	],
});

rooms.push(<Room>{
	depth: 1, fromStep: 8, toStep: 8, chance: 1, minDoors: 3, maxDoors: 3,
	doors: [
		mobChance(1, 'Lizard', true),
		mobChance(1, 'Bug', true),
		itemChance(1, 'Water', 1, 'well', true),
	],
});

rooms.push(<Room>{
	depth: 1, fromStep: 9, toStep: 10, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(2, 'Lizard'),
		mobChance(1, 'Bug', true),
	],
});

rooms.push(<Room>{
	depth: 1, fromStep: 9, toStep: 15, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(8, 'Bug'),
		mobChance(7, 'Frog'),
	],
});
//+unique
rooms.push(<Room>{
	depth: 1, fromStep: 9, toStep: 15, chance: 1, minDoors: 3, maxDoors: 3,
	doors: [
		mobChance(8, 'Bug'),
		mobChance(7, 'Frog'),
		itemChance(1, 'Bread', 3, 'chest', true, true),
		itemChance(1, 'Water', 1, 'well', true, true),
	],
	uniqueKey: '1 the early well',
});

rooms.push(<Room>{
	depth: 1, fromStep: 16, toStep: 25, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(2, 'Bug'),
		mobChance(4, 'Frog'),
		mobChance(1, 'Crab', true),
	],
});

rooms.push(<Room>{
	depth: 1, fromStep: 20, toStep: 35, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Bug'),
		mobChance(8, 'Frog'),
		mobChance(6, 'Crab', true),
		mobChance(1, 'Ice spider', true),
	],
});

rooms.push(<Room>{
	depth: 1, fromStep: 35, toStep: 41, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(1, 'Bug', true),
		mobChance(1, 'Frog', true, true),
		mobChance(15, 'Crab'),
		mobChance(20, 'Ice spider'),
		mobChance(15, 'Kobold', true),
		mobChance(2, 'Skeleton', true),
	],
});

rooms.push(<Room>{
	depth: 1, fromStep: 42, toStep: 57, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(1, 'Bug', true),
		mobChance(1, 'Frog', true),
		mobChance(1, 'Crab', true, true),
		mobChance(15, 'Ice spider'),
		mobChance(15, 'Kobold', true),
		mobChance(5, 'Skeleton', true),
	],
});

rooms.push(<Room>{
	depth: 1, fromStep: 53, toStep: 63, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(8, 'Ice spider', true, true),
		mobChance(9, 'Kobold'),
		mobChance(7, 'Skeleton', true),
	],
});
//+unique
rooms.push(<Room>{
	depth: 1, fromStep: 53, toStep: 63, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(8, 'Ice spider', true, true),
		mobChance(9, 'Kobold'),
		mobChance(7, 'Skeleton', true),
		itemChance(1, 'Water', 3, 'well', true, true),
	],
	uniqueKey: '1 the large well',
});

rooms.push(<Room>{
	depth: 1, fromStep: 60, toStep: 72, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(3, 'Kobold'),
		mobChance(12, 'Skeleton'),
	],
});

rooms.push(<Room>{
	depth: 1, fromStep: 70, toStep: 80, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(3, 'Kobold'),
		mobChance(12, 'Skeleton', true),
		mobChance(7, 'Sand imp'),
	],
});

rooms.push(<Room>{
	depth: 1, fromStep: 80, toStep: 85, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(7, 'Skeleton', true),
		mobChance(7, 'Sand imp'),
		mobChance(7, 'Flying imp'),
	],
});

rooms.push(<Room>{
	depth: 1, fromStep: 86, toStep: 98, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(6, 'Skeleton'),
		mobChance(4, 'Sand imp', true),
		mobChance(7, 'Flying imp'),
		mobChance(7, 'Swamp imp'),
	],
});

rooms.push(<Room>{
	depth: 1, fromStep: 99, toStep: 99, chance: 1, minDoors: 1, maxDoors: 1,
	doors: [
		mobChance(1, 'Ghoul', true),
	],
});

rooms.push(<Room>{
	depth: 1, fromStep: 100, toStep: 100, chance: 1, minDoors: 1, maxDoors: 1,
	doors: [nextDepth()],
});

/**********************************************************/
/** DEPTH 2 ***********************************************/
/**********************************************************/
rooms.push(<Room>{
	depth: 2, fromStep: 0, toStep: 8, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(2, 'Giant snail'),
		mobChance(1, 'Giant slug', true),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 9, toStep: 15, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(2, 'Giant snail'),
		mobChance(1, 'Giant slug', true),
		mobChance(6, 'Swamp spider', true),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 14, toStep: 22, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(1, 'Giant snail'),
		mobChance(1, 'Giant slug'),
		mobChance(8, 'Swamp spider'),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 22, toStep: 29, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(1, 'Giant slug'),
		mobChance(8, 'Swamp spider'),
		mobChance(4, 'Poisonous toad', true),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 29, toStep: 38, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(10, 'Swamp spider'),
		mobChance(4, 'Poisonous toad', true),
		mobChance(4, 'Naga', true),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 39, toStep: 42, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(10, 'Swamp spider'),
		mobChance(4, 'Naga', true, true),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 43, toStep: 46, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Swamp spider'),
		mobChance(4, 'Naga'),
		mobChance(4, 'Hermit', true),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 47, toStep: 52, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Swamp spider'),
		mobChance(4, 'Naga'),
		mobChance(4, 'Hermit'),
		mobChance(1, 'Lurker'),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 53, toStep: 59, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Naga'),
		mobChance(4, 'Hermit'),
		mobChance(1, 'Lurker'),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 60, toStep: 65, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Naga'),
		mobChance(4, 'Hermit'),
		mobChance(4, 'Lurker'),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 66, toStep: 70, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Hermit'),
		mobChance(4, 'Lurker'),
		mobChance(4, 'Goblin guard', true),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 70, toStep: 74, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Hermit'),
		mobChance(4, 'Lurker'),
		mobChance(4, 'Goblin guard', true),
		mobChance(4, 'Goblin mage', true),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 74, toStep: 80, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Lurker'),
		mobChance(4, 'Goblin guard'),
		mobChance(4, 'Goblin mage'),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 81, toStep: 85, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Goblin guard'),
		mobChance(4, 'Goblin mage'),
		mobChance(4, 'Lizardman', true, true),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 86, toStep: 90, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Goblin mage'),
		mobChance(4, 'Lizardman'),
		mobChance(4, 'Spike troll', true, true),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 91, toStep: 95, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Lizardman'),
		mobChance(4, 'Spike troll'),
		mobChance(4, 'Cultist', true, true),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 96, toStep: 98, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(1, 'Lizardman'),
		mobChance(4, 'Spike troll'),
		mobChance(4, 'Cultist'),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 96, toStep: 98, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(1, 'Lizardman'),
		mobChance(4, 'Spike troll'),
		mobChance(4, 'Cultist'),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 99, toStep: 99, chance: 1, minDoors: 1, maxDoors: 1,
	doors: [
		mobChance(1, 'Lich', true),
	],
});

rooms.push(<Room>{
	depth: 2, fromStep: 100, toStep: 100, chance: 1, minDoors: 1, maxDoors: 1,
	doors: [nextDepth()],
});





/**********************************************************/
/** DEPTH 3 ***********************************************/
/**********************************************************/
rooms.push(<Room>{
	depth: 3, fromStep: 0, toStep: 8, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(2, 'Giant snake'),
		mobChance(1, 'Giant scorpion', true),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 9, toStep: 15, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(2, 'Giant snake'),
		mobChance(1, 'Giant scorpion', true),
		mobChance(6, 'Mutant spider', true),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 14, toStep: 22, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(1, 'Giant snake'),
		mobChance(1, 'Giant scorpion'),
		mobChance(8, 'Mutant spider'),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 22, toStep: 29, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(1, 'Giant scorpion'),
		mobChance(8, 'Mutant spider'),
		mobChance(4, 'Mercenary', true),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 29, toStep: 38, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(10, 'Mutant spider'),
		mobChance(4, 'Mercenary', true),
		mobChance(4, 'Naga', true),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 39, toStep: 42, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(10, 'Mutant spider'),
		mobChance(4, 'Barbarian', true, true),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 43, toStep: 46, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Mutant spider'),
		mobChance(4, 'Barbarian'),
		mobChance(4, 'Mage', true),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 47, toStep: 52, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Mutant spider'),
		mobChance(4, 'Barbarian'),
		mobChance(4, 'Mage'),
		mobChance(1, 'Lurker'),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 53, toStep: 59, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Barbarian'),
		mobChance(4, 'Mage'),
		mobChance(1, 'Lurker'),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 60, toStep: 65, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Barbarian'),
		mobChance(4, 'Mage'),
		mobChance(4, 'Minion'),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 66, toStep: 70, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Mage'),
		mobChance(4, 'Lurker'),
		mobChance(4, 'Great imp', true),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 70, toStep: 74, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Mage'),
		mobChance(4, 'Minion'),
		mobChance(4, 'Great imp', true),
		mobChance(4, 'Swarmer', true),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 74, toStep: 80, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Minion'),
		mobChance(4, 'Great imp'),
		mobChance(4, 'Swarmer'),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 81, toStep: 85, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Great imp'),
		mobChance(4, 'Swarmer'),
		mobChance(4, 'Howler', true, true),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 86, toStep: 90, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Swarmer'),
		mobChance(4, 'Lizardman'),
		mobChance(4, 'Howler', true, true),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 91, toStep: 95, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Howler'),
		mobChance(4, 'Orc warrior'),
		mobChance(4, 'Orc shaman'),
		mobChance(4, 'Cyclops', true, true),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 96, toStep: 98, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Orc warrior'),
		mobChance(4, 'Orc shaman'),
		mobChance(4, 'Troll', true, true),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 96, toStep: 98, chance: 1, minDoors: 2, maxDoors: 3,
	doors: [
		mobChance(4, 'Orc shaman'),
		mobChance(4, 'Cyclops', true, true),
		mobChance(4, 'Troll', true, true),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 99, toStep: 99, chance: 1, minDoors: 1, maxDoors: 1,
	doors: [
		mobChance(1, 'Abomination', true),
	],
});

rooms.push(<Room>{
	depth: 3, fromStep: 100, toStep: 100, chance: 1, minDoors: 1, maxDoors: 1,
	doors: [nextDepth()],
});

/**********************************************************/
/** DEPTH 4 ***********************************************/
/**********************************************************/
rooms.push(<Room>{
	depth: 4, fromStep: 0, toStep: 4, chance: 1, minDoors: 3, maxDoors: 4,
	doors: [
		mobChance(2, 'Golem'),
		mobChance(1, 'Stone grunt', true),
	],
});

rooms.push(<Room>{
	depth: 4, fromStep: 5, toStep: 8, chance: 1, minDoors: 3, maxDoors: 4,
	doors: [
		mobChance(4, 'Golem'),
		mobChance(1, 'Stone grunt', true),
		mobChance(1, 'Forest keeper', true),
	],
});

rooms.push(<Room>{
	depth: 4, fromStep: 9, toStep: 13, chance: 1, minDoors: 3, maxDoors: 4,
	doors: [
		mobChance(4, 'Golem'),
		mobChance(4, 'Stone grunt'),
		mobChance(4, 'Forest keeper'),
	],
});

rooms.push(<Room>{
	depth: 4, fromStep: 14, toStep: 14, chance: 1, minDoors: 1, maxDoors: 1,
	doors: [
		mobChance(1, 'Metal bug'),
	],
});

rooms.push(<Room>{
	depth: 4, fromStep: 15, toStep: 25, chance: 1, minDoors: 3, maxDoors: 4,
	doors: [
		mobChance(7, 'Metal bug'),
		mobChance(1, 'Predator'),
		mobChance(1, 'Bot'),
	],
});

rooms.push(<Room>{
	depth: 4, fromStep: 26, toStep: 30, chance: 1, minDoors: 3, maxDoors: 4,
	doors: [
		mobChance(1, 'Predator'),
		mobChance(1, 'Bot'),
	],
});

rooms.push(<Room>{
	depth: 4, fromStep: 31, toStep: 34, chance: 1, minDoors: 3, maxDoors: 4,
	doors: [
		mobChance(7, 'Devourer'),
		mobChance(1, 'Beholder'),
	],
});

rooms.push(<Room>{
	depth: 4, fromStep: 35, toStep: 38, chance: 1, minDoors: 3, maxDoors: 4,
	doors: [
		mobChance(7, 'Devourer'),
		mobChance(7, 'Beholder'),
	],
});

rooms.push(<Room>{
	depth: 4, fromStep: 39, toStep: 42, chance: 1, minDoors: 3, maxDoors: 4,
	doors: [
		mobChance(7, 'Beholder'),
		mobChance(7, 'Shredder'),
	],
});

rooms.push(<Room>{
	depth: 4, fromStep: 43, toStep: 45, chance: 1, minDoors: 3, maxDoors: 4,
	doors: [
		mobChance(6, 'Shredder'),
		mobChance(2, 'Phantom'),
	],
});

rooms.push(<Room>{
	depth: 4, fromStep: 46, toStep: 47, chance: 1, minDoors: 3, maxDoors: 4,
	doors: [
		mobChance(2, 'Shredder'),
		mobChance(6, 'Phantom'),
	],
});

rooms.push(<Room>{
	depth: 4, fromStep: 48, toStep: 48, chance: 1, minDoors: 3, maxDoors: 4,
	doors: [
		mobChance(1, 'Phantom'),
	],
});

rooms.push(<Room>{
	depth: 4, fromStep: 49, toStep: 49, chance: 1, minDoors: 1, maxDoors: 1,
	doors: [
		mobChance(1, 'Destroyer'),
	],
});

rooms.push(<Room>{
	depth: 4, fromStep: 50, toStep: 50, chance: 1, minDoors: 1, maxDoors: 1,
	doors: [nextDepth()],
});

/**********************************************************/
/** DEPTH 5 ***********************************************/
/**********************************************************/
rooms.push(<Room>{
	depth: 5, fromStep: 0, toStep: 0, chance: 1, minDoors: 1, maxDoors: 1,
	doors: [
		mobChance(1, 'Demon skeleton'),
	],
});

rooms.push(<Room>{
	depth: 5, fromStep: 1, toStep: 1, chance: 1, minDoors: 1, maxDoors: 1,
	doors: [
		mobChance(1, 'Demon soldier'),
	],
});

rooms.push(<Room>{
	depth: 5, fromStep: 2, toStep: 2, chance: 1, minDoors: 1, maxDoors: 1,
	doors: [
		mobChance(1, 'Magma demon'),
	],
});

rooms.push(<Room>{
	depth: 5, fromStep: 3, toStep: 3, chance: 1, minDoors: 1, maxDoors: 1,
	doors: [
		mobChance(1, 'Demon overlord'),
	],
});

rooms.push(<Room>{
	depth: 5, fromStep: 4, toStep: 4, chance: 1, minDoors: 1, maxDoors: 1,
	doors: [
		mobChance(1, 'Curse'),
	],
});

rooms.push(<Room>{
	depth: 5, fromStep: 5, toStep: 5, chance: 1, minDoors: 1, maxDoors: 1,
	doors: [transcend()],
});

}