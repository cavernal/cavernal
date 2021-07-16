function generateMobs() {

mobs = {};

var WATERFACTOR = 0.05;
var FOODFACTOR = 0.21;
var POTIONFACTOR = 0.2;

registerMob(<Mob>{
	name: 'Lizard',
	image: 'lizard',
	description: 'It has pointy claws but is quite slow', 
	experience: 1,
	hp: 6,
	attack: 3,
	speed: 5,
	defense: 4,
	armor: 2,
	loot: [
		lootItemProbability(1, 'Copper coin', 1, 3),
		lootItemProbability(1/6*FOODFACTOR, 'Meat', 1, 2),
	],
});

registerMob(<Mob>{
	name: 'Bug',
	image: 'bug',
	description: 'It has shell, antennae, wings, and claws. It is large, slimy, and fast', 
	experience: 2,
	hp: 6,
	attack: 1,
	speed: 20,
	defense: 5,
	armor: 3,
	loot: [
		lootItemProbability(1, 'Copper coin', 1, 2),
		lootItemProbability(1/20, 'Stone coin', 4, 5),
		lootItemProbability(1/5*FOODFACTOR, 'Cheese'),
		lootSelectorProbability(0.7, [
			selectorChance(4*FOODFACTOR, 'Bread knife'),
			selectorChance(2, 'Ragged shirt'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Frog',
	image: 'frog',
	description: 'It is large, slimy, and has a couple of odd-looking fangs', 
	experience: 6,
	hp: 8,
	attack: 3,
	speed: 10,
	defense: 12,
	armor: 2,
	loot: [
		lootItemProbability(1/2, 'Copper coin', 2, 4),
		lootItemProbability(1/10, 'Copper coin', 2, 4),
		lootItemProbability(1/15, 'Worm'),
		lootItemProbability(1/4*FOODFACTOR, 'Meat', 1, 2),
		lootItemProbability(1/4*WATERFACTOR, 'Water'),
		lootItemProbability(1/12, 'Daisy flower'),
		lootItemProbability(1/12, 'Frog\'s fang'),
		lootItemProbability(1/20, 'Frog\'s eye'),
		lootSelectorProbability(0.7, [
			selectorChance(4, 'Bone knife'),
			selectorChance(2, 'Basic helmet'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Crab',
	image: 'crab',
	description: 'It has a hard exoskeleton and a pair of claws', 
	experience: 14,
	hp: 12,
	attack: 3,
	speed: 10,
	defense: 2,
	armor: 4,
	loot: [
		lootItemProbability(1, 'Copper coin', 1, 9),
		lootItemProbability(1/3, 'Copper coin', 1, 15),
		lootItemProbability(1/5*FOODFACTOR, 'Meat'),
		lootItemProbability(1/4*WATERFACTOR, 'Water'),
		lootSelectorProbability(0.7, [
			selectorChance(4, 'Club'),
			selectorChance(1, 'Reinforced boots'),
			selectorChance(2, 'Basic helmet'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Ice spider',
	image: 'icespider',
	description: 'It has eight long cold legs and eyes infused with cold', 
	experience: 18,
	hp: 12,
	attack: 3,
	speed: 16,
	defense: 2,
	armor: 5,
	loot: [
		lootItemProbability(1, 'Copper coin', 1, 9),
		lootItemProbability(1/3, 'Stone coin', 1, 15),
		lootSelectorProbability(0.7, [
			selectorChance(4, 'Improvised knife'),
			selectorChance(1, 'Dagger'),
			selectorChance(2, 'Basic helmet'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Kobold',
	image: 'kobold',
	description: 'It has thick skin and horns', 
	experience: 25,
	hp: 45,
	attack: 8,
	speed: 12,
	defense: 8,
	armor: 7,
	loot: [
		lootItemProbability(1, 'Copper coin', 1, 5),
		lootItemProbability(1/3, 'Copper coin', 2, 8),
		lootItemProbability(1/10, 'Copper coin', 1, 1),
		lootItemProbability(1/5, 'Small bag of coins', 1, 2),
		lootItemProbability(1/2, 'Stone'),
		lootItemProbability(1/10, 'Stone', 3, 5),
		lootItemProbability(1/4*WATERFACTOR, 'Water'),
		lootItemProbability(1/2*FOODFACTOR, 'Meat'),
		lootItemProbability(1/3*FOODFACTOR, 'Bread', 1, 2),
		lootItemProbability(1/5*FOODFACTOR, 'Apple', 1, 2),
		lootItemProbability(1/6*FOODFACTOR, 'Banana', 2, 3),
		lootItemProbability(1/7, 'Kobold\'s heart'),
		lootItemProbability(1/10, 'Sewing kit'),
		lootItemProbability(1/7, 'Kobold\'s eye', 1),
		lootItemProbability(1/16, 'Kobold\'s eye', 1),
		lootItemProbability(1/15, 'Sandstone'),
		lootSelectorProbability(0.8, [
			selectorChance(8, 'Wooden pickaxe'),
			selectorChance(12, 'Small pickaxe'),
			selectorChance(3, 'Reinforced club'),
			selectorChance(1, 'Pickaxe'),
		]),
		lootSelectorProbability(0.9, [
			selectorChance(8, 'Ragged shirt'),
			selectorChance(2, 'Barbarian armor'),
		]),
		lootSelectorProbability(0.3, [
			selectorChance(6, 'Ragged pants'),
			selectorChance(1, 'Hard leather pants'),
		]),
		lootItemProbability(1/14, 'Winter boots', 1),
	],
});

registerMob(<Mob>{
	name: 'Skeleton',
	image: 'skeleton',
	description: 'It squeaks when it moves', 
	experience: 55,
	hp: 34,
	attack: 9,
	speed: 14,
	defense: 6,
	armor: 5,
	loot: [
		lootItemProbability(1, 'Copper coin', 5, 12),
		lootItemProbability(1/5, 'Copper coin', 10, 20),
		lootItemProbability(1/5, 'Small bag of coins'),
		lootItemProbability(1, 'Bone', 1, 2),
		lootItemProbability(1/5, 'Bone', 2, 3),
		lootItemProbability(1/4, 'Spine'),
		lootItemProbability(1/4, 'Skull'),
		lootSelectorProbability(0.95, [
			selectorChance(3, 'Dagger'),
			selectorChance(4, 'Guarded dagger'),
			selectorChance(2, 'Short sword'),
			selectorChance(2, 'Saber'),
			selectorChance(2, 'Butcher\'s cleaver'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(2, 'Ragged shirt'),
			selectorChance(2, 'Barbarian armor'),
			selectorChance(1, 'Studded armor'),
			selectorChance(4, 'Warrior vest'),
			selectorChance(2, 'Leather armor'),
			selectorChance(1, 'Leather vest'),
		]),
		lootSelectorProbability(0.5, [
			selectorChance(6, 'Leather boots'),
			selectorChance(8, 'Adjusted boots'),
			selectorChance(3, 'Heavy leather boots'),
		]),
		lootSelectorProbability(0.3, [
			selectorChance(8, 'Basic helmet'),
			selectorChance(5, 'Leather helmet'),
			selectorChance(1, 'Reinforced helmet'),
		]),
		lootSelectorProbability(0.4, [
			selectorChance(8, 'Wooden shield'),
			selectorChance(5, 'Reinforced shield'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Sand imp',
	image: 'sandimp',
	description: 'It is a small, ferocious devil', 
	experience: 40,
	hp: 44,
	attack: 11,
	speed: 12,
	defense: 4,
	armor: 3,
	loot: [
		lootItemProbability(1, 'Copper coin', 1, 8),
		lootItemProbability(1/2, 'Sand mushroom'),
		lootItemProbability(1/20, 'Sand mushroom', 1, 3),
		lootItemProbability(1/5, 'Sandstone'),
		lootItemProbability(1/12, 'Flint'),
		lootItemProbability(1/32, 'Amber'),
		lootItemProbability(1/9, 'Pointy shoes'),
		lootItemProbability(1/9, 'Round shield'),
	],
});

registerMob(<Mob>{
	name: 'Flying imp',
	image: 'flyingimp',
	description: 'It is a flying ferocious devil', 
	experience: 65,
	hp: 56,
	attack: 13,
	speed: 16,
	defense: 5,
	armor: 5,
	loot: [
		lootItemProbability(1, 'Copper coin', 4, 12),
		lootItemProbability(1/4, 'Copper coin', 1, 17),
		lootItemProbability(1/6, 'Studded pants'),
		lootItemProbability(1/4, 'Flying imp\'s wing'),
		lootItemProbability(1/25, 'Crystal knife'),
		lootSelectorProbability(0.7, [
			selectorChance(5, 'Large dagger'),
			selectorChance(3, 'Scimitar'),
		]),
		lootSelectorProbability(0.9, [
			selectorChance(5, 'Pointy shoes'),
			selectorChance(3, 'Studded boots'),
		]),
		lootSelectorProbability(0.5, [
			selectorChance(8, 'Wooden shield'),
			selectorChance(5, 'Round shield'),
			selectorChance(4, 'Large wooden shield'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Swamp imp',
	image: 'swampimp',
	description: 'It is a frightening ferocious devil', 
	experience: 80,
	hp: 60,
	attack: 15,
	speed: 10,
	defense: 3,
	armor: 7,
	loot: [
		lootItemProbability(1, 'Copper coin', 4, 12),
		lootItemProbability(1/4, 'Copper coin', 1, 17),
		lootItemProbability(1/4, 'Studded pants'),
		lootItemProbability(1/7, 'Poison ivy'),
		lootItemProbability(1/14, 'Swamp slug'),
		lootItemProbability(1/6, 'Explosive artifact'),
		lootItemProbability(1/3, 'Red berries', 1, 3),
		lootSelectorProbability(0.7, [
			selectorChance(5, 'Sickle'),
			selectorChance(3, 'Spiked club'),
		]),
		lootItemProbability(0.9, 'Pointy shoes'),
		lootSelectorProbability(0.5, [
			selectorChance(5, 'Round shield'),
			selectorChance(3, 'Square shield'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Ghoul',
	image: 'ghoul',
	description: 'You feel the presence of this creature even through the walls', 
	experience: 500,
	hp: 130,
	attack: 18,
	speed: 6,
	defense: 10,
	armor: 10,
	loot: [
		lootItemProbability(1, 'Garbage bag'), // only dropped by the Ghoul
		lootItemProbability(1, 'Bronze coin'),
		lootItemProbability(1/2, 'Bronze coin', 1, 5),
		lootItemProbability(1, 'Copper coin', 3, 3),
		lootItemProbability(1/2, 'Copper coin', 3, 24),
		lootItemProbability(1, 'Stone coin', 1, 3),
		lootItemProbability(1/4, 'Ghoul\'s eye'),
		lootItemProbability(1, 'Ghoul\'s heart'), // key
		lootItemProbability(1/7, 'Purpla leave'),
		lootItemProbability(1/3, 'Healing scroll'),
		lootItemProbability(1, 'Healing potion', 2, 2),
		lootItemProbability(1/6, 'Healing scroll', 2, 2),
		lootItemProbability(1/2, 'Explosive flask'),
		lootItemProbability(1/7, 'Explosive flask', 1, 2),
		lootItemProbability(1, 'Hit point potion'),
		lootItemProbability(1, 'Magic hit scroll', 1, 1),
		lootItemProbability(1/2, 'Magic hit scroll', 2, 2),
		lootSelectorProbability(1, [
			selectorChance(2, 'Strength potion'),
			selectorChance(2, 'Dexterity potion'),
			selectorChance(2, 'Agility potion'),
		]),
		lootSelectorProbability(1, [
			selectorChance(2, 'Constitution potion'),
			selectorChance(2, 'Vitality potion'),
			selectorChance(2, 'Intelligence potion'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(3, 'Scimitar'),
			selectorChance(5, 'Sickle'),
		]),
		lootSelectorProbability(1, [
			selectorChance(5, 'Magic shield scroll', 1, 2),
			selectorChance(5, 'Fireball scroll', 1, 2),
		]),
		lootItemProbability(0.7, 'Scale half armor'),
		lootSelectorProbability(1, [
			selectorChance(3, 'Mask of redemption'),
			selectorChance(3, 'Horn of satiety'),
			selectorChance(3, 'Box of fate'),
			selectorChance(3, 'Chalice of infinity'),
			selectorChance(3, 'Idol of chaos'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Giant snail',
	image: 'giantsnail',
	description: 'It looks hungry', 
	experience: 45,
	hp: 50,
	attack: 13,
	speed: 6,
	defense: 3,
	armor: 8,
	loot: [
		lootItemProbability(1, 'Copper coin', 1, 3),
		lootItemProbability(1/2, 'Copper coin', 3, 13),
		lootItemProbability(1/4, 'Throwing star', 1, 2),
		lootItemProbability(1/7*FOODFACTOR, 'Ginger'),
		lootItemProbability(1/12, 'Giant snail\'s eye'),
		lootItemProbability(1/12, 'Giant snail\'s shell'),
		lootItemProbability(1/4, 'Slime'),
		lootItemProbability(1/5*WATERFACTOR, 'Water'),
	],
});

registerMob(<Mob>{
	name: 'Giant slug',
	image: 'giantslug',
	description: 'It moves sluggishly and makes slimy noises', 
	experience: 60,
	hp: 60,
	attack: 14,
	speed: 6,
	defense: 5,
	armor: 6,
	loot: [
		lootItemProbability(1, 'Copper coin', 5, 7),
		lootItemProbability(1/2, 'Copper coin', 6, 20),
		lootItemProbability(1/4*FOODFACTOR, 'Pear', 1, 2),
		lootItemProbability(1/7, 'Winter pants'),
		lootItemProbability(1/7, 'Improved helmet'),
		lootItemProbability(1/6*WATERFACTOR, 'Water'),
		lootItemProbability(1/3, 'Slime'),
	],
});

registerMob(<Mob>{
	name: 'Swamp spider',
	image: 'swampspider',
	description: 'It has large claws at the tip of the legs', 
	experience: 80,
	hp: 65,
	attack: 15,
	speed: 8,
	defense: 6,
	armor: 7,
	loot: [
		lootItemProbability(1, 'Copper coin', 5, 7),
		lootItemProbability(1/2, 'Copper coin', 6, 40),
		lootItemProbability(1/6, 'Safety boots'),
		lootItemProbability(1/4, 'Swamp vine'),
		lootSelectorProbability(1/4, [
			selectorChance(3, 'Simple mace'),
			selectorChance(1, 'Barbarian dagger'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Poisonous toad',
	image: 'poisonoustoad',
	description: 'It makes low-pitched noises due to its size', 
	experience: 90,
	hp: 80,
	attack: 15,
	speed: 9,
	defense: 7,
	armor: 9,
	loot: [
		lootItemProbability(1, 'Copper coin', 4, 12),
		lootItemProbability(1/2, 'Copper coin', 9, 46),
		lootItemProbability(1/3*FOODFACTOR, 'Tomato', 1, 2),
		lootItemProbability(1/3*FOODFACTOR, 'Peach', 1, 2),
		lootItemProbability(1/12, 'Starfish'),
		lootItemProbability(1/12, 'Warrior boots'),
		lootItemProbability(1/6*WATERFACTOR, 'Water'),
		lootItemProbability(1/9, 'Toad\'s tongue'),
		lootSelectorProbability(1/3, [
			selectorChance(3, 'Soldier helmet'),
			selectorChance(1, 'Light helmet'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Naga',
	image: 'naga',
	description: 'It is sort of a lizard with arms', 
	experience: 220,
	hp: 90,
	attack: 16,
	speed: 12,
	defense: 8,
	armor: 11,
	loot: [
		lootItemProbability(1, 'Copper coin', 4, 12),
		lootItemProbability(1/2, 'Copper coin', 9, 46),
		lootItemProbability(1/3, 'Bronze coin', 1, 2),
		lootItemProbability(1/7*FOODFACTOR, 'Garlic'),
		lootItemProbability(1/12, 'Bomb'),
		lootItemProbability(1/12, 'Naga\'s finger'),
		lootItemProbability(1/22, 'Solid haze'),
		lootSelectorProbability(0.4, [
			selectorChance(5, 'Warrior boots'),
			selectorChance(1, 'Plated boots'),
		]),
		lootSelectorProbability(0.6, [
			selectorChance(4, 'One-piece armor'),
			selectorChance(1, 'Half-plated armor'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(12, 'Gold-rimmed shield'),
			selectorChance(4, 'Formation shield'),
			selectorChance(1, 'Shell shield'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Hermit',
	image: 'hermit',
	description: 'It seems it has adapted to living in the cave', 
	experience: 290,
	hp: 140,
	attack: 15,
	speed: 13,
	defense: 4,
	armor: 10,
	loot: [
		lootItemProbability(1, 'Copper coin', 4, 56),
		lootItemProbability(1/2, 'Copper coin', 5, 52),
		lootItemProbability(1/3, 'Bronze coin', 1, 1),
		lootItemProbability(1/5, 'Bronze coin', 1, 5),
		lootItemProbability(1/10*FOODFACTOR, 'Bread'),
		lootItemProbability(1/3, 'Leather hat'),
		lootItemProbability(1/3, 'Leather armor'),
		lootItemProbability(1/3, 'Leather pants'),
		lootItemProbability(1/3, 'Leather boots'),
		lootItemProbability(1/19, 'Hermit\'s brain'),
		lootItemProbability(1/9, 'Hermit\'s skull'),
		lootItemProbability(1*WATERFACTOR, 'Water'),
	],
});

registerMob(<Mob>{
	name: 'Lurker',
	image: 'lurker',
	description: 'It moves around pushing itself with the arms', 
	experience: 340,
	hp: 150,
	attack: 19,
	speed: 7,
	defense: 11,
	armor: 12,
	loot: [
			lootItemProbability(1, 'Copper coin', 4, 12),
		lootItemProbability(1/2, 'Copper coin', 9, 46),
		lootItemProbability(1/3, 'Bronze coin', 1, 2),
		lootItemProbability(1/6, 'Lurker\'s claw', 1, 2),
		lootItemProbability(1/9, 'Lurker\'s skull'),
		lootSelectorProbability(1/6, [
			selectorChance(6, 'Soldier helmet'),
			selectorChance(3, 'Light helmet'),
			selectorChance(1, 'Horned helmet'),
		]),
		lootSelectorProbability(1/4, [
			selectorChance(6, 'Winter pants'),
			selectorChance(2, 'Reinforced pants'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Goblin guard',
	image: 'goblinguard',
	description: 'It is known to be highly trained in melee combat', 
	experience: 420,
	hp: 60,
	attack: 23,
	speed: 10,
	defense: 12,
	armor: 13,
	loot: [
		lootItemProbability(1, 'Copper coin', 1, 12),
		lootItemProbability(1, 'Bronze coin', 1, 2),
		lootItemProbability(1/2, 'Bronze coin', 1, 2),
		lootItemProbability(1/10, 'Goblin\'s liver'),
		lootItemProbability(1/30, 'Goblin\'s liver'),
		lootItemProbability(1/12, 'Goblin\'s heart'),
		lootItemProbability(1/9, 'Goblin\'s skull'),
		lootSelectorProbability(0.6, [
			selectorChance(6, 'Warrior boots'),
			selectorChance(3, 'Plated boots'),
		]),
		lootSelectorProbability(0.6, [
			selectorChance(9, 'Reinforced pants'),
			selectorChance(3, 'Half-plated pants'),
			selectorChance(1, 'Full-plated pants'),
			selectorChance(1, 'Rogue pants'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(8, 'Studded armor'),
			selectorChance(12, 'One-piece armor'),
			selectorChance(8, 'Half-plated armor'),
			selectorChance(5, 'Warrior armor'),
			selectorChance(1, 'Guardian armor'),
		]),
		lootSelectorProbability(0.9, [
			selectorChance(9, 'Spiked club'),
			selectorChance(9, 'Simple mace'),
			selectorChance(5, 'Barbarian dagger'),
			selectorChance(5, 'Barbarian cutlass'),
			selectorChance(1, 'Berserker hatchet'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(9, 'Soldier helmet'),
			selectorChance(3, 'Light helmet'),
			selectorChance(1, 'Rogue hood'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Goblin mage',
	image: 'goblinmage',
	description: 'It is known to be highly trained in magic', 
	experience: 470,
	hp: 20,
	attack: 28,
	speed: 14,
	defense: 1,
	armor: 5,
	loot: [
		lootItemProbability(1, 'Copper coin', 1, 12),
		lootItemProbability(1, 'Bronze coin', 1, 2),
		lootItemProbability(1/2, 'Bronze coin', 1, 2),
		lootItemProbability(1/2, 'Explosive flask'),
		lootItemProbability(1/6, 'Bomb'),
		lootItemProbability(1/10, 'Goblin\'s liver'),
		lootItemProbability(1/30, 'Goblin\'s liver'),
		lootItemProbability(1/12, 'Goblin\'s heart'),
		lootItemProbability(1/9, 'Goblin\'s skull'),
		lootItemProbability(1/14, 'Heavy water'),
		lootItemProbability(1/29, 'Bag of gems'),
		lootItemProbability(1/15, 'Healing scroll', 1, 3),
		lootItemProbability(1, 'Magic hit scroll', 5, 5),
		lootSelectorProbability(0.9, [
			selectorChance(9, 'Pointy shoes'),
			selectorChance(1, 'Suede shoes'),
		]),
		lootSelectorProbability(0.6, [
			selectorChance(9, 'Improved helmet'),
			selectorChance(3, 'Wizard hat'),
			selectorChance(1, 'Suede hood'),
		]),
		lootSelectorProbability(0.4, [
			selectorChance(9, 'Suede robe'),
			selectorChance(3, 'Wizard robe'),
		]),
		lootItemProbability(1/2, 'Suede pants'),
		lootSelectorProbability(0.9, [
			selectorChance(9, 'Fireball scroll', 1, 2),
			selectorChance(5, 'Thunderbolt scroll', 1, 2),
			selectorChance(3, 'Spectral hit scroll', 1, 2),
		]),
		lootSelectorProbability(0.2*POTIONFACTOR, [
			selectorChance(9, 'Hit point potion'),
			selectorChance(5, 'Intelligence potion'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Lizardman',
	image: 'lizardman',
	description: 'It looks large, strong, and fast', 
	experience: 600,
	hp: 90,
	attack: 17,
	speed: 20,
	defense: 10,
	armor: 10,
	loot: [
		lootItemProbability(1, 'Copper coin', 13, 75),
		lootItemProbability(1, 'Bronze coin', 1, 3),
		lootItemProbability(1/2, 'Bronze coin', 1, 3),
		lootItemProbability(1/14, 'Larvae'),
		lootItemProbability(1/14, 'Shadow mushroom'),
		lootSelectorProbability(0.9, [
			selectorChance(12, 'Plated boots'),
			selectorChance(6, 'Heavy-duty boots'),
			selectorChance(1, 'Strenghtened boots'),
		]),
		lootSelectorProbability(0.6, [
			selectorChance(20, 'Formation shield'),
			selectorChance(12, 'Army shield'),
			selectorChance(1, 'Buckler'),
		]),
		lootSelectorProbability(0.4, [
			selectorChance(9, 'Light helmet'),
			selectorChance(3, 'Warrior helmet'),
			selectorChance(1, 'Chain mail helmet'),
		]),
		lootSelectorProbability(0.6, [
			selectorChance(9, 'Half-plated pants'),
			selectorChance(4, 'Full-plated pants'),
		]),
		lootSelectorProbability(0.6, [
			selectorChance(9, 'Half-plated armor'),
			selectorChance(3, 'Guardian armor'),
		]),
		lootSelectorProbability(0.95, [
			selectorChance(9, 'Barbarian cutlass'),
			selectorChance(2, 'Balanced saber'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Spike troll',
	image: 'spiketroll',
	description: 'It is huge', 
	experience: 650,
	hp: 120,
	attack: 24,
	speed: 13,
	defense: 14,
	armor: 14,
	loot: [
		lootItemProbability(1, 'Copper coin', 13, 120),
		lootItemProbability(1, 'Bronze coin', 2, 3),
		lootItemProbability(1/2, 'Bronze coin', 1, 4),
		lootItemProbability(1/9, 'Spike troll\'s tooth'),
		lootItemProbability(1/3, 'Spike', 1, 3),
		lootSelectorProbability(0.9, [
			selectorChance(10, 'Heavy-duty boots'),
			selectorChance(3, 'Strenghtened boots'),
			selectorChance(1, 'Double-plated boots'),
		]),
		lootItemProbability(1/3, 'Stone shield'),
		lootSelectorProbability(0.7, [
			selectorChance(6, 'Warrior helmet'),
			selectorChance(3, 'Chain mail helmet'),
			selectorChance(3, 'Full-plated helmet'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(9, 'Half-plated pants'),
			selectorChance(4, 'Full-plated pants'),
			selectorChance(4, 'Warrior pants'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(4, 'Half-plated armor'),
			selectorChance(5, 'Guardian armor'),
		]),
		lootSelectorProbability(0.95, [
			selectorChance(4, 'Berserker hatchet'),
			selectorChance(2, 'Balanced saber'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Cultist',
	image: 'cultist',
	description: 'It looks like they once wandered the cave looking for power', 
	experience: 900,
	hp: 100,
	attack: 24,
	speed: 15,
	defense: 8,
	armor: 16,
	loot: [
		lootItemProbability(1, 'Copper coin', 9, 90),
		lootItemProbability(1, 'Bronze coin', 2, 3),
		lootItemProbability(1/2, 'Bronze coin', 1, 4),
		lootItemProbability(1/8, 'Cultist\'s brain'),
		lootItemProbability(1/2, 'Nail', 3, 17),
		lootItemProbability(1/2, 'Screw', 3, 17),
		lootSelectorProbability(0.2*POTIONFACTOR, [
			selectorChance(1, 'Hit point potion'),
			selectorChance(2, 'Dexterity potion'),
			selectorChance(2, 'Intelligence potion'),
			selectorChance(2, 'Vitality potion'),
		]),
		lootSelectorProbability(0.9, [
			selectorChance(10, 'Warrior boots'),
			selectorChance(3, 'Suede shoes'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(6, 'Warrior helmet'),
			selectorChance(3, 'Suede hood'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(9, 'Rogue pants'),
			selectorChance(4, 'Suede pants'),
			selectorChance(3, 'Warrior pants'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(4, 'Warrior armor'),
			selectorChance(5, 'Suede robe'),
		]),
		lootSelectorProbability(0.95, [
			selectorChance(18, 'Barbarian dagger'),
			selectorChance(6, 'Barbarian cutlass'),
			selectorChance(1, 'Crystal sword'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Lich',
	image: 'lich',
	description: 'You can hear the voice of this creature in your head, through your eyeballs', 
	experience: 2000,
	hp: 200,
	attack: 22,
	speed: 15,
	defense: 17,
	armor: 16,
	loot: [
		lootItemProbability(1, 'Bronze coin', 20, 150),
		lootItemProbability(1/2, 'Bronze coin', 1, 4),
		lootItemProbability(1, 'Gold coin', 2, 7),
		lootItemProbability(0.8, 'Composite armor'),
		lootItemProbability(0.8, 'Broadsword'),
		lootItemProbability(0.8, 'Reflective shield'),
		lootItemProbability(0.3, 'Lich\'s eye'),
		lootItemProbability(1, 'Lich\'s hand'), // key
		lootItemProbability(1, 'Healing scroll'),
		lootItemProbability(1/3, 'Healing scroll'),
		lootItemProbability(1/5, 'Healing scroll', 1, 4),
		lootSelectorProbability(1, [
			selectorChance(2, 'Dexterity potion'),
			selectorChance(2, 'Intelligence potion'),
			selectorChance(2, 'Vitality potion'),
		]),
		lootSelectorProbability(1, [
			selectorChance(2, 'Intelligence potion'),
			selectorChance(2, 'Constitution potion'),
			selectorChance(2, 'Vitality potion'),
		]),
		lootSelectorProbability(1, [
			selectorChance(2, 'Intelligence potion'),
			selectorChance(2, 'Strength potion'),
			selectorChance(2, 'Vitality potion'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(6, 'Warrior helmet'),
			selectorChance(3, 'Suede hood'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(9, 'Rogue pants'),
			selectorChance(4, 'Suede pants'),
			selectorChance(3, 'Warrior pants'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(4, 'Warrior armor'),
			selectorChance(5, 'Suede robe'),
		]),
		lootSelectorProbability(0.95, [
			selectorChance(18, 'Barbarian dagger'),
			selectorChance(6, 'Barbarian cutlass'),
			selectorChance(1, 'Crystal sword'),
		]),
		lootSelectorProbability(1, [
			selectorChance(3, 'The beheader'),
			selectorChance(3, 'Fire orb'),
			selectorChance(3, 'Pyramid of mind'),
			selectorChance(3, 'Cube of body'),
			selectorChance(3, 'Feather of unseen'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Giant snake',
	image: 'giantsnake',
	description: 'It has huge fangs', 
	experience: 800,
	hp: 100,
	attack: 26,
	speed: 15,
	defense: 8,
	armor: 12,
	loot: [
		lootItemProbability(1, 'Bronze coin', 1, 9),
		lootItemProbability(1/2, 'Bronze coin', 1, 20),
		lootItemProbability(1/10, 'Viking helmet'),
		lootItemProbability(1/10*FOODFACTOR, 'Onion'),
		lootItemProbability(1/10, 'Giant snake\'s fang'),
		lootSelectorProbability(0.3, [
			selectorChance(8, 'Barbarian dagger'),
			selectorChance(6, 'Barbarian cutlass'),
			selectorChance(3, 'Flint axe'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Giant scorpion',
	image: 'giantscorpion',
	description: 'It has a huge stinger in the tail', 
	experience: 850,
	hp: 60,
	attack: 25,
	speed: 18,
	defense: 8,
	armor: 12,
	loot: [
		lootItemProbability(1, 'Bronze coin', 1, 9),
		lootItemProbability(1/2, 'Bronze coin', 1, 20),
		lootItemProbability(1/6, 'Silver coin', 1, 1),
		lootItemProbability(1/10, 'Forest pants'),
		lootItemProbability(1/10*FOODFACTOR, 'Onion'),
		lootItemProbability(1/19, 'Scorpion\'s stinger'),
		lootSelectorProbability(0.3, [
			selectorChance(4, 'Spear'),
			selectorChance(1, 'Reinforced spear'),
			selectorChance(1, 'Stone axe'),
			selectorChance(1, 'Claws'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Mutant spider',
	image: 'mutantspider',
	description: 'It has hands and holds weapons with them', 
	experience: 1000,
	hp: 90,
	attack: 24,
	speed: 19,
	defense: 12,
	armor: 14,
	loot: [
		lootItemProbability(1, 'Bronze coin', 1, 9),
		lootItemProbability(1/2, 'Bronze coin', 1, 20),
		lootItemProbability(1/4, 'Silver coin', 1, 4),
		lootItemProbability(1/10, 'Trooper helmet'),
		lootItemProbability(1/10*FOODFACTOR, 'Orange'),
		lootItemProbability(1/5, 'Mutant spider\'s leg', 1, 2),
		lootSelectorProbability(0.4, [
			selectorChance(3, 'Poisonous knife'),
			selectorChance(1, 'Poisonous saber'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Mercenary',
	image: 'mercenary',
	description: 'It seems to be looking for treasure', 
	experience: 1800,
	hp: 110,
	attack: 27,
	speed: 12,
	defense: 14,
	armor: 18,
	loot: [
		lootItemProbability(1, 'Bronze coin', 1, 9),
		lootItemProbability(1/2, 'Bronze coin', 1, 20),
		lootItemProbability(1, 'Silver coin', 1, 2),
		lootItemProbability(1/4, 'Silver coin', 3, 9),
		lootItemProbability(1/10*WATERFACTOR, 'Water bota bag'),
		lootItemProbability(1/4, 'Skull'),
		lootItemProbability(1/7, 'Human bone', 1, 2),
		lootSelectorProbability(0.7, [
			selectorChance(4, 'Strenghtened boots'),
			selectorChance(1, 'Double-plated boots'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(4, 'Guardian armor'),
			selectorChance(1, 'Composite armor'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(10, 'Full-plated helmet'),
			selectorChance(3, 'Trooper helmet'),
			selectorChance(3, 'Commander helmet'),
			selectorChance(1, 'Full helmet'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(10, 'Warrior pants'),
			selectorChance(3, 'Legion pants'),
			selectorChance(3, 'Commander pants'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(10, 'Buckler'),
			selectorChance(2, 'Tortoise shield'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(9, 'Stone axe'),
			selectorChance(5, 'Flint axe'),
			selectorChance(4, 'Double axe'),
			selectorChance(3, 'Stone and chain'),
			selectorChance(2, 'Ball and chain'),
			selectorChance(1, 'Balls and chain'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Barbarian',
	image: 'barbarian',
	description: 'It seems to be looking for treasure', 
	experience: 2000,
	hp: 120,
	attack: 27,
	speed: 14,
	defense: 15,
	armor: 19,
	loot: [
		lootItemProbability(1, 'Bronze coin', 1, 9),
		lootItemProbability(1/2, 'Bronze coin', 1, 20),
		lootItemProbability(1, 'Silver coin', 1, 2),
		lootItemProbability(1/4, 'Silver coin', 3, 9),
		lootItemProbability(1/10*WATERFACTOR, 'Water bota bag'),
		lootItemProbability(1/4, 'Skull'),
		lootItemProbability(1/7, 'Human bone', 1, 2),
		lootSelectorProbability(0.7, [
			selectorChance(4, 'Strenghtened boots'),
			selectorChance(1, 'Double-plated boots'),
			selectorChance(1, 'Gargoyle boots'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(2, 'Guardian armor'),
			selectorChance(2, 'Composite armor'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(3, 'Full-plated helmet'),
			selectorChance(4, 'Trooper helmet'),
			selectorChance(5, 'Commander helmet'),
			selectorChance(2, 'Full helmet'),
			selectorChance(2, 'Captain helmet'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(7, 'Warrior pants'),
			selectorChance(5, 'Legion pants'),
			selectorChance(4, 'Commander pants'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(6, 'Buckler'),
			selectorChance(3, 'Tortoise shield'),
			selectorChance(3, 'Interlocking shield'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(10, 'Stone axe'),
			selectorChance(8, 'Flint axe'),
			selectorChance(6, 'Double axe'),
			selectorChance(5, 'Poisonous saber'),
			selectorChance(4, 'Pointy flail'),
			selectorChance(3, 'Iron hammer'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Mage',
	image: 'mage',
	description: 'It seems quite powerful', 
	experience: 2400,
	hp: 80,
	attack: 30,
	speed: 10,
	defense: 10,
	armor: 12,
	loot: [
		lootItemProbability(1, 'Silver coin', 1, 4),
		lootItemProbability(1/3, 'Silver coin', 1, 30),
		lootItemProbability(1/10*WATERFACTOR, 'Water bota bag'),
		lootItemProbability(1/4, 'Skull'),
		lootItemProbability(1/7, 'Human bone', 1, 2),
		lootItemProbability(1/6, 'Amethyst'),
		lootItemProbability(1, 'Magic hit scroll', 3, 5),
		lootItemProbability(1/2, 'Fireball scroll', 1, 2),
		lootItemProbability(1/2, 'Thunderbolt scroll', 1, 2),
		lootItemProbability(1/2, 'Ice bolt scroll', 1, 1),
		lootItemProbability(1/4, 'Magic rope scroll', 1, 1),
		lootSelectorProbability(0.7, [
			selectorChance(4, 'Suede shoes'),
			selectorChance(1, 'Crystal boots'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(3, 'Suede robe'),
			selectorChance(2, 'Wizard robe'),
			selectorChance(6, 'Elven armor'),
			selectorChance(4, 'Ceremonial armor'),
			selectorChance(1, 'Scale vest'),
		]),
		lootSelectorProbability(0.5, [
			selectorChance(4, 'Wizard hat'),
			selectorChance(3, 'Suede hood'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(7, 'Suede pants'),
			selectorChance(2, 'Golden pants'),
		]),
		lootSelectorProbability(0.2, [
			selectorChance(5, 'Magic mirror shield'),
			selectorChance(1, 'Mind shield'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(5, 'Wretched dagger'),
			selectorChance(5, 'Insect dagger'),
			selectorChance(1, 'Ceremonial spear'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Minion',
	image: 'minion',
	description: 'It is a lesser evil entity', 
	experience: 3700,
	hp: 80,
	attack: 20,
	speed: 10,
	defense: 12,
	armor: 12,
	loot: [
		lootItemProbability(1, 'Silver coin', 1, 7),
		lootItemProbability(1/3, 'Silver coin', 1, 40),
		lootItemProbability(1/14, 'Minion\'s skull'),
		lootSelectorProbability(0.3, [
			selectorChance(6, 'Elven armor'),
			selectorChance(1, 'Royal armor'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(5, 'Spear'),
			selectorChance(2, 'Amber knife'),
			selectorChance(1, 'Poisonous knife'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Great imp',
	image: 'greatimp',
	description: 'It makes you feel anxious from the distance', 
	experience: 5000,
	hp: 100,
	attack: 24,
	speed: 12,
	defense: 15,
	armor: 15,
	loot: [
		lootItemProbability(1, 'Silver coin', 1, 10),
		lootItemProbability(1/3, 'Silver coin', 5, 30),
		lootItemProbability(1/12, 'Scale pants'),
		lootItemProbability(1/5, 'Full helmet'),
		lootItemProbability(1/12, 'Great imp\'s skull'),
	],
});

registerMob(<Mob>{
	name: 'Swarmer',
	image: 'swarmer',
	description: 'It looks like a huge and dangerous insect', 
	experience: 5500,
	hp: 110,
	attack: 24,
	speed: 14,
	defense: 10,
	armor: 10,
	loot: [
		lootItemProbability(1, 'Silver coin', 1, 4),
		lootItemProbability(1/3, 'Silver coin', 1, 10),
		lootItemProbability(13, 'Insect dagger'),
		lootItemProbability(1/11, 'Swarmer\'s foot', 1, 2),
	],
});

registerMob(<Mob>{
	name: 'Howler',
	image: 'howler',
	description: 'It is a golem-like and noisy creature', 
	experience: 5500,
	hp: 120,
	attack: 27,
	speed: 12,
	defense: 10,
	armor: 18,
	loot: [
		lootItemProbability(1, 'Silver coin', 1, 4),
		lootItemProbability(1/3, 'Silver coin', 1, 10),
		lootItemProbability(1/2, 'Howler\'s slime', 1, 3),
		lootItemProbability(1/5, 'Howler\'s slime', 3, 7),
		lootSelectorProbability(0.9, [
			selectorChance(1, 'Double axe'),
			selectorChance(1, 'Stone and chain'),
			selectorChance(1, 'Ball and chain'),
			selectorChance(1, 'Balls and chain'),
			selectorChance(1, 'Pointy flail'),
			selectorChance(1, 'Iron hammer'),
			selectorChance(1, 'Large hammer'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Cyclops',
	image: 'cyclops',
	description: 'It has a single large eye', 
	experience: 7000,
	hp: 170,
	attack: 27,
	speed: 7,
	defense: 10,
	armor: 20,
	loot: [
		lootItemProbability(1, 'Silver coin', 1, 40),
		lootItemProbability(1/2, 'Silver coin', 10, 40),
		lootItemProbability(1, 'Gold coin'),
		lootItemProbability(1/6, 'Cyclops\' hand', 1, 2),
		lootItemProbability(1/3, 'Cyclops\' eye'),
		lootSelectorProbability(1, [
			selectorChance(2, 'Gargoyle boots'),
			selectorChance(1, 'Juggernaut boots'),
		]),
		lootSelectorProbability(1, [
			selectorChance(2, 'Crimsom armor'),
			selectorChance(1, 'Juggernaut armor'),
		]),
		lootSelectorProbability(1, [
			selectorChance(2, 'Captain helmet'),
			selectorChance(1, 'Vanguard helmet'),
		]),
		lootSelectorProbability(1, [
			selectorChance(2, 'Legion pants'),
			selectorChance(1, 'Commander pants'),
		]),
		lootSelectorProbability(1, [
			selectorChance(2, 'Stone shield'),
			selectorChance(1, 'Cyclops shield'),
		]),
		lootSelectorProbability(1, [
			selectorChance(2, 'Iron hammer'),
			selectorChance(1, 'Large hammer'),
			selectorChance(1, 'Warhammer'),
			selectorChance(1, 'Trident'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Troll',
	image: 'troll',
	description: 'It has a single large eye', 
	experience: 6000,
	hp: 130,
	attack: 23,
	speed: 7,
	defense: 10,
	armor: 18,
	loot: [
		lootItemProbability(1, 'Silver coin', 1, 40),
		lootItemProbability(1/2, 'Silver coin', 10, 40),
		lootItemProbability(1/17, 'Troll\'s bowels'),
		lootSelectorProbability(1, [
			selectorChance(15, 'Gargoyle boots'),
			selectorChance(1, 'Juggernaut boots'),
		]),
		lootSelectorProbability(1, [
			selectorChance(15, 'Crimsom armor'),
			selectorChance(1, 'Juggernaut armor'),
		]),
		lootSelectorProbability(1, [
			selectorChance(15, 'Captain helmet'),
			selectorChance(1, 'Vanguard helmet'),
		]),
		lootSelectorProbability(1, [
			selectorChance(2, 'Legion pants'),
			selectorChance(1, 'Commander pants'),
		]),
		lootItemProbability(1/2, 'Stone shield'),
		lootSelectorProbability(0.7, [
			selectorChance(2, 'Stone and chain'),
			selectorChance(2, 'Ball and chain'),
			selectorChance(2, 'Double axe'),
			selectorChance(1, 'Large hammer'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Orc warrior',
	image: 'orcwarrior',
	description: 'It is heavily armed and well trained on combat', 
	experience: 12050,
	hp: 100,
	attack: 25,
	speed: 10,
	defense: 13,
	armor: 17,
	loot: [
		lootItemProbability(1, 'Silver coin', 1, 40),
		lootItemProbability(1/2, 'Silver coin', 10, 50),
		lootItemProbability(1/2, 'Orc\'s finger', 1, 1),
		lootItemProbability(1/8, 'Orc\'s finger', 1, 7),
		lootSelectorProbability(1, [
			selectorChance(8, 'Double-plated boots'),
			selectorChance(1, 'Juggernaut boots'),
		]),
		lootSelectorProbability(1, [
			selectorChance(8, 'Guardian armor'),
			selectorChance(1, 'Great armor'),
		]),
		lootSelectorProbability(1, [
			selectorChance(8, 'Vanguard helmet'),
			selectorChance(1, 'Ascended helmet'),
		]),
		lootSelectorProbability(1, [
			selectorChance(8, 'Commander pants'),
			selectorChance(1, 'Scale pants'),
		]),
		lootSelectorProbability(1, [
			selectorChance(8, 'Tortoise shield'),
			selectorChance(5, 'Interlocking shield'),
			selectorChance(1, 'Tower shield'),
		]),
		lootSelectorProbability(1, [
			selectorChance(2, 'Stone and chain'),
			selectorChance(2, 'Ball and chain'),
			selectorChance(2, 'Double axe'),
			selectorChance(1, 'Large hammer'),
			selectorChance(1, 'Heaven\'s axe'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Orc shaman',
	image: 'orcshaman',
	description: 'It is an expert on magic', 
	experience: 12650,
	hp: 70,
	attack: 30,
	speed: 12,
	defense: 9,
	armor: 10,
	loot: [
		lootItemProbability(1, 'Silver coin', 1, 40),
		lootItemProbability(1/2, 'Silver coin', 10, 40),
		lootItemProbability(1, 'Gold coin', 1, 2),
		lootItemProbability(1/2, 'Healing scroll'),
		lootItemProbability(1/2, 'Orc\'s finger', 1, 1),
		lootItemProbability(1/8, 'Orc\'s finger', 1, 7),
		lootItemProbability(1/28, 'Toy doll'),
		lootItemProbability(1/42, 'Shaman stand'),
		lootItemProbability(1/2, 'Direct hit scroll', 1, 3),
		lootItemProbability(1/2, 'Magic rope scroll', 1, 1),
		lootSelectorProbability(1/2, [
			selectorChance(8, 'Crystal boots'),
			selectorChance(1, 'Royal boots'),
		]),
		lootSelectorProbability(0.7, [
			selectorChance(17, 'Elven armor'),
			selectorChance(7, 'Ceremonial armor'),
			selectorChance(3, 'Ceremonial robe'),
			selectorChance(1, 'Enchanted armor'),
		]),
		lootSelectorProbability(1, [
			selectorChance(10, 'Viking helmet'),
			selectorChance(1, 'Necromancer helmet'),
		]),
		lootSelectorProbability(1, [
			selectorChance(8, 'Forest pants'),
			selectorChance(4, 'Golden pants'),
			selectorChance(1, 'Crystal pants'),
		]),
		lootSelectorProbability(1/5, [
			selectorChance(8, 'Magic mirror shield'),
			selectorChance(5, 'Mind shield'),
		]),
		lootSelectorProbability(0.6, [
			selectorChance(5, 'Reinforced spear'),
			selectorChance(4, 'Ceremonial spear'),
			selectorChance(2, 'Skull staff'),
			selectorChance(1, 'Hell dagger'),
		]),
		lootSelectorProbability(0.2*POTIONFACTOR, [
			selectorChance(9, 'Hit point potion'),
			selectorChance(1, 'Strength potion'),
			selectorChance(1, 'Dexterity potion'),
			selectorChance(1, 'Constitution potion'),
			selectorChance(1, 'Agility potion'),
			selectorChance(1, 'Vitality potion'),
			selectorChance(1, 'Intelligence potion'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Abomination',
	image: 'abomination',
	description: 'You can feel this as an extremely corrupted entity that once was powerful', 
	experience: 20000,
	hp: 340,
	attack: 27,
	speed: 15,
	defense: 20,
	armor: 25,
	loot: [
		lootItemProbability(1, 'Silver coin', 1, 40),
		lootItemProbability(1/2, 'Silver coin', 10, 40),
		lootItemProbability(1, 'Gold coin', 1, 2),
		lootItemProbability(1/3, 'Gold coin', 1, 5),
		lootItemProbability(1/5, 'Gold coin', 1, 10),
		lootItemProbability(1/10, 'Gold coin', 1, 40),
		lootItemProbability(1/5, 'Stoneskin armor'),
		lootItemProbability(1/10, 'Blessed shield'),
		lootItemProbability(1/10, 'Holy hammer'),
		lootItemProbability(1, 'Healing scroll'),
		lootItemProbability(1/3, 'Healing scroll', 1, 4),
		lootItemProbability(1/3, 'Hit point potion'),
		lootItemProbability(1/5, 'Hit point potion'),
		lootItemProbability(1/7, 'Strength potion'),
		lootItemProbability(1/4, 'Dexterity potion'),
		lootItemProbability(1/6, 'Agility potion'),
		lootItemProbability(1/7, 'Intelligence potion'),
		lootItemProbability(1/5, 'Vitality potion'),
		lootItemProbability(1/3, 'Constitution potion'),
		lootItemProbability(1/3, 'Abomination\'s hand'),
		lootItemProbability(1/6, 'Abomination\'s hand'),
		lootItemProbability(1, 'Abomination\'s teeth'), // key
		lootSelectorProbability(1, [
			selectorChance(3, 'Hourglass of time'),
			selectorChance(3, 'Sudden death scroll'),
			selectorChance(3, 'Dragon egg'),
			selectorChance(3, 'Bell of humbleness'),
			selectorChance(3, 'Boots of angels'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Golem',
	image: 'golem',
	description: 'It is a symbiosis of living rock and crystal', 
	experience: 12000,
	hp: 250,
	attack: 30,
	speed: 12,
	defense: 12,
	armor: 15,
	loot: [
		lootItemProbability(1, 'Silver coin', 1, 10),
		lootItemProbability(1/5, 'Gold coin'),
		lootItemProbability(1/3, 'Amethyst'),
		lootItemProbability(1/4, 'Quartz'),
		lootItemProbability(1/12, 'Ruby'),
		lootItemProbability(1/12, 'Golem\'s heart'),
		lootItemProbability(1/7, 'Dark sword'),
		lootItemProbability(1/7, 'Templar helmet'),
		lootItemProbability(1/7, 'Leader\'s armor'),
	],
});

registerMob(<Mob>{
	name: 'Stone grunt',
	image: 'stonegrunt',
	description: 'It is a very heavy stone monster', 
	experience: 14000,
	hp: 300,
	attack: 22,
	speed: 10,
	defense: 9,
	armor: 17,
	loot: [
		lootItemProbability(1, 'Silver coin', 1, 10),
		lootItemProbability(1/4, 'Gold coin'),
		lootItemProbability(1, 'Stone', 1, 5),
		lootItemProbability(1, 'Sandstone', 1, 5),
	],
});

registerMob(<Mob>{
	name: 'Forest keeper',
	image: 'forestkeeper',
	description: 'It looks like a tree that once became alive', 
	experience: 20000,
	hp: 320,
	attack: 24,
	speed: 13,
	defense: 9,
	armor: 10,
	loot: [
		lootItemProbability(1, 'Silver coin', 1, 10),
		lootItemProbability(1/3, 'Gold coin'),
		lootItemProbability(1, 'Forest keeper fruit', 1, 2),
		lootItemProbability(1/2, 'Forest keeper fruit', 2, 5),
		lootItemProbability(1/7, 'Dark pants'),
		lootItemProbability(1/7, 'Enchanted boots'),
		lootItemProbability(1/7, 'Scarab shield'),
		lootItemProbability(1/7, 'Enchanted saber'),
		lootItemProbability(1/7, 'Heaven\'s helmet'),
		lootItemProbability(1/4, 'Bouncing hit scroll', 1, 3),
		lootItemProbability(1/4, 'Deadly hit scroll', 1, 3),
		lootItemProbability(1/2*POTIONFACTOR, 'Vitality potion'),
		lootItemProbability(1/4*POTIONFACTOR, 'Vitality potion'),
	],
});

registerMob(<Mob>{
	name: 'Metal bug',
	image: 'metalbug',
	description: 'It is not clear whether it is alive or not', 
	experience: 29000,
	hp: 150,
	attack: 26,
	speed: 16,
	defense: 3,
	armor: 14,
	loot: [
		lootItemProbability(1, 'Gold coin', 1, 2),
		lootItemProbability(1/3, 'Gold coin', 1, 2),
		lootItemProbability(1, 'Gear'),
		lootItemProbability(1/5, 'Gear', 1, 5),
		lootItemProbability(1/8, 'Golden gear', 1, 2),
		lootItemProbability(1/12, 'Metal tail'),
		lootItemProbability(1/7, 'Golden boots'),
	],
});

registerMob(<Mob>{
	name: 'Predator',
	image: 'predator',
	description: 'It seems like some creature that mutated', 
	experience: 34000,
	hp: 170,
	attack: 22,
	speed: 18,
	defense: 5,
	armor: 15,
	loot: [
		lootItemProbability(1, 'Gold coin', 1, 2),
		lootItemProbability(1/2, 'Gold coin', 1, 2),
		lootItemProbability(1/22, 'Predator hatchling'),
		lootItemProbability(1/5, 'Acid', 1, 2),
		lootItemProbability(1/3*POTIONFACTOR, 'Agility potion'),
		lootItemProbability(1/3*POTIONFACTOR, 'Dexterity potion'),
	],
});

registerMob(<Mob>{
	name: 'Bot',
	image: 'bot',
	description: 'It is definitely artificial', 
	experience: 39000,
	hp: 150,
	attack: 29,
	speed: 19,
	defense: 5,
	armor: 17,
	loot: [
		lootItemProbability(1, 'Gold coin', 1, 2),
		lootItemProbability(1/2, 'Gold coin', 1, 5),
		lootItemProbability(1, 'Gear'),
		lootItemProbability(1/5, 'Gear', 1, 5),
		lootItemProbability(1/8, 'Golden gear', 1, 2),
		lootItemProbability(1/19, 'Bot\'s core'),
		lootItemProbability(1/7, 'Dweller\'s armor'),
		lootItemProbability(1/7, 'Dweller\'s pants'),
		lootItemProbability(1/7, 'Juggernaut helmet'),
		lootItemProbability(1/7, 'Mechanical boots'),
	],
});

registerMob(<Mob>{
	name: 'Devourer',
	image: 'devourer',
	description: 'It is a cursed creature that moves really fast', 
	experience: 42000,
	hp: 120,
	attack: 21,
	speed: 27,
	defense: 3,
	armor: 12,
	loot: [
		lootItemProbability(1, 'Gold coin', 1, 3),
		lootItemProbability(1/2, 'Gold coin', 1, 7),
		lootItemProbability(1/12, 'Devourer\'s heart'),
		lootItemProbability(1/3*POTIONFACTOR, 'Constitution potion'),
	],
});

registerMob(<Mob>{
	name: 'Beholder',
	image: 'beholder',
	description: 'It has many tentacles and eyes and casts magic', 
	experience: 50000,
	hp: 220,
	attack: 27,
	speed: 12,
	defense: 10,
	armor: 14,
	loot: [
		lootItemProbability(1, 'Gold coin', 1, 3),
		lootItemProbability(1/2, 'Gold coin', 1, 7),
		lootItemProbability(1/12, 'Beholder\'s eye'),
		lootItemProbability(1/30, 'Overlord crown'),
		lootItemProbability(1/30, 'Blessed boots'),
		lootItemProbability(1/30, 'Devil\'s pants'),
		lootItemProbability(1/30, 'Devil\'s shield'),
		lootItemProbability(1/30, 'Leviathan\'s armor'),
		lootItemProbability(1/30, 'Lava axe'),
		lootSelectorProbability(1*POTIONFACTOR, [
			selectorChance(2, 'Hit point potion'),
			selectorChance(2, 'Agility potion'),
			selectorChance(2, 'Constitution potion'),
			selectorChance(2, 'Strength potion'),
			selectorChance(2, 'Dexterity potion'),
			selectorChance(2, 'Intelligence potion'),
			selectorChance(2, 'Vitality potion'),
		]),
		],
});

registerMob(<Mob>{
	name: 'Shredder',
	image: 'shredder',
	description: 'It has teeth that could shred you apart', 
	experience: 70000,
	hp: 180,
	attack: 20,
	speed: 17,
	defense: 10,
	armor: 16,
	loot: [
		lootItemProbability(1, 'Gold coin', 1, 7),
		lootItemProbability(1/2, 'Gold coin', 1, 20),
		lootItemProbability(1/12, 'Shredder\'s eye'),
		lootItemProbability(1/16, 'Shredder\'s eye'),
		lootItemProbability(1/6, 'Shredder\'s teeth'),
		lootItemProbability(1/7, 'Pharaoh\'s armor'),
	],
});

registerMob(<Mob>{
	name: 'Phantom',
	image: 'phantom',
	description: 'It is a non-living non-material entity', 
	experience: 75000,
	hp: 50,
	attack: 40,
	speed: 22,
	defense: 0,
	armor: 0,
	loot: [
		lootItemProbability(1, 'Gold coin', 5, 15),
		lootItemProbability(1/2, 'Gold coin', 10, 40),
		lootItemProbability(1/12, 'Ectoplasm'),
		lootItemProbability(1*POTIONFACTOR, 'Hit point potion'),
		lootSelectorProbability(1/3, [
			selectorChance(4, 'Frost scroll'),
			selectorChance(1, 'Poison scroll'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Destroyer',
	image: 'destroyer',
	description: 'You can feel it is not from this reality', 
	experience: 150000,
	hp: 600,
	attack: 27,
	speed: 16,
	defense: 22,
	armor: 22,
	loot: [
		lootItemProbability(1, 'Gold coin', 10, 200),
		lootItemProbability(1/4, 'Gold coin', 10, 400),
		lootItemProbability(1, 'Destroyer\'s brain'),
		lootItemProbability(1, 'Gear', 10, 15),
		lootItemProbability(1, 'Golden gear', 10, 15),
		lootItemProbability(1, 'Bot\'s core', 2, 4),
		lootItemProbability(1, 'Acid', 1, 2),
		lootItemProbability(1, 'Hit point potion', 2, 4),
		lootSelectorProbability(1, [
			selectorChance(7, 'Meteorite shield'),
			selectorChance(1, 'Distortion shield'),
		]),
		lootSelectorProbability(1/2, [
			selectorChance(3, 'Demon axe'),
			selectorChance(3, 'Great sword'),
		]),
		lootSelectorProbability(1, [
			selectorChance(3, 'Statue of growth'),
			selectorChance(3, 'Crown of focus'),
			selectorChance(3, 'Shield of power'),
			selectorChance(3, 'Guide of artifacts'),
			selectorChance(3, 'Knife of the ritual'),
		]),
	],
});

registerMob(<Mob>{
	name: 'Demon skeleton',
	image: 'demonskeleton',
	description: '?????', 
	experience: 800000,
	hp: 700,
	attack: 27,
	speed: 18,
	defense: 20,
	armor: 24,
	loot: [
		lootItemProbability(1, 'Demon skeleton head'),
		lootItemProbability(1/5, 'Pants of truth'),
	],
});

registerMob(<Mob>{
	name: 'Demon soldier',
	image: 'demonsoldier',
	description: '?????', 
	experience: 1000000,
	hp: 800,
	attack: 30,
	speed: 22,
	defense: 21,
	armor: 25,
	loot: [
		lootItemProbability(1, 'Demon statue'),
		lootItemProbability(1/5, 'Armor of fate'),
	],
});

registerMob(<Mob>{
	name: 'Magma demon',
	image: 'magmademon',
	description: '?????', 
	experience: 1500000,
	hp: 1200,
	attack: 35,
	speed: 25,
	defense: 22,
	armor: 26,
	loot: [
		lootItemProbability(1, 'Magma demon\'s heart'),
		lootItemProbability(1/5, 'Gauntlet of gold'),
	],
});

registerMob(<Mob>{
	name: 'Demon overlord',
	image: 'demonoverlord',
	description: '?????', 
	experience: 2000000,
	hp: 1400,
	attack: 38,
	speed: 30,
	defense: 25,
	armor: 27,
	loot: [
		lootItemProbability(1, 'Demon token'), // key
		lootItemProbability(1, 'Demon overlord horn'),
		lootItemProbability(1/5, 'Rune of doom'),
	],
});

registerMob(<Mob>{
	name: 'Curse',
	image: 'curse',
	description: '?????', 
	experience: 3000000,
	hp: 2000,
	attack: 45,
	speed: 35,
	defense: 25,
	armor: 30,
	loot: [
		lootItemProbability(1, 'Corrupted heart'), // key
		lootItemProbability(1, 'Meteorite shard'),
		lootItemProbability(1, 'Power crystal'),
		lootItemProbability(1, 'Guide to the ritual'),
	],
});
}