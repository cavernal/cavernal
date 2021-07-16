function generateItems() {

items = {};

/**********************************************************/
/** CONTAINERS ********************************************/
/**********************************************************/
registerItem(<Item>{
	name: 'Small bag of coins',
	image: 'smallbagofcoins',
	description: 'It clinks full of coins when you shake it',
	type: ItemType.Container,
	rarity: Rarity.Common,
	loot: [
		lootItemProbability(1, 'Copper coin', 3, 5),
		lootItemProbability(1/4, 'Copper coin', 2, 7),
		lootItemProbability(1/20, 'Copper coin', 1, 7),
	],
});

registerItem(<Item>{
	name: 'Bag of gems',
	image: 'bagofgems',
	description: 'It clinks full of gems when you shake it',
	type: ItemType.Container,
	rarity: Rarity.Common,
	loot: [
		lootItemProbability(1, 'Amethyst'),
		lootItemProbability(1, 'Amber'),
		lootItemProbability(1/4, 'Amethyst', 1, 2),
		lootItemProbability(1/4, 'Obsidian', 1, 2),
		lootItemProbability(1/4, 'Jade', 1, 2),
		lootItemProbability(1/4, 'Pyrite', 1, 2),
		lootItemProbability(1/4, 'Quartz', 1, 2),
		lootItemProbability(1/4, 'Ruby', 1, 2),
	],
});

registerItem(<Item>{
	name: 'Sewing kit',
	image: 'sewingkit',
	description: 'It contains materials used for sewing',
	type: ItemType.Container,
	rarity: Rarity.Common,
	loot: <Loot[]>[
		lootItemProbability(1, 'Needle'),
		lootItemProbability(1/4, 'Needle'),
		lootItemProbability(1/5, 'Strip of cloth'),
		lootItemProbability(1, 'Spool of thread'),
		lootItemProbability(1/4, 'Spool of thread', 2, 4),
		lootItemProbability(1/2, 'Spool of yarn', 1, 1),
		lootItemProbability(1/6, 'Spool of yarn', 1, 2),
		lootItemProbability(0.7, 'String', 1, 2),
	],
});

/**********************************************************/
/** DRINK *************************************************/
/**********************************************************/
registerItem(<Item>{
	name: 'Water',
	image: 'water',
	type: ItemType.Drink,
	description: 'It is refreshing',
	rarity: Rarity.Common,
	attribute: 100,
	value: 2,
});

registerItem(<Item>{
	name: 'Water bota bag',
	image: 'waterbotabag',
	type: ItemType.Drink,
	description: 'It is full of water that smells a bit stale',
	rarity: Rarity.Uncommon,
	attribute: 50,
	value: 1,
});

/**********************************************************/
/** FOOD **************************************************/
/**********************************************************/
registerItem(<Item>{
	name: 'Apple',
	image: 'apple',
	description: 'It looks crunchy and a bit acidic',
	type: ItemType.Food,
	rarity: Rarity.Common,
	attribute: 8,
	value: 2,
});

registerItem(<Item>{
	name: 'Pear',
	image: 'pear',
	description: 'It looks soft and sweet',
	type: ItemType.Food,
	rarity: Rarity.Common,
	attribute: 8,
	value: 2,
});

registerItem(<Item>{
	name: 'Garlic',
	image: 'garlic',
	description: 'It has a strong spicy taste',
	type: ItemType.Food,
	rarity: Rarity.Common,
	attribute: 10,
	value: 3,
});

registerItem(<Item>{
	name: 'Ginger',
	image: 'ginger',
	description: 'It smells spicy',
	type: ItemType.Food,
	rarity: Rarity.Common,
	attribute: 10,
	value: 3,
});

registerItem(<Item>{
	name: 'Tomato',
	image: 'tomato',
	description: 'It smells umami',
	type: ItemType.Food,
	rarity: Rarity.Common,
	attribute: 10,
	value: 3,
});

registerItem(<Item>{
	name: 'Peach',
	image: 'peach',
	description: 'It smells fresh',
	type: ItemType.Food,
	rarity: Rarity.Common,
	attribute: 12,
	value: 3,
});

registerItem(<Item>{
	name: 'Onion',
	image: 'onion',
	description: 'It smells strong',
	type: ItemType.Food,
	rarity: Rarity.Common,
	attribute: 8,
	value: 2,
});

registerItem(<Item>{
	name: 'Orange',
	image: 'orange',
	description: 'It smells refreshing',
	type: ItemType.Food,
	rarity: Rarity.Common,
	attribute: 13,
	value: 3,
});

registerItem(<Item>{
	name: 'Banana',
	image: 'banana',
	description: 'It is very appealing',
	type: ItemType.Food,
	rarity: Rarity.Common,
	attribute: 16,
	value: 4,
});

registerItem(<Item>{
	name: 'Bread',
	image: 'bread',
	description: 'It looks and smells great',
	type: ItemType.Food,
	rarity: Rarity.Common,
	attribute: 20,
	value: 5,
});

registerItem(<Item>{
	name: 'Cheese',
	image: 'cheese',
	description: 'It looks and smells delicious',
	type: ItemType.Food,
	rarity: Rarity.Common,
	attribute: 50,
	value: 15,
});

registerItem(<Item>{
	name: 'Egg',
	image: 'egg',
	description: 'It is packed with protein and energy',
	type: ItemType.Food,
	rarity: Rarity.Common,
	attribute: 80,
	value: 20,
});

registerItem(<Item>{
	name: 'Meat',
	image: 'meat',
	description: 'It looks and smells yummy',
	type: ItemType.Food,
	rarity: Rarity.Common,
	attribute: 140,
	value: 40,
});

/**********************************************************/
/** POTIONS ***********************************************/
/**********************************************************/

registerItem(<Item>{
	name: 'Hit point potion',
	image: 'hitpointpotion',
	description: 'It will permanently increase your maximum hit points',
	descriptionImage: function (): string { return img('stathitpoints') + ' Max hit points +' + this.attribute; },
	type: ItemType.IncreaseMaxHitPoints,
	rarity: Rarity.Rare,
	attribute: 5,
	value: 4000,
	consumable: true,
	useFunction: function(): boolean {
		outLine('You drank the ' + this.name);
		outSpace();
		outLine('It increased your maximum hit points by ' + this.attribute);
		d.maxHpEffect += this.attribute;
		updatePlayerStats();
		updatePlayerValues();
		d.hp += this.attribute;
		return true;
	},
});

registerItem(<Item>{
	name: 'Strength potion',
	image: 'strengthpotion',
	description: 'It will permanently increase your strength',
	descriptionImage: function (): string { return imgResize('attrstrength', 32) + ' Strength +' + this.attribute; },
	type: ItemType.IncreaseStrength,
	rarity: Rarity.Rare,
	attribute: 1,
	value: 4000,
	consumable: true,
	useFunction: function(): boolean {
		outLine('You drank the ' + this.name);
		outSpace();
		outLine('It increased your strength by ' + this.attribute);
		d.strength += this.attribute;
		updatePlayerStats();
		updatePlayerValues();
		return true;
	},
});

registerItem(<Item>{
	name: 'Dexterity potion',
	image: 'dexteritypotion',
	description: 'It will increase your dexterity',
	descriptionImage: function (): string { return imgResize('attrdexterity', 32) + ' Dexterity +' + this.attribute; },
	type: ItemType.IncreaseDexterity,
	rarity: Rarity.Rare,
	attribute: 1,
	value: 4000,
	consumable: true,
	useFunction: function(): boolean {
		outLine('You drank the ' + this.name);
		outSpace();
		outLine('It increased your dexterity by ' + this.attribute);
		d.dexterity += this.attribute;
		updatePlayerStats();
		updatePlayerValues();
		return true;
	},
});

registerItem(<Item>{
	name: 'Constitution potion',
	image: 'constitutionpotion',
	description: 'It will permanently increase your constitution',
	descriptionImage: function (): string { return imgResize('attrconstitution', 32) + ' Constitution +' + this.attribute; },
	type: ItemType.IncreaseConstitution,
	rarity: Rarity.Rare,
	attribute: 1,
	value: 4000,
	consumable: true,
	useFunction: function(): boolean {
		outLine('You drank the ' + this.name);
		outSpace();
		outLine('It increased your constitution by ' + this.attribute);
		d.constitution += this.attribute;
		updatePlayerStats();
		updatePlayerValues();
		return true;
	},
});

registerItem(<Item>{
	name: 'Agility potion',
	image: 'agilitypotion',
	description: 'It will permanently increase your agility',
	descriptionImage: function (): string { return imgResize('attragility', 32) + ' Agility +' + this.attribute; },
	type: ItemType.IncreaseAgility,
	rarity: Rarity.Rare,
	attribute: 1,
	value: 4000,
	consumable: true,
	useFunction: function(): boolean {
		outLine('You drank the ' + this.name);
		outSpace();
		outLine('It increased your agility by ' + this.attribute);
		d.agility += this.attribute;
		updatePlayerStats();
		updatePlayerValues();
		return true;
	},
});

registerItem(<Item>{
	name: 'Vitality potion',
	image: 'vitalitypotion',
	description: 'It will increase your vitality',
	descriptionImage: function (): string { return imgResize('attrvitality', 32) + ' Vitality +' + this.attribute; },
	type: ItemType.IncreaseVitality,
	rarity: Rarity.Rare,
	attribute: 1,
	value: 4000,
	consumable: true,
	useFunction: function(): boolean {
		outLine('You drank the ' + this.name);
		outSpace();
		outLine('It increased your vitality by ' + this.attribute);
		d.vitality += this.attribute;
		updatePlayerStats();
		updatePlayerValues();
		return true;
	},
});

registerItem(<Item>{
	name: 'Intelligence potion',
	image: 'intelligencepotion',
	description: 'It will increase your intelligence',
	descriptionImage: function (): string { return imgResize('attrintelligence', 32) + ' Intelligence +' + this.attribute; },
	type: ItemType.IncreaseIntelligence,
	rarity: Rarity.Rare,
	attribute: 1,
	value: 4000,
	consumable: true,
	useFunction: function(): boolean {
		outLine('You drank the ' + this.name);
		outSpace();
		outLine('It increased your intelligence by ' + this.attribute);

		d.intelligence += this.attribute;
		updatePlayerStats();
		updatePlayerValues();
		return true;
	},
});

/**********************************************************/
/** ARMOR *************************************************/
/**********************************************************/
registerItem(<Item>{
	name: 'Ragged shirt',
	image: 'raggedshirt',
	description: 'It barely holds together',
	type: ItemType.Armor,
	rarity: Rarity.Common,
	attribute: 4,
	value: 2,
});

registerItem(<Item>{
	name: 'Leather vest',
	image: 'leathervest',
	description: 'It is thin and light',
	type: ItemType.Armor,
	rarity: Rarity.Common,
	attribute: 6,
	value: 12,
});

registerItem(<Item>{
	name: 'Leather armor',
	image: 'leatherarmor',
	description: 'It looks functional and feels comfortable',
	type: ItemType.Armor,
	rarity: Rarity.Common,
	attribute: 10,
	value: 12,
	minimumStrength: 5,
});

registerItem(<Item>{
	name: 'Warrior vest',
	image: 'warriorvest',
	description: 'It is light but resistant',
	type: ItemType.Armor,
	rarity: Rarity.Common,
	attribute: 11,
	value: 15,
});
registerItem(<Item>{
	name: 'Barbarian armor',
	image: 'barbarianarmor',
	description: 'It consists of several layers of leather',
	type: ItemType.Armor,
	rarity: Rarity.Common,
	attribute: 11,
	value: 20,
	minimumStrength: 5,
});

registerItem(<Item>{
	name: 'Studded armor',
	image: 'studdedarmor',
	description: 'It consists of several reinforced layers of leather',
	type: ItemType.Armor,
	rarity: Rarity.Common,
	attribute: 12,
	value: 26,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Scale half armor',
	image: 'scalehalfarmor',
	description: 'It is a very sturdy chest and shoulders armor',
	type: ItemType.Armor,
	rarity: Rarity.Uncommon,
	attribute: 13,
	value: 750,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'One-piece armor',
	image: 'onepiecearmor',
	description: 'It feels very solid',
	type: ItemType.Armor,
	rarity: Rarity.Common,
	attribute: 13,
	value: 330,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Half-plated armor',
	image: 'halfplatedarmor',
	description: 'It consists of small metal plates',
	type: ItemType.Armor,
	rarity: Rarity.Common,
	attribute: 14,
	value: 940,
	minimumStrength: 8,
});
registerItem(<Item>{
	name: 'Warrior armor',
	image: 'warriorarmor',
	description: 'It consists of two interlocking pieces for extra freedom of movement',
	type: ItemType.Armor,
	rarity: Rarity.Uncommon,
	attribute: 15,
	value: 1900,
	minimumStrength: 9,
});

registerItem(<Item>{
	name: 'Guardian armor',
	image: 'guardianarmor',
	description: 'It shines blue with some protection incantation',
	type: ItemType.Armor,
	rarity: Rarity.Uncommon,
	attribute: 16,
	value: 7300,
	minimumStrength: 9,
});

registerItem(<Item>{
	name: 'Composite armor',
	image: 'compositearmor',
	description: 'It is made of four interlocking and reinforced pieces',
	type: ItemType.Armor,
	rarity: Rarity.Uncommon,
	attribute: 17,
	value: 19800,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Suede robe',
	image: 'suederobe',
	description: 'It is soft but resistant',
	type: ItemType.Armor,
	rarity: Rarity.Uncommon,
	attribute: 14,
	value: 3490,
	minimumStrength: 5,
});

registerItem(<Item>{
	name: 'Wizard robe',
	image: 'wizardrobe',
	description: 'It feels like it has some protective aura',
	type: ItemType.Armor,
	rarity: Rarity.Rare,
	attribute: 17,
	value: 75000,
	minimumStrength: 5,
});

registerItem(<Item>{
	name: 'Elven armor',
	image: 'elvenarmor',
	description: 'It is made of a very heavy metal',
	type: ItemType.Armor,
	rarity: Rarity.Uncommon,
	attribute: 18,
	value: 34000,
	minimumStrength: 9,
});

registerItem(<Item>{
	name: 'Ceremonial armor',
	image: 'ceremonialarmor',
	description: 'It is heavy but does not allow for a lot of movement',
	type: ItemType.Armor,
	rarity: Rarity.Uncommon,
	attribute: 18,
	value: 32000,
	minimumStrength: 10,
});

registerItem(<Item>{
	name: 'Royal armor',
	image: 'royalarmor',
	description: 'It is often used by guards in a palace',
	type: ItemType.Armor,
	rarity: Rarity.Uncommon,
	attribute: 19,
	value: 72000,
	minimumStrength: 11,
});

registerItem(<Item>{
	name: 'Scale vest',
	image: 'scalevest',
	description: 'It is light but very resistant',
	type: ItemType.Armor,
	rarity: Rarity.Uncommon,
	attribute: 18,
	value: 125000,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Ceremonial robe',
	image: 'ceremonialrobe',
	description: 'It is light but very resistant',
	type: ItemType.Armor,
	rarity: Rarity.Uncommon,
	attribute: 18,
	value: 145000,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Crimsom armor',
	image: 'crimsomarmor',
	description: 'It is decorated with jewels',
	type: ItemType.Armor,
	rarity: Rarity.Uncommon,
	attribute: 20,
	value: 172000,
	minimumStrength: 12,
});

registerItem(<Item>{
	name: 'Stoneskin armor',
	image: 'stoneskinarmor',
	description: 'It is light and adjusts to the skin',
	type: ItemType.Armor,
	rarity: Rarity.Rare,
	attribute: 20,
	value: 241000,
	minimumStrength: 9,
});

registerItem(<Item>{
	name: 'Juggernaut armor',
	image: 'juggernautarmor',
	description: 'It is very heavy',
	type: ItemType.Armor,
	rarity: Rarity.Uncommon,
	attribute: 22,
	value: 252000,
	minimumStrength: 14,
});

registerItem(<Item>{
	name: 'Great armor',
	image: 'greatarmor',
	description: 'It has several layers of red plates and feels very heavy',
	type: ItemType.Armor,
	rarity: Rarity.Uncommon,
	attribute: 23,
	value: 372000,
	minimumStrength: 15,
});

registerItem(<Item>{
	name: 'Enchanted armor',
	image: 'enchantedarmor',
	description: 'It is imbued with magic that seems to protect you',
	type: ItemType.Armor,
	rarity: Rarity.Rare,
	attribute: 23,
	value: 515000,
	minimumStrength: 12,
});

registerItem(<Item>{
	name: 'Leader\'s armor',
	image: 'leadersarmor',
	description: 'It is enchanted and feels powerful',
	type: ItemType.Armor,
	rarity: Rarity.Rare,
	attribute: 27,
	value: 5205000,
	minimumStrength: 18,
});

registerItem(<Item>{
	name: 'Dweller\'s armor',
	image: 'dwellersarmor',
	description: 'It is a unique, very functional piece of armor',
	type: ItemType.Armor,
	rarity: Rarity.Rare,
	attribute: 29,
	value: 8205000,
	minimumStrength: 21,
});

registerItem(<Item>{
	name: 'Pharaoh\'s armor',
	image: 'pharaohsarmor',
	description: 'It is an armor made of enchanted and ancient bandage',
	type: ItemType.Armor,
	rarity: Rarity.Rare,
	attribute: 31,
	value: 14000300,
	minimumStrength: 17,
});

registerItem(<Item>{
	name: 'Leviathan\'s armor',
	image: 'leviathansarmor',
	description: 'It is made of enchanted water that keeps the shape of an armor',
	type: ItemType.Armor,
	rarity: Rarity.Rare,
	attribute: 35,
	value: 32000300,
	minimumStrength: 25,
});

/**********************************************************/
/** BOOTS *************************************************/
/**********************************************************/
registerItem(<Item>{
	name: 'Pointy shoes',
	image: 'pointyshoes',
	description: 'They are pointy and flexible',
	type: ItemType.Boots,
	rarity: Rarity.Common,
	attribute: 1,
	value: 2,
});

registerItem(<Item>{
	name: 'Leather boots',
	image: 'leatherboots',
	description: 'They feel comfortable',
	type: ItemType.Boots,
	rarity: Rarity.Common,
	attribute: 1,
	value: 3,
});

registerItem(<Item>{
	name: 'Adjusted boots',
	image: 'adjustedboots',
	description: 'They are stitched to adjust well to the feet',
	type: ItemType.Boots,
	rarity: Rarity.Common,
	attribute: 1,
	value: 2,
});

registerItem(<Item>{
	name: 'Reinforced boots',
	image: 'reinforcedboots',
	description: 'They fit well',
	type: ItemType.Boots,
	rarity: Rarity.Common,
	attribute: 2,
	value: 7,
	minimumStrength: 5,
});

registerItem(<Item>{
	name: 'Heavy leather boots',
	image: 'heavyleatherboots',
	description: 'They feel heavy, hard, and thick',
	type: ItemType.Boots,
	rarity: Rarity.Common,
	attribute: 3,
	value: 7,
	minimumStrength: 5,
});

registerItem(<Item>{
	name: 'Winter boots',
	image: 'winterboots',
	description: 'They are very thick and warm',
	type: ItemType.Boots,
	rarity: Rarity.Common,
	attribute: 4,
	value: 13,
	minimumStrength: 5,
});

registerItem(<Item>{
	name: 'Studded boots',
	image: 'studdedboots',
	description: 'They are reinforced with leather',
	type: ItemType.Boots,
	rarity: Rarity.Common,
	attribute: 5,
	value: 20,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Safety boots',
	image: 'safetyboots',
	description: 'They are reinforced with a metal tip',
	type: ItemType.Boots,
	rarity: Rarity.Common,
	attribute: 6,
	value: 45,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Warrior boots',
	image: 'warriorboots',
	description: 'They are light but strong',
	type: ItemType.Boots,
	rarity: Rarity.Uncommon,
	attribute: 6,
	value: 65,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Suede shoes',
	image: 'suedeshoes',
	description: 'They are soft but strong',
	type: ItemType.Boots,
	rarity: Rarity.Uncommon,
	attribute: 6,
	value: 190,
	minimumStrength: 5,
});

registerItem(<Item>{
	name: 'Plated boots',
	image: 'platedboots',
	description: 'They are made only with metal plates',
	type: ItemType.Boots,
	rarity: Rarity.Uncommon,
	attribute: 7,
	value: 110,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Heavy-duty boots',
	image: 'heavydutyboots',
	description: 'They are really heavy',
	type: ItemType.Boots,
	rarity: Rarity.Uncommon,
	attribute: 7,
	value: 260,
	minimumStrength: 9,
});

registerItem(<Item>{
	name: 'Strenghtened boots',
	image: 'strenghtenedboots',
	description: 'They have heavy protections only in the most critical areas',
	type: ItemType.Boots,
	rarity: Rarity.Uncommon,
	attribute: 8,
	value: 450,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Double-plated boots',
	image: 'doubleplatedboots',
	description: 'They have two layers of metal plates',
	type: ItemType.Boots,
	rarity: Rarity.Uncommon,
	attribute: 9,
	value: 890,
	minimumStrength: 10,
});

registerItem(<Item>{
	name: 'Crystal boots',
	image: 'crystalboots',
	description: 'They are thick and hard',
	type: ItemType.Boots,
	rarity: Rarity.Rare,
	attribute: 9,
	value: 1600,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Gargoyle boots',
	image: 'gargoyleboots',
	description: 'They are made of stone and wiggle in the dark',
	type: ItemType.Boots,
	rarity: Rarity.Rare,
	attribute: 10,
	value: 4050,
	minimumStrength: 9,
});

registerItem(<Item>{
	name: 'Juggernaut boots',
	image: 'juggernautboots',
	description: 'They have very heavy metal plates',
	type: ItemType.Boots,
	rarity: Rarity.Rare,
	attribute: 12,
	value: 17580,
	minimumStrength: 12,
});

registerItem(<Item>{
	name: 'Royal boots',
	image: 'royalboots',
	description: 'They are lined with gold',
	type: ItemType.Boots,
	rarity: Rarity.Rare,
	attribute: 12,
	value: 34580,
	minimumStrength: 10,
});

registerItem(<Item>{
	name: 'Golden boots',
	image: 'goldenboots',
	description: 'They are completely made of gold',
	type: ItemType.Boots,
	rarity: Rarity.Rare,
	attribute: 15,
	value: 1050000,
	minimumStrength: 15,
});

registerItem(<Item>{
	name: 'Mechanical boots',
	image: 'mechanicalboots',
	description: 'They have plates that move and self-regenerate',
	type: ItemType.Boots,
	rarity: Rarity.Rare,
	attribute: 17,
	value: 2300000,
	minimumStrength: 20,
});

registerItem(<Item>{
	name: 'Enchanted boots',
	image: 'enchantedboots',
	description: 'They glow bright green',
	type: ItemType.Boots,
	rarity: Rarity.Rare,
	attribute: 19,
	value: 5900000,
	minimumStrength: 24,
});

registerItem(<Item>{
	name: 'Blessed boots',
	image: 'blessedboots',
	description: 'They are blessed with a magic gem',
	type: ItemType.Boots,
	rarity: Rarity.Rare,
	attribute: 20,
	value: 10000000,
	minimumStrength: 28,
});

/**********************************************************/
/** HELMET ************************************************/
/**********************************************************/
registerItem(<Item>{
	name: 'Leather hat',
	image: 'leatherhat',
	description: 'It sits comfortably on your head, but does not cover a lot of it',
	type: ItemType.Helmet,
	rarity: Rarity.Common,
	attribute: 1,
	value: 3,
});

registerItem(<Item>{
	name: 'Basic helmet',
	image: 'basichelmet',
	description: 'It fits your head well, but does not cover a lot of it',
	type: ItemType.Helmet,
	rarity: Rarity.Common,
	attribute: 2,
	value: 6,
});

registerItem(<Item>{
	name: 'Leather helmet',
	image: 'leatherhelmet',
	description: 'It has several layers of leather',
	type: ItemType.Helmet,
	rarity: Rarity.Common,
	attribute: 3,
	value: 14,
});

registerItem(<Item>{
	name: 'Reinforced helmet',
	image: 'reinforcedhelmet',
	description: 'It is reinforced with an iron part that covers your eyes',
	type: ItemType.Helmet,
	rarity: Rarity.Common,
	attribute: 4,
	value: 25,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Improved helmet',
	image: 'improvedhelmet',
	description: 'It has a complex design',
	type: ItemType.Helmet,
	rarity: Rarity.Common,
	attribute: 5,
	value: 52,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Soldier helmet',
	image: 'soldierhelmet',
	description: 'It is a standard low-budget but functional helmet',
	type: ItemType.Helmet,
	rarity: Rarity.Common,
	attribute: 6,
	value: 45,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Light helmet',
	image: 'lighthelmet',
	description: 'It is a lightweight functional helmet',
	type: ItemType.Helmet,
	rarity: Rarity.Common,
	attribute: 6,
	value: 90,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Horned helmet',
	image: 'hornedhelmet',
	description: 'Its three horns look daunting',
	type: ItemType.Helmet,
	rarity: Rarity.Common,
	attribute: 8,
	value: 350,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Warrior helmet',
	image: 'warriorhelmet',
	description: 'It looks very strong',
	type: ItemType.Helmet,
	rarity: Rarity.Uncommon,
	attribute: 10,
	value: 1130,
	minimumStrength: 8,
});

registerItem(<Item>{
	name: 'Rogue hood',
	image: 'roguehood',
	description: 'It is very light but still offers some protection',
	type: ItemType.Helmet,
	rarity: Rarity.Common,
	attribute: 4,
	value: 60,
	minimumStrength: 5,
});

registerItem(<Item>{
	name: 'Wizard hat',
	image: 'wizardhat',
	description: 'It feels like it has some protective aura',
	type: ItemType.Helmet,
	rarity: Rarity.Rare,
	attribute: 6,
	value: 950,
});

registerItem(<Item>{
	name: 'Suede hood',
	image: 'suedehood',
	description: 'It feels soft but very strong with some sort of incantation to it',
	type: ItemType.Helmet,
	rarity: Rarity.Rare,
	attribute: 7,
	value: 1600,
});

registerItem(<Item>{
	name: 'Chain mail helmet',
	image: 'chainmailhelmet',
	description: 'It is very lightweight',
	type: ItemType.Helmet,
	rarity: Rarity.Uncommon,
	attribute: 7,
	value: 820,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Full-plated helmet',
	image: 'fullplatedhelmet',
	description: 'It has several layers of metal plates',
	type: ItemType.Helmet,
	rarity: Rarity.Uncommon,
	attribute: 11,
	value: 2430,
	minimumStrength: 8,
});

registerItem(<Item>{
	name: 'Viking helmet',
	image: 'vikinghelmet',
	description: 'It has horns and also covers your eyes',
	type: ItemType.Helmet,
	rarity: Rarity.Uncommon,
	attribute: 10,
	value: 2230,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Trooper helmet',
	image: 'trooperhelmet',
	description: 'It feels very hard and resistant',
	type: ItemType.Helmet,
	rarity: Rarity.Uncommon,
	attribute: 11,
	value: 5260,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Commander helmet',
	image: 'commanderhelmet',
	description: 'It is fully closed with plates',
	type: ItemType.Helmet,
	rarity: Rarity.Uncommon,
	attribute: 12,
	value: 15200,
	minimumStrength: 9,
});

registerItem(<Item>{
	name: 'Full helmet',
	image: 'fullhelmet',
	description: 'It fully covers the head',
	type: ItemType.Helmet,
	rarity: Rarity.Uncommon,
	attribute: 13,
	value: 35700,
	minimumStrength: 11,
});

registerItem(<Item>{
	name: 'Captain helmet',
	image: 'captainhelmet',
	description: 'It is often worn by army captains',
	type: ItemType.Helmet,
	rarity: Rarity.Uncommon,
	attribute: 13,
	value: 42500,
	minimumStrength: 9,
});

registerItem(<Item>{
	name: 'Vanguard helmet',
	image: 'vanguardhelmet',
	description: 'It consists of two interlocking pieces',
	type: ItemType.Helmet,
	rarity: Rarity.Uncommon,
	attribute: 14,
	value: 95000,
	minimumStrength: 11,
});

registerItem(<Item>{
	name: 'Ascended helmet',
	image: 'ascendedhelmet',
	description: 'It protects and allows for a good field of vision',
	type: ItemType.Helmet,
	rarity: Rarity.Uncommon,
	attribute: 15,
	value: 121500,
	minimumStrength: 11,
});

registerItem(<Item>{
	name: 'Necromancer helmet',
	image: 'necromancerhelmet',
	description: 'It has huge devil-like horns',
	type: ItemType.Helmet,
	rarity: Rarity.Rare,
	attribute: 17,
	value: 1023300,
	minimumStrength: 14,
});

registerItem(<Item>{
	name: 'Templar helmet',
	image: 'templarhelmet',
	description: 'It is the most solid helmet you have ever seen',
	type: ItemType.Helmet,
	rarity: Rarity.Rare,
	attribute: 18,
	value: 1528000,
	minimumStrength: 17,
});

registerItem(<Item>{
	name: 'Juggernaut helmet',
	image: 'juggernauthelmet',
	description: 'It is heavy and imbued with a protective spell',
	type: ItemType.Helmet,
	rarity: Rarity.Rare,
	attribute: 21,
	value: 2223000,
	minimumStrength: 21,
});

registerItem(<Item>{
	name: 'Heaven\'s helmet',
	image: 'heavenshelmet',
	description: 'It has the power of heaven',
	type: ItemType.Helmet,
	rarity: Rarity.Rare,
	attribute: 23,
	value: 3100000,
	minimumStrength: 23,
});

registerItem(<Item>{
	name: 'Overlord crown',
	image: 'overlordcrown',
	description: 'It is the crown to rule them all',
	type: ItemType.Helmet,
	rarity: Rarity.Rare,
	attribute: 26,
	value: 12200000,
	minimumStrength: 29,
});

/**********************************************************/
/** PANTS *************************************************/
/**********************************************************/
registerItem(<Item>{
	name: 'Ragged pants',
	image: 'raggedpants',
	description: 'They barely hold together',
	type: ItemType.Pants,
	rarity: Rarity.Common,
	attribute: 1,
	value: 1,
});

registerItem(<Item>{
	name: 'Leather pants',
	image: 'leatherpants',
	description: 'They feel comfortable and soft',
	type: ItemType.Pants,
	rarity: Rarity.Common,
	attribute: 4,
	value: 5,
});

registerItem(<Item>{
	name: 'Hard leather pants',
	image: 'hardleatherpants',
	description: 'They consist of a layer of hardened leather',
	type: ItemType.Pants,
	rarity: Rarity.Common,
	attribute: 5,
	value: 9,
	minimumStrength: 5,
});

registerItem(<Item>{
	name: 'Studded pants',
	image: 'studdedpants',
	description: 'They are reinforced with extra layers of leather',
	type: ItemType.Pants,
	rarity: Rarity.Common,
	attribute: 6,
	value: 14,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Winter pants',
	image: 'winterpants',
	description: 'They are warm and thick',
	type: ItemType.Pants,
	rarity: Rarity.Common,
	attribute: 6,
	value: 50,
	minimumStrength: 5,
});
registerItem(<Item>{
	name: 'Reinforced pants',
	image: 'reinforcedpants',
	description: 'They are reinforced with metal plates',
	type: ItemType.Pants,
	rarity: Rarity.Common,
	attribute: 7,
	value: 97,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Half-plated pants',
	image: 'halfplatedpants',
	description: 'They consist of several small metal plates',
	type: ItemType.Pants,
	rarity: Rarity.Common,
	attribute: 8,
	value: 159,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Full-plated pants',
	image: 'fullplatedpants',
	description: 'They consist of large metal plates',
	type: ItemType.Pants,
	rarity: Rarity.Common,
	attribute: 10,
	value: 359,
	minimumStrength: 9,
});

registerItem(<Item>{
	name: 'Warrior pants',
	image: 'warriorpants',
	description: 'They consist of two interlocked layers of large metal plates',
	type: ItemType.Pants,
	rarity: Rarity.Uncommon,
	attribute: 11,
	value: 1460,
	minimumStrength: 11,
});

registerItem(<Item>{
	name: 'Rogue pants',
	image: 'roguepants',
	description: 'They are are light but strong',
	type: ItemType.Pants,
	rarity: Rarity.Common,
	attribute: 7,
	value: 320,
	minimumStrength: 5,
});

registerItem(<Item>{
	name: 'Suede pants',
	image: 'suedepants',
	description: 'They are soft to the touch but very strong',
	type: ItemType.Pants,
	rarity: Rarity.Uncommon,
	attribute: 8,
	value: 1430,
	minimumStrength: 5,
});

registerItem(<Item>{
	name: 'Forest pants',
	image: 'forestpants',
	description: 'They are made out of plant fiber',
	type: ItemType.Pants,
	rarity: Rarity.Uncommon,
	attribute: 9,
	value: 5400,
	minimumStrength: 5,
});

registerItem(<Item>{
	name: 'Legion pants',
	image: 'legionpants',
	description: 'They are reinforced on the sides and knees',
	type: ItemType.Pants,
	rarity: Rarity.Uncommon,
	attribute: 10,
	value: 15500,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Commander pants',
	image: 'commanderpants',
	description: 'They are made of heavy plates',
	type: ItemType.Pants,
	rarity: Rarity.Uncommon,
	attribute: 11,
	value: 23000,
	minimumStrength: 11,
});

registerItem(<Item>{
	name: 'Golden pants',
	image: 'goldenpants',
	description: 'They are made out of gold and quite heavy',
	type: ItemType.Pants,
	rarity: Rarity.Uncommon,
	attribute: 11,
	value: 38000,
	minimumStrength: 9,
});

registerItem(<Item>{
	name: 'Scale pants',
	image: 'scalepants',
	description: 'They are resistant but light',
	type: ItemType.Pants,
	rarity: Rarity.Uncommon,
	attribute: 12,
	value: 71000,
	minimumStrength: 8,
});

registerItem(<Item>{
	name: 'Crystal pants',
	image: 'crystalpants',
	description: 'They are made of articulated crystal',
	type: ItemType.Pants,
	rarity: Rarity.Rare,
	attribute: 13,
	value: 130000,
	minimumStrength: 9,
});

registerItem(<Item>{
	name: 'Dweller\'s pants',
	image: 'dwellerspants',
	description: 'They are strong but heavy',
	type: ItemType.Pants,
	rarity: Rarity.Rare,
	attribute: 15,
	value: 790000,
	minimumStrength: 13,
});

registerItem(<Item>{
	name: 'Dark pants',
	image: 'darkpants',
	description: 'They are imbued with dark magic',
	type: ItemType.Pants,
	rarity: Rarity.Rare,
	attribute: 16,
	value: 1490000,
	minimumStrength: 18,
});

registerItem(<Item>{
	name: 'Devil\'s pants',
	image: 'devilspants',
	description: 'They contain the power of a devil',
	type: ItemType.Pants,
	rarity: Rarity.Rare,
	attribute: 18,
	value: 4290000,
	minimumStrength: 23,
});

/**********************************************************/
/** WEAPONS ***********************************************/
/**********************************************************/
registerItem(<Item>{
	name: 'Butter knife',
	image: 'butterknife',
	description: 'It is a blunt butter knife',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 2,
	value: 5,
});

registerItem(<Item>{
	name: 'Bread knife',
	image: 'breadknife',
	description: 'It is a sharp bread knife',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 3,
	value: 7,
});

registerItem(<Item>{
	name: 'Bone knife',
	image: 'boneknife',
	description: 'It is a sharp bread knife',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 4,
	value: 5,
});

registerItem(<Item>{
	name: 'Club',
	image: 'club',
	description: 'It is heavy and solid',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 5,
	value: 6,
	minimumStrength: 5,
});

registerItem(<Item>{
	name: 'Wooden pickaxe',
	image: 'woodenpickaxe',
	description: 'It is probably meant to mine sandstone',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 6,
	value: 7,
});

registerItem(<Item>{
	name: 'Improvised knife',
	image: 'improvisedknife',
	description: 'It is made out of string and sharp metal',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 7,
	value: 10,
});

registerItem(<Item>{
	name: 'Dagger',
	image: 'dagger',
	description: 'It is sharp and has a solid handle',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 9,
	value: 19,
});

registerItem(<Item>{
	name: 'Small pickaxe',
	image: 'smallpickaxe',
	description: 'It is light and the point is a bit blunt from use',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 10,
	value: 15,
});

registerItem(<Item>{
	name: 'Reinforced club',
	image: 'reinforcedclub',
	description: 'It is reinforced with iron',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 10,
	value: 7,
	minimumStrength: 5,
});

registerItem(<Item>{
	name: 'Butcher\'s cleaver',
	image: 'butcherscleaver',
	description: 'It is heavy, well-balanced, and sharp enough to cut through bone',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 11,
	value: 13,
});

registerItem(<Item>{
	name: 'Pickaxe',
	image: 'pickaxe',
	description: 'It is heavy and well-balanced',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 13,
	value: 25,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Guarded dagger',
	image: 'guardeddagger',
	description: 'It covers your hand when holding it',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 13,
	value: 19,
});

registerItem(<Item>{
	name: 'Short sword',
	image: 'shortsword',
	description: 'It is short but sharp',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 13,
	value: 23,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Large dagger',
	image: 'largedagger',
	description: 'It is a fairly oversized dagger',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 14,
	value: 20,
});

registerItem(<Item>{
	name: 'Sickle',
	image: 'sickle',
	description: 'It has a long sharp blade',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 15,
	value: 22,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Saber',
	image: 'saber',
	description: 'It is heavily used and a bit dented, but still sharp',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 16,
	value: 37,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Spiked club',
	image: 'spikedclub',
	description: 'It has pointy spikes made of stone',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 16,
	value: 14,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Scimitar',
	image: 'scimitar',
	description: 'It is curved, thin and sharp',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 17,
	value: 60,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Simple mace',
	image: 'simplemace',
	description: 'It is a good approach to a mace weapon',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 16,
	value: 60,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Barbarian dagger',
	image: 'barbariandagger',
	description: 'It has a hollow center to make it lighter',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 17,
	value: 305,
	minimumStrength: 5,
});

registerItem(<Item>{
	name: 'Barbarian cutlass',
	image: 'barbariancutlass',
	description: 'It has a curved blade and is light enough for anyone to slash with',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 19,
	value: 600,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Berserker hatchet',
	image: 'berserkerhatchet',
	description: 'It is very well balanced and sharp',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 21,
	value: 1400,
	minimumStrength: 8,
});

registerItem(<Item>{
	name: 'Balanced saber',
	image: 'balancedsaber',
	description: 'It looks and feels expensive',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 22,
	value: 2400,
	minimumStrength: 9,
});

registerItem(<Item>{
	name: 'Broadsword',
	image: 'broadsword',
	description: 'It feels like a very solid sword',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 23,
	value: 6080,
	minimumStrength: 9,
});

registerItem(<Item>{
	name: 'Throwing star',
	image: 'throwingstar',
	description: 'It is very sharp and balanced, ready to be thrown',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 10,
	value: 14,
	consumableOnCombat: true,
});

registerItem(<Item>{
	name: 'Explosive artifact',
	image: 'explosiveartifact',
	description: 'It will explode and hit hard in a single combat',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 12,
	value: 25,
	consumableOnCombat: true,
});

registerItem(<Item>{
	name: 'Explosive flask',
	image: 'explosiveflask',
	description: 'It will explode to release chemicals and hit hard in a single combat',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	attribute: 13,
	value: 715,
	consumableOnCombat: true,
});

registerItem(<Item>{
	name: 'Bomb',
	image: 'bomb',
	description: 'It will explode to release shrapnel and hit hard in a single combat',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	attribute: 17,
	value: 1980,
	consumableOnCombat: true,
});

registerItem(<Item>{
	name: 'Crystal knife',
	image: 'crystalknife',
	description: 'It is very sharp but brittle. It looks like it would break after a single combat',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	attribute: 17,
	value: 1120,
	consumableOnCombat: true,
	uniqueOnLoot: true,
});

registerItem(<Item>{
	name: 'Crystal sword',
	image: 'crystalsword',
	description: 'It is very sharp but brittle. It looks like it would break after a single combat',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	attribute: 30,
	value: 42000,
	minimumStrength: 9,
	consumableOnCombat: true,
	uniqueOnLoot: true,
});

registerItem(<Item>{
	name: 'Magic hit scroll',
	image: 'magichitscroll',
	description: 'It is the most basic magic attack, to be used during a single combat',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	minimumIntelligence: 8,
	attribute: 15,
	value: 590,
	consumableOnCombat: true,
});

registerItem(<Item>{
	name: 'Thunderbolt scroll',
	image: 'thunderboltscroll',
	description: 'It is held rolled by an electric-blue string',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	minimumIntelligence: 12,
	attribute: 18,
	value: 4500,
	consumableOnCombat: true,
});

registerItem(<Item>{
	name: 'Spectral hit scroll',
	image: 'spectralhitscroll',
	description: 'It is held rolled by a ghostly string',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	minimumIntelligence: 13,
	attribute: 21,
	value: 6200,
	consumableOnCombat: true,
});

registerItem(<Item>{
	name: 'Direct hit scroll',
	image: 'directhitscroll',
	description: 'It is held rolled by a piece of whip',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	minimumIntelligence: 14,
	attribute: 24,
	value: 12400,
	consumableOnCombat: true,
});

registerItem(<Item>{
	name: 'Ice bolt scroll',
	image: 'iceboltscroll',
	description: 'It is held rolled by a cold string',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	minimumIntelligence: 15,
	attribute: 26,
	value: 35000,
	consumableOnCombat: true,
});

registerItem(<Item>{
	name: 'Magic rope scroll',
	image: 'magicropescroll',
	description: 'It is held rolled by a piece of rope',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	minimumIntelligence: 16,
	attribute: 29,
	value: 52000,
	consumableOnCombat: true,
});

registerItem(<Item>{
	name: 'Fireball scroll',
	image: 'fireballscroll',
	description: 'It is held rolled by red-hot string',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	minimumIntelligence: 17,
	attribute: 32,
	value: 53000,
	consumableOnCombat: true,
});

registerItem(<Item>{
	name: 'Bouncing hit scroll',
	image: 'bouncinghitscroll',
	description: 'It is held rolled by a rope that wiggles',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	minimumIntelligence: 19,
	attribute: 33,
	value: 152000,
	consumableOnCombat: true,
});

registerItem(<Item>{
	name: 'Deadly hit scroll',
	image: 'deadlyhitscroll',
	description: 'It is held rolled by a skull pin',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	minimumIntelligence: 22,
	attribute: 35,
	value: 352000,
	consumableOnCombat: true,
});

registerItem(<Item>{
	name: 'Frost scroll',
	image: 'frostscroll',
	description: 'It is frozen and held rolled by a skull pin',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	minimumIntelligence: 24,
	attribute: 37,
	value: 552000,
	consumableOnCombat: true,
});

registerItem(<Item>{
	name: 'Poison scroll',
	image: 'poisonscroll',
	description: 'It is imbued with a green substance',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	minimumIntelligence: 26,
	attribute: 40,
	value: 752000,
	consumableOnCombat: true,
});

registerItem(<Item>{
	name: 'Spear',
	image: 'spear',
	description: 'It is long and pointy',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 15,
	value: 190,
	minimumStrength: 11,
});

registerItem(<Item>{
	name: 'Reinforced spear',
	image: 'reinforcedspear',
	description: 'It has a pointy tip and claws',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 17,
	value: 490,
	minimumStrength: 12,
});

registerItem(<Item>{
	name: 'Stone axe',
	image: 'stoneaxe',
	description: 'It weighs a lot and is not very sharp',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 16,
	value: 120,
	minimumStrength: 14,
});

registerItem(<Item>{
	name: 'Flint axe',
	image: 'flintaxe',
	description: 'It weighs a lot and is quite sharp',
	type: ItemType.Weapon,
	rarity: Rarity.Common,
	attribute: 18,
	value: 460,
	minimumStrength: 16,
});

registerItem(<Item>{
	name: 'Claws',
	image: 'claws',
	description: 'It can be worn in the hands and is very sharp',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 16,
	value: 12590,
});

registerItem(<Item>{
	name: 'Wretched dagger',
	image: 'wretcheddagger',
	description: 'It feels possessed by a evil presence',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 16,
	value: 24590,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Insect dagger',
	image: 'insectdagger',
	description: 'It is decorated with dead insects',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 17,
	value: 35200,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Amber knife',
	image: 'amberknife',
	description: 'It contains a chunk of bright amber',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 18,
	value: 47000,
	minimumStrength: 8,
});

registerItem(<Item>{
	name: 'Poisonous knife',
	image: 'poisonousknife',
	description: 'It drips poison from the tip',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 19,
	value: 70200,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Poisonous saber',
	image: 'poisonoussaber',
	description: 'It drips poison from the edge',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 24,
	value: 32000,
	minimumStrength: 9,
});

registerItem(<Item>{
	name: 'Double axe',
	image: 'doubleaxe',
	description: 'It is quite balanced',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 25,
	value: 47000,
	minimumStrength: 11,
});

registerItem(<Item>{
	name: 'Stone and chain',
	image: 'stoneandchain',
	description: 'It is a very heavy flail weapon',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 22,
	value: 12000,
	minimumStrength: 12,
});

registerItem(<Item>{
	name: 'Ball and chain',
	image: 'ballandchain',
	description: 'It has a heavy spikey ball',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 23,
	value: 22000,
	minimumStrength: 12,
});

registerItem(<Item>{
	name: 'Balls and chain',
	image: 'ballsandchain',
	description: 'It has several heavy spikey balls',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 24,
	value: 32000,
	minimumStrength: 13,
});

registerItem(<Item>{
	name: 'Iron hammer',
	image: 'ironhammer',
	description: 'It is very heavy',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 25,
	value: 65000,
	minimumStrength: 15,
});

registerItem(<Item>{
	name: 'Pointy flail',
	image: 'pointyflail',
	description: 'It has a very pointy ball in the end',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 26,
	value: 78000,
	minimumStrength: 13,
});

registerItem(<Item>{
	name: 'Ceremonial spear',
	image: 'ceremonialspear',
	description: 'It is decorated with gems',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	attribute: 26,
	value: 86000,
	minimumStrength: 12,
});

registerItem(<Item>{
	name: 'Large hammer',
	image: 'largehammer',
	description: 'It is severely oversized',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 27,
	value: 105000,
	minimumStrength: 15,
});

registerItem(<Item>{
	name: 'Hell dagger',
	image: 'helldagger',
	description: 'It wiggles as if possessed by an entity',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	attribute: 27,
	value: 250000,
	minimumStrength: 10,
});

registerItem(<Item>{
	name: 'Skull staff',
	image: 'skullstaff',
	description: 'It has a skull with two horns at the tip',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	attribute: 27,
	value: 150000,
	minimumIntelligence: 14,
});

registerItem(<Item>{
	name: 'Heaven\'s axe',
	image: 'heavensaxe',
	description: 'It shines with heavenly power',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	attribute: 28,
	value: 180000,
	minimumStrength: 13,
});

registerItem(<Item>{
	name: 'Warhammer',
	image: 'warhammer',
	description: 'It is heavy and powerful',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 28,
	value: 220000,
	minimumStrength: 17,
});

registerItem(<Item>{
	name: 'Trident',
	image: 'trident',
	description: 'It is heavy and sharp',
	type: ItemType.Weapon,
	rarity: Rarity.Uncommon,
	attribute: 28,
	value: 240000,
	minimumStrength: 16,
});

registerItem(<Item>{
	name: 'Holy hammer',
	image: 'holyhammer',
	description: 'It feels blessed',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	attribute: 32,
	value: 1870000,
	minimumStrength: 25,
});

registerItem(<Item>{
	name: 'Dark sword',
	image: 'darksword',
	description: 'It feels powerful and evil',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	attribute: 35,
	value: 3430000,
	minimumStrength: 29,
});

registerItem(<Item>{
	name: 'Enchanted saber',
	image: 'enchantedsaber',
	description: 'It feels the most balanced a weapon can be',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	attribute: 37,
	value: 6200000,
	minimumStrength: 33,
});

registerItem(<Item>{
	name: 'Lava axe',
	image: 'lavaaxe',
	description: 'It is made of molten lava held together by magic',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	attribute: 40,
	value: 19200000,
	minimumStrength: 37,
});

registerItem(<Item>{
	name: 'Demon axe',
	image: 'demonaxe',
	description: 'It is made of the flesh and bones of a demon',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	attribute: 42,
	value: 45000000,
	minimumStrength: 45,
});

registerItem(<Item>{
	name: 'Great sword',
	image: 'greatsword',
	description: 'It is giant, super sharp, and swings swiftly',
	type: ItemType.Weapon,
	rarity: Rarity.Rare,
	attribute: 45,
	value: 100000000,
	minimumStrength: 50,
});

/**********************************************************/
/** SHIELD ************************************************/
/**********************************************************/
registerItem(<Item>{
	name: 'Wooden shield',
	image: 'woodenshield',
	description: 'It is square, made out of wood, and feels like it would help you stop some hits',
	type: ItemType.Shield,
	rarity: Rarity.Common,
	attribute: 6,
	value: 5,
	minimumStrength: 5,
});

registerItem(<Item>{
	name: 'Reinforced shield',
	image: 'reinforcedshield',
	description: 'It is reinforced with iron to make it more resistant',
	type: ItemType.Shield,
	rarity: Rarity.Common,
	attribute: 7,
	value: 12,
	minimumStrength: 5,
});

registerItem(<Item>{
	name: 'Round shield',
	image: 'roundshield',
	description: 'It has a solid round circular iron rim',
	type: ItemType.Shield,
	rarity: Rarity.Common,
	attribute: 8,
	value: 19,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Gold-rimmed shield',
	image: 'goldrimmedshield',
	description: 'It has a rim made of gold',
	type: ItemType.Shield,
	rarity: Rarity.Uncommon,
	attribute: 8,
	value: 450,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Large wooden shield',
	image: 'largewoodenshield',
	description: 'It is large and reinforced with bronze',
	type: ItemType.Shield,
	rarity: Rarity.Common,
	attribute: 9,
	value: 24,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Square shield',
	image: 'squareshield',
	description: 'It is large and fully covers your body',
	type: ItemType.Shield,
	rarity: Rarity.Common,
	attribute: 10,
	value: 58,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Formation shield',
	image: 'formationshield',
	description: 'It can lock with other similar shields into a formation setup',
	type: ItemType.Shield,
	rarity: Rarity.Common,
	attribute: 11,
	value: 150,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Shell shield',
	image: 'shellshield',
	description: 'It is made out of the shield of a giant tortoise',
	type: ItemType.Shield,
	rarity: Rarity.Common,
	attribute: 11,
	value: 230,
	minimumStrength: 6,
});

registerItem(<Item>{
	name: 'Army shield',
	image: 'armyshield',
	description: 'It is a light round shield painted with the colors of a kingdom',
	type: ItemType.Shield,
	rarity: Rarity.Common,
	attribute: 11,
	value: 180,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Buckler',
	image: 'buckler',
	description: 'It is small and entirely made out of metal, but light and fast to move',
	type: ItemType.Shield,
	rarity: Rarity.Uncommon,
	attribute: 12,
	value: 490,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Stone shield',
	image: 'stoneshield',
	description: 'It is very heavy but strong',
	type: ItemType.Shield,
	rarity: Rarity.Uncommon,
	attribute: 22,
	value: 350,
	minimumStrength: 18,
});

registerItem(<Item>{
	name: 'Reflective shield',
	image: 'reflectiveshield',
	description: 'It has an enchanted crystal that holds a reflective spell',
	type: ItemType.Shield,
	rarity: Rarity.Rare,
	attribute: 13,
	value: 1210,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Magic shield scroll',
	image: 'magicshieldscroll',
	description: 'It is held rolled by a shield-shaped metallic pin',
	type: ItemType.Shield,
	rarity: Rarity.Rare,
	minimumIntelligence: 7,
	attribute: 15,
	value: 800,
	consumableOnCombat: true,
});

registerItem(<Item>{
	name: 'Cyclops shield',
	image: 'cyclopsshield',
	description: 'It is a very heavy shield made out of iron and stone',
	type: ItemType.Shield,
	rarity: Rarity.Uncommon,
	attribute: 26,
	value: 12200,
	minimumStrength: 25,
});

registerItem(<Item>{
	name: 'Tortoise shield',
	image: 'tortoiseshield',
	description: 'It is made out of the shell of a tortoise',
	type: ItemType.Shield,
	rarity: Rarity.Uncommon,
	attribute: 14,
	value: 25210,
	minimumStrength: 9,
});

registerItem(<Item>{
	name: 'Interlocking shield',
	image: 'interlockingshield',
	description: 'It can lock with other shields into a very strong formation setup',
	type: ItemType.Shield,
	rarity: Rarity.Uncommon,
	attribute: 15,
	value: 78500,
	minimumStrength: 10,
});

registerItem(<Item>{
	name: 'Magic mirror shield',
	image: 'magicmirrorshield',
	description: 'It has a mirror imbued with reflective magic',
	type: ItemType.Shield,
	rarity: Rarity.Rare,
	attribute: 16,
	value: 425000,
	minimumStrength: 8,
});

registerItem(<Item>{
	name: 'Mind shield',
	image: 'mindshield',
	description: 'It is magic and looks like it would confuse enemies',
	type: ItemType.Shield,
	rarity: Rarity.Rare,
	attribute: 16,
	value: 850000,
	minimumStrength: 7,
});

registerItem(<Item>{
	name: 'Tower shield',
	image: 'towershield',
	description: 'It is a traditional full tower shield, lined with gold',
	type: ItemType.Shield,
	rarity: Rarity.Uncommon,
	attribute: 17,
	value: 1300000,
	minimumStrength: 11,
});

registerItem(<Item>{
	name: 'Blessed shield',
	image: 'blessedshield',
	description: 'It feels powerful',
	type: ItemType.Shield,
	rarity: Rarity.Rare,
	attribute: 19,
	value: 2400100,
	minimumStrength: 13,
});

registerItem(<Item>{
	name: 'Scarab shield',
	image: 'scarabshield',
	description: 'It is made of the shell of a giant magic scarab',
	type: ItemType.Shield,
	rarity: Rarity.Rare,
	attribute: 24,
	value: 3490000,
	minimumStrength: 18,
});

registerItem(<Item>{
	name: 'Devil\'s shield',
	image: 'devilsshield',
	description: 'It contains the power of a devil',
	type: ItemType.Shield,
	rarity: Rarity.Rare,
	attribute: 28,
	value: 3490000,
	minimumStrength: 29,
});

registerItem(<Item>{
	name: 'Meteorite shield',
	image: 'meteoriteshield',
	description: 'It is made one-piece from a meteorite',
	type: ItemType.Shield,
	rarity: Rarity.Rare,
	attribute: 34,
	value: 42300000,
	minimumStrength: 38,
});

registerItem(<Item>{
	name: 'Distortion shield',
	image: 'distortionshield',
	description: 'It is made of a distortion in reality',
	type: ItemType.Shield,
	rarity: Rarity.Rare,
	attribute: 38,
	value: 91000000,
	minimumStrength: 45,
});

/**********************************************************/
/** REAGENT STONES ****************************************/
/**********************************************************/
registerItem(<Item>{
	name: 'Stone',
	image: 'stone',
	description: 'It looks pretty uniteresting',
	type: ItemType.ReagentStone,
	rarity: Rarity.Common,
	value: 0,
	attribute: 1,
});

registerItem(<Item>{
	name: 'Sandstone',
	image: 'sandstone',
	description: 'It looks pretty uniteresting',
	type: ItemType.ReagentStone,
	rarity: Rarity.Common,
	value: 0,
	attribute: 1,
});

registerItem(<Item>{
	name: 'Amber',
	image: 'amber',
	description: 'It has a deep orange color and is translucent',
	type: ItemType.ReagentStone,
	rarity: Rarity.Uncommon,
	value: 5,
	attribute: 5,
});

registerItem(<Item>{
	name: 'Flint',
	image: 'flint',
	description: 'It is sharp',
	type: ItemType.ReagentStone,
	rarity: Rarity.Common,
	value: 1,
	attribute: 5,
});

registerItem(<Item>{
	name: 'Amethyst',
	image: 'amethyst',
	description: 'It has a deep purple color',
	type: ItemType.ReagentStone,
	rarity: Rarity.Uncommon,
	value: 80,
	attribute: 10,
});

registerItem(<Item>{
	name: 'Obsidian',
	image: 'obsidian',
	description: 'It feels very hard and cold',
	type: ItemType.ReagentStone,
	rarity: Rarity.Uncommon,
	value: 200,
	attribute: 30,
});

registerItem(<Item>{
	name: 'Jade',
	image: 'jade',
	description: 'It has a soft green color',
	type: ItemType.ReagentStone,
	rarity: Rarity.Uncommon,
	value: 260,
	attribute: 35,
});

registerItem(<Item>{
	name: 'Pyrite',
	image: 'pyrite',
	description: 'It forms perfect metallic cubes',
	type: ItemType.ReagentStone,
	rarity: Rarity.Uncommon,
	value: 50,
	attribute: 22,
});

registerItem(<Item>{
	name: 'Quartz',
	image: 'quartz',
	description: 'It is translucent',
	type: ItemType.ReagentStone,
	rarity: Rarity.Uncommon,
	value: 120,
	attribute: 25,
});

registerItem(<Item>{
	name: 'Ruby',
	image: 'ruby',
	description: 'It has a deep red color',
	type: ItemType.ReagentStone,
	rarity: Rarity.Uncommon,
	value: 1200,
	attribute: 60,
});

registerItem(<Item>{
	name: 'Golem\'s heart',
	image: 'golemsheart',
	description: 'It pulsates',
	type: ItemType.ReagentStone,
	rarity: Rarity.Rare,
	value: 9200,
	attribute: 290,
});

registerItem(<Item>{
	name: 'Meteorite shard',
	image: 'meteoriteshard',
	description: 'It emanates an evil presence',
	type: ItemType.ReagentStone,
	rarity: Rarity.Rare,
	value: 1000000000,
	attribute: 100000,
});

registerItem(<Item>{
	name: 'Power crystal',
	image: 'powercrystal',
	description: 'It concentrates an endless amount of power',
	type: ItemType.ReagentStone,
	rarity: Rarity.Rare,
	value: 1000000000,
	attribute: 100000,
});

/**********************************************************/
/** REAGENT BODY PARTS ************************************/
/**********************************************************/
registerItem(<Item>{
	name: 'Skull',
	image: 'skull',
	description: 'These bones are shaped like a human head',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Common,
	value: 3,
	attribute: 15,
});

registerItem(<Item>{
	name: 'Bone',
	image: 'bone',
	description: 'It feels splintery',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Common,
	value: 1,
	attribute: 3,
});

registerItem(<Item>{
	name: 'Spine',
	image: 'spine',
	description: 'It wiggles cheerfully when you shake it',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Common,
	value: 1,
	attribute: 5,
});

registerItem(<Item>{
	name: 'Frog\'s fang',
	image: 'frogsfang',
	description: 'It is pointy and scratchy',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Common,
	value: 2,
	attribute: 5,
});

registerItem(<Item>{
	name: 'Frog\'s eye',
	image: 'frogseye',
	description: 'It is squishy',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Uncommon,
	value: 2,
	attribute: 7,
});

registerItem(<Item>{
	name: 'Kobold\'s eye',
	image: 'koboldseye',
	description: 'It is squishy',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Uncommon,
	value: 3,
	attribute: 9,
});

registerItem(<Item>{
	name: 'Ghoul\'s eye',
	image: 'ghoulseye',
	description: 'It is squishy and looks around',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 300,
	attribute: 300,
});

registerItem(<Item>{
	name: 'Lurker\'s claw',
	image: 'lurkersclaw',
	description: 'It is very strong',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 40,
	attribute: 29,
});

registerItem(<Item>{
	name: 'Giant snail\'s eye',
	image: 'giantsnailseye',
	description: 'It is quite long',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 190,
	attribute: 60,
});

registerItem(<Item>{
	name: 'Giant snail\'s shell',
	image: 'giantsnailsshell',
	description: 'It is rock-hard',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 220,
	attribute: 70,
});

registerItem(<Item>{
	name: 'Toad\'s tongue',
	image: 'toadstongue',
	description: 'It is poisonous',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 440,
	attribute: 92,
});

registerItem(<Item>{
	name: 'Naga\'s finger',
	image: 'nagasfinger',
	description: 'It is still covered in blood',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 600,
	attribute: 94,
});

registerItem(<Item>{
	name: 'Lich\'s eye',
	image: 'lichseye',
	description: 'It tries to stick and merge with your skin',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 4900,
	attribute: 1600,
});

registerItem(<Item>{
	name: 'Lich\'s hand',
	image: 'lichshand',
	description: 'This hand twitches in multiple dimensions',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 5320,
	attribute: 1900,
	getAchievement: 'Killed the Lich',
});

registerItem(<Item>{
	name: 'Flying imp\'s wing',
	image: 'flyingimpswing',
	description: 'It is impressively light',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Uncommon,
	value: 6,
	attribute: 70,
});

registerItem(<Item>{
	name: 'Kobold\'s heart',
	image: 'koboldsheart',
	description: 'It is a bloody heart',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Common,
	value: 4,
	attribute: 120,
});

registerItem(<Item>{
	name: 'Goblin\'s liver',
	image: 'goblinsliver',
	description: 'It is said that some goblins have two livers',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 15,
	attribute: 140,
});

registerItem(<Item>{
	name: 'Hermit\'s brain',
	image: 'hermitsbrain',
	description: 'It looks quite like that of a human',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 45,
	attribute: 190,
});

registerItem(<Item>{
	name: 'Ghoul\'s heart',
	image: 'ghoulsheart',
	description: 'It keeps pulsating',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 400,
	attribute: 570,
	getAchievement: 'Killed the Ghoul',
});

registerItem(<Item>{
	name: 'Hermit\'s skull',
	image: 'hermitsskull',
	description: 'These bones are shaped like a deformed human head',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 45,
	attribute: 200,
});

registerItem(<Item>{
	name: 'Lurker\'s skull',
	image: 'lurkersskull',
	description: 'It is a two-piece skull with fangs',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 60,
	attribute: 250,
});

registerItem(<Item>{
	name: 'Goblin\'s heart',
	image: 'goblinsheart',
	description: 'It came out of a goblin',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 80,
	attribute: 290,
});

registerItem(<Item>{
	name: 'Goblin\'s skull',
	image: 'goblinsskull',
	description: 'It is a tiny skull',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 70,
	attribute: 220,
});

registerItem(<Item>{
	name: 'Spike troll\'s tooth',
	image: 'spiketrollstooth',
	description: 'It is huge',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 90,
	attribute: 180,
});

registerItem(<Item>{
	name: 'Spike',
	image: 'spike',
	description: 'It is from a spike troll',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 120,
	attribute: 220,
});

registerItem(<Item>{
	name: 'Cultist\'s brain',
	image: 'cultistsbrain',
	description: 'It looks entangled',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 59000,
	attribute: 2000,
});

registerItem(<Item>{
	name: 'Giant snake\'s fang',
	image: 'giantsnakesfang',
	description: 'It drips poison from the tip',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Uncommon,
	value: 160,
	attribute: 280,
});

registerItem(<Item>{
	name: 'Scorpion\'s stinger',
	image: 'scorpionsstinger',
	description: 'It drips poison from the tip',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 180,
	attribute: 320,
});

registerItem(<Item>{
	name: 'Mutant spider\'s leg',
	image: 'mutantspidersleg',
	description: 'It is oddly shaped',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 120,
	attribute: 240,
});

registerItem(<Item>{
	name: 'Human bone',
	image: 'humanbone',
	description: 'It is fresh',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Uncommon,
	value: 60,
	attribute: 30,
});

registerItem(<Item>{
	name: 'Minion\'s skull',
	image: 'minionsskull',
	description: 'It is tiny',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 170,
	attribute: 340,
});

registerItem(<Item>{
	name: 'Great imp\'s skull',
	image: 'greatimpsskull',
	description: 'It is impressive',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 180,
	attribute: 360,
});

registerItem(<Item>{
	name: 'Swarmer\'s foot',
	image: 'swarmersfoot',
	description: 'It has large and sharp nails',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 600,
	attribute: 450,
});

registerItem(<Item>{
	name: 'Cyclops\' hand',
	image: 'cyclopshand',
	description: 'It looks very strong and is very heavy',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 1200,
	attribute: 750,
});

registerItem(<Item>{
	name: 'Cyclops\' eye',
	image: 'cyclopseye',
	description: 'It looks unique',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 1000,
	attribute: 5550,
});

registerItem(<Item>{
	name: 'Troll\'s bowels',
	image: 'trollsbowels',
	description: 'They are quite long',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 100,
	attribute: 520,
});

registerItem(<Item>{
	name: 'Orc\'s finger',
	image: 'orcsfinger',
	description: 'It is rock hard',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 100,
	attribute: 420,
});

registerItem(<Item>{
	name: 'Abomination\'s hand',
	image: 'abominationshand',
	description: 'It is one of the small extra hands of the abomination',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 10000,
	attribute: 4020,
});

registerItem(<Item>{
	name: 'Abomination\'s teeth',
	image: 'abominationsteeth',
	description: 'They came out in one piece',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 320,
	attribute: 3410,
	getAchievement: 'Killed the Abomination',
});

registerItem(<Item>{
	name: 'Devourer\'s heart',
	image: 'devourersheart',
	description: 'It feels thick and strong',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 8000,
	attribute: 2900,
});

registerItem(<Item>{
	name: 'Beholder\'s eye',
	image: 'beholderseye',
	description: 'It feels like it still beholds',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 12000,
	attribute: 3500,
});

registerItem(<Item>{
	name: 'Shredder\'s eye',
	image: 'shredderseye',
	description: 'It looks very deep',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 18000,
	attribute: 4500,
});

registerItem(<Item>{
	name: 'Shredder\'s teeth',
	image: 'shreddersteeth',
	description: 'They are very sharp',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 10000,
	attribute: 550,
});

registerItem(<Item>{
	name: 'Ectoplasm',
	image: 'ectoplasm',
	description: 'It is translucent and very light',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 1550000,
	attribute: 17000,
});

registerItem(<Item>{
	name: 'Destroyer\'s brain',
	image: 'destroyersbrain',
	description: 'It is a glass artifact that kept the destroyer alive',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 20000000,
	attribute: 27000,
	getAchievement: 'Killed the Destroyer',
});

registerItem(<Item>{
	name: 'Demon skeleton head',
	image: 'demonskeletonhead',
	description: 'It glows from the inside as if it was still alive',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 200000000,
	attribute: 50000,
});

registerItem(<Item>{
	name: 'Magma demon\'s heart',
	image: 'magmademonsheart',
	description: 'It has a magma core but seems to be weak right now',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 500000000,
	attribute: 150000,
});

registerItem(<Item>{
	name: 'Demon overlord horn',
	image: 'demonoverlordhorn',
	description: 'Magic flows through it',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 1000000000,
	attribute: 300000,
});

registerItem(<Item>{
	name: 'Corrupted heart',
	image: 'corruptedheart',
	description: 'It looks like it once was a human heart, but got corrupted when they became the curse',
	type: ItemType.ReagentBodyPart,
	rarity: Rarity.Rare,
	value: 10000000000,
	attribute: 1000000,
	getAchievement: 'Killed the Curse',
});

/**********************************************************/
/** REAGENT TINKERING *************************************/
/**********************************************************/
registerItem(<Item>{
	name: 'Strip of cloth',
	image: 'stripofcloth',
	description: 'It is long and thin',
	type: ItemType.ReagentTinkering,
	rarity: Rarity.Common,
	value: 2,
	attribute: 3,
});

registerItem(<Item>{
	name: 'Spool of thread',
	image: 'spoolofthread',
	description: 'It is very thin and light',
	type: ItemType.ReagentTinkering,
	rarity: Rarity.Common,
	value: 1,
	attribute: 5,
});

registerItem(<Item>{
	name: 'Spool of yarn',
	image: 'spoolofyarn',
	description: 'It is fuzzy and thick',
	type: ItemType.ReagentTinkering,
	rarity: Rarity.Common,
	value: 2,
	attribute: 5,
});

registerItem(<Item>{
	name: 'String',
	image: 'string',
	description: 'It feels rough',
	type: ItemType.ReagentTinkering,
	rarity: Rarity.Common,
	value: 2,
	attribute: 8,
});

registerItem(<Item>{
	name: 'Needle',
	image: 'needle',
	description: 'It is prickly',
	type: ItemType.ReagentTinkering,
	rarity: Rarity.Common,
	value: 1,
	attribute: 3,
});

registerItem(<Item>{
	name: 'Nail',
	image: 'nail',
	description: 'It is prickly',
	type: ItemType.ReagentTinkering,
	rarity: Rarity.Common,
	value: 1,
	attribute: 3,
});

registerItem(<Item>{
	name: 'Screw',
	image: 'screw',
	description: 'It is just a screw',
	type: ItemType.ReagentTinkering,
	rarity: Rarity.Common,
	value: 1,
	attribute: 3,
});

registerItem(<Item>{
	name: 'Toy doll',
	image: 'toydoll',
	description: 'It feels cursed',
	type: ItemType.ReagentTinkering,
	rarity: Rarity.Uncommon,
	value: 150,
	attribute: 350,
});

registerItem(<Item>{
	name: 'Shaman stand',
	image: 'shamanstand',
	description: 'It seems to attract magic',
	type: ItemType.ReagentTinkering,
	rarity: Rarity.Uncommon,
	value: 250,
	attribute: 550,
});

registerItem(<Item>{
	name: 'Metal tail',
	image: 'metaltail',
	description: 'It still moves',
	type: ItemType.ReagentTinkering,
	rarity: Rarity.Rare,
	value: 1250,
	attribute: 130,
});

registerItem(<Item>{
	name: 'Gear',
	image: 'gear',
	description: 'It is oddly shaped',
	type: ItemType.ReagentTinkering,
	rarity: Rarity.Rare,
	value: 50,
	attribute: 20,
});

registerItem(<Item>{
	name: 'Golden gear',
	image: 'goldengear',
	description: 'It is oddly shaped and golden',
	type: ItemType.ReagentTinkering,
	rarity: Rarity.Rare,
	value: 50,
	attribute: 20,
});

registerItem(<Item>{
	name: 'Bot\'s core',
	image: 'botscore',
	description: 'It feels both artificial and alive',
	type: ItemType.ReagentTinkering,
	rarity: Rarity.Rare,
	value: 1150000,
	attribute: 750,
});

/**********************************************************/
/** REAGENT NATURE ****************************************/
/**********************************************************/
registerItem(<Item>{
	name: 'Worm',
	image: 'worm',
	description: 'It wiggles',
	type: ItemType.ReagentNature,
	rarity: Rarity.Common,
	value: 2,
	attribute: 27,
});

registerItem(<Item>{
	name: 'Daisy flower',
	image: 'daisyflower',
	description: 'It is a nice flower',
	type: ItemType.ReagentNature,
	rarity: Rarity.Common,
	value: 1,
	attribute: 6,
});

registerItem(<Item>{
	name: 'Poison ivy',
	image: 'poisonivy',
	description: 'It has to be handled carefully',
	type: ItemType.ReagentNature,
	rarity: Rarity.Common,
	value: 3,
	attribute: 80,
});

registerItem(<Item>{
	name: 'Red berries',
	image: 'redberries',
	description: 'They smell pungent',
	type: ItemType.ReagentNature,
	rarity: Rarity.Common,
	value: 4,
	attribute: 40,
});

registerItem(<Item>{
	name: 'Swamp slug',
	image: 'swampslug',
	description: 'It wiggles and constantly tries to escape',
	type: ItemType.ReagentNature,
	rarity: Rarity.Uncommon,
	value: 16,
	attribute: 95,
});

registerItem(<Item>{
	name: 'Starfish',
	image: 'starfish',
	description: 'It is not clear if it is alive or death',
	type: ItemType.ReagentNature,
	rarity: Rarity.Common,
	value: 12,
	attribute: 60,
});

registerItem(<Item>{
	name: 'Slime',
	image: 'slime',
	description: 'It is slimy',
	type: ItemType.ReagentNature,
	rarity: Rarity.Common,
	value: 190,
	attribute: 60,
});

registerItem(<Item>{
	name: 'Purpla leave',
	image: 'purplaleave',
	description: 'It shines purple',
	type: ItemType.ReagentNature,
	rarity: Rarity.Rare,
	value: 16,
	attribute: 170,
});

registerItem(<Item>{
	name: 'Swamp vine',
	image: 'swampvine',
	description: 'It often grows in swamps',
	type: ItemType.ReagentNature,
	rarity: Rarity.Rare,
	value: 220,
	attribute: 72,
});

registerItem(<Item>{
	name: 'Solid haze',
	image: 'solidhaze',
	description: 'It was solidified by a Naga',
	type: ItemType.ReagentNature,
	rarity: Rarity.Rare,
	value: 220,
	attribute: 150,
});

registerItem(<Item>{
	name: 'Heavy water',
	image: 'heavywater',
	description: 'Some magic must have turned it heavy',
	type: ItemType.ReagentNature,
	rarity: Rarity.Rare,
	value: 220,
	attribute: 150,
});

registerItem(<Item>{
	name: 'Larvae',
	image: 'larvae',
	description: 'It wiggles',
	type: ItemType.ReagentNature,
	rarity: Rarity.Rare,
	value: 2500,
	attribute: 300,
});

registerItem(<Item>{
	name: 'Sand mushroom',
	image: 'sandmushroom',
	description: 'It smells pungent',
	type: ItemType.ReagentNature,
	rarity: Rarity.Uncommon,
	attribute: 10,
	value: 52,
});

registerItem(<Item>{
	name: 'Shadow mushroom',
	image: 'shadowmushroom',
	description: 'It expels shadow powder',
	type: ItemType.ReagentNature,
	rarity: Rarity.Uncommon,
	value: 500,
	attribute: 100,
});

registerItem(<Item>{
	name: 'Howler\'s slime',
	image: 'howlersslime',
	description: 'It is very thick',
	type: ItemType.ReagentNature,
	rarity: Rarity.Rare,
	value: 900,
	attribute: 1250,
});

registerItem(<Item>{
	name: 'Forest keeper fruit',
	image: 'forestkeeperfruit',
	description: 'It is said these are highly poisonous',
	type: ItemType.ReagentNature,
	rarity: Rarity.Rare,
	value: 120,
	attribute: 300,
});

registerItem(<Item>{
	name: 'Predator hatchling',
	image: 'predatorhatchling',
	description: 'It is actually cute',
	type: ItemType.ReagentNature,
	rarity: Rarity.Rare,
	value: 1200000,
	attribute: 7000,
});

registerItem(<Item>{
	name: 'Acid',
	image: 'acid',
	description: 'It hurts to the touch',
	type: ItemType.ReagentNature,
	rarity: Rarity.Rare,
	value: 400,
	attribute: 230,
});

registerItem(<Item>{
	name: 'Demon statue',
	image: 'demonstatue',
	description: 'It pictures a demon',
	type: ItemType.ReagentNature,
	rarity: Rarity.Rare,
	value: 300000000,
	attribute: 100000,
});

/**********************************************************/
/**  CURRENCY *********************************************/
/**********************************************************/
registerItem(<Item>{
	name: 'Stone coin',
	image: 'stonecoin',
	description: 'It is round and seems to have a fossil inside',
	type: ItemType.Currency,
	rarity: Rarity.Common,
	value: 1,
});

registerItem(<Item>{
	name: 'Copper coin',
	image: 'coppercoin',
	description: 'It is round, shiny and has a mark that looks like a horseshoe',
	type: ItemType.Currency,
	rarity: Rarity.Common,
	value: 10,
});
registerItem(<Item>{
	name: 'Bronze coin',
	image: 'bronzecoin',
	description: 'It is round and shiny and has some a mark that looks like a line',
	type: ItemType.Currency,
	rarity: Rarity.Common,
	value: 100,
});

registerItem(<Item>{
	name: 'Silver coin',
	image: 'silvercoin',
	description: 'It is round and shiny and has some worn out marks',
	type: ItemType.Currency,
	rarity: Rarity.Common,
	value: 1000,
});

registerItem(<Item>{
	name: 'Gold coin',
	image: 'goldcoin',
	description: 'It is round and shiny and has a mark that looks like a beetle',
	type: ItemType.Currency,
	rarity: Rarity.Uncommon,
	value: 10000,
});

registerItem(<Item>{
	name: 'Demon token',
	image: 'demontoken',
	description: 'It is round and shiny and is valuable across many dimensions',
	type: ItemType.Currency,
	rarity: Rarity.Rare,
	value: 1000000000,
	getAchievement: 'Killed the Demon Overlord',
});

/**********************************************************/
/** HEALING ***********************************************/
/**********************************************************/
registerItem(<Item>{
	name: 'Healing scroll',
	image: 'healingscroll',
	description: 'It is held rolled by string and by leaves that suggest that reading it will heal you',
	type: ItemType.Healing,
	rarity: Rarity.Rare,
	minimumIntelligence: 7,
	attribute: 150,
	value: 37,
	useFunction: function(): boolean {
		if (d.hp >= maxHp) {
			outLine('You are not wounded right now');
			return false;
		}
		outLine('You read the ' + this.name);
		outSpace();
		var newHp = Math.min(maxHp, d.hp + this.attribute);
		var delta = newHp - d.hp;
		d.hp = newHp;
		outLine('It made you recover ' + delta + ' hit point' + s(delta));
		return true;
	},
});

registerItem(<Item>{
	name: 'Healing potion',
	image: 'healingpotion',
	description: 'It smells like it would heal you',
	type: ItemType.Healing,
	rarity: Rarity.Rare,
	attribute: 25,
	value: 25,
	useFunction: function(): boolean {
		if (d.hp >= maxHp) {
			outLine('You are not wounded right now');
			return false;
		}
		outLine('You drank the ' + this.name);
		var newHp = Math.min(maxHp, d.hp + this.attribute);
		var delta = newHp - d.hp;
		d.hp = newHp;
		outLine('It made you recover ' + delta + ' hit point' + s(delta));
		return true;
	},
});

/**********************************************************/
/** GARBAGE BAG *******************************************/
/**********************************************************/

registerItem(<Item>{
	name: 'Garbage bag',
	image: 'garbagebag',
	description: 'It can be used to throw away all unnecessary items and keep the inventory tidy',
	type: ItemType.GarbageBag,
	rarity: Rarity.Common,
	value: 1,
	uniqueOnLoot: true,
	useFunction: function(): boolean {
		var garbageArray = [ItemType.Weapon, ItemType.Shield, ItemType.Helmet, ItemType.Armor, ItemType.Pants, ItemType.Boots];
		var threwAwaySomething = false;
		for (let i in garbageArray) {
			var type = garbageArray[i];
			var eq = d.equip[type];
			var bestItem = '';
			var hasConsumable = false;
			if (eq && !items[eq].consumableOnCombat) {
				bestItem = eq;
			}
			if (eq && items[eq].consumableOnCombat) {
				hasConsumable = true;
			}
			if (!bestItem) {
				// Find the best
		        for (let i in d.inventory) {
	                var item = items[d.inventory[i].item];
	                if (item.type != type) {
	                	continue;
	                }
	                if (item.consumableOnCombat) {
	                	continue
	                }
	                if (!bestItem) {
	                	bestItem = item.name;
	                	continue;
	                }
	                if (item.attribute > items[bestItem].attribute) {
	                	bestItem = item.name;
	                }
	            }
			}

	        var j = 0;
	        while (j < d.inventory.length) {
                var item = items[d.inventory[j].item];
                if (item.type != type) {
                	j++;
                	continue;
                }
                if (item.attribute <= items[bestItem].attribute && item.name != bestItem && item.name != eq && item.rarity > Rarity.Epic) {
                	if (!threwAwaySomething) {
                		outLine('You threw away:');
                		outLine('');
                		threwAwaySomething = true;
                	}
                	d.inventory.splice(j, 1);
					outLine(itemTile(item.name, 1, false, false, false, false, false) + ' ' + item.name);
					d.generatedUniqueOnLootItems[item.name] = true;
                } else {
                	j++;
                }
            }
            if (hasConsumable) {
            	d.lastequip[type] = bestItem;
            }
		}
		if (!threwAwaySomething) {
       		outLine('You had no items that were weaker than your currently equipped ones')
       	}
		return true;
	},
});

/**********************************************************/
/** ARTIFACTS *********************************************/
/**********************************************************/

// Depth 1 (Epic)

registerItem(<Item>{
	name: 'Mask of redemption',
	image: 'maskofredemption',
	description: 'It glows with an evil aura',
	explanation: 'It is a very powerful mask',
	type: ItemType.Helmet,
	rarity: Rarity.Epic,
	attribute: 22,
	value: 2500,
	uniqueOnLoot: true,
});

registerItem(<Item>{
	name: 'Horn of satiety',
	image: 'hornofsatiety',
	description: 'It looks very deep from the inside',
	explanation: 'Once activated, it fills your drink points and food points by 50 but decreases your max drink points and food points by 5',
	type: ItemType.Artifact,
	rarity: Rarity.Epic,
	value: 3700,
	uniqueOnLoot: true,
	useFunction: function(): boolean {
		if (maxFood <= 5 && maxDrink <= 5) {
			outLine('You do not have enough max food points nor drink points to use this item');
			return false;
		}
		if (maxFood <= 5) {
			outLine('You do not have enough max food points to use this item');
			return false;
		}
		if (maxDrink <= 5) {
			outLine('You do not have enough max drink points to use this item');
			return false;
		}
		if (d.food >= maxFood-5 && d.drink >= maxDrink-5) {
			outLine('You are not hungry nor thirsty enough right now');
			return false;
		}
		outLine('You ate and drank from the ' + this.name);
		outSpace();
		d.maxFoodEffect -= 5;
		d.maxDrinkEffect -= 5;
		outLine('It decreased your max food and drink points by 5');
		outSpace();
		updatePlayerStats();
		updatePlayerValues();
		var newFood = Math.min(maxFood, d.food + 50);
		var deltaFood = newFood - d.food;
		d.food = newFood;
		var newDrink = Math.min(maxDrink, d.drink + 50);
		var deltaDrink = newDrink - d.drink;
		d.drink = newDrink;
		if (deltaFood && deltaDrink) {
			outLine('It made you recover ' + deltaFood + ' food point' + s(deltaFood) + ' and ' + deltaDrink + ' drink point' + s(deltaDrink));
			return true;
		}
		if (deltaFood) {
			outLine('It made you recover ' + deltaFood + ' food point' + s(deltaFood));
			return true;
		}
		if (deltaDrink) {
			outLine('It made you recover ' + deltaDrink + ' drink point' + s(deltaDrink));
			return true;
		}
	},
});

registerItem(<Item>{
	name: 'Chalice of infinity',
	image: 'chaliceofinfinity',
	description: 'It looks bottomless',
	explanation: 'Once activated, it increases your max drink points by 50 and fills them up, but decreases your max hit points by 10',
	type: ItemType.Artifact,
	rarity: Rarity.Epic,
	value: 3600,
	uniqueOnLoot: true,
	useFunction: function(): boolean {
		if (maxHp <= 10) {
			outLine('You do not have enough max hit points to use this item');
			return false;
		}
		outLine('You drank from the ' + this.name);
		outSpace();
		d.maxHpEffect -= 10;
		d.maxDrinkEffect += 50;
		outLine('It decreased your max hit points by 10 and increased your max drink points by 50');
		outSpace();
		updatePlayerStats();
		updatePlayerValues();
		var deltaDrink = maxDrink - d.drink;
		d.drink = maxDrink;
		if (deltaDrink) {
			outLine('It made you recover ' + deltaDrink + ' drink point' + s(deltaDrink));
			return true;
		}
	},
});

registerItem(<Item>{
	name: 'Box of fate',
	image: 'boxoffate',
	description: 'It feels like it holds a great power',
	explanation: 'Once activated, it increases your level by 5',
	type: ItemType.Artifact,
	rarity: Rarity.Epic,
	value: 4900,
	consumable: true,
	uniqueOnLoot: true,
	useFunction: function(): boolean {
		outLine('You opened the ' + this.name + ' and its power flows through you');
		playerGetsExperience(experienceToNextLevel());
		playerGetsExperience(experienceToNextLevel());
		playerGetsExperience(experienceToNextLevel());
		playerGetsExperience(experienceToNextLevel());
		playerGetsExperience(experienceToNextLevel());
		return true;
	},
});

registerItem(<Item>{
	name: 'Idol of chaos',
	image: 'idolofchaos',
	description: 'It feels like it alters who you are',
	explanation: 'Once activated, it doubles one of your attributes and makes you unable to upgrade another of your attributes anymore',
	type: ItemType.Artifact,
	rarity: Rarity.Epic,
	value: 4900,
	consumable: true,
	uniqueOnLoot: true,
	useFunction: function(): boolean {
		outLine('You held the ' + this.name + ' up to the air');
		var up = randomInteger(0, 5);
		if (up == 0) {
			outSpace();
			outLine('It doubled your strength from ' + d.strength + ' to ' + d.strength*2 + ' and made it less costly for you to upgrade');
			d.strength *= 2;
			d.strengthWithPoints = 0;
		} else if (up == 1) {
			outSpace();
			outLine('It doubled your dexterity from ' + d.dexterity + ' to ' + d.dexterity*2 + ' and made it less costly for you to upgrade');
			d.dexterity *= 2;
			d.dexterityWithPoints = 0;
		} else if (up == 2) {
			outSpace();
			outLine('It doubled your agility from ' + d.agility + ' to ' + d.agility*2 + ' and made it less costly for you to upgrade');
			d.agility *= 2;
			d.agilityWithPoints = 0;
		} else if (up == 3) {				
			outSpace();
			outLine('It doubled your constitution from ' + d.constitution + ' to ' + d.constitution*2 + ' and made it less costly for you to upgrade');
			d.constitution *= 2;
			d.constitutionWithPoints = 0;
		} else if (up == 4) {
			outSpace();
			outLine('It doubled your vitality from ' + d.vitality + ' to ' + d.vitality*2 + ' and made it less costly for you to upgrade');
			d.vitality *= 2;
			d.vitalityWithPoints = 0;
		} else if (up == 5) {
			outSpace();
			outLine('It doubled your intelligence from ' + d.intelligence + ' to ' + d.intelligence*2 + ' and made it less costly for you to upgrade');
			d.intelligence *= 2;
			d.intelligenceWithPoints = 0;
		}					
		var lock = up;
		while (lock == up) {
			var lock = randomInteger(0, 5);
		}
		if (lock == 0) {
			d.strengthWithPoints = 99999;
			outSpace();
			outLine('It made you unable to upgrade strength anymore');
		} else if (lock == 1) {
			d.dexterityWithPoints = 99999;
			outSpace();
			outLine('It made you unable to upgrade dexterity anymore');
		} else if (lock == 2) {
			d.agilityWithPoints = 99999;
			outSpace();
			outLine('It made you unable to upgrade agility anymore');
		} else if (lock == 3) {				
			d.constitutionWithPoints = 99999;
			outSpace();
			outLine('It made you unable to upgrade constitution anymore');
		} else if (lock == 4) {
			d.vitalityWithPoints = 99999;
			outSpace();
			outLine('It made you unable to upgrade vitality anymore');
		} else if (lock == 5) {
			d.intelligenceWithPoints = 99999;
			outSpace();
			outLine('It made you unable to upgrade intelligence anymore');
		}					
		return true;
	},
});

// Depth 2 (Transcendent)

registerItem(<Item>{
	name: 'The beheader',
	image: 'thebeheader',
	description: 'It glows with an evil aura',
	explanation: 'It is a very powerful weapon',
	type: ItemType.Weapon,
	rarity: Rarity.Transcendent,
	attribute: 32,
	value: 18900,
	minimumStrength: 16,
	uniqueOnLoot: true,
});

registerItem(<Item>{
	name: 'Fire orb',
	image: 'fireorb',
	description: 'It contains the rage of fire and can be used to write infinite fireball scrolls',
	explanation: 'It allows you to write infinite fireball scrolls',
	type: ItemType.Artifact,
	rarity: Rarity.Transcendent,
	minimumIntelligence: 18,
	value: 22340,
	uniqueOnLoot: true,
	useFunction: function(): boolean {
		outLine('You held the ' + this.name + ' up to the air');
		outSpace();
		var entry = inventoryFindByName('Fireball scroll');
		if (entry != -1) {
			if (d.inventory[entry].amount >= 10) {
				outLine('The ' + this.name + ' will only produce fireball scrolls when you have less than ten of them')
				return false;
			}
		}
		addToInventory('Fireball scroll', 1);
		var entry = inventoryFindByName('Fireball scroll');
		outLine('You obtained:');
		outLine('');
		outLine(itemTile('Fireball scroll', 1, false, false, false, false, false) + ' Fireball scroll');
		outLine('');
		outLine('You now have ' + d.inventory[entry].amount + ' of them');
		return true;
	},
});

registerItem(<Item>{
	name: 'Pyramid of mind',
	image: 'pyramidofmind',
	description: 'It feels like it would make you smarter',
	explanation: 'Once activated, it increases your intelligence by 20 but makes you unable to upgrade intelligence, constitution, vitality, or strength anymore',
	type: ItemType.Artifact,
	rarity: Rarity.Transcendent,
	value: 34600,
	consumable: true,
	uniqueOnLoot: true,
	useFunction: function(): boolean {
		outLine('You held the ' + this.name + ' up to the air');
		outSpace();
		outLine('It increased your intelligence by 20');
		outSpace();
		outLine('It made you unable to upgrade intelligence, constitution, vitality, or strength anymore');
		d.intelligence += 20;
		d.intelligenceWithPoints = 99999;
		d.constitutionWithPoints = 99999;
		d.vitalityWithPoints = 99999;
		d.strengthWithPoints = 99999;
		return true;
	},
});

registerItem(<Item>{
	name: 'Cube of body',
	image: 'cubeofbody',
	description: 'It feels like it would make you stronger',
	explanation: 'Once activated, it increases your strength, dexterity, agility, and constitution by 5, but makes you unable to upgrade them anymore',
	type: ItemType.Artifact,
	rarity: Rarity.Transcendent,
	value: 24100,
	consumable: true,
	uniqueOnLoot: true,
	useFunction: function(): boolean {
		outLine('You held the ' + this.name + ' up to the air');
		outSpace();
		outLine('It increased your strength, dexterity, agility, and constitution by 5');
		outSpace();
		outLine('It made you unable to upgrade them anymore');
		d.strength += 5;
		d.dexterity += 5;
		d.agility += 5;
		d.constitution += 5;
		d.strengthWithPoints = 99999;
		d.dexterityWithPoints = 99999;
		d.agilityWithPoints = 99999;
		d.constitutionWithPoints = 99999;
		return true;
	},
});

registerItem(<Item>{
	name: 'Feather of unseen',
	image: 'featherofunseen',
	description: 'It turns your hand invisible as you hold it',
	explanation: 'Once activated, it turns you invisible and enables you to go through one door without fighting nor looting anything',
	type: ItemType.Artifact,
	rarity: Rarity.Transcendent,
	value: 44900,
	consumable: true,
	uniqueOnLoot: true,
	doFade: true,
	useFunction: function(): boolean {
		clear();
		outLine('You held the ' + this.name + ' up to the air');
		outSpace();
		if (d.doors.length == 1 &&
			(d.doors[0].type == DoorType.NextDepth || d.doors[0].type == DoorType.Transcend)) {
			outLine('You turned invisible and advance one door as you would normally');
			outSpace();
			openDoor(0);
			return true;
		}
		outLine('You turned invisible and go through one door without fighting nor looting anything');
		outSpace();
		d.step++;
		generateDoors();
		generateMobWinCounts();
		return true;
	},
});

//Depth 3 (Legendary)

registerItem(<Item>{
	name: 'Hourglass of time',
	image: 'hourglassoftime',
	description: 'Time slows around it',
	explanation: 'Once activated, it takes you, with your equipment, level, and attributes, back in time to the entrance of the cave',
	type: ItemType.Artifact,
	rarity: Rarity.Legendary,
	value: 44900,
	consumable: true,
	uniqueOnLoot: true,
	doFade: true,
	useFunction: function(): boolean {
		outLine('You turned the ' + this.name + ' upside down');
		outSpace();
		d.depth = 1;
		d.step = 0;
		outLine('A bubble surrounds you. Time moves around you and you go back to the entrance of the cave');
		outSpace();
		generateDoors();
		generateMobWinCounts();
		return true;
	},
});

registerItem(<Item>{
	name: 'Sudden death scroll',
	image: 'suddendeathscroll',
	description: 'It emanates death, it could kill any single enemy',
	explanation: 'It is the most powerful magic spell ever',
	type: ItemType.Weapon,
	rarity: Rarity.Legendary,
	minimumIntelligence: 35,
	attribute: 1000,
	value: 145000,
	consumableOnCombat: true,
	uniqueOnLoot: true,
});

registerItem(<Item>{
	name: 'Dragon egg',
	image: 'dragonegg',
	description: 'It feels like a huge source of power',
	explanation: 'Once activated, it increases all your attributes to match the one you developed the most, and makes you unable to upgrade any of your attributes anymore',
	type: ItemType.Artifact,
	rarity: Rarity.Legendary,
	value: 34600,
	consumable: true,
	uniqueOnLoot: true,
	useFunction: function(): boolean {
		outLine('You ate the ' + this.name);
		var max = Math.max(d.strength, d.constitution, d.agility, d.intelligence, d.vitality, d.dexterity);
		outSpace();
		outLine('It increased your attributes to ' + max + ' to match the attribute you developed the most');
		outSpace();
		outLine('It made you unable to upgrade your attributes anymore');
		d.strength = max;
		d.dexterity = max;
		d.agility = max;
		d.constitution = max;
		d.vitality = max;
		d.intelligence = max;
		d.dexterityWithPoints = 99999;
		d.agilityWithPoints = 99999;
		d.intelligenceWithPoints = 99999;
		d.constitutionWithPoints = 99999;
		d.vitalityWithPoints = 99999;
		d.strengthWithPoints = 99999;
		return true;
	},
});

registerItem(<Item>{
	name: 'Boots of angels',
	image: 'bootsofangels',
	description: 'They are winged and move really fast',
	explanation: 'They are the most powerful boots ever',
	type: ItemType.Boots,
	rarity: Rarity.Legendary,
	attribute: 26,
	value: 340440,
	uniqueOnLoot: true,
});

registerItem(<Item>{
	name: 'Bell of humbleness',
	image: 'bellofhumbleness',
	description: 'It attracts coins',
	explanation: 'Once activated, it turns all your coins into experience. The more valuable the coins are, the more experience',
	type: ItemType.Artifact,
	rarity: Rarity.Legendary,
	value: 234600,
	consumable: true,
	uniqueOnLoot: true,
	useFunction: function(): boolean {
		outLine('You rang the ' + this.name);
		outLine('');
		var value = 0;
		let i = 0;
		while (i < d.inventory.length) {
			var entry = d.inventory[i];
			var item = items[entry.item];
			if (item.type == ItemType.Currency) {
				value += item.value * entry.amount;
				d.inventory.splice(i, 1);
			} else {
				i++;
			}
		}
		if (value) {
			outLine('It turned all your coins into experience');
			playerGetsExperience(value);
		} else {
			outLine('Nothing happened');
		}
		return true;
	},
});

// Depth 4 (Mythical)

registerItem(<Item>{
	name: 'Statue of growth',
	image: 'statueofgrowth',
	description: 'It feels like it would enable you to grow',
	explanation: 'Once activated, it significantly lowers the cost to upgrade all attributes',
	type: ItemType.Artifact,
	rarity: Rarity.Mythical,
	value: 12000000,
	consumable: true,
	uniqueOnLoot: true,
	useFunction: function(): boolean {
		outLine('You held the ' + this.name + ' up to the air');
		outSpace();
		outLine('It made it less costly for you to upgrade all your attributes');
		d.dexterityWithPoints = 0;
		d.agilityWithPoints = 0;
		d.intelligenceWithPoints = 0;
		d.constitutionWithPoints = 0;
		d.vitalityWithPoints = 0;
		d.strengthWithPoints = 0;
		return true;
	},
});

registerItem(<Item>{
	name: 'Crown of focus',
	image: 'crownoffocus',
	description: 'It shines close to reagents',
	explanation: 'Once activated, it turns all your reagents into experience. The more powerful and magic the reagents are, the more experience',
	type: ItemType.Artifact,
	rarity: Rarity.Mythical,
	value: 150000000,
	consumable: true,
	uniqueOnLoot: true,
	useFunction: function(): boolean {
		outLine('You put on the ' + this.name);
		outLine('');
		var value = 0;
		let i = 0;
		while (i < d.inventory.length) {
			var entry = d.inventory[i];
			var item = items[entry.item];
			var logic = itemTypeLogics[item.type];
			if (logic.reagent) {
				value += item.attribute * entry.amount;
				d.inventory.splice(i, 1);
			} else {
				i++;
			}
		}
		if (value) {
			outLine('It turned all your reagents into experience');
		} else {
			outLine('Nothing happened');
			return true;
		}
		playerGetsExperience(value);
		return true;
	},
});

registerItem(<Item>{
	name: 'Shield of power',
	image: 'shieldofpower',
	description: 'It was forged around a magic gem',
	explanation: 'It is the most powerful shield ever',
	type: ItemType.Shield,
	rarity: Rarity.Mythical,
	attribute: 50,
	value: 100000000,
	minimumStrength: 30,
	uniqueOnLoot: true,
});

registerItem(<Item>{
	name: 'Guide of artifacts',
	image: 'guideofartifacts',
	description: 'It seems informative',
	explanation: 'It is this book. It contains detailed descriptions of all artifacts. It stays with you permanently, even after death',
	type: ItemType.Artifact,
	rarity: Rarity.Mythical,
	value: 30000000,
	uniqueOnLoot: true,
	getAchievement: 'Guide of artifacts',
	useFunction: function(): boolean {
		outLine('You read the ' + this.name);
		outLine('');
		for (var item in items) {
			if (items[item].explanation) {
				outLine(itemTile(item, 1, false, false, false, false, false) + ' ' + item);
				outLine('');
				outLine(items[item].explanation);
				outLine('');
				outLine('');
			}
		}
		return true;
	},
});

registerItem(<Item>{
	name: 'Knife of the ritual',
	image: 'knifeoftheritual',
	description: 'It shines close to reagents',
	explanation: 'It is required to run the ritual',
	type: ItemType.Artifact,
	rarity: Rarity.Mythical,
	value: 550000000,
	consumable: true,
	uniqueOnLoot: true,
	useFunction: function(): boolean {
		var rightEquipment = false;
		if ((d.equip[ItemType.Weapon] && d.equip[ItemType.Weapon] == 'The beheader') &&
		   (d.equip[ItemType.Shield] && d.equip[ItemType.Shield] == 'Shield of power') &&
		   (d.equip[ItemType.Helmet] && d.equip[ItemType.Helmet] == 'Mask of redemption') &&
		   (d.equip[ItemType.Armor] && d.equip[ItemType.Armor] == 'Armor of fate') &&
		   (d.equip[ItemType.Pants] && d.equip[ItemType.Pants] == 'Pants of truth') &&
		   (d.equip[ItemType.Boots] && d.equip[ItemType.Boots] == 'Boots of angels')) {
		   	rightEquipment = true;
		}
		var rightPlace = false;
		if (d.doors.length == 1 && d.doors[0].type == DoorType.Transcend) {
			rightPlace = true;
		}
		var rightLevel = false;
		if (d.level >= 50) {
			rightLevel = true;
		}
		if (!rightEquipment || !rightPlace || !rightLevel) {
			outLine('You touched the tip of the ' + this.name);
			outLine('');
			outLine('Blood flowed out of your finger');
			outLine('');
			outLine('You lost consciousness');
			playerGetsDamage(d.hp);
			return true;
		}
		outLine('You touch the tip of the ' + this.name);
		outLine('');
		outLine('Blood flows out of your finger');
		outLine('');
		outLine('Your enchanted equipment all dissolves and fuses with the stream of blood');
		outLine('');
		outLine('They all head towards the altar of transcendence, and you become one with it');
		outLine('');
		outLine('You see through the eyes of the thousands of lives who tried to become as powerful as you');
		outLine('');
		outLine('You are now the most powerful entity ever');
		outLine('');
		outLine('You have become the Curse yourself');
		d.timestamp = new Date().toString();
		getAchievement('Performed the ritual');
		setStateQuiet(State.Ritual);
		return true;
	},
});

// Depth 5 (Godly)

registerItem(<Item>{
	name: 'Pants of truth',
	image: 'pantsoftruth',
	description: 'They have a magic protective aura',
	explanation: 'They are the most powerful pants ever',
	type: ItemType.Pants,
	rarity: Rarity.Godly,
	attribute: 25,
	value: 650000000,
	minimumStrength: 25,
	uniqueOnLoot: true,
});

registerItem(<Item>{
	name: 'Armor of fate',
	image: 'armoroffate',
	description: 'It distorts reality around it',
	explanation: 'It is the most powerful armor ever',
	type: ItemType.Armor,
	rarity: Rarity.Godly,
	attribute: 40,
	value: 750000000,
	minimumStrength: 27,
	uniqueOnLoot: true,
});

registerItem(<Item>{
	name: 'Gauntlet of gold',
	image: 'gauntletofgold',
	description: 'It makes coins shine around it',
	explanation: 'Once activated, it duplicates all your coins',
	type: ItemType.Artifact,
	rarity: Rarity.Godly,
	value: 950000000,
	consumable: true,
	uniqueOnLoot: true,
	useFunction: function(): boolean {
		outLine('You put on the ' + this.name);
		outLine('');
		var done = false;
		let i = 0;
		for (i = 0; i < d.inventory.length; i++) {
			var entry = d.inventory[i];
			var item = items[entry.item];
			if (item.type == ItemType.Currency) {
				d.inventory[i].amount *= 2;
				done = true;
			}
		}
		if (done) {
			outLine('It duplicated all your coins');
		} else {
			outLine('Nothing happened');
		}
		return true;
	},
});

registerItem(<Item>{
	name: 'Rune of doom',
	image: 'runeofdoom',
	description: 'It feels to have an unfocused amount of power',
	explanation: 'Once activated, it brings one of your attributes to 30',
	type: ItemType.Artifact,
	rarity: Rarity.Godly,
	value: 15000000000,
	consumable: true,
	uniqueOnLoot: true,
	useFunction: function(): boolean {
		outLine('You held the ' + this.name + ' up to the air');
		var up = randomInteger(0, 5);
		if (up == 0) {
			outSpace();
			outLine('It made your strength 30');
			d.strength = 30;
		} else if (up == 1) {
			outSpace();
			outLine('It made your dexterity 30');
			d.dexterity = 30;
		} else if (up == 2) {
			outSpace();
			outLine('It made your agility 30');
			d.agility = 30;
		} else if (up == 3) {				
			outSpace();
			outLine('It made your constitution 30');
			d.constitution = 30;
		} else if (up == 4) {
			outSpace();
			outLine('It made your vitality 30');
			d.vitality = 30;
		} else if (up == 5) {
			outSpace();
			outLine('It made your intelligence 30');
			d.intelligence = 30;
		}					
		return true;
	},
});

registerItem(<Item>{
	name: 'Guide to the ritual',
	image: 'guidetotheritual',
	description: 'It seems informative and probably cursed',
	explanation: 'It explains how to perform the ritual. It stays with you permanently, even after death',
	type: ItemType.Artifact,
	rarity: Rarity.Godly,
	value: 30000000000,
	uniqueOnLoot: true,
	getAchievement: 'Guide to the ritual',
	useFunction: function(): boolean {
		outLine('You read the ' + this.name);
		outLine('');
		outLine('The ritual will turn any being into the most powerful ever, and forever');
		outLine('Many have died trying to perform the ritual, and only a few have succeeded');
		outLine('');
		outLine('In order to perform the ritual,')
		outLine('');
		outLine('You must be level 50');
		outLine('');
		outLine('You must stand before the altar of transcendence');
		outLine('');
		outLine('You must be wearing these lost artifacts');
		outLine('');
		var ritualItems = ['The beheader', 'Shield of power', 'Mask of redemption', 'Armor of fate', 'Pants of truth', 'Boots of angels'];
		for (let i = 0; i < ritualItems.length; i++) {
			var item = ritualItems[i];
			outLine(itemTile(item, 1, false, false, false, false, false) + ' ' + item);
			outLine('');
		}
		outLine('');
		outLine('And you must use this item');
		outLine('');
		outLine(itemTile('Knife of the ritual', 1, false, false, false, false, false) + ' Knife of the ritual');
		outLine('');
		outLine('');
		outLine('Keep this book with you ever, and forever, for now you are bound to performing the ritual');
		outLine('');
		return true;
	},
});

// End game (Godly)

registerItem(<Item>{
	name: 'Box of the curse',
	image: 'boxofthecurse',
	description: 'It will grant you infinite power',
	type: ItemType.Artifact,
	rarity: Rarity.Godly,
	value: 1000000000000,
	uniqueOnLoot: true,
	consumable: true,
	useFunction: function(): boolean {
		outLine('You open the ' + this.name);
		outLine('');
		outLine('You reincarnated into a minion of the curse');
		outLine('');
		outLine('You obtained:');
		outLine('');
		for (var item in items) {
			if (item == 'Box of the curse' || item == 'Knife of the ritual') {
				d.generatedUniqueOnLootItems[item] = true;
				continue;
			}
			if (d.generatedUniqueOnLootItems[item]) {
				continue;
			}
			if (items[item].rarity <= Rarity.Epic) {
				addToInventory(item, 1);
				d.generatedUniqueOnLootItems[item] = true;
				outLine(itemTile(item, 1, false, false, false, false, false) + ' ' + item);
				outLine('');
			}
		}
		d.portrait = 'portraitminion';
		return true;
	},
});

}
