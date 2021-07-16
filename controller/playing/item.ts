var items = {};

var itemOrder = 0;

function registerItem(o: Item) {
	if (isDebugOn() && items[o.name]) {
		throw Error('Item ' + o.name + ' is registered twice');
	}
	items[o.name] = o;
	items[o.name].order = itemOrder;
	itemOrder++;
}

class Item {
	name: string;
	image: string;
	description?: string;
	descriptionImage?: () => string;
	explanation?: string;
	type: ItemType;
	rarity: Rarity;
	order?: number;
	attribute?: number;
	minimumStrength?: number;
	minimumIntelligence?: number;
	useFunction?: () => boolean;
	value?: number;
	consumable?: boolean;
	consumableOnCombat?: boolean;
	loot?: Loot[];
	doFade: boolean;
	reagent: boolean;
	uniqueOnLoot?: boolean; // NOTE: if using, avoid putting it in a door
	getAchievement?: string;
}

class ItemAmount {
	item: string;
	amount: number;
}

enum ItemType {
	Food = 1,
	Drink,

	Healing,
	Potion,
	Scroll,

	Container,

	IncreaseMaxHitPoints,
	IncreaseStrength,
	IncreaseDexterity,
	IncreaseAgility,
	IncreaseConstitution,
	IncreaseVitality,
	IncreaseIntelligence,

	Artifact,
	Orb,

	Weapon,
	Shield,
	Helmet,
	Armor,
	Pants,
	Boots,

	Currency,
	ReagentStone,
	ReagentBodyPart,
	ReagentTinkering,
	ReagentNature,
};

var showOrder = [ItemType.Weapon, ItemType.Shield, ItemType.Helmet, ItemType.Armor, ItemType.Pants, ItemType.Boots];
var wearables = {};
for (let i = 0; i < showOrder.length; i++) {
	wearables[showOrder[i]] = true;
}

enum AttributeAdd {
	Attack = 1,
	Defense,
	Armor,
}

class ItemTypeLogic {
	equipable?: boolean;
	attributeAdd?: AttributeAdd;
	consumable?: boolean;
	useItem: (o: Item) => boolean;
}

var itemTypeLogics = {
	[ItemType.Weapon]: <ItemTypeLogic>{
		equipable: true,
		attributeAdd: AttributeAdd.Attack,
		useItem: function(o: Item) {
			if (d.equip[o.type] == o.name) {
				d.lastequip[o.type] = null;
				d.equip[o.type] = null;
				outLine('You took out the ' + o.name);
				return true;
			}
			if (d.equip[o.type] && !items[d.equip[o.type]].consumableOnCombat) {
				d.lastequip[o.type] = d.equip[o.type];
			}
			d.equip[o.type] = o.name;
			outLine('You wielded the ' + o.name);
			return true;
		},
	},
	[ItemType.Shield]: <ItemTypeLogic>{
		equipable: true,
		attributeAdd: AttributeAdd.Defense,
		useItem: function(o: Item) {
			if (d.equip[o.type] == o.name) {
				d.lastequip[o.type] = null;
				d.equip[o.type] = null;
				outLine('You took out ' + o.name);
				return true;
			}
			if (d.equip[o.type] && !items[d.equip[o.type]].consumableOnCombat) {
				d.lastequip[o.type] = d.equip[o.type];
			}
			d.equip[o.type] = o.name;
			outLine('You wielded the ' + o.name);
			return true;
		},
	},
	[ItemType.Helmet]: <ItemTypeLogic>{
		equipable: true,
		attributeAdd: AttributeAdd.Armor,
		useItem: function(o: Item) {
			if (d.equip[o.type] == o.name) {
				d.lastequip[o.type] = null;
				d.equip[o.type] = null;
				outLine('You took off the ' + o.name);
				return true;
			}
			if (d.equip[o.type] && !items[d.equip[o.type]].consumableOnCombat) {
				d.lastequip[o.type] = d.equip[o.type];
			}
			d.equip[o.type] = o.name;
			outLine('You worn the ' + o.name);
			return true;
		},
	},
	[ItemType.Armor]: <ItemTypeLogic>{
		equipable: true,
		attributeAdd: AttributeAdd.Armor,
		useItem: function(o: Item) {
			if (d.equip[o.type] == o.name) {
				d.lastequip[o.type] = null;
				d.equip[o.type] = null;
				outLine('You took off the ' + o.name);
				return true;
			}
			if (d.equip[o.type] && !items[d.equip[o.type]].consumableOnCombat) {
				d.lastequip[o.type] = d.equip[o.type];
			}
			d.equip[o.type] = o.name;
			outLine('You worn the ' + o.name);
			return true;
		},
	},
	[ItemType.Pants]: <ItemTypeLogic>{
		equipable: true,
		attributeAdd: AttributeAdd.Armor,
		useItem: function(o: Item) {
			if (d.equip[o.type] == o.name) {
				d.lastequip[o.type] = null;
				d.equip[o.type] = null;
				outLine('You took off the ' + o.name);
				return true;
			}
			if (d.equip[o.type] && !items[d.equip[o.type]].consumableOnCombat) {
				d.lastequip[o.type] = d.equip[o.type];
			}
			d.equip[o.type] = o.name;
			outLine('You worn the ' + o.name);
			return true;
		},
	},
	[ItemType.Boots]: <ItemTypeLogic>{
		equipable: true,
		attributeAdd: AttributeAdd.Armor,
		useItem: function(o: Item) {
			if (d.equip[o.type] == o.name) {
				d.lastequip[o.type] = null;
				d.equip[o.type] = null;
				outLine('You took off the ' + o.name);
				return true;
			}
			if (d.equip[o.type] && !items[d.equip[o.type]].consumableOnCombat) {
				d.lastequip[o.type] = d.equip[o.type];
			}
			d.equip[o.type] = o.name;
			outLine('You worn the ' + o.name);
			return true;
		},
	},
	[ItemType.Healing]: <ItemTypeLogic>{
		consumable: true,
	},
	[ItemType.Potion]: <ItemTypeLogic>{
		consumable: true,
	},
	[ItemType.Scroll]: <ItemTypeLogic>{
		consumable: true,
	},
	[ItemType.IncreaseMaxHitPoints]: <ItemTypeLogic>{
		consumable: true,
	},
	[ItemType.IncreaseStrength]: <ItemTypeLogic>{
		consumable: true,
	},
	[ItemType.IncreaseDexterity]: <ItemTypeLogic>{
		consumable: true,
	},
	[ItemType.IncreaseAgility]: <ItemTypeLogic>{
		consumable: true,
	},
	[ItemType.IncreaseConstitution]: <ItemTypeLogic>{
		consumable: true,
	},
	[ItemType.IncreaseVitality]: <ItemTypeLogic>{
		consumable: true,
	},
	[ItemType.IncreaseIntelligence]: <ItemTypeLogic>{
		consumable: true,
	},
	[ItemType.Artifact]: <ItemTypeLogic>{
		useItem: function(o: Item) {
			outLine('You examined the ' + o.name + '. ' + o.description + '.');
			return false;
		},
	},
	[ItemType.Orb]: <ItemTypeLogic>{
		useItem: function(o: Item) {
			outLine('You examined the ' + o.name + '. ' + o.description + '.');
			return false;
		},
	},
	[ItemType.Food]: <ItemTypeLogic>{
		consumable: true,
		useItem: function(o: Item) {
			if (d.food >= maxFood) {
				outLine('You are not hungry right now');
				return false;
			}
			outLine('You ate the ' + o.name);
			var newFood = Math.min(maxFood, d.food + o.attribute);
			var delta = newFood - d.food;
			d.food = newFood;
			outLine('It made you recover ' + delta + ' food point' + s(delta));
			return true;
		},
	},
	[ItemType.Drink]: <ItemTypeLogic>{
		consumable: true,
		useItem: function(o: Item) {
			if (d.drink >= maxDrink) {
				outLine('You are not thirsty right now');
				return false;
			}
			outLine('You drank the ' + o.name);
			var newDrink = Math.min(maxDrink, d.drink + o.attribute);
			var delta = newDrink - d.drink;
			d.drink = newDrink;
			outLine('It made you recover ' + delta + ' drink point' + s(delta));
			return true;
		},
	},
	[ItemType.Container]: <ItemTypeLogic>{
		consumable: true,
		useItem: function(o: Item) {
			outLine('You opened the ' + o.name);
			var loot = [];
			if (o.loot) {
				loot = generateLoot(o.loot);
			}
			if (loot.length >= 1) {
				outSpace();
				outLine('It contained:');
				outLine('');
				addAllToInventory(loot);
			} else {
				outSpace();
				outLine('It was empty');
			}
			return true;
		},
	},
	[ItemType.Currency]: <ItemTypeLogic>{
		useItem: function(o: Item) {
			outLine('You examined the ' + o.name + '. ' + o.description + '.');
			return false;
		},
	},
	[ItemType.ReagentStone]: <ItemTypeLogic>{
		reagent: true,
		useItem: function(o: Item) {
			outLine('You examined the ' + o.name + '. ' + o.description + '.');
			return false;
		},
	},
	[ItemType.ReagentBodyPart]: <ItemTypeLogic>{
		reagent: true,
		useItem: function(o: Item) {
			outLine('You examined the ' + o.name + '. ' + o.description + '.');
			return false;
		},
	},
	[ItemType.ReagentTinkering]: <ItemTypeLogic>{
		reagent: true,
		useItem: function(o: Item) {
			outLine('You examined the ' + o.name + '. ' + o.description + '.');
			return false;
		},
	},
	[ItemType.ReagentNature]: <ItemTypeLogic>{
		reagent: true,
		useItem: function(o: Item) {
			outLine('You examined the ' + o.name + '. ' + o.description + '.');
			return false;
		},
	},
}

var itemShortcuts = {};

function itemShortcutsReverse() {
	var itemShortcutsReverse = {};
	for (let k in itemShortcuts) {
		itemShortcutsReverse[itemShortcuts[k]] = k;
	}
	return itemShortcutsReverse;
}
var orderKey =
	['Q','W','E','R','T','Y','U','I','O','P',
	 'A','S','D','F','G','H','J','K','L',
	 'Z','X','C','V','B','N','M'];

function compareItems(n1, n2) {
	var i1 = items[n1.item];
	var i2 = items[n2.item];

	if (i1.rarity <= Rarity.Epic && i2.rarity > Rarity.Epic) {
		return -1;
	} else if (i2.rarity <= Rarity.Epic && i1.rarity > Rarity.Epic) {
		return 1;
	}

	if (i1.rarity <= Rarity.Epic && i2.rarity <= Rarity.Epic) {
		var val = i1.rarity - i2.rarity;
		if (val != 0) {
			return val;
		}
	}

	var val = i1.type - i2.type;
	if (val != 0) {
		return val;
	}

	if (i1.attribute != null && i2.attribute != null) {
		var val = i2.attribute - i1.attribute;
		if (val != 0) {
			return val;
		}
	}


	if (i1.order != null && i2.order != null) {
		var val = i1.order - i2.order;
		if (val != 0) {
			return val;
		}
	}

	return n2.item.localeCompare(n1.item);
}

class Loot {
	probability: number;
	item?: string;
	itemMinAmount: number;
	itemMaxAmount: number;
	lootSelectors?: LootSelector[];
}

class LootSelector {
	chance: number;
	item?: string;
	itemMinAmount: number;
	itemMaxAmount: number;
}

function generateLoot(l: Loot[]): ItemAmount[] {
	var ret = {};
	for (let i = 0; i < l.length; i++) {
		if (random01() > l[i].probability) {
			continue;
		}
		if (l[i].item) {
			var item = l[i].item;
			if (!items[item]) {
				throw Error('Trying to generate loot with non-existing object ' + item);
				continue;
			}
			if (items[item].uniqueOnLoot) {
				if (d.generatedUniqueOnLootItems[item]) {
					continue;
				} else {
					d.generatedUniqueOnLootItems[item] = true;
				}
			}
			var amount = randomInteger(l[i].itemMinAmount, l[i].itemMaxAmount)
			if (ret[item]) {
				ret[item].amount += amount;
			} else if (amount >= 1) {
				ret[item] = <ItemAmount>{item: item, amount: amount};
			}
		}
		if (l[i].lootSelectors) {
			var lootSelectors = l[i].lootSelectors;

			// sum chance
			let totalChance = 0;
			for (let i = 0; i < lootSelectors.length; i++) {
				totalChance += lootSelectors[i].chance;
			}
			let chosenChance = Math.random() * totalChance;

			let chosen = 0;
			let chance = 0;
			for (let j = 0; j < lootSelectors.length; j++) {
				chance += lootSelectors[j].chance;
				if (chance >= chosenChance) {
					chosen = j;
					break;
				}
			}

			var item = lootSelectors[chosen].item;
			if (!items[item]) {
				throw Error('Trying to generate loot with non-existing object ' + item);
				continue;
			}
			if (items[item].uniqueOnLoot) {
				if (d.generatedUniqueOnLootItems[item]) {
					continue;
				} else {
					d.generatedUniqueOnLootItems[item] = true;
				}
			}
			var amount = randomInteger(lootSelectors[chosen].itemMinAmount, lootSelectors[chosen].itemMaxAmount)
			if (ret[item]) {
				ret[item].amount += amount;
			} else if (amount >= 1) {
				ret[item] = <ItemAmount>{item: item, amount: amount};
			}
		}
	}
	var retList = [];
	for (let k in ret) {
		retList.push(ret[k]);
	}
	return retList;
}

class SelectorItem {
	item: string;
	amount: number;
}